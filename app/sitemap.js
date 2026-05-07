const BASE_URL = 'https://zocolegal.com';
const locales = ['es', 'ca', 'en', 'ar', 'zh', 'ru', 'uk'];

const routes = [
  '',
  '/tramites',
  '/servicios',
  '/servicios/solicitar',
  '/faq',
  '/testimonios',
  '/contacto',
  '/privacidad',
  '/aviso-legal',
  '/cookies',
];

export default function sitemap() {
  const entries = [];

  for (const locale of locales) {
    for (const route of routes) {
      entries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : route === '/tramites' || route === '/servicios' ? 0.9 : 0.7,
      });
    }
  }

  return entries;
}
