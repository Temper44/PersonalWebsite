import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "aceternity.com",
      },
    ],
  },
};

export default nextConfig;
