import os
import re

html_file = '/Users/andresmcmahon/Documents/Website Examples/Arcaico/stitch-html/pages/22_Blog_Feed__24_Articles__-_No_Button.html'
with open(html_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract featured article
featured_title_match = re.search(r'<h1[^>]*>([^<]+)<br/>([^<]+)</h1>', content)
featured_title = featured_title_match.group(1).strip() + " " + featured_title_match.group(2).strip() if featured_title_match else "The Vertical Forest: Redefining Skyline Ecology"

featured_excerpt_match = re.search(r'<p class="text-xl[^>]*>([^<]+)</p>', content)
featured_excerpt = featured_excerpt_match.group(1).strip() if featured_excerpt_match else "Exploring how incorporating dense vegetation..."

featured_img_match = re.search(r'<img alt="[^"]*" class="[^"]*" src="([^"]+)"', content)
featured_img = featured_img_match.group(1) if featured_img_match else ""

# Extract grid articles
articles_html = re.findall(r'<article class="group flex flex-col h-full">(.*?)</article>', content, re.DOTALL)

parsed_articles = []
for idx, article_html in enumerate(articles_html):
    img_match = re.search(r'<img alt="[^"]*" class="[^"]*" src="([^"]+)"', article_html)
    img = img_match.group(1) if img_match else ""
    
    cat_match = re.search(r'<span class="px-3 py-1[^>]*>([^<]+)</span>', article_html)
    cat = cat_match.group(1) if cat_match else "Category"
    
    date_match = re.search(r'<div class="text-\[10px\] font-mono[^>]*>([^<]+)</div>', article_html)
    date = date_match.group(1) if date_match else "Date"
    
    title_match = re.search(r'<h3 class="text-2xl font-bold[^>]*>([^<]+)</h3>', article_html)
    title = title_match.group(1) if title_match else "Title"
    
    # Generate a slug
    slug = re.sub(r'[^a-z0-9]+', '-', title.lower()).strip('-')
    
    excerpt_match = re.search(r'<p class="text-text-muted text-sm[^>]*>([^<]+)</p>', article_html)
    excerpt = excerpt_match.group(1) if excerpt_match else "Excerpt"
    
    parsed_articles.append({
        'slug': slug,
        'title': title,
        'category': cat,
        'date': date,
        'image': img,
        'excerpt': excerpt,
        'content': 'This is a full article content placeholder for ' + title
    })

js_file = '/Users/andresmcmahon/Documents/Website Examples/Arcaico/src/data/articles.js'

js_content = "export const articles = [\n"

# Add featured as first
js_content += "    {\n"
js_content += f"        slug: 'the-vertical-forest',\n"
js_content += f"        title: '{featured_title}',\n"
js_content += f"        category: 'Featured',\n"
js_content += f"        date: 'Nov 01, 2023',\n"
js_content += f"        image: '{featured_img}',\n"
js_content += f"        excerpt: `{featured_excerpt}`,\n"
js_content += f"        content: 'Placeholder content for {featured_title}.'\n"
js_content += "    },\n"

for a in parsed_articles:
    js_content += "    {\n"
    js_content += f"        slug: '{a['slug']}',\n"
    js_content += f"        title: '{a['title']}',\n"
    js_content += f"        category: '{a['category']}',\n"
    js_content += f"        date: '{a['date']}',\n"
    js_content += f"        image: '{a['image']}',\n"
    js_content += f"        excerpt: `{a['excerpt']}`,\n"
    js_content += f"        content: '{a['content']}'\n"
    js_content += "    },\n"
    
js_content += "];\n"

with open(js_file, 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"Extracted {len(parsed_articles)} grid articles plus 1 featured article.")
