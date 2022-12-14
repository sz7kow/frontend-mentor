/** @type {import("next").NextConfig} */
const nextConfig = {
  distDir: 'build',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  images: {
    dangerouslyAllowSVG: true,
    deviceSizes: [375, 768, 1440],
    domains: ['drive.google.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
