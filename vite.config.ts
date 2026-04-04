import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { writeFileSync } from "fs";
import { componentTagger } from "lovable-tagger";

const SITEMAP_PATHS = [
  "/",
  "/about",
  "/digital-health-consulting",
  "/healthcare-analytics",
  "/medical-writing",
  "/clinical-services",
  "/projects",
  "/articles",
  "/hire-me",
  "/research",
  "/cv",
  "/contact",
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const siteUrl = env.VITE_SITE_URL?.trim().replace(/\/$/, "");

  return {
    base: "/",
    server: {
      host: "::",
      port: 8080,
      /** Fail fast if 8080 is taken so the terminal URL matches what you open in the browser. */
      strictPort: true,
      hmr: {
        overlay: false,
      },
    },
    plugins: [
      react(),
      mode === "development" && componentTagger(),
      {
        name: "seo-sitemap-robots",
        closeBundle() {
          if (!siteUrl) {
            console.warn(
              "[seo] VITE_SITE_URL is not set — dist/sitemap.xml was not generated. Set VITE_SITE_URL in .env for production builds.",
            );
            return;
          }
          const distDir = path.resolve(__dirname, "dist");
          const locs = SITEMAP_PATHS.map((p) => {
            const full = p === "/" ? siteUrl : `${siteUrl}${p}`;
            const priority =
              p === "/" ? "1.0" : p === "/hire-me" || p === "/contact" ? "0.9" : "0.8";
            return `  <url>\n    <loc>${full}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
          }).join("\n");
          const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${locs}
</urlset>
`;
          writeFileSync(path.join(distDir, "sitemap.xml"), xml);
          writeFileSync(
            path.join(distDir, "robots.txt"),
            `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
          );
        },
      },
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
