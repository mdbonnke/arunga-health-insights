import { Helmet } from "react-helmet-async";
import { getOgImageUrl, getSiteOrigin, SITE_NAME } from "@/lib/site";

interface SeoProps {
  title: string;
  description: string;
  /** Omit on error pages to avoid emitting a canonical for arbitrary paths. */
  path?: string;
  noIndex?: boolean;
}

export function Seo({ title, description, path, noIndex }: SeoProps) {
  const origin = getSiteOrigin();
  const ogImage = getOgImageUrl();
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const canonical =
    origin && path !== undefined ? `${origin}${path === "/" ? "" : path}` : undefined;
  const twitterCard = ogImage ? "summary_large_image" : "summary";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noIndex ? <meta name="robots" content="noindex, follow" /> : null}
      {canonical ? <link rel="canonical" href={canonical} /> : null}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {canonical ? <meta property="og:url" content={canonical} /> : null}
      {ogImage ? <meta property="og:image" content={ogImage} /> : null}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {ogImage ? <meta name="twitter:image" content={ogImage} /> : null}
    </Helmet>
  );
}
