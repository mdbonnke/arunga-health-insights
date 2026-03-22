import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { BookOpen, FlaskConical, TrendingUp, BrainCircuit } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { researchInterests } from "@/data/researchData";
import { SITE } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  TrendingUp,
  BrainCircuit,
  FlaskConical,
  BookOpen,
};

const Research = () => (
  <Layout>
    <Helmet>
      <title>Research — {SITE.name}</title>
      <meta name="description" content="Academic work and research interests at the intersection of clinical medicine, data science, and public health." />
    </Helmet>
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Research" subtitle="Academic work and research interests at the intersection of clinical medicine, data science, and public health." />

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="bg-card rounded-lg p-8 border border-border mb-12"
        >
          <h3 className="font-serif text-xl text-foreground mb-1">Publication</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mt-3">
            <span className="font-semibold text-foreground">Case Report:</span> Heart failure in a patient with subcutaneous phycomycosis — a clinical case report exploring the intersection of infectious disease and cardiac complications, contributing to the literature on rare infectious etiologies of cardiac dysfunction.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-muted/50 rounded-lg p-8 border border-border mb-12"
        >
          <h3 className="font-serif text-xl text-foreground mb-3">Current Academic Work</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Currently pursuing an MSc in International Public Health at Liverpool John Moores University, with research focused on healthcare systems strengthening, epidemiological analysis, and the integration of data-driven approaches into public health practice across low- and middle-income countries.
          </p>
        </motion.div>

        <h3 className="font-serif text-2xl text-foreground mb-6">Research Interests</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {researchInterests.map((item, i) => {
            const Icon = iconMap[item.iconName];
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-lg p-6 border border-border"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1" aria-hidden="true">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  </Layout>
);

export default Research;
