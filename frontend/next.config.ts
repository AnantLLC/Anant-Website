// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   output: "export",
//     reactStrictMode: true,
//     images: {
//         unoptimized: true,
//     },
    
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: "/Anant-Website",       // 👈 IMPORTANT
  assetPrefix: "/Anant-Website",    // 👈 Ensures correct image + CSS paths
};

export default nextConfig;

