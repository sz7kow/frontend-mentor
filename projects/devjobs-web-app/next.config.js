/** @typedef {import('next').NextConfig} NextConfig */

/** @type NextConfig */
const nextConfig = {
  compiler: {
    styledComponents: {
      displayName: false,
      ssr: true,
      fileName: true,
      topLevelImportPaths: [],
      meaninglessFileNames: ['index'],
      cssProp: true,
      namespace: undefined,
    },
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
