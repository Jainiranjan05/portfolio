import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  const s = process.env.NEXT_PUBLIC_SITE_URL || "https://jai-niranjan.vercel.app";
  return { rules: { userAgent: "*", allow: "/" }, sitemap: s + "/sitemap.xml" };
}
