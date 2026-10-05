import os

with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Replace main definition
old_grid = """.patrons-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    max-width: 1120px;
    margin: 0 auto;
}"""
new_grid = """.patrons-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    max-width: 1120px;
    margin: 0 auto;
}
.patrons-grid > * {
    width: calc(33.333% - 1.34rem);
}"""

css = css.replace(old_grid, new_grid)

# Remove .patrons-grid from 992px media query
old_992 = """.patrons-grid,
    .committee-grid-3,
    .scientific-grid {"""
new_992 = """.committee-grid-3,
    .scientific-grid {"""
css = css.replace(old_992, new_992)

# Remove .patrons-grid from 650px media query
old_650 = """.patrons-grid,
    .committee-grid-2,
    .committee-grid-3,
    .scientific-grid {"""
new_650 = """.committee-grid-2,
    .committee-grid-3,
    .scientific-grid {"""
css = css.replace(old_650, new_650)

# Add custom widths for .patrons-grid inside media queries
media_992_start = css.find('@media (max-width: 992px) {') + len('@media (max-width: 992px) {')
css = css[:media_992_start] + '\n    .patrons-grid > * { width: calc(50% - 0.75rem); }' + css[media_992_start:]

media_650_start = css.find('@media (max-width: 650px) {') + len('@media (max-width: 650px) {')
css = css[:media_650_start] + '\n    .patrons-grid > * { width: 100%; }' + css[media_650_start:]

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Updated style.css for centered grid")
