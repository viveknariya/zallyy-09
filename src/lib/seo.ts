import type { Metadata } from "next";
import { SITE_NAME } from "./site";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}

/**
 * Builds consistent route-level metadata with canonical URL, Open Graph, and Twitter fields.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title,
      description,
      url: path,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}
