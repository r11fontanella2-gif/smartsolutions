import { cp, mkdir, readFile, writeFile } from 'node:fs/promises';
import { business } from '../public/config.js';
await mkdir('dist', { recursive: true });
await cp('public', 'dist', { recursive: true });
const origin = new URL(business.siteUrl).origin;
for (const route of ['index.html', 'privacidade.html', 'termos.html']) {
  const url = `${origin}/${route === 'index.html' ? '' : route}`;
  let html = await readFile(`dist/${route}`, 'utf8');
  html = html.replace('</head>', `<link rel="canonical" href="${url}"><meta property="og:url" content="${url}"></head>`);
  html = html.replace('content="/assets/compartilhamento.webp"', `content="${origin}/assets/compartilhamento.webp"`);
  if (route === 'index.html') {
    const structured = { '@context': 'https://schema.org', '@type': 'Store', name: business.name, legalName: business.legalName, telephone: `+${business.whatsapp}`, url, image: `${origin}/assets/compartilhamento.webp`, description: 'Loja de celulares, assistência técnica e acessórios.', sameAs: business.groups.filter(group => group.url.includes('/channel/')).map(group => group.url) };
    html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">${JSON.stringify(structured).replaceAll('<', '\\u003c')}</script>`);
  }
  await writeFile(`dist/${route}`, html);
}
await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${['', 'privacidade.html', 'termos.html'].map(route => `<url><loc>${origin}/${route}</loc></url>`).join('')}</urlset>`);
console.log('Build concluído: dist/');
