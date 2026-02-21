import os
import re

html_dir = '/Users/andresmcmahon/Documents/Website Examples/Arcaico/stitch-html/pages/'
js_file = '/Users/andresmcmahon/Documents/Website Examples/Arcaico/src/data/articles.js'

with open(js_file, 'r', encoding='utf-8') as f:
    js_content = f.read()

js_titles = re.findall(r"title:\s*'([^']+)'", js_content)
print(f"JS Titles ({len(js_titles)}):")
for t in js_titles:
    print(f"  - {t}")

print("\nHTML Files & Titles:")
for filename in sorted(os.listdir(html_dir)):
    if filename.endswith('_News_and_Insights_Blog.html'):
        filepath = os.path.join(html_dir, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            title_match = re.search(r'<h1[^>]*>(.*?)</h1>', content, re.DOTALL)
            if title_match:
                raw_title = title_match.group(1)
                clean_title = re.sub(r'<[^>]+>', ' ', raw_title)
                clean_title = ' '.join(clean_title.split())
                print(f"  - {filename}: {clean_title}")
