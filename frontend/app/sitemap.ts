import type { MetadataRoute } from "next";

// Base URL for the site
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL

if (!BASE_URL) {
    throw new Error("NEXT_PUBLIC_SITE_URL is not defined. Please set it in your environment variables.");
}

// Function to generate sitemap
export default function sitemap(): MetadataRoute.Sitemap {
  // Main pages
  const mainRoutes = [
    "",
    "team",
    "services",
  ].map((route) => ({
    url: `${BASE_URL}/${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Combine all routes
  return mainRoutes
}
