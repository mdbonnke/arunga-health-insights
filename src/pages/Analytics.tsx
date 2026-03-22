import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Code2, Database, BarChart3, LayoutDashboard, TrendingUp, BrainCircuit } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { analyticsSkills, analyticsApplications } from "@/data/analyticsData";
import { SITE } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Database,
  BarChart3,
  LayoutDashboard,
  TrendingUp,
  BrainCircuit,
};

const Analytics = () => (
  <Layout>
    <Helmet>
      <title>Data Analytics — {SITE.name}</title>
      <meta name="description" content="Applying data science and digital tools to real-world healthcare challenges — from clinical dashboards to predictive analytics." />
    </Helmet>
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Data Analytics & Digital Health"
          subtitle="Applying data science and digital tools to real-world healthcare challenges — from clinical dashboards to predictive analytics."
        />

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-muted/50 rounded-lg p-8 mb-12 border border-border"
        >
          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            Working in high-volume clinical settings revealed a persistent gap: critical healthcare decisions were often made with incomplete data, fragmented records, and limited analytical infrastructure. This experience drove my pursuit of healthcare data analytics — not as an abstract technical interest, but as a practical response to the operational challenges I encounter daily in clinical practice.
          </p>
        </motion.div>

        <h3 className="font-serif text-2xl text-foreground mb-6">Technical Skills</h3>
        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {analyticsSkills.map((s, i) => {
            const Icon = iconMap[s.iconName];
            return (
              <motion.div key={s.name} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-lg p-5 border border-border flex items-start gap-4"
              >
                <div className="p-2 rounded-md bg-accent/10 text-accent" aria-hidden="true">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{s.name}</h4>
                  <p className="text-sm text-muted-foreground">{s.detail}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <h3 className="font-serif text-2xl text-foreground mb-6">Applications</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {analyticsApplications.map((app, i) => {
            const Icon = iconMap[app.iconName];
            return (
              <motion.div key={app.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-card rounded-lg p-6 border border-border card-hover"
              >
                <div className="mb-3" aria-hidden="true">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h4 className="font-serif text-xl text-foreground mb-2">{app.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{app.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  </Layout>
);

export default Analytics;
