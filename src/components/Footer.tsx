import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-muted/50">
    <div className="max-w-7xl mx-auto section-padding py-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="font-serif text-lg text-foreground mb-2">Dr. Bonnke Arunga</h3>
          <p className="text-sm text-muted-foreground">
            Medical doctor · Digital health consultant · Healthcare analytics · Kenya; remote consulting worldwide
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            <Link to="/hire-me" className="text-accent font-medium hover:underline">
              Hire me
            </Link>
            {" · "}
            <Link to="/contact" className="text-accent font-medium hover:underline">
              Contact
            </Link>
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Expertise</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/digital-health-consulting", label: "Digital health consulting" },
              { to: "/healthcare-analytics", label: "Healthcare analytics work" },
              { to: "/medical-writing", label: "Medical writing services" },
              { to: "/clinical-services", label: "Clinical services" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Site</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/about", label: "About" },
              { to: "/projects", label: "Selected projects" },
              { to: "/articles", label: "Articles" },
              { to: "/research", label: "Research" },
              { to: "/cv", label: "CV" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Connect</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <a href="mailto:sirbonnkearunga@gmail.com" className="hover:text-foreground transition-colors">
              sirbonnkearunga@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/mdbonnke"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/mdbonnke"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Dr. Bonnke Arunga. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
