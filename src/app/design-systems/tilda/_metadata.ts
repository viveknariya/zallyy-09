import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";

interface TildaMetadataOptions {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}

/**
 * Builds consistent route-level metadata, canonical URL, Open Graph, Twitter cards,
 * and optional robots noindex rules for /design-systems/tilda/* pages.
 */
export function buildTildaMetadata({
  title,
  description,
  path,
  noIndex = false,
}: TildaMetadataOptions): Metadata {
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
