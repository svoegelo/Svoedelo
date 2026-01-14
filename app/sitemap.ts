import { regions } from './regions/data';

export default async function sitemap() {
  const baseUrl = 'https://svoedelo.ru';
  const staticRoutes = [
    '', '/autsource-buhgalterii', '/ip', '/ooo',
    '/sdacha-otchetnosti', '/vosstanovlenie-ucheta',
    '/contacts'
  ];

  const regionRoutes = regions.map(r => `/regions/${r.slug}`);
  const blogRoutes = [
    '/blog/izmeneniya-nalogov-2026',
    '/blog/oshibki-ip-otchetnost',
    '/blog/kogda-vygodno-autsource'
  ];

  const routes = [...staticRoutes, ...regionRoutes, ...blogRoutes].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return routes;
}