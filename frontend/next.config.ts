import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: "/Anant-Website",
  assetPrefix: "/Anant-Website",
};

export default nextConfig;

