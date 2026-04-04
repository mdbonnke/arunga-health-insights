import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Code2, Database, BarChart3, LayoutDashboard, TrendingUp, BrainCircuit, FlaskConical, Layers } from "lucide-react";

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
    title: "Clinical Instinct in the Data",
    desc: "I know when a spike in a sepsis dataset reflects coding noise versus a real outbreak. I can read an ICD-10 fragmentation pattern and know it’s a documentation problem, not an epidemiological signal. That judgment is not learnable from a data course.",
  },
  {
    icon: <Layers className="h-5 w-5 text-accent" />,
    title: "Full Stack Thinking",
    desc: "From identifying a clinical problem on a ward round, to designing the data model, to building the dashboard, to presenting findings to hospital leadership — I own the entire problem, not just the technical layer.",
  },
  {
    icon: <BrainCircuit className="h-5 w-5 text-accent" />,
    title: "Built for Low-Resource Contexts",
    desc: "My analytical instincts are calibrated to settings where data is messy, incomplete, and collected under pressure. I don’t need clean data to extract signal — I know what the mess means.",
  },
];

const Analytics = () => (
  <Layout>
    <section className="section-padding">
      <div className="max-w-5xl mx-auto space-y-20">

        {/* Header */}
        <div>
          <SectionHeading
            title="Data Analytics & Digital Health"
            subtitle="A clinician who builds — applying data science to real healthcare problems with the domain expertise to know which problems matter."
          />
        </div>

        {/* Origin / Positioning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-xl p-8 border border-border border-l-4 border-l-accent"
        >
          <p className="text-muted-foreground leading-relaxed text-sm">
            Most health data analysts learn healthcare from textbooks. I learned data from inside the ward. Working in high-volume Kenyan hospitals exposed me to the exact gap I now work to close: critical clinical decisions made on fragmented records, incomplete data, and zero analytical infrastructure. My pursuit of data skills is not a career pivot — it is a clinical response. The advantage this creates is specific: I catch what a data scientist without clinical training will miss, and I ask questions that a clinician without data training cannot answer.
          </p>
        </motion.div>

        {/* The Clinician-Analyst Advantage */}
        <div>
          <h2 className="font-serif text-2xl text-foreground mb-6">The Clinician-Analyst Advantage</h2>
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

        {/* Skills */}
        <div>
          <h2 className="font-serif text-2xl text-foreground mb-6">Technical Skills</h2>
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
                    <span key={s} className={`text-sm px-3 py-1 rounded-full ${tier.bg} text-foreground`}>{s}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trajectory */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-muted/50 rounded-xl p-8 border border-border"
        >
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="h-5 w-5 text-accent" />
            <h2 className="font-serif text-xl text-foreground">Where This Is Going</h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The MSc in International Public Health at Liverpool John Moores University is building the epidemiological and health systems research layer on top of the technical foundation. The goal is a specific kind of professional that barely exists in sub-Saharan Africa: a clinician who can design a study, clean the data, build the analysis pipeline, visualize the findings, and implement the intervention — all within the same health system they work in. RecallMed is the first proof of concept. The outpatient dataset work is the second. The ICU predictor capstone project is next.
          </p>
        </motion.div>

      </div>
    </section>
  </Layout>
);

export default Analytics;
