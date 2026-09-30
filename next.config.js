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
  async redirects() {
    // Phase 1 placeholder routes → their Phase 2 replacements.
    return [
      { source: "/products", destination: "/haier-range", permanent: true },
      { source: "/services", destination: "/trade-supply", permanent: true },
      { source: "/gallery", destination: "/haier-range", permanent: true },
    ];
  },
};

module.exports = nextConfig;
