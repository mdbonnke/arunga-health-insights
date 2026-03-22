import { Link } from "react-router-dom";
import { CONTACT, SITE } from "@/lib/constants";

const footerNavLinks = [
  { to: "/about", label: "About" },
  { to: "/clinical", label: "Clinical Medicine" },
  { to: "/analytics", label: "Data Analytics" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const Footer = () => (
  <footer className="border-t border-border bg-muted/50">
    <div className="max-w-7xl mx-auto section-padding py-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-serif text-lg text-foreground mb-2">{SITE.name}</h3>
          <p className="text-sm text-muted-foreground">{SITE.tagline}</p>
        </div>
        <nav aria-label="Footer navigation">
          <h4 className="text-sm font-semibold text-foreground mb-3">Navigation</h4>
          <div className="flex flex-col gap-2">
            {footerNavLinks.map((l) => (
              <Link key={l.to} to={l.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Connect</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <a href={`mailto:${CONTACT.email}`} className="hover:text-foreground transition-colors">
              {CONTACT.email}
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
              aria-label="LinkedIn profile (opens in new tab)"
            >
              LinkedIn
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
              aria-label="GitHub profile (opens in new tab)"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
