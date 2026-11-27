export const SITE_NAME = "zallyy";
export const SITE_DOMAIN = "zallyy.com";
export const SITE_TAGLINE = "Software, Web & Automation Agency";
export const SITE_CONTACT_EMAIL = "hello@zallyy.com";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  `https://${SITE_DOMAIN}`;

