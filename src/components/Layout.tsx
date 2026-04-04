import { ReactNode, useMemo } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { getSiteOrigin, PERSON_DESCRIPTION, PERSON_SAME_AS, SITE_NAME } from "@/lib/site";

const Layout = ({ children }: { children: ReactNode }) => {
  const personJsonLd = useMemo(() => {
    const origin = getSiteOrigin();
    const node: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: SITE_NAME,
      jobTitle: "Medical Doctor and Digital Health Consultant",
      description: PERSON_DESCRIPTION,
      sameAs: [...PERSON_SAME_AS],
    };
    if (origin) node.url = `${origin}/`;
    return node;
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Navbar />
      <main className="flex-1 pt-[73px]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
