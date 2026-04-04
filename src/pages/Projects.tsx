import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Seo } from "@/components/Seo";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { ExternalLink, Users, BarChart3, Activity, Globe, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

const otherProjects = [
  {
    tag: "Data analysis",
    title: "Outpatient dataset analysis",
    metric: "~17,500 patient records",
    problem:
      "A Kenyan hospital outpatient dataset required usable analytics, but ICD-10 coding fragmentation and inconsistent hypertension documentation obscured true prevalence and control patterns.",
    approach:
      "End-to-end cleaning and anonymization in Python; exploratory analysis with clinical review of coding artifacts; visual and tabular summaries that distinguish documentation gaps from clinical signals.",
    outcome:
      "Delivered a cleaned dataset, analysis notebook, and written findings summary suitable for local quality improvement discussions.",
    tools: "Python, pandas, matplotlib, Jupyter Lab",
    icon: <BarChart3 className="h-5 w-5 text-accent" />,
  },
  {
    tag: "Clinical visualization",
    title: "ICU clinical decision visualizations",
    metric: "Published on LinkedIn",
    problem:
      "ICU decisions are often communicated as single-timepoint snapshots; trends that clinicians actually use for escalation or de-escalation are harder to convey to mixed audiences.",
    approach:
      "Built publication-quality Python visualizations comparing trend-based versus snapshot-based framing of the same clinical scenario, grounded in real ICU reasoning patterns.",
    outcome:
      "Static outputs designed for a clinical audience, watermarked and published under professional attribution on LinkedIn.",
    tools: "Python, matplotlib, seaborn",
    icon: <Activity className="h-5 w-5 text-accent" />,
  },
  {
    tag: "Healthcare analytics",
    title: "Hypertension outcomes analysis",
    metric: "12-month retrospective",
    problem:
      "Outpatient hypertension programs needed visibility on diagnosis completeness, medication continuity, and blood pressure control relative to follow-up behavior.",
    approach:
      "Retrospective cohort analysis using Python, SQL, and Tableau with clinically meaningful definitions for control and gaps in follow-up.",
    outcome:
      "Identified follow-up compliance gaps and produced recommendations aimed at patient engagement and clinical leadership—not generic population statistics alone.",
    tools: "Python, SQL, Tableau",
    icon: <BarChart3 className="h-5 w-5 text-accent" />,
  },
  {
    tag: "Dashboard",
    title: "Hospital workflow dashboard",
    metric: "Operational tool",
    problem:
      "Hospital management lacked a single view of patient flow, bed occupancy, and departmental workload across admissions, labs, and discharges.",
    approach:
      "Interactive Tableau dashboard integrating admission, laboratory, and discharge data with filters aligned to operational questions.",
    outcome:
      "Gave leadership near–real-time visibility to inform bed management and staff scheduling; intended as an operational decision aid rather than a research dataset.",
    tools: "Tableau, SQL, Excel",
    icon: <Globe className="h-5 w-5 text-accent" />,
  },
  {
    tag: "Public health",
    title: "Disease surveillance pipeline",
    metric: "Multi-facility automation",
    problem:
      "Weekly disease notification data arrived late and in fragmented formats, slowing sub-county public health response.",
    approach:
      "Automated pipeline aggregating facility data with threshold-based alerting and trend visualizations in Tableau.",
    outcome:
      "Reduced reporting turnaround and supported earlier identification of disease clusters for response planning.",
    tools: "Python, SQL, Google Sheets API, Tableau",
    icon: <ShieldAlert className="h-5 w-5 text-accent" />,
  },
  {
    tag: "Clinical AI prototype",
    title: "Clinical protocol AI assistant",
    metric: "Prototype",
    problem:
      "Clinicians lose time searching across multiple national guideline documents when answers should be retrievable at the point of care.",
    approach:
      "Natural language query prototype over aggregated national treatment protocols using LangChain and an LLM API, with Streamlit as the clinician-facing shell.",
    outcome:
      "Demonstrated feasibility of AI-assisted clinical decision support tuned to Kenyan guideline sources; scoped as a prototype, not a validated medical device.",
    tools: "Python, LangChain, OpenAI API, Streamlit",
    icon: <Activity className="h-5 w-5 text-accent" />,
  },
];

const Projects = () => (
  <Layout>
    <Seo
      title="Healthcare Analytics & Digital Health Projects | Medical Education, Clinical AI"
      description="Case studies: medical education technology, healthcare analytics, dashboards, clinical AI prototypes, and public health pipelines—by Dr. Bonnke Arunga."
      path="/projects"
    />
    <section className="section-padding">
      <div className="max-w-5xl mx-auto space-y-16">
        <SectionHeading
          as="h1"
          title="Projects & case studies"
          subtitle="Problem-focused narratives across digital health, medical education technology, healthcare analytics, and clinical decision support—grounded in real datasets and delivery constraints."
        />

        <p className="text-sm text-muted-foreground leading-relaxed -mt-6 max-w-3xl">
          For consulting scope and pricing, see{" "}
          <Link to="/hire-me" className="text-accent font-medium hover:underline">
            hire me
          </Link>
          . Related capability pages:{" "}
          <Link to="/digital-health-consulting" className="text-accent font-medium hover:underline">
            digital health consulting
          </Link>
          ,{" "}
          <Link to="/healthcare-analytics" className="text-accent font-medium hover:underline">
            healthcare analytics work
          </Link>
          .
        </p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-xl border border-accent/40 p-8 card-hover relative overflow-hidden"
        >
          <div className="absolute top-5 right-5 flex items-center gap-1.5 bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse inline-block" />
            Live product
          </div>

          <span className="text-xs font-semibold uppercase tracking-wider text-accent">Featured build</span>
          <h2 className="font-serif text-3xl text-foreground mt-2 mb-1">RecallMed</h2>

          <a
            href="https://recallmed.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-accent hover:underline mb-5"
          >
            recallmed.app <ExternalLink className="h-3.5 w-3.5" />
          </a>

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
              <span className="text-xs text-muted-foreground">content generation</span>
            </div>
          </div>

          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed mb-5">
            <p>
              <span className="font-semibold text-foreground">Problem: </span>
              Medical students preparing for professional exams needed a faster way to turn dense notes into
              exam-style flashcards and MCQs without sacrificing structure or syllabus alignment.
            </p>
            <p>
              <span className="font-semibold text-foreground">Approach: </span>
              Built an AI-powered medical education platform that generates exam-style questions and revision cards
              from clinical notes, supporting retrieval-based learning. Full stack: React and TypeScript frontend,
              Supabase backend, Gemini API for generation, M-Pesa Daraja for local payments, Lemon Squeezy for
              international billing.
            </p>
            <p>
              <span className="font-semibold text-foreground">Outcome: </span>
              Live product in production with registered users and iterative improvements from real usage—an example
              of{" "}
              <Link to="/digital-health-consulting" className="text-accent font-medium hover:underline">
                digital health
              </Link>{" "}
              and med-ed technology shipped end-to-end.
            </p>
          </div>

          <div className="border-t border-border pt-4">
            <p className="text-xs text-muted-foreground">
              <span className="font-medium text-foreground">Stack: </span>
              React, TypeScript, Supabase, Gemini API, M-Pesa Daraja, Lemon Squeezy, Tailwind CSS
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="bg-card rounded-xl border border-border p-8 card-hover"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">Clinical knowledge systems</span>
          <h2 className="font-serif text-2xl text-foreground mt-2 mb-4">Copilot MD</h2>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              <span className="font-semibold text-foreground">Problem: </span>
              Treatment protocols and guidelines are distributed across PDFs and sites; clinicians lose time locating
              the relevant section during shifts.
            </p>
            <p>
              <span className="font-semibold text-foreground">Approach: </span>
              Designed a clinical protocol aggregation and query workflow to reduce search friction—positioned as
              decision-support adjacent work rather than a substitute for bedside judgment.
            </p>
            <p>
              <span className="font-semibold text-foreground">Outcome: </span>
              Documented system concept aligned to{" "}
              <Link to="/digital-health-consulting" className="text-accent font-medium hover:underline">
                clinical AI
              </Link>{" "}
              and digital health consulting; implementation details sit alongside other builds in this portfolio.
            </p>
          </div>
        </motion.div>

        <div>
          <h2 className="font-serif text-2xl text-foreground mb-6">Analytics & data projects</h2>
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
                  <div className="p-2 rounded-md bg-muted/80 border border-border/50">{p.icon}</div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">{p.tag}</span>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">{p.metric}</span>
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">{p.title}</h3>
                <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    <span className="font-semibold text-foreground">Problem: </span>
                    {p.problem}
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Approach: </span>
                    {p.approach}
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Outcome: </span>
                    {p.outcome}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  <span className="font-medium text-foreground">Tools: </span>
                  {p.tools}
                </p>
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
          <h2 className="font-serif text-xl text-foreground mb-3">Currently building</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            ICU mortality predictor: a machine learning model trained on retrospective ICU data to estimate 30-day
            mortality risk from admission variables—aimed at early risk stratification in resource-limited ICU settings
            in sub-Saharan Africa.
          </p>
          <Button asChild variant="outline" size="sm">
            <Link to="/hire-me">Discuss analytics or product work</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Projects;
