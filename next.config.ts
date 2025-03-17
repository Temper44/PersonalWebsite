import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
  generateBuildId: async () => {
    return process.env.GIT_HASH || "default-build-id"; // Fallback to prevent undefined
  },
};

export default nextConfig;
