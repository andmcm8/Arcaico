import json
import urllib.request
import os
import re

json_path = '/Users/andresmcmahon/.gemini/antigravity/brain/1e403726-a3c0-4a27-81b5-60f438ec5786/.system_generated/steps/590/output.txt'
output_dir = '/Users/andresmcmahon/Documents/Website Examples/Arcaico/stitch-html/pages'

os.makedirs(output_dir, exist_ok=True)

with open(json_path, 'r') as f:
    data = json.load(f)

screens = data.get('screens', [])
print(f"Found {len(screens)} screens")

for i, screen in enumerate(screens):
    title = screen.get('title', f"untitled_{i}")
    # sanitize title for filename
    safe_title = re.sub(r'[^a-zA-Z0-9_\-]', '_', title)
    
    html_info = screen.get('htmlCode', {})
    url = html_info.get('downloadUrl')
    
    if url:
        filename = f"{i:02d}_{safe_title}.html"
        filepath = os.path.join(output_dir, filename)
        try:
            print(f"Downloading {title} to {filename}...")
            urllib.request.urlretrieve(url, filepath)
        except Exception as e:
            print(f"Failed to download {filename}: {e}")
    else:
        print(f"No download URL for {title}")

print("Done!")
