import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['es', 'ca', 'en', 'ar', 'zh'],
  defaultLocale: 'es'
});

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)']
};