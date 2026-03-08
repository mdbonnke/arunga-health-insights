import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

const SectionHeading = ({ title, subtitle, align = "left" }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`mb-12 ${align === "center" ? "text-center" : ""}`}
  >
    <h2 className="page-heading">{title}</h2>
    {subtitle && <p className={`page-subheading ${align === "center" ? "mx-auto" : ""}`}>{subtitle}</p>}
  </motion.div>
);

export default SectionHeading;
