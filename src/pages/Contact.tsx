import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const links = [
  { icon: <Mail className="h-5 w-5" />, label: "Email", value: "bonnkearunga@gmail.com", href: "mailto:bonnkearunga@gmail.com" },
  { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", value: "linkedin.com/in/bonnkearunga", href: "https://linkedin.com/in/bonnkearunga" },
  { icon: <Github className="h-5 w-5" />, label: "GitHub", value: "github.com/bonnkearunga", href: "https://github.com/bonnkearunga" },
  { icon: <MapPin className="h-5 w-5" />, label: "Location", value: "Kenya", href: undefined },
];

const Contact = () => (
  <Layout>
    <section className="section-padding">
      <div className="max-w-2xl mx-auto">
        <SectionHeading title="Contact" subtitle="Open to collaborations in clinical research, healthcare analytics, digital health, and public health projects." />
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
