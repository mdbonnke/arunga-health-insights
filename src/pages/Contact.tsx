import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Seo } from "@/components/Seo";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const links = [
  { icon: <Mail className="h-5 w-5" />, label: "Email", value: "sirbonnkearunga@gmail.com", href: "mailto:sirbonnkearunga@gmail.com" },
  { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", value: "linkedin.com/in/mdbonnke", href: "https://www.linkedin.com/in/mdbonnke" },
  { icon: <Github className="h-5 w-5" />, label: "GitHub", value: "github.com/mdbonnke", href: "https://github.com/mdbonnke" },
  { icon: <MapPin className="h-5 w-5" />, label: "Location", value: "Kenya", href: undefined },
];

const Contact = () => (
  <Layout>
    <Seo
      title="Contact | Digital Health Consultant & Medical Doctor"
      description="Contact Dr. Bonnke Arunga for digital health consulting, healthcare analytics, medical writing, medico-legal reports, clinical services, and research collaborations."
      path="/contact"
    />
    <section className="section-padding">
      <div className="max-w-2xl mx-auto">
        <SectionHeading
          as="h1"
          title="Contact"
          subtitle="Digital health consulting, healthcare analytics, medical writing, medico-legal work, clinical services in Kenya, and remote engagements worldwide."
        />
        <p className="text-sm text-muted-foreground mb-8">
          Prefer a scoped conversation first? Start from{" "}
          <Link to="/hire-me" className="text-accent font-medium hover:underline">
            hire me
          </Link>
          .
        </p>
        <div className="space-y-4">
          {links.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="bg-card rounded-lg p-5 border border-border flex items-center gap-4"
            >
              <div className="p-2 rounded-md bg-accent/10 text-accent">{item.icon}</div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-foreground font-medium hover:text-accent transition-colors">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-foreground font-medium">{item.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;
