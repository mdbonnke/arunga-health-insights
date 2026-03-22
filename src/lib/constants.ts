export const SITE = {
  name: "Dr. Bonnke Arunga",
  tagline: "Physician · Data Analytics · Digital Health",
  description:
    "Medical doctor working at the intersection of clinical medicine, healthcare data analytics, and digital health — applying data-driven approaches to improve healthcare delivery in resource-limited settings.",
  baseUrl: "https://mdbonnke.github.io/arunga-health-insights",
} as const;

export const CONTACT = {
  email: "sirbonnkearunga@gmail.com",
  linkedin: "https://www.linkedin.com/in/mdbonnke",
  linkedinHandle: "linkedin.com/in/mdbonnke",
  github: "https://github.com/mdbonnke",
  githubHandle: "github.com/mdbonnke",
  location: "Kenya",
} as const;

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/clinical", label: "Clinical Medicine" },
  { to: "/analytics", label: "Data Analytics" },
  { to: "/projects", label: "Projects" },
  { to: "/research", label: "Research" },
  { to: "/cv", label: "CV" },
  { to: "/contact", label: "Contact" },
] as const;
