#!/usr/bin/env python3
import base64
from pathlib import Path

def create_simple_icon(size):
    # יצירת SVG עם עיצוב גאומטרי פשוט
    svg = f'''<svg width="{size}" height="{size}" viewBox="0 0 {size} {size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#E2E8F0;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#CBD5E0;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="center" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#4A5568;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#2D3748;stop-opacity:1" />
    </linearGradient>
  </defs>

  <!-- רקע -->
  <rect width="{size}" height="{size}" rx="{size//8}" fill="url(#bg)"/>

  <!-- צורות גאומטריות -->
  <g transform="translate({size//2}, {size//2})">
    <!-- עיגול חיצוני -->
    <circle cx="0" cy="0" r="{int(size*0.27)}" fill="none" stroke="#4A5568" stroke-width="{max(1, size//170)}" opacity="0.3"/>

    <!-- עיגול פנימי -->
    <circle cx="0" cy="0" r="{int(size*0.195)}" fill="none" stroke="#2D3748" stroke-width="{max(1, size//256)}" opacity="0.5"/>

    <!-- משולש מרכזי -->
    <polygon points="0,-{int(size*0.117)} {int(size*0.102)},{int(size*0.059)} -{int(size*0.102)},{int(size*0.059)}" fill="url(#center)" opacity="0.8"/>

    <!-- קווים דקורטיביים -->
    <line x1="-{int(size*0.156)}" y1="-{int(size*0.156)}" x2="{int(size*0.156)}" y2="{int(size*0.156)}" stroke="#4A5568" stroke-width="{max(1, size//512)}" opacity="0.4"/>
    <line x1="{int(size*0.156)}" y1="-{int(size*0.156)}" x2="-{int(size*0.156)}" y2="{int(size*0.156)}" stroke="#4A5568" stroke-width="{max(1, size//512)}" opacity="0.4"/>

    <!-- נקודות קטנות -->
    <circle cx="-{int(size*0.234)}" cy="-{int(size*0.078)}" r="{max(1, size//128)}" fill="#2D3748" opacity="0.6"/>
    <circle cx="{int(size*0.234)}" cy="{int(size*0.078)}" r="{max(1, size//128)}" fill="#2D3748" opacity="0.6"/>
    <circle cx="0" cy="-{int(size*0.273)}" r="{max(1, size//170)}" fill="#4A5568" opacity="0.5"/>
    <circle cx="0" cy="{int(size*0.273)}" r="{max(1, size//170)}" fill="#4A5568" opacity="0.5"/>
  </g>

  <!-- מסגרת דקה -->
  <rect x="{size//32}" y="{size//32}" width="{size-size//16}" height="{size-size//16}" rx="{size//16}" fill="none" stroke="#2D3748" stroke-width="{max(1, size//256)}" opacity="0.2"/>
</svg>'''

    return svg

# יצירת אייקונים בגדלים שונים
sizes = [72, 96, 128, 144, 152, 192, 384, 512]

for size in sizes:
    svg_content = create_simple_icon(size)
    Path(f'icons/icon-{size}.svg').write_text(svg_content)
    print(f'Created SVG icon-{size}.svg')

# יצירת maskable icons
for size in [192, 512]:
    svg_content = create_simple_icon(size)
    Path(f'icons/maskable-{size}.svg').write_text(svg_content)
    print(f'Created SVG maskable-{size}.svg')

print('All SVG icons created successfully!')
