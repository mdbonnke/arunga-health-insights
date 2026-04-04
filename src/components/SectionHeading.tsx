import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  /** Use h1 for the primary page title (SEO). Defaults to h2 for in-page sections. */
  as?: "h1" | "h2";
}

const SectionHeading = ({ title, subtitle, align = "left", as = "h2" }: SectionHeadingProps) => {
  const HeadingTag = as;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${align === "center" ? "text-center" : ""}`}
    >
      <HeadingTag className="page-heading">{title}</HeadingTag>
      {subtitle && <p className={`page-subheading ${align === "center" ? "mx-auto" : ""}`}>{subtitle}</p>}
    </motion.div>
  );
};

export default SectionHeading;
