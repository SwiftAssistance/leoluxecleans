/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // Static export has no image optimisation server, so never emit /_next/image
  // URLs. Images in public/ are pre-optimised (WebP/JPEG at display sizes).
  images: { unoptimized: true },
};
module.exports = nextConfig;
