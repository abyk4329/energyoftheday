#!/bin/bash

# יצירת אייקונים PNG בגדלים שונים
# זה סקריפט לדוגמה - בפועל תצטרכי כלי להמרת SVG ל-PNG

echo "🎨 יצירת אייקונים לנומרולוגיה יומית"
echo "נדרש כלי כמו ImageMagick או inkscape להמרה"
echo ""

# הוראות להתקנה ושימוש
cat << 'EOF'
להמרת האייקון SVG לפורמטי PNG שונים:

1. עם ImageMagick:
brew install imagemagick
magick icons/favicon.svg -resize 72x72 icons/icon-72.png
magick icons/favicon.svg -resize 96x96 icons/icon-96.png
magick icons/favicon.svg -resize 128x128 icons/icon-128.png
magick icons/favicon.svg -resize 144x144 icons/icon-144.png
magick icons/favicon.svg -resize 152x152 icons/icon-152.png
magick icons/favicon.svg -resize 192x192 icons/icon-192.png
magick icons/favicon.svg -resize 384x384 icons/icon-384.png
magick icons/favicon.svg -resize 512x512 icons/icon-512.png
magick icons/favicon.svg -resize 192x192 icons/maskable-192.png
magick icons/favicon.svg -resize 512x512 icons/maskable-512.png

2. עם Inkscape:
brew install inkscape
inkscape icons/favicon.svg --export-filename=icons/icon-192.png --export-width=192 --export-height=192
inkscape icons/favicon.svg --export-filename=icons/icon-512.png --export-width=512 --export-height=512
# ... וכן הלאה לכל הגדלים

3. אונליין:
- העלי את icons/favicon.svg לאתר כמו https://realfavicongenerator.net/
- הורידי את כל הגדלים הנדרשים

4. לחילופין:
צרי PNG פשוט בכלי כמו Canva/Figma עם:
- רקע כהה (#101828)
- מעגלים כחולים (#06b6d4)
- האות "נ" במרכז
EOF
