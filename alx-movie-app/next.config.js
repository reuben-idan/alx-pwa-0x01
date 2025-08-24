/** @type {import('next').NextConfig} */
const withPWA = require('@ducanh2912/next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
  // Disable PWA in development
  buildExcludes: [/middleware-manifest.json$/]
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Enable static exports for the app to be deployed as a static website
  output: 'standalone',
};

module.exports = withPWA(nextConfig);
