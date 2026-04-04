/** Set `VITE_SITE_URL` (e.g. https://www.yourdomain.com) for canonical URLs, OG URLs, and build-time sitemap. */
export function getSiteOrigin(): string {
  return (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "").trim() ?? "";
}

/** Absolute URL to a 1200×630 (or similar) image for Open Graph / Twitter when set. */
export function getOgImageUrl(): string | undefined {
  const u = (import.meta.env.VITE_OG_IMAGE_URL as string | undefined)?.trim();
  return u || undefined;
}

export const SITE_NAME = "Dr. Bonnke Arunga";

export const PERSON_SAME_AS = [
  "https://www.linkedin.com/in/mdbonnke",
  "https://github.com/mdbonnke",
] as const;

export const PERSON_DESCRIPTION =
  "Medical doctor and digital health consultant working at the intersection of clinical systems, healthcare analytics, AI-powered tools, medical writing, medico-legal reporting, and medical education product development. Based in Kenya; available for remote consulting globally.";
