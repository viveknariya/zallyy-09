export const SITE_NAME = "zallyy";
export const SITE_DOMAIN = "zallyy.com";
export const SITE_TAGLINE = "Software Development Agency";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  `https://${SITE_DOMAIN}`;
