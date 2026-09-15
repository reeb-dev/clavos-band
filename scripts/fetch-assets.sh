#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PHOTO_DIR="$ROOT/public/photos"
mkdir -p "$PHOTO_DIR"
cd "$ROOT"

download() {
  echo "→ $2"
  curl -fsSL --retry 3 --retry-delay 1 -A "ClavosBandDeploy/1.0" "$1" -o "$2"
}

echo "Fetching photos..."
download "https://i.scdn.co/image/ab6761610000e5ebd75290633bbc830a8e4ac429" "$PHOTO_DIR/hq-spotify.jpg"
download "https://cdn.rock.com.ar/wp-content/uploads/2023/08/clavos-band.png" "$PHOTO_DIR/hq-band-studio.jpg"
download "https://radioprovincia.gba.gob.ar/images/IMG-9a1180ca-c047-46ed-b71b-fb2fdf54d729.jpeg" "$PHOTO_DIR/hq-clavito-radio.jpg"
download "https://i.ytimg.com/vi/vuZHm3YI_rY/maxresdefault.jpg" "$PHOTO_DIR/hq-yt-show-01.jpg"
download "https://i.ytimg.com/vi/9ntVLTMeHKM/maxresdefault.jpg" "$PHOTO_DIR/hq-yt-show-02.jpg"
download "https://i.ytimg.com/vi/3yXaxuuvz4Y/maxresdefault.jpg" "$PHOTO_DIR/hq-yt-show-03.jpg"
download "https://yt3.googleusercontent.com/ytc/AIdro_nYOjQtAA1gUqUb7KmafBJEvagKMPxVI4-TsFUl7rReBdg=s900-c-k-c0x00ffffff-no-rj" "$PHOTO_DIR/logo-clavos.jpg"
cp -f "$PHOTO_DIR/hq-yt-show-01.jpg" "$PHOTO_DIR/post1.jpg"
cp -f "$PHOTO_DIR/hq-clavito-radio.jpg" "$PHOTO_DIR/post8.jpg"

echo "Building icons..."
python3 <<'PY'
from pathlib import Path
from PIL import Image
import io, struct
root = Path('public')
logo = Image.open(root / 'photos' / 'logo-clavos.jpg').convert('RGBA')

def save_png(im, path, size):
    r = im.resize((size, size), Image.Resampling.LANCZOS)
    bg = Image.new('RGBA', (size, size), (10, 10, 10, 255))
    bg.alpha_composite(r)
    bg.save(path, format='PNG', optimize=True)

for name, size in {
    'favicon-16.png': 16,
    'favicon-32.png': 32,
    'favicon-48.png': 48,
    'apple-touch-icon.png': 180,
    'icon-192.png': 192,
    'icon-512.png': 512,
}.items():
    save_png(logo, root / name, size)

def png_bytes(im):
    buf = io.BytesIO(); im.save(buf, format='PNG'); return buf.getvalue()

sizes = [16, 32, 48]
entries, images, offset = [], [], 6 + 16 * len(sizes)
for s in sizes:
    r = logo.resize((s, s), Image.Resampling.LANCZOS)
    bg = Image.new('RGBA', (s, s), (10, 10, 10, 255))
    bg.alpha_composite(r)
    data = png_bytes(bg)
    entries.append((s, len(data), offset)); images.append(data); offset += len(data)
out = io.BytesIO(); out.write(struct.pack('<HHH', 0, 1, len(sizes)))
for s, nbytes, off in entries:
    out.write(struct.pack('<BBBBHHII', s, s, 0, 0, 1, 32, nbytes, off))
for data in images: out.write(data)
(root / 'favicon.ico').write_bytes(out.getvalue())
print('icons ok')
PY
echo "Assets listos."
