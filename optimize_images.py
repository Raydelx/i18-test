from pathlib import Path
import os
import re
from PIL import Image

root = Path(r"g:\i18n\i18 test")
text_exts = {'.astro', '.md', '.mdx', '.ts', '.tsx', '.js', '.jsx', '.json', '.html', '.css'}
image_exts = {'.jpg', '.jpeg', '.png', '.gif'}
quoted_pattern = re.compile(r'(?P<quote>["\'])(?P<path>(?:/|\./|\.\./)?[^"\']+\.(?:jpg|jpeg|png|gif))(?P=quote)')
markdown_pattern = re.compile(r'!\[[^\]]*\]\(([^)]+)\)')


def convert_to_webp(source: Path) -> Path | None:
    if source.suffix.lower() not in image_exts:
        return None
    target = source.with_suffix('.webp')
    if target.exists():
        return target
    try:
        with Image.open(source) as img:
            if img.mode in {'RGBA', 'LA', 'P'}:
                converted = img.convert('RGBA')
            else:
                converted = img.convert('RGB')
            target.parent.mkdir(parents=True, exist_ok=True)
            converted.save(target, 'WEBP', quality=85)
        return target
    except Exception:
        return None


def resolve_asset(ref: str, from_file: Path):
    if not ref or ref.startswith(('http://', 'https://', 'data:')):
        return None, None
    cleaned = ref.split('?', 1)[0].split('#', 1)[0].strip().strip('"\'')
    if not cleaned:
        return None, None
    if cleaned.startswith('/public/'):
        abs_path = root / 'public' / cleaned[len('/public/'):].lstrip('/')
        new_ref = '/' + cleaned[len('/public/'):].rsplit('.', 1)[0] + '.webp'
    elif cleaned.startswith('/'):
        abs_path = root / 'public' / cleaned.lstrip('/')
        new_ref = '/' + cleaned.lstrip('/').rsplit('.', 1)[0] + '.webp'
    else:
        abs_path = (from_file.parent / cleaned).resolve()
        try:
            abs_path.relative_to(root)
        except ValueError:
            return None, None
        new_ref = os.path.relpath(abs_path.with_suffix('.webp'), from_file.parent).replace('\\', '/')
        if not new_ref.startswith('.'):
            new_ref = './' + new_ref
    return abs_path, new_ref


files = []
for base in [root / 'src', root / 'public']:
    if not base.exists():
        continue
    for path in base.rglob('*'):
        if path.is_file() and path.suffix.lower() in text_exts:
            if any(part in {'node_modules', '.git', 'dist'} for part in path.parts):
                continue
            files.append(path)

updated_files = []
for file_path in files:
    try:
        text = file_path.read_text(encoding='utf-8')
    except Exception:
        continue

    def replace_quoted(match):
        quote = match.group('quote')
        raw = match.group('path')
        abs_path, new_ref = resolve_asset(raw, file_path)
        if abs_path is None or not abs_path.exists() or abs_path.suffix.lower() not in image_exts:
            return match.group(0)
        target = convert_to_webp(abs_path)
        if target is None:
            return match.group(0)
        return quote + new_ref + quote

    new_text = quoted_pattern.sub(replace_quoted, text)

    def replace_markdown(match):
        raw = match.group(1)
        abs_path, new_ref = resolve_asset(raw, file_path)
        if abs_path is None or not abs_path.exists() or abs_path.suffix.lower() not in image_exts:
            return match.group(0)
        target = convert_to_webp(abs_path)
        if target is None:
            return match.group(0)
        return match.group(0).replace(raw, new_ref)

    new_text = markdown_pattern.sub(replace_markdown, new_text)

    if new_text != text:
        file_path.write_text(new_text, encoding='utf-8')
        updated_files.append(str(file_path))

print(f'Updated {len(updated_files)} files')
for item in updated_files[:80]:
    print(item)
