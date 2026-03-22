export interface Skill {
  iconName: string;
  name: string;
  detail: string;
}

export interface Application {
  iconName: string;
  title: string;
  desc: string;
}

export const analyticsSkills: Skill[] = [
  { iconName: "Code2", name: "Python", detail: "Data analysis, pandas, scikit-learn" },
  { iconName: "Database", name: "SQL", detail: "Clinical data extraction, querying, reporting" },
  { iconName: "BarChart3", name: "Tableau", detail: "Interactive dashboards, data visualization" },
];

export const analyticsApplications: Application[] = [
  {
    iconName: "LayoutDashboard",
    title: "Healthcare Dashboards",
    desc: "Designing interactive dashboards that track key clinical indicators — patient volumes, disease trends, treatment outcomes — enabling data-informed management decisions.",
  },
  {
    iconName: "TrendingUp",
    title: "Clinical Data Analysis",
    desc: "Extracting and analyzing clinical datasets to identify patterns in disease prevalence, treatment adherence, and patient outcomes across hospital departments.",
  },
  {
    iconName: "BrainCircuit",
    title: "Decision-Support Systems",
    desc: "Exploring machine learning applications for clinical decision support — from risk stratification models to protocol recommendation engines that aid frontline clinicians.",
  },
];
