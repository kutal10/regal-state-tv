from pathlib import Path
from PIL import Image, ImageOps

# =========================
# INPUT / OUTPUT VARIABLES
# =========================
INPUT_FILE = r"D:\Code\regalstate-tv\public\bg3.jpg"
OUTPUT_FILE = r"D:\Code\regalstate-tv\public\bg3.webp"

# =========================
# WEBP SETTINGS
# =========================
MAX_WIDTH = 1920
MAX_HEIGHT = 1920
WEBP_QUALITY = 80
KEEP_TRANSPARENCY = True
STRIP_METADATA = True

def convert_to_webp_for_web(
    input_file: str,
    output_file: str,
    max_width: int = 1920,
    max_height: int = 1920,
    webp_quality: int = 80,
    keep_transparency: bool = True,
    strip_metadata: bool = True,
) -> None:
    input_path = Path(input_file)
    output_path = Path(output_file)

    if not input_path.exists():
        raise FileNotFoundError(f"Input file not found: {input_path}")

    if output_path.suffix.lower() != ".webp":
        raise ValueError("OUTPUT_FILE must end with .webp")

    with Image.open(input_path) as img:
        # Fix phone/camera rotation
        img = ImageOps.exif_transpose(img)

        has_alpha = "A" in img.getbands()

        # Resize down for web use if needed
        img.thumbnail((max_width, max_height), Image.Resampling.LANCZOS)

        save_kwargs = {
            "format": "WEBP",
            "quality": webp_quality,
            "method": 6,
        }

        if strip_metadata:
            save_kwargs["exif"] = b""

        if has_alpha and keep_transparency:
            if img.mode not in ("RGBA", "LA"):
                img = img.convert("RGBA")
        else:
            if has_alpha:
                background = Image.new("RGB", img.size, (255, 255, 255))
                background.paste(img, mask=img.getchannel("A"))
                img = background
            elif img.mode != "RGB":
                img = img.convert("RGB")

        img.save(output_path, **save_kwargs)

if __name__ == "__main__":
    convert_to_webp_for_web(
        input_file=INPUT_FILE,
        output_file=OUTPUT_FILE,
        max_width=MAX_WIDTH,
        max_height=MAX_HEIGHT,
        webp_quality=WEBP_QUALITY,
        keep_transparency=KEEP_TRANSPARENCY,
        strip_metadata=STRIP_METADATA,
    )

    print(f"Saved compressed WebP: {OUTPUT_FILE}")