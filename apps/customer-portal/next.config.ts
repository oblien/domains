import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "img.clerk.com",
      },
      {
        protocol: 'https',
        hostname: "utfs.io",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  experimental: {
    reactCompiler: true,
  },
};

module.exports = nextConfig