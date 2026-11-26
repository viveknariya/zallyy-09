import type { NextConfig } from "next";

const legacyTildaRoutes = [
  { source: "/blog", destination: "/blogs" },
  { source: "/blog/:slug", destination: "/blogs/:slug" },
  { source: "/design-system", destination: "/design-systems/tilda/components" },
  { source: "/colors", destination: "/design-systems/tilda/colors" },
  { source: "/pricing", destination: "/design-systems/tilda/pricing" },
  { source: "/projects", destination: "/design-systems/tilda/projects" },
  { source: "/settings", destination: "/design-systems/tilda/settings" },
  { source: "/help", destination: "/design-systems/tilda/help" },
  { source: "/login", destination: "/design-systems/tilda/login" },
  { source: "/signup", destination: "/design-systems/tilda/signup" },
  { source: "/recover", destination: "/design-systems/tilda/recover" },
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return legacyTildaRoutes.map((route) => ({
      source: route.source,
      destination: route.destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
