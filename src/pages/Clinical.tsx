import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Heart, ShieldCheck, Baby, Bug, Building2, Siren } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { clinicalAreas } from "@/data/clinicalAreas";
import { SITE } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Siren,
  Heart,
  Baby,
  Bug,
  ShieldCheck,
  Building2,
};

const Clinical = () => (
  <Layout>
    <Helmet>
      <title>Clinical Medicine — {SITE.name}</title>
      <meta name="description" content="Frontline clinical practice across emergency, inpatient, maternal-child, and infectious disease services in Kenya's public and specialist hospital system." />
    </Helmet>
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Clinical Medicine"
          subtitle="Frontline clinical practice across emergency, inpatient, maternal-child, and infectious disease services in Kenya's public and specialist hospital system."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinicalAreas.map((area, i) => {
            const Icon = iconMap[area.iconName];
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-card rounded-lg p-6 border border-border card-hover"
              >
                <div className="mb-3" aria-hidden="true">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-2">{area.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{area.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  </Layout>
);

export default Clinical;
