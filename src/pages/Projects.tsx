import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { ExternalLink, Users, BarChart3, Activity, Globe, ShieldAlert } from "lucide-react";

const otherProjects = [
  {
    tag: "Data Analysis",
    title: "Outpatient Dataset Analysis",
    metric: "~17,500 patient records",
    desc: "End-to-end cleaning, anonymization, and exploratory analysis of a real Kenyan hospital outpatient dataset. Identified ICD-10 fragmentation issues and hypertension coding gaps that a non-clinical analyst would have missed. Produced a cleaned dataset, analysis notebook, and findings summary.",
    tools: "Python, pandas, matplotlib, Jupyter Lab",
    icon: <BarChart3 className="h-5 w-5 text-accent" />,
  },
  {
    tag: "Data Visualization",
    title: "ICU Clinical Decision Visualizations",
    metric: "Published on LinkedIn",
    desc: "Publication-quality Python visualizations contrasting trend-based versus snapshot-based clinical decision-making in ICU settings. Designed for a clinical audience and grounded in real ICU reasoning patterns. Watermarked and published under professional attribution.",
    tools: "Python, matplotlib, seaborn",
    icon: <Activity className="h-5 w-5 text-accent" />,
  },
  {
    tag: "Analytics",
    title: "Hypertension Outcomes Analysis",
    metric: "12-month retrospective",
    desc: "Retrospective analysis of outpatient hypertension records assessing diagnosis rates, medication adherence, and blood pressure control. Identified significant follow-up compliance gaps and produced targeted patient engagement recommendations for clinical leadership.",
    tools: "Python, SQL, Tableau",
    icon: <BarChart3 className="h-5 w-5 text-accent" />,
  },
  {
    tag: "Dashboard",
    title: "Hospital Workflow Dashboard",
    metric: "Operational tool",
    desc: "Interactive Tableau dashboard integrating admission records, laboratory data, and discharge summaries. Gave hospital management real-time visibility into patient flow, bed occupancy, and departmental workload — informing bed management and staff scheduling decisions.",
    tools: "Tableau, SQL, Excel",
    icon: <Globe className="h-5 w-5 text-accent" />,
  },
  {
    tag: "Public Health",
    title: "Disease Surveillance Pipeline",
    metric: "Multi-facility automation",
    desc: "Automated data pipeline aggregating weekly disease notification data across health facilities with threshold-based alerting and trend visualizations. Reduced reporting turnaround time and enabled earlier identification of disease clusters for sub-county public health response.",
    tools: "Python, SQL, Google Sheets API, Tableau",
    icon: <ShieldAlert className="h-5 w-5 text-accent" />,
  },
  {
    tag: "AI / NLP",
    title: "Clinical Protocol AI Assistant",
    metric: "Prototype",
    desc: "Natural language query prototype allowing clinicians to ask questions about treatment protocols and receive guideline-based recommendations drawn from national clinical guidelines. Demonstrated feasibility of AI-assisted clinical decision support tailored to Kenyan treatment guidelines.",
    tools: "Python, LangChain, OpenAI API, Streamlit",
    icon: <Activity className="h-5 w-5 text-accent" />,
  },
];

const Projects = () => (
  <Layout>
    <section className="section-padding">
      <div className="max-w-5xl mx-auto space-y-16">

        <SectionHeading
          title="Projects"
          subtitle="Built things, not just learned things. A portfolio grounded in real clinical problems and real data."
        />

        {/* RecallMed Hero */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-xl border border-accent/40 p-8 card-hover relative overflow-hidden"
        >
          {/* Live badge */}
          <div className="absolute top-5 right-5 flex items-center gap-1.5 bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse inline-block" />
            Live Product
          </div>

          <span className="text-xs font-semibold uppercase tracking-wider text-accent">Featured Build</span>
          <h2 className="font-serif text-3xl text-foreground mt-2 mb-1">RecallMed</h2>
          
            <a
            href="https://recallmed.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-accent hover:underline mb-5"
          >
            <>recallmed.app <ExternalLink className="h-3.5 w-3.5" /></>
          </a>

          {/* Metric strip */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2 bg-muted rounded-lg px-4 py-2">
              <Users className="h-4 w-4 text-accent" />
              <span className="text-sm font-semibold text-foreground">180+ users</span>
              <span className="text-xs text-muted-foreground">& growing</span>
            </div>
            <div className="flex items-center gap-2 bg-muted rounded-lg px-4 py-2">
              <span className="text-sm font-semibold text-foreground">M-Pesa</span>
              <span className="text-xs text-muted-foreground">+ international billing</span>
            </div>
            <div className="flex items-center gap-2 bg-muted rounded-lg px-4 py-2">
              <span className="text-sm font-semibold text-foreground">Gemini AI</span>
              <span className="text-xs text-muted-foreground">powered</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mb-5">
            AI-powered flashcard and MCQ study platform built specifically for Kenyan medical students. Identified the gap from personal experience preparing for professional exams, then built the entire product: React frontend, Supabase backend, Gemini AI content generation, M-Pesa Daraja STK Push for local payments, and Lemon Squeezy for international billing. Launched, iterated through real user feedback, and growing in production.
          </p>

          <div className="border-t border-border pt-4">
            <p className="text-xs text-muted-foreground">
              <span className="font-medium text-foreground">Stack: </span>
              React, TypeScript, Supabase, Gemini API, M-Pesa Daraja, Lemon Squeezy, Tailwind CSS
            </p>
          </div>
        </motion.div>

        {/* Other Projects */}
        <div>
          <h2 className="font-serif text-2xl text-foreground mb-6">Analytics & Data Projects</h2>
          <div className="space-y-5">
            {otherProjects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="bg-card rounded-lg p-6 border border-border card-hover"
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">{p.tag}</span>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">{p.metric}</span>
                </div>
                <h3 className="font-serif text-xl text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{p.desc}</p>
                <p className="text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">Tools: </span>{p.tools}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* What is next */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-muted/50 rounded-xl p-8 border border-border"
        >
          <h2 className="font-serif text-xl text-foreground mb-3">Currently Building</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The next major build is an ICU Mortality Predictor — a machine learning model trained on retrospective ICU data to predict 30-day mortality risk using clinical variables available at admission. The goal is a decision-support tool calibrated for resource-limited ICU settings in sub-Saharan Africa, where early risk stratification has the highest marginal impact on outcomes.
          </p>
        </motion.div>

      </div>
    </section>
  </Layout>
);

export default Projects;
