import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
    experimental: {
        serverActions: {
            bodySizeLimit: '10mb',
        },
    },
    compress: true,
};

export default nextConfig;
