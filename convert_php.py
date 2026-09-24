import re, os, pathlib
SRC = pathlib.Path(r"D:\popular_medical\popular_medical")
DST = pathlib.Path(r"D:\popular_medical\popmedical-mern\frontend\src\pages\legacy")
DST.mkdir(parents=True, exist_ok=True)

SKIP = {"index","navbar","footer","detail","committee","faculty","anatomy","physiology","biochymistry","medicine","forensic","pathology","microbiology","pharmacology","allied","paediatrics","surgery","orthopaedics","ophthalmology","gynae","otorhinolaryngology","anaesthesiology"}

def clean(html, name):
    # remove php includes of navbar/footer
    html = re.sub(r'<\?php\s+include\("navbar\.php"\)\s*;?\s*\?>', '', html)
    html = re.sub(r'<\?php\s+include\("footer\.php"\)\s*;?\s*\?>', '', html)
    # remove whole php blocks
    html = re.sub(r'<\?php.*?\?>', '', html, flags=re.DOTALL)
    # remove mobile menu + tab scripts (navbar component handles it)
    # keep everything between <body ...> and </body> if present
    m = re.search(r'<body[^>]*>(.*)</body>', html, flags=re.DOTALL|re.IGNORECASE)
    if m: html = m.group(1)
    # rewrite links
    html = html.replace('./assets/', '/assets/').replace('assets/', '/assets/').replace('/assets//', '/assets/')
    # .php -> routes
    def repl_link(m):
        url = m.group(1)
        if url.startswith('http') or url.startswith('#') or url.startswith('mailto:') or url.startswith('tel:'):
            return m.group(0)
        base = url.split('?')[0].replace('.php','').lstrip('./')
        if base in ('index',): return m.group(0).replace(url, '/')
        return m.group(0).replace(url, '/' + base)
    html = re.sub(r'href="([^"]+)"', repl_link, html)
    # escape backticks and ${ for JS template literal
    html = html.replace('`', "'").replace('${', '$ {')
    return html.strip()

names = []
for f in sorted(SRC.glob("*.php")):
    name = f.stem
    if name in SKIP or name.lower() in ("govrn",):
        pass
    # Govrn.php capital G -> handle separately (route /govrn)
    text = f.read_text(encoding='utf-8', errors='ignore')
    body = clean(text, name)
    comp = re.sub(r'[^A-Za-z0-9_]', '', name.capitalize())
    if not comp or comp[0].isdigit(): comp = 'Page' + comp
    route = name.lower()
    out = DST / f"{comp}.jsx"
    out.write_text("import Navbar from '../../components/Navbar.jsx';\nimport Footer from '../../components/Footer.jsx';\n\nconst HTML = `" + body + "`;\n\nfunction fixLinks(root){\n  if(!root) return;\n  root.querySelectorAll('a[href^=\"/\"]').forEach(a=>{\n    const h=a.getAttribute('href');\n    const map={ '/biochymistry':'/dept/biochymistry','/medicine':'/dept/medicine','/forensic':'/dept/forensic','/pathology':'/dept/pathology','/microbiology':'/dept/microbiology','/pharmacology':'/dept/pharmacology','/allied':'/dept/allied','/paediatrics':'/dept/paediatrics','/surgery':'/dept/surgery','/orthopaedics':'/dept/orthopaedics','/ophthalmology':'/dept/ophthalmology','/gynae':'/dept/gynae','/otorhinolaryngology':'/dept/otorhinolaryngology','/anaesthesiology':'/dept/anaesthesiology','/physiology':'/dept/physiology','/anatomy':'/dept/anatomy','/committee':'/committees','/detail':'/doctor' };\n    if(map[h]) a.setAttribute('href', map[h]);\n  });\n}\n\nexport default function " + comp + "(){\n  return (<div><Navbar /><div ref={fixLinks} dangerouslySetInnerHTML={{__html: HTML}} /><Footer /></div>);\n}\n", encoding='utf-8')
    names.append((comp, route))
    print(comp, route)

# write index
idx = "export const LEGACY = [\n" + "\n".join([f'  {{ comp: "{c}", route: "{r}" }},' for c, r in names]) + "\n];\n"
(SRC.parent / "popmedical-mern" / "frontend" / "src" / "pages" / "legacy" / "_manifest.txt").write_text(idx)
print("DONE", len(names))
