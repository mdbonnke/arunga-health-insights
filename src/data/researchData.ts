export interface ResearchInterest {
  iconName: string;
  title: string;
  desc: string;
}

export const researchInterests: ResearchInterest[] = [
  {
    iconName: "TrendingUp",
    title: "Healthcare Data & Clinical Outcomes",
    desc: "Using retrospective clinical data to analyze treatment outcomes, identify care delivery gaps, and inform quality improvement in hospital settings.",
  },
  {
    iconName: "BrainCircuit",
    title: "Machine Learning in Medicine",
    desc: "Exploring supervised learning approaches for clinical risk prediction, disease classification, and decision-support tools appropriate for resource-limited contexts.",
  },
  {
    iconName: "FlaskConical",
    title: "Public Health Analytics",
    desc: "Epidemiological data analysis, disease surveillance, and population health metrics — with a focus on infectious disease and maternal-child health in sub-Saharan Africa.",
  },
  {
    iconName: "BookOpen",
    title: "Digital Health Systems",
    desc: "Design and evaluation of digital health interventions including electronic medical records, clinical dashboards, and mobile health tools for low- and middle-income settings.",
  },
];
