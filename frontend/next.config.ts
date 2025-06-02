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
  output: "export",              // ✅ Enables static export
  reactStrictMode: true,
  images: {
    unoptimized: true,          // ✅ Required for export if using <Image />
  },
  // Optional: Set basePath & assetPrefix if deploying to a subpath like /Anant-Website
  // basePath: "/Anant-Website",
  // assetPrefix: "/Anant-Website",
};

export default nextConfig;
