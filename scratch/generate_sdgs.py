import os

sdg_dir = r"d:\GitHub\PID-conference\sdg"
os.makedirs(sdg_dir, exist_ok=True)

UNIFORM_FONT_SIZE = 28  # Exactly 28px SVG font size for all 17 cards!

sdgs = [
    {
        "id": 1,
        "lines": ["NO", "POVERTY"],
        "color": "#E5243B",
        "icon_y_center": 185,
        "icon_x_center": 150,
        "scale": 0.38,
        "target_x": 242,
        "target_y": 50,
        "svg_icon": '''<g fill="#FFFFFF"><circle cx="100" cy="180" r="14"/><path d="M100 198 c-16 0 -30 10 -30 25 v12 h60 v-12 c0 -15 -14 -25 -30 -25 z"/><circle cx="150" cy="170" r="18"/><path d="M150 192 c-20 0 -38 12 -38 30 v13 h76 v-13 c0 -18 -18 -30 -38 -30 z"/><circle cx="200" cy="180" r="14"/><path d="M200 198 c-16 0 -30 10 -30 25 v12 h60 v-12 c0 -15 -14 -25 -30 -25 z"/></g>'''
    },
    {
        "id": 2,
        "lines": ["ZERO", "HUNGER"],
        "color": "#DDA63A",
        "icon_y_center": 185,
        "icon_x_center": 150,
        "scale": 0.38,
        "target_x": 242,
        "target_y": 50,
        "svg_icon": '''<g fill="none" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"><path d="M90 185 Q150 250 210 185 Z" fill="#FFFFFF"/><path d="M100 185 C100 160 130 142 150 125 C170 142 200 160 200 185"/><path d="M150 125 L150 185"/><line x1="120" y1="220" x2="180" y2="220"/><line x1="135" y1="232" x2="165" y2="232"/></g>'''
    },
    {
        "id": 3,
        "lines": ["GOOD", "HEALTH &amp;", "WELL-BEING"],
        "color": "#4C9F38",
        "icon_y_center": 185,
        "icon_x_center": 150,
        "scale": 0.38,
        "target_x": 242,
        "target_y": 50,
        "svg_icon": '''<g fill="none" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"><path d="M150 235 L105 190 C88 173 88 148 105 131 C122 114 146 114 163 131 L150 144 L137 131 C154 114 178 114 195 131 C212 148 212 173 195 190 Z" fill="#FFFFFF"/><path d="M75 185 L110 185 L125 158 L140 210 L160 168 L175 185 L225 185" stroke="#FFFFFF" stroke-width="7" fill="none"/></g>'''
    },
    {
        "id": 4,
        "lines": ["QUALITY", "EDUCATION"],
        "color": "#C5192D",
        "icon_y_center": 185,
        "icon_x_center": 150,
        "scale": 0.38,
        "target_x": 242,
        "target_y": 50,
        "svg_icon": '''<g fill="#FFFFFF"><path d="M80 155 L150 130 L220 155 L150 180 Z"/><path d="M100 172 V202 C100 215 125 228 150 228 C175 228 200 215 200 202 V172 L150 192 Z"/><rect x="210" y="158" width="8" height="42" rx="3"/><circle cx="214" cy="205" r="5"/></g>'''
    },
    {
        "id": 5,
        "lines": ["GENDER", "EQUALITY"],
        "color": "#FF3A21",
        "icon_y_center": 175,
        "icon_x_center": 150,
        "scale": 0.38,
        "target_x": 242,
        "target_y": 50,
        "svg_icon": '''<g stroke="#FFFFFF" stroke-width="8" fill="none" stroke-linecap="round"><circle cx="150" cy="165" r="36"/><line x1="150" y1="201" x2="150" y2="242"/><line x1="128" y1="222" x2="172" y2="222"/><line x1="175" y1="140" x2="208" y2="107"/><line x1="182" y1="107" x2="208" y2="107"/><line x1="208" y1="107" x2="208" y2="133"/></g>'''
    },
    {
        "id": 6,
        "lines": ["CLEAN", "WATER &amp;", "SANITATION"],
        "color": "#26BDE2",
        "icon_y_center": 190,
        "icon_x_center": 150,
        "scale": 0.38,
        "target_x": 242,
        "target_y": 50,
        "svg_icon": '''<g fill="#FFFFFF"><path d="M150 135 C150 135 102 180 102 205 C102 230 122 246 150 246 C178 246 198 230 198 205 C198 180 150 135 150 135 Z"/><path d="M90 180 Q150 168 210 180 Q150 192 90 180 Z" fill="none" stroke="#FFFFFF" stroke-width="4"/></g>'''
    },
    {
        "id": 7,
        "lines": ["AFFORDABLE", "&amp; CLEAN", "ENERGY"],
        "color": "#FCC30B",
        "icon_y_center": 190,
        "icon_x_center": 150,
        "scale": 0.38,
        "target_x": 242,
        "target_y": 50,
        "svg_icon": '''<g fill="#FFFFFF"><circle cx="150" cy="190" r="30"/><g stroke="#FFFFFF" stroke-width="7" stroke-linecap="round"><line x1="150" y1="138" x2="150" y2="149"/><line x1="150" y1="231" x2="150" y2="242"/><line x1="98" y1="190" x2="109" y2="190"/><line x1="191" y1="190" x2="202" y2="190"/><line x1="113" y1="153" x2="121" y2="161"/><line x1="179" y1="219" x2="187" y2="227"/><line x1="113" y1="227" x2="121" y2="219"/><line x1="179" y1="161" x2="187" y2="153"/></g></g>'''
    },
    {
        "id": 8,
        "lines": ["DECENT WORK", "&amp; ECONOMIC", "GROWTH"],
        "color": "#A21942",
        "icon_y_center": 185,
        "icon_x_center": 150,
        "scale": 0.38,
        "target_x": 242,
        "target_y": 50,
        "svg_icon": '''<g fill="none" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"><path d="M80 225 L120 180 L155 205 L215 135"/><path d="M178 135 L215 135 L215 172" fill="#FFFFFF"/><line x1="75" y1="235" x2="225" y2="235"/></g>'''
    },
    {
        "id": 9,
        "lines": ["INDUSTRY,", "INNOVATION &amp;", "INFRASTRUCTURE"],
        "color": "#FD6925",
        "icon_y_center": 185,
        "icon_x_center": 150,
        "scale": 0.38,
        "target_x": 242,
        "target_y": 50,
        "svg_icon": '''<g fill="none" stroke="#FFFFFF" stroke-width="6" stroke-linejoin="round"><path d="M150 135 L200 160 L200 215 L150 240 L100 215 L100 160 Z" fill="#FFFFFF" opacity="0.2"/><path d="M150 135 L200 160 L200 215 L150 240 L100 215 L100 160 Z"/><line x1="150" y1="135" x2="150" y2="240"/><line x1="150" y1="188" x2="200" y2="160"/><line x1="150" y1="188" x2="100" y2="160"/></g>'''
    },
    {
        "id": 10,
        "lines": ["REDUCED", "INEQUALITIES"],
        "color": "#DD1367",
        "icon_y_center": 185,
        "icon_x_center": 150,
        "scale": 0.38,
        "target_x": 242,
        "target_y": 50,
        "svg_icon": '''<g fill="none" stroke="#FFFFFF" stroke-width="9" stroke-linecap="round"><circle cx="150" cy="185" r="48"/><line x1="124" y1="172" x2="176" y2="172"/><line x1="124" y1="198" x2="176" y2="198"/></g>'''
    },
    {
        "id": 11,
        "lines": ["SUSTAINABLE", "CITIES &amp;", "COMMUNITIES"],
        "color": "#FD9D24",
        "icon_y_center": 185,
        "icon_x_center": 150,
        "scale": 0.38,
        "target_x": 242,
        "target_y": 50,
        "svg_icon": '''<g fill="#FFFFFF"><rect x="85" y="160" width="35" height="75" rx="2"/><rect x="125" y="135" width="45" height="100" rx="2"/><rect x="175" y="172" width="40" height="63" rx="2"/><path d="M75 235 L225 235" stroke="#FFFFFF" stroke-width="6"/><g fill="#FD9D24"><rect x="135" y="148" width="10" height="10"/><rect x="150" y="148" width="10" height="10"/><rect x="135" y="166" width="10" height="10"/><rect x="150" y="166" width="10" height="10"/><rect x="135" y="184" width="10" height="10"/><rect x="150" y="184" width="10" height="10"/></g></g>'''
    },
    {
        "id": 12,
        "lines": ["RESPONSIBLE", "CONSUMPTION", "&amp; PRODUCTION"],
        "color": "#BF8B2E",
        "icon_y_center": 185,
        "icon_x_center": 150,
        "scale": 0.38,
        "target_x": 242,
        "target_y": 50,
        "svg_icon": '''<g fill="none" stroke="#FFFFFF" stroke-width="9" stroke-linecap="round"><path d="M115 185 C92 162 92 208 115 185 C135 167 165 203 185 185 C208 162 208 208 185 185 Z"/></g>'''
    },
    {
        "id": 13,
        "lines": ["CLIMATE", "ACTION"],
        "color": "#3F7E44",
        "icon_y_center": 185,
        "icon_x_center": 150,
        "scale": 0.38,
        "target_x": 242,
        "target_y": 50,
        "svg_icon": '''<g fill="none" stroke="#FFFFFF" stroke-width="6"><path d="M85 185 C110 145 190 145 215 185 C190 225 110 225 85 185 Z" fill="#FFFFFF" opacity="0.2"/><circle cx="150" cy="185" r="24" fill="#FFFFFF"/><path d="M128 185 Q150 162 172 185" stroke="#3F7E44" stroke-width="4"/><path d="M85 185 C110 145 190 145 215 185 C190 225 110 225 85 185 Z"/></g>'''
    },
    {
        "id": 14,
        "lines": ["LIFE", "BELOW WATER"],
        "color": "#0A97D9",
        "icon_y_center": 185,
        "icon_x_center": 150,
        "scale": 0.38,
        "target_x": 242,
        "target_y": 50,
        "svg_icon": '''<g fill="#FFFFFF"><path d="M100 165 C130 140 180 158 200 165 C190 178 190 188 200 200 C180 210 130 225 100 200 L80 208 L90 182 L80 156 Z"/><circle cx="170" cy="170" r="4" fill="#0A97D9"/><path d="M75 225 Q115 212 150 225 T225 225" fill="none" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/></g>'''
    },
    {
        "id": 15,
        "lines": ["LIFE", "ON LAND"],
        "color": "#56C02B",
        "icon_y_center": 185,
        "icon_x_center": 150,
        "scale": 0.38,
        "target_x": 242,
        "target_y": 50,
        "svg_icon": '''<g fill="#FFFFFF"><path d="M150 135 L115 180 H132 L100 222 H200 L168 180 H185 Z"/><rect x="143" y="222" width="14" height="20"/><path d="M182 152 C192 142 210 142 210 156 C200 160 192 156 182 152 Z"/></g>'''
    },
    {
        "id": 16,
        "lines": ["PEACE, JUSTICE", "&amp; STRONG", "INSTITUTIONS"],
        "color": "#00689D",
        "icon_y_center": 185,
        "icon_x_center": 150,
        "scale": 0.38,
        "target_x": 242,
        "target_y": 50,
        "svg_icon": '''<g fill="#FFFFFF"><path d="M150 130 C132 148 110 156 96 156 C118 174 132 192 124 218 C141 200 159 200 176 218 C168 192 182 174 204 156 C190 156 168 148 150 130 Z"/><rect x="146" y="208" width="8" height="28"/><rect x="128" y="232" width="44" height="7" rx="2"/></g>'''
    },
    {
        "id": 17,
        "lines": ["PARTNERSHIPS", "FOR THE GOALS"],
        "color": "#19486A",
        "icon_y_center": 185,
        "icon_x_center": 150,
        "scale": 0.38,
        "target_x": 242,
        "target_y": 50,
        "svg_icon": '''<g fill="none" stroke="#FFFFFF" stroke-width="5"><circle cx="150" cy="185" r="42" stroke-dasharray="10 5"/><circle cx="150" cy="143" r="12" fill="#FFFFFF"/><circle cx="192" cy="185" r="12" fill="#FFFFFF"/><circle cx="150" cy="227" r="12" fill="#FFFFFF"/><circle cx="108" cy="185" r="12" fill="#FFFFFF"/><circle cx="150" cy="185" r="15" fill="#FFFFFF"/></g>'''
    }
]

for sdg in sdgs:
    num_str = f"{sdg['id']:02d}"
    target_x = sdg['target_x']
    target_y = sdg['target_y']
    scale = sdg['scale']
    icon_x_center = sdg['icon_x_center']
    icon_y_center = sdg['icon_y_center']
    
    num_lines = len(sdg['lines'])
    line_gap = 31
    if num_lines == 2:
        y_start = 145
    elif num_lines == 3:
        y_start = 125
    else:
        y_start = 105
    
    text_elements = []
    for i, line in enumerate(sdg['lines']):
        y_pos = y_start + (i * line_gap)
        text_elements.append(
            f'<text x="24" y="{y_pos}" text-anchor="start" fill="#FFFFFF" font-family="\'Inter\', Arial, sans-serif" font-weight="900" font-size="{UNIFORM_FONT_SIZE}" letter-spacing="0.3">{line}</text>'
        )
    
    texts_str = "\n  ".join(text_elements)
    
    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="300" height="300">
  <rect width="300" height="300" rx="20" fill="{sdg['color']}"/>
  <!-- SDG Number in Upper-Left -->
  <text x="24" y="48" fill="#FFFFFF" font-family="\'Inter\', Arial, sans-serif" font-weight="900" font-size="34" letter-spacing="-1">{sdg['id']}</text>
  
  <!-- Left-Aligned SDG Title (Uniform Font Size: {UNIFORM_FONT_SIZE}px across all 17 cards) -->
  {texts_str}
  
  <!-- SDG Icon in Upper-Right -->
  <g transform="translate({target_x}, {target_y}) scale({scale}) translate(-{icon_x_center}, -{icon_y_center})">
    {sdg['svg_icon']}
  </g>
</svg>'''

    filepath = os.path.join(sdg_dir, f"sdg-{num_str}.svg")
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(svg_content)

print(f"Regenerated all 17 SDG SVG files with UNIFORM font-size ({UNIFORM_FONT_SIZE}px).")
