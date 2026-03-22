export interface Project {
  title: string;
  tag: string;
  problem: string;
  approach: string;
  tools: string;
  outcome: string;
  summary: string;
}

export const projects: Project[] = [
  {
    title: "Clinical Protocol AI Assistant",
    tag: "AI / NLP",
    summary:
      "An intelligent assistant that helps clinicians navigate treatment protocols using natural language queries, built on clinical guideline databases.",
    problem:
      "Clinicians in busy hospital settings struggle to quickly reference treatment protocols, leading to inconsistent adherence to clinical guidelines.",
    approach:
      "Developed a prototype natural language query system that allows clinicians to ask questions about treatment protocols and receive guideline-based recommendations drawn from national clinical guidelines.",
    tools: "Python, LangChain, OpenAI API, Streamlit",
    outcome:
      "Demonstrated feasibility of AI-assisted clinical decision support tailored to Kenyan treatment guidelines, with potential for deployment in resource-limited hospital settings.",
  },
  {
    title: "Hypertension Data Analysis",
    tag: "Analytics",
    summary:
      "Population-level analysis of hypertension prevalence, treatment patterns, and outcomes across outpatient cohorts using Python and Tableau.",
    problem:
      "Limited visibility into hypertension prevalence, treatment patterns, and blood pressure control rates across outpatient populations.",
    approach:
      "Conducted retrospective analysis of outpatient clinical records to assess hypertension diagnosis rates, medication adherence, and blood pressure outcomes over a 12-month period.",
    tools: "Python (pandas, matplotlib), SQL, Tableau",
    outcome:
      "Identified significant gaps in follow-up compliance and blood pressure control, informing recommendations for targeted patient engagement interventions.",
  },
  {
    title: "Hospital Workflow Dashboard",
    tag: "Dashboard",
    summary:
      "Interactive Tableau dashboard giving hospital management real-time visibility into patient flow, bed occupancy, and departmental workload.",
    problem:
      "Hospital management lacked real-time visibility into patient flow, bed occupancy, and departmental workload distribution.",
    approach:
      "Designed and built an interactive Tableau dashboard integrating data from hospital admission records, laboratory systems, and discharge summaries.",
    tools: "Tableau, SQL, Excel",
    outcome:
      "Provided hospital administration with actionable insights into peak demand periods and resource allocation, contributing to improved bed management and staff scheduling.",
  },
  {
    title: "Disease Surveillance Analytics",
    tag: "Public Health",
    summary:
      "Automated data pipeline aggregating weekly disease notification data across health facilities, enabling earlier detection of disease clusters.",
    problem:
      "Delayed detection of disease outbreaks due to manual reporting systems and fragmented surveillance data at the sub-county level.",
    approach:
      "Built an automated data pipeline to aggregate weekly disease notification data from multiple health facilities, with visualizations for trend analysis and threshold-based alerts.",
    tools: "Python, SQL, Tableau, Google Sheets API",
    outcome:
      "Reduced reporting turnaround time and enabled earlier identification of disease clusters, supporting sub-county public health response planning.",
  },
];
