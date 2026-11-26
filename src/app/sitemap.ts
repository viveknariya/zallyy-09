import type { MetadataRoute } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

const staticRoutes = [
  { path: "/", priority: 1.0 },
  { path: "/design-systems", priority: 0.9 },
  { path: "/design-systems/tilda", priority: 0.9 },
  { path: "/design-systems/tilda/components", priority: 0.8 },
  { path: "/design-systems/tilda/colors", priority: 0.8 },
  { path: "/design-systems/tilda/pricing", priority: 0.8 },
  { path: "/design-systems/tilda/projects", priority: 0.7 },
  { path: "/design-systems/tilda/settings", priority: 0.6 },
  { path: "/design-systems/tilda/help", priority: 0.7 },
  { path: "/design-systems/tilda/login", priority: 0.5 },
  { path: "/design-systems/tilda/signup", priority: 0.5 },
  { path: "/design-systems/tilda/recover", priority: 0.4 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: "weekly",
    priority: route.priority,
  }));
}
