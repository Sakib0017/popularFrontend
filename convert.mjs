import fs from 'fs';
import path from 'path';
const SRC = 'D:\\popular_medical\\popular_medical';
const DST = 'D:\\popular_medical\\popmedical-mern\\frontend\\src\\pages\\legacy';
fs.mkdirSync(DST, { recursive: true });

function clean(html) {
  html = html.replace(/<\?php\s+include\("navbar\.php"\)\s*;?\s*\?>/g, '');
  html = html.replace(/<\?php\s+include\("footer\.php"\)\s*;?\s*\?>/g, '');
  html = html.replace(/<\?php[\s\S]*?\?>/g, '');
  const m = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  if (m) html = m[1];
  html = html.split('./assets/').join('/assets/').split('"assets/').join('"/assets/').split('/assets//').join('/assets/');
  html = html.replace(/href="([^"]+)"/g, (full, url) => {
    if (/^(http|#|mailto:|tel:)/.test(url)) return full;
    const base = url.split('?')[0].replace('.php', '').replace(/^\.\//, '');
    if (base === 'index' || base === '') return full.replace(url, '/');
    return full.replace(url, '/' + base);
  });
  html = html.replace(/`/g, "'").replace(/\$\{/g, '$ {');
  return html.trim();
}
const files = fs.readdirSync(SRC).filter(f => f.endsWith('.php'));
const names = [];
for (const f of files.sort()) {
  const name = f.replace('.php', '');
  const text = fs.readFileSync(path.join(SRC, f), 'utf8');
  const body = clean(text);
  let comp = (name.charAt(0).toUpperCase() + name.slice(1)).replace(/[^A-Za-z0-9_]/g, '');
  if (/^\d/.test(comp)) comp = 'Page' + comp;
  const out = path.join(DST, comp + '.jsx');
  const code = `import Navbar from '../../components/Navbar.jsx';\nimport Footer from '../../components/Footer.jsx';\nimport { useEffect, useRef } from 'react';\n\nconst HTML = \`${body}\`;\n\nconst MAP = { '/biochymistry':'/dept/biochymistry','/medicine':'/dept/medicine','/forensic':'/dept/forensic','/pathology':'/dept/pathology','/microbiology':'/dept/microbiology','/pharmacology':'/dept/pharmacology','/allied':'/dept/allied','/paediatrics':'/dept/paediatrics','/surgery':'/dept/surgery','/orthopaedics':'/dept/orthopaedics','/ophthalmology':'/dept/ophthalmology','/gynae':'/dept/gynae','/otorhinolaryngology':'/dept/otorhinolaryngology','/anaesthesiology':'/dept/anaesthesiology','/physiology':'/dept/physiology','/anatomy':'/dept/anatomy','/committee':'/committees' };\n\nexport default function ${comp}(){\n  const ref = useRef(null);\n  useEffect(()=>{ if(ref.current){ ref.current.querySelectorAll('a').forEach(a=>{ const h=a.getAttribute('href'); if(h && MAP[h]) a.setAttribute('href', MAP[h]); }); } },[]);\n  return (<div><Navbar /><div ref={ref} dangerouslySetInnerHTML={{__html: HTML}} /><Footer /></div>);\n}\n`;
  fs.writeFileSync(out, code);
  names.push({ comp, route: name.toLowerCase() });
  console.log(comp, name);
}
fs.writeFileSync(path.join(DST, '_manifest.json'), JSON.stringify(names, null, 2));
console.log('DONE', names.length);
