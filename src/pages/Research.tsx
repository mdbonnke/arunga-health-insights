import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Seo } from "@/components/Seo";
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
    <Seo
      title="Research | Clinical Medicine, Healthcare Analytics, Public Health"
      description="Research and publications: peer-reviewed case report, MSc in International Public Health, and interests spanning healthcare data, clinical AI, and digital health systems."
      path="/research"
    />
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          as="h1"
          title="Research"
          subtitle="Peer-reviewed publication, graduate training, and applied interests linking clinical medicine, healthcare analytics, and public health."
        />

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="bg-card rounded-lg p-8 border border-border mb-12"
        >
          <h2 className="font-serif text-xl text-foreground mb-4">Publication</h2>
          <div className="space-y-3">
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/36176458/"
              target="_blank"
              rel="noopener noreferrer"
              className="block font-semibold text-foreground hover:text-accent transition-colors leading-snug"
            >
              Adverse effects of Lugol’s iodine: Heart failure in a patient with subcutaneous phycomycosis from a resource-limited setting ↗
            </a>
            <p className="text-sm text-muted-foreground">
              Karahalios DS, Shaw A, <span className="font-medium text-foreground">Arunga B</span>, Lenehan C, Sing’oei V, Otieno W.
              {" "}<span className="italic">Medical Mycology Case Reports.</span> 2022 Sep 16;38:9–12.
              {" "}PMID: 36176458 · DOI: 10.1016/j.mmcr.2022.09.001
            </p>
            <div className="bg-muted/60 rounded-md p-4 border-l-2 border-accent mt-2">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Summary:</span>{" "}
                This peer-reviewed case report describes a patient with subcutaneous phycomycosis — a rare tropical fungal infection — who developed iodine-mediated cardiac toxicity (heart failure) during treatment with Lugol’s iodine, a low-cost substitute used in resource-limited settings. The case highlights the critical intersection of infectious disease management, cardiac complications, and social determinants of health, and argues that Lugol’s iodine requires careful dosing and long-term monitoring to be used safely.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Current academic work */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-muted/50 rounded-lg p-8 border border-border mb-12"
        >
          <h2 className="font-serif text-xl text-foreground mb-3">Current academic work</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Currently pursuing an MSc in International Public Health at Liverpool John Moores University, with research focused on healthcare systems strengthening, epidemiological analysis, and the integration of data-driven approaches into public health practice across low- and middle-income countries.
          </p>
        </motion.div>

        <h2 className="font-serif text-2xl text-foreground mb-6">Research interests</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {interests.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-lg p-6 border border-border"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground mt-10">
          For applied analytics and digital health delivery, see{" "}
          <Link to="/projects" className="text-accent font-medium hover:underline">
            selected projects
          </Link>{" "}
          or{" "}
          <Link to="/hire-me" className="text-accent font-medium hover:underline">
            hire me
          </Link>
          .
        </p>
      </div>
    </section>
  </Layout>
);

export default Research;
