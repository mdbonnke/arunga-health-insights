import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Seo } from "@/components/Seo";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TrendingUp, FlaskConical, Layers, BrainCircuit } from "lucide-react";

const skillTiers = [
  {
    tier: "Production-Ready",
    color: "text-accent",
    bg: "bg-accent/10",
    skills: ["Python (pandas, matplotlib, seaborn)", "SQL (PostgreSQL, data extraction, reporting)", "Jupyter Lab", "Git & GitHub"],
  },
  {
    tier: "Applied & Growing",
    color: "text-foreground",
    bg: "bg-muted",
    skills: ["Tableau", "Google Sheets API", "Supabase", "React + TypeScript", "Gemini API / LLM integration"],
  },
  {
    tier: "Foundational",
    color: "text-muted-foreground",
    bg: "bg-muted/50",
    skills: ["scikit-learn (ML basics)", "Streamlit", "LangChain", "HTML/CSS/JavaScript"],
  },
];

const advantage = [
  {
    icon: <FlaskConical className="h-5 w-5 text-accent" />,
    title: "Clinical instinct in the data",
    desc: "I know when a spike in a sepsis dataset reflects coding noise versus a real outbreak. I can read an ICD-10 fragmentation pattern and recognize a documentation problem, not an epidemiological signal. That judgment is not learnable from a data course alone.",
  },
  {
    icon: <Layers className="h-5 w-5 text-accent" />,
    title: "End-to-end ownership",
    desc: "From identifying a clinical problem on a ward round, to designing the data model, to building the dashboard, to presenting findings to hospital leadership — I work across the full chain, not only the technical layer.",
  },
  {
    icon: <BrainCircuit className="h-5 w-5 text-accent" />,
    title: "Built for low-resource contexts",
    desc: "My analytical instincts are calibrated to settings where data is messy, incomplete, and collected under pressure. The objective is actionable signal without pretending the data is cleaner than it is.",
  },
];

const HealthcareAnalytics = () => (
  <Layout>
    <Seo
      title="Healthcare Analytics and Dashboard Development for Healthcare Teams"
      description="Healthcare analytics and dashboard development for hospitals and health programs. Licensed medical doctor; Python, SQL, Tableau; Kenya-based with remote delivery."
      path="/healthcare-analytics"
    />
    <section className="section-padding">
      <div className="max-w-5xl mx-auto space-y-16">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">Services</p>
          <h1 className="page-heading text-4xl md:text-5xl">
            Healthcare Data Analytics and Dashboard Development for Clinical and Operational Decisions
          </h1>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
            <p>
              I work as a healthcare data analyst and dashboard developer with an unusual profile: I am a licensed
              medical doctor who spends significant time inside hospitals, not only in front of a screen. That
              matters when definitions, denominators, and “obvious” trends need clinical sense-checking before they
              reach leadership or funders.
            </p>
            <p>
              Typical engagements include exploratory analysis on clinical and operational datasets, reproducible
              cleaning pipelines, visualization for ward and hospital managers, and specifications for recurring
              reporting. I use Python, SQL, and Tableau in production-style workflows, and I document assumptions so
              teams can revisit analyses when data quality improves.
            </p>
            <p>
              This service pairs naturally with{" "}
              <Link to="/digital-health-consulting" className="text-accent font-medium hover:underline">
                digital health consulting
              </Link>{" "}
              when analytics informs product scope, and with{" "}
              <Link to="/medical-writing" className="text-accent font-medium hover:underline">
                medical writing services
              </Link>{" "}
              when findings need a formal narrative. Examples of applied work appear under{" "}
              <Link to="/projects" className="text-accent font-medium hover:underline">
                selected projects
              </Link>
              .
            </p>
          </div>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-xl p-8 border border-border border-l-4 border-l-accent"
        >
          <h2 className="font-serif text-xl text-foreground mb-3">Positioning</h2>
          <p className="text-muted-foreground leading-relaxed text-sm">
            Most health data analysts learn healthcare from textbooks. I learned data from inside the ward. Working in
            high-volume Kenyan hospitals exposed the gap I now work to close: critical clinical decisions made on
            fragmented records, incomplete data, and minimal analytical infrastructure. Pursuing data skills was a
            clinical response. The advantage is specific: I catch what a data scientist without clinical training may
            miss, and I ask questions a clinician without data training may not know how to frame.
          </p>
        </motion.div>

        <div>
          <SectionHeading
            title="Clinician–analyst advantage"
            subtitle="How domain expertise changes the quality of healthcare analytics."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {advantage.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-card rounded-lg p-6 border border-border card-hover"
              >
                <div className="mb-3">{a.icon}</div>
                <h3 className="font-semibold text-foreground text-sm mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-foreground mb-6">Technical skills</h2>
          <div className="space-y-4">
            {skillTiers.map((tier, i) => (
              <motion.div
                key={tier.tier}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-card rounded-lg p-5 border border-border"
              >
                <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${tier.color}`}>{tier.tier}</p>
                <div className="flex flex-wrap gap-2">
                  {tier.skills.map((s) => (
                    <span key={s} className={`text-sm px-3 py-1 rounded-full ${tier.bg} text-foreground`}>
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-muted/50 rounded-xl p-8 border border-border"
        >
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="h-5 w-5 text-accent" />
            <h2 className="font-serif text-xl text-foreground">Training trajectory</h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            An MSc in International Public Health at Liverpool John Moores University adds epidemiological and health
            systems research depth on top of the technical foundation. The aim is a rare combination in sub-Saharan
            Africa: a clinician who can design a study, clean the data, build the analysis pipeline, visualize
            findings, and connect results to implementation—within the same health system they work in. Live product
            and analytics examples are summarized on the{" "}
            <Link to="/projects" className="text-accent font-medium hover:underline">
              projects
            </Link>{" "}
            page.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-navy-light">
            <Link to="/contact">Contact</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/hire-me">Hire me — scope &amp; pricing</Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default HealthcareAnalytics;
