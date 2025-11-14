import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'la-petite-foret.fr',
          },
        ],
        destination: 'https://www.la-petite-foret.fr/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
