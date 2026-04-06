import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://yumyarosh.by/sitemap.xml",
    host: "https://yumyarosh.by",
  };
}