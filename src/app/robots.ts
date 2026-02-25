// src/app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // surtout pas de disallow: "/"
    },
    sitemap: "https://noahbucheton.fr/sitemap.xml",
    host: "https://noahbucheton.fr",
  };
}