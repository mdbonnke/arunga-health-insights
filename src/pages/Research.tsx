import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { BookOpen, FlaskConical, TrendingUp, BrainCircuit } from "lucide-react";

const interests = [
  { icon: <TrendingUp className="h-5 w-5 text-accent" />, title: "Healthcare Data & Clinical Outcomes", desc: "Using retrospective clinical data to analyze treatment outcomes, identify care delivery gaps, and inform quality improvement in hospital settings." },
  { icon: <BrainCircuit className="h-5 w-5 text-accent" />, title: "Machine Learning in Medicine", desc: "Exploring supervised learning approaches for clinical risk prediction, disease classification, and decision-support tools appropriate for resource-limited contexts." },
  { icon: <FlaskConical className="h-5 w-5 text-accent" />, title: "Public Health Analytics", desc: "Epidemiological data analysis, disease surveillance, and population health metrics — with a focus on infectious disease and maternal-child health in sub-Saharan Africa." },
  { icon: <BookOpen className="h-5 w-5 text-accent" />, title: "Digital Health Systems", desc: "Design and evaluation of digital health interventions including electronic medical records, clinical dashboards, and mobile health tools for low- and middle-income settings." },
];

const Research = () => (
  <Layout>
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Research" subtitle="Academic work and research interests at the intersection of clinical medicine, data science, and public health." />

        {/* Publication */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="bg-card rounded-lg p-8 border border-border mb-12"
        >
          <h3 className="font-serif text-xl text-foreground mb-1">Publication</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mt-3">
            <span className="font-semibold text-foreground">Case Report:</span> Heart failure in a patient with subcutaneous phycomycosis — a clinical case report exploring the intersection of infectious disease and cardiac complications, contributing to the literature on rare infectious etiologies of cardiac dysfunction.
          </p>
        </motion.div>

        {/* Current academic work */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-muted/50 rounded-lg p-8 border border-border mb-12"
        >
          <h3 className="font-serif text-xl text-foreground mb-3">Current Academic Work</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Currently pursuing an MSc in International Public Health at Liverpool John Moores University, with research focused on healthcare systems strengthening, epidemiological analysis, and the integration of data-driven approaches into public health practice across low- and middle-income countries.
          </p>
        </motion.div>

        {/* Research Interests */}
        <h3 className="font-serif text-2xl text-foreground mb-6">Research Interests</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {interests.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-lg p-6 border border-border"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Research;
