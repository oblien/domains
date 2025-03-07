/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.oblien.domains'],
  },
  // Enable experimental features if needed
  // experimental: {
  //   appDir: true,
  // },
}

module.exports = nextConfig 