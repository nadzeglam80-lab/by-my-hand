/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: { locales: ['ar'], defaultLocale: 'ar', localeDetection: false },
  images: { remotePatterns: [{ protocol: 'http', hostname: '**' }, { protocol: 'https', hostname: '**' }] }
};
module.exports = nextConfig;
