import type { NextConfig } from "next";

const ONE_YEAR = 60 * 60 * 24 * 365; // 31,536,000 seconds

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.144.191', 'localhost:3000'],

  // All images are now served locally — no remote patterns needed
  images: {
    remotePatterns: [],
  },

  async headers() {
    return [
      {
        // Next.js build chunks — content-hashed filenames, safe for immutable caching
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: `public, max-age=${ONE_YEAR}, immutable`,
          },
        ],
      },
      {
        // Public directory static assets (images, logos, SVGs, fonts, etc.)
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: `public, max-age=${ONE_YEAR}, immutable`,
          },
        ],
      },
      {
        // Logo assets
        source: '/logo/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: `public, max-age=${ONE_YEAR}, immutable`,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
