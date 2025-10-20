import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['pl', 'uk'],
  defaultLocale: 'pl',
  localePrefix: 'always'
});

export const config = {
  matcher: ['/', '/(pl|uk)/:path*']
};


