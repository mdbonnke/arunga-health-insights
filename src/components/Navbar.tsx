import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/digital-health-consulting", label: "Digital health" },
  { to: "/healthcare-analytics", label: "Analytics" },
  { to: "/clinical-services", label: "Clinical" },
  { to: "/medical-writing", label: "Writing" },
  { to: "/projects", label: "Projects" },
  { to: "/articles", label: "Articles" },
  { to: "/hire-me", label: "Hire Me" },
  { to: "/research", label: "Research" },
  { to: "/cv", label: "CV" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="font-serif text-xl text-foreground tracking-tight">
          Dr. Bonnke Arunga
        </Link>

        <div className="hidden lg:flex items-center gap-4 xl:gap-5 flex-wrap justify-end max-w-4xl">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link text-xs xl:text-sm whitespace-nowrap ${location.pathname === link.to ? "nav-link-active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)} aria-expanded={open}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`py-2 text-sm font-medium transition-colors ${
                    location.pathname === link.to ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
