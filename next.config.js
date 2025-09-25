/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true, // disable image optimization completely
  },
  pwa: {
    dest: "public",
    runtimeCaching,
  },
  output: "export",
};

module.exports = withPWA(nextConfig);
