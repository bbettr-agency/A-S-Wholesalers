/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Real images live in /public. No placeholder/remote hosts.
    remotePatterns: [],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    // Modularise icon imports so only used icons ship (keeps first-load JS lean).
    optimizePackageImports: ["lucide-react"],
  },
};

module.exports = nextConfig;
