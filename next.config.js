/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.WP_IMAGES_URL],
  },
  experimental: {
    appDir: true,
  }
};

module.exports = nextConfig;
