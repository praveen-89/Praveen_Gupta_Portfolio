
import os
import glob

def replace_in_file(path, target, replacement):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    if target in content:
        content = content.replace(target, replacement)
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'Replaced in {path}')

target = 'whileHover={{ scale: 1.03, y: -4 }}'
replacement = 'whileHover={{ scale: 1.03, y: -4, transition: { duration: 0.2, ease: \'easeOut\' } }}'

paths = [
    'e:/My_Portfolio2.0/portfolio/src/app/page.tsx',
    'e:/My_Portfolio2.0/portfolio/src/components/ui/project-card.tsx',
    'e:/My_Portfolio2.0/portfolio/src/components/ui/experience-card.tsx',
    'e:/My_Portfolio2.0/portfolio/src/components/ui/education-card.tsx',
    'e:/My_Portfolio2.0/portfolio/src/components/ui/cert-card.tsx',
    'e:/My_Portfolio2.0/portfolio/src/components/pages/about-content.tsx'
]

for p in paths:
    replace_in_file(p, target, replacement)

