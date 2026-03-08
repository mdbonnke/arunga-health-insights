import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Clinical Protocol AI Assistant",
    tag: "AI / NLP",
    problem: "Clinicians in busy hospital settings struggle to quickly reference treatment protocols, leading to inconsistent adherence to clinical guidelines.",
    approach: "Developed a prototype natural language query system that allows clinicians to ask questions about treatment protocols and receive guideline-based recommendations drawn from national clinical guidelines.",
    tools: "Python, LangChain, OpenAI API, Streamlit",
    outcome: "Demonstrated feasibility of AI-assisted clinical decision support tailored to Kenyan treatment guidelines, with potential for deployment in resource-limited hospital settings.",
  },
  {
    title: "Hypertension Data Analysis",
    tag: "Analytics",
    problem: "Limited visibility into hypertension prevalence, treatment patterns, and blood pressure control rates across outpatient populations.",
    approach: "Conducted retrospective analysis of outpatient clinical records to assess hypertension diagnosis rates, medication adherence, and blood pressure outcomes over a 12-month period.",
    tools: "Python (pandas, matplotlib), SQL, Tableau",
    outcome: "Identified significant gaps in follow-up compliance and blood pressure control, informing recommendations for targeted patient engagement interventions.",
  },
  {
    title: "Hospital Workflow Dashboard",
    tag: "Dashboard",
    problem: "Hospital management lacked real-time visibility into patient flow, bed occupancy, and departmental workload distribution.",
    approach: "Designed and built an interactive Tableau dashboard integrating data from hospital admission records, laboratory systems, and discharge summaries.",
    tools: "Tableau, SQL, Excel",
    outcome: "Provided hospital administration with actionable insights into peak demand periods and resource allocation, contributing to improved bed management and staff scheduling.",
  },
  {
    title: "Disease Surveillance Analytics",
    tag: "Public Health",
    problem: "Delayed detection of disease outbreaks due to manual reporting systems and fragmented surveillance data at the sub-county level.",
    approach: "Built an automated data pipeline to aggregate weekly disease notification data from multiple health facilities, with visualizations for trend analysis and threshold-based alerts.",
    tools: "Python, SQL, Tableau, Google Sheets API",
    outcome: "Reduced reporting turnaround time and enabled earlier identification of disease clusters, supporting sub-county public health response planning.",
  },
];

const Projects = () => (
  <Layout>
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Projects"
          subtitle="Healthcare analytics and digital health projects addressing real-world clinical and public health challenges."
        />
        <div className="space-y-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="bg-card rounded-lg p-8 border border-border card-hover"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">{p.tag}</span>
              <h3 className="font-serif text-2xl text-foreground mt-2 mb-4">{p.title}</h3>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <div><span className="font-semibold text-foreground">Problem:</span> {p.problem}</div>
                <div><span className="font-semibold text-foreground">Approach:</span> {p.approach}</div>
                <div><span className="font-semibold text-foreground">Tools:</span> {p.tools}</div>
                <div><span className="font-semibold text-foreground">Outcome:</span> {p.outcome}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Projects;
