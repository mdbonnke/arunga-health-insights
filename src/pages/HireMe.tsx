import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Seo } from "@/components/Seo";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Layers,
  LineChart,
  Laptop,
  ExternalLink,
  Briefcase,
  MessageSquare,
  RefreshCw,
  Check,
  Sparkles,
  Stethoscope,
  Scale,
  PenSquare,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45 },
  }),
};

/** Approximate KES per 1 USD for displayed equivalents — adjust when you refresh pricing. */
const KES_PER_USD_APPROX = 130;

function formatKesLine(kes: number, from?: boolean) {
  const n = kes.toLocaleString("en-US");
  return from ? `from KES ${n}` : `KES ${n}`;
}

function formatUsdLine(kes: number, from?: boolean) {
  const usd = Math.round(kes / KES_PER_USD_APPROX);
  return from ? `from ~$${usd}` : `~$${usd}`;
}

const heroServices = [
  "Digital health consulting",
  "Healthcare analytics & dashboards",
  "Medical writing & medico-legal reports",
  "Licensed clinical services (Kenya)",
  "Medical education product work",
];

const services = [
  {
    icon: <BrainCircuit className="h-5 w-5 text-accent" />,
    title: "Digital Health Consulting Services",
    desc: "Workflow design, AI integration planning, and product decisions for clinical and med-ed platforms—led by a practicing physician who ships software.",
    deliverables: [
      "Requirements and clinical workflow mapping",
      "AI and decision-support scoping",
      "Safety, documentation, and governance considerations",
      "Roadmaps from pilot to scale",
    ],
    detailHref: "/digital-health-consulting",
    detailLabel: "Digital health consulting",
  },
  {
    icon: <BarChart3 className="h-5 w-5 text-accent" />,
    title: "Healthcare Data Analytics and Dashboard Development",
    desc: "Analytics and dashboards for operational and clinical decisions: Python, SQL, Tableau, and interpretation that accounts for real-world data quality.",
    deliverables: [
      "Cleaning and exploratory analysis",
      "Hospital and program dashboards",
      "Reporting pipelines and documentation",
      "Findings framed for leadership action",
    ],
    detailHref: "/healthcare-analytics",
    detailLabel: "Healthcare analytics work",
  },
  {
    icon: <PenSquare className="h-5 w-5 text-accent" />,
    title: "Medical Writing and Medico-Legal Reports",
    desc: "Formal medical writing and medico-legal reporting with clear scope, traceable reasoning, and language appropriate to courts and institutions.",
    deliverables: [
      "Medico-legal reports",
      "Medical summaries and referral documentation",
      "Personal statements and research summaries",
      "Question banks and structured study systems",
    ],
    detailHref: "/medical-writing",
    detailLabel: "Medical writing services",
  },
  {
    icon: <Stethoscope className="h-5 w-5 text-accent" />,
    title: "Clinical Services by a Licensed Medical Doctor",
    desc: "Clinical consultations and documentation grounded in active hospital practice in Kenya; scoped according to professional standards and setting.",
    deliverables: [
      "General medical consultations",
      "Medical reports tied to clinical assessment",
      "Institutional clinical reviews where appropriate",
      "Coordination with medico-legal documentation when needed",
    ],
    detailHref: "/clinical-services",
    detailLabel: "Clinical services",
  },
];

const trustPoints = [
  {
    icon: <Layers className="h-6 w-6 text-accent" />,
    title: "Medicine + Systems Thinking",
    text: "I understand clinical reality and how to turn it into structured tools, workflows, and services people can actually use.",
  },
  {
    icon: <LineChart className="h-6 w-6 text-accent" />,
    title: "Analytical Depth",
    text: "I can interpret data, build dashboards, and frame findings in ways decision-makers can act on quickly.",
  },
  {
    icon: <Laptop className="h-6 w-6 text-accent" />,
    title: "Builder Mindset",
    text: "I do not stop at advice. I prototype, test, refine, and ship practical outputs.",
  },
];

const proofItems = [
  {
    title: "RecallMed",
    summary:
      "AI-powered medical education platform used to generate exam-style questions and structured revision from notes. Built and deployed with real users.",
    tags: ["Product build", "MedEd", "AI workflow"],
    href: "https://recallmed.app",
    external: true,
    cta: "View product",
  },
  {
    title: "Copilot MD",
    summary:
      "Clinical protocol aggregation system designed to reduce time spent searching across multiple guidelines.",
    tags: ["Clinical AI", "Digital health", "Decision support"],
    href: "/projects",
    external: false,
    cta: "View on Projects",
  },
  {
    title: "Analytics, Dashboards & Research",
    summary:
      "Healthcare dashboards and analytical systems used to turn raw data into actionable decisions.",
    tags: ["Dashboards", "Data analysis", "Healthcare insight"],
    href: "/projects",
    external: false,
    cta: "View projects",
  },
];

const pricingGroups = [
  {
    icon: <Scale className="h-5 w-5 text-accent" />,
    title: "Clinical & medico-legal",
    desc: "For individuals and institutions needing clinical review, documentation, or expert medical reporting.",
    items: [
      { name: "General consultation", kes: 2000 },
      { name: "Medical reports", kes: 3000, from: true },
      { name: "Medico-legal reports", kes: 20000, from: true },
    ],
  },
  {
    icon: <PenSquare className="h-5 w-5 text-accent" />,
    title: "Medical writing & education",
    desc: "For doctors, students, and healthcare organizations that need clear written work or structured learning systems.",
    items: [
      { name: "Personal statements", kes: 5000, from: true },
      { name: "Research summaries", kes: 7500, from: true },
      { name: "Study systems / question banks", kes: 10000, from: true },
    ],
  },
  {
    icon: <BrainCircuit className="h-5 w-5 text-accent" />,
    title: "Data, AI & digital health systems",
    desc: "For teams building products, dashboards, or decision systems in healthcare and medical education.",
    items: [
      { name: "Dashboards", kes: 10000, from: true },
      { name: "Consulting", kes: 30000, from: true },
      { name: "Product / system design", kes: 75000, from: true },
    ],
  },
];

const whoIWorkWith = [
  "Health startups",
  "Hospitals and clinical teams",
  "Medical education organizations",
  "Researchers and public health teams",
  "Professionals needing high-quality medical writing",
];

const engagementModels = [
  {
    icon: <Briefcase className="h-5 w-5 text-accent" />,
    title: "Project-Based Work",
    desc: "For one-off builds, reports, dashboards, and scoped deliverables.",
  },
  {
    icon: <MessageSquare className="h-5 w-5 text-accent" />,
    title: "Consulting",
    desc: "For strategy, product thinking, workflow planning, and healthcare problem-solving.",
  },
  {
    icon: <RefreshCw className="h-5 w-5 text-accent" />,
    title: "Ongoing Collaboration",
    desc: "For retained support across product, content, analytics, or iteration.",
  },
];

const HireMe = () => (
  <Layout>
    <Seo
      title="Hire a Digital Health Consultant | Doctor, AI Systems, Healthcare Analytics"
      description="Hire a medical doctor for digital health consulting, healthcare analytics and dashboards, medical writing and medico-legal reports, and clinical services. Remote worldwide; clinical work in Kenya."
      path="/hire-me"
    />
    <section className="section-padding pt-28 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Hire me
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[2.75rem] leading-tight text-foreground mb-6">
              Hire a medical doctor for digital health consulting, healthcare analytics, and clinical systems
              that survive real-world use.
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4 max-w-xl">
              I combine active hospital practice with analytics, medical writing, and product delivery. Engagements
              are scoped for defensible clinical language, usable dashboards, and AI workflows that respect safety
              and governance.
            </p>
            <p className="text-sm text-foreground/80 mb-3 max-w-xl">
              Available for global remote work and local clinical services in Kenya.
            </p>
            <p className="text-sm text-muted-foreground mb-10 max-w-xl">
              Service detail pages:{" "}
              <Link to="/digital-health-consulting" className="text-accent font-medium hover:underline">
                digital health consulting
              </Link>
              ,{" "}
              <Link to="/healthcare-analytics" className="text-accent font-medium hover:underline">
                healthcare analytics
              </Link>
              ,{" "}
              <Link to="/medical-writing" className="text-accent font-medium hover:underline">
                medical writing
              </Link>
              ,{" "}
              <Link to="/clinical-services" className="text-accent font-medium hover:underline">
                clinical services
              </Link>
              .
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-navy-light">
                <Link to="/contact">
                  Work With Me <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/projects">View Projects</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="bg-card rounded-xl border border-border p-8 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="h-5 w-5 text-accent" />
              <h2 className="font-serif text-lg text-foreground">Focus areas</h2>
            </div>
            <ul className="space-y-3.5">
              {heroServices.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </span>
                  <span className="text-foreground/90 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="section-padding bg-muted/40 border-y border-border/60">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Service categories"
          subtitle="Four areas—each maps to a dedicated page with scope, audience, and deliverables."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              className="bg-card rounded-xl p-7 border border-border card-hover flex flex-col h-full"
            >
              <div className="mb-4 p-2.5 rounded-lg bg-muted/80 w-fit border border-border/50">
                {s.icon}
              </div>
              <h2 className="font-serif text-xl text-foreground mb-3">{s.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{s.desc}</p>
              <ul className="space-y-2 pt-4 border-t border-border mb-4">
                {s.deliverables.map((d) => (
                  <li key={d} className="text-sm text-foreground/85 flex gap-2.5 leading-snug">
                    <span className="text-accent shrink-0 select-none">·</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={s.detailHref}
                className="text-sm font-medium text-accent hover:underline inline-flex items-center gap-1"
              >
                {s.detailLabel} <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Pricing"
          subtitle="Clear starting points for the main services. Larger or institutional work can be scoped separately."
        />
        <div className="grid lg:grid-cols-3 gap-6">
          {pricingGroups.map((group, i) => (
            <motion.div
              key={group.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-card rounded-xl p-7 border border-border card-hover flex flex-col h-full"
            >
              <div className="mb-4 p-2.5 rounded-lg bg-muted/80 w-fit border border-border/50">
                {group.icon}
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">{group.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{group.desc}</p>
              <div className="space-y-3 pt-4 border-t border-border">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-start justify-between gap-4 text-sm leading-snug"
                  >
                    <span className="text-foreground/85">{item.name}</span>
                    <span className="text-right shrink-0">
                      <span className="block text-accent font-semibold whitespace-nowrap">
                        {formatKesLine(item.kes, item.from)}
                      </span>
                      <span className="block text-xs font-medium text-muted-foreground whitespace-nowrap">
                        {formatUsdLine(item.kes, item.from)} USD
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground text-center mt-10 max-w-2xl mx-auto leading-relaxed">
          USD figures are approximate equivalents (about {KES_PER_USD_APPROX} KES per US dollar). Actual
          billing can be agreed in KES or USD; exchange rates vary.
        </p>
      </div>
    </section>

    <section className="section-padding bg-muted/40 border-y border-border/60">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Why work with me"
          subtitle="Clinical experience combined with systems thinking and execution."
          align="center"
        />
        <div className="grid md:grid-cols-3 gap-6">
          {trustPoints.map((t, i) => (
            <motion.div
              key={t.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-card rounded-xl p-8 border border-border text-center md:text-left card-hover"
            >
              <div className="mb-4 flex justify-center md:justify-start">{t.icon}</div>
              <h3 className="font-serif text-lg text-foreground mb-3">{t.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Selected proof" subtitle="Work you can inspect directly." />
        <div className="grid md:grid-cols-3 gap-6">
          {proofItems.map((p, i) => (
            <motion.div
              key={p.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-card rounded-xl p-7 border border-border flex flex-col h-full card-hover"
            >
              <h3 className="font-serif text-xl text-foreground mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                {p.summary}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-muted text-foreground/80 border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {p.external ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                >
                  {p.cta} <ExternalLink className="h-4 w-4" />
                </a>
              ) : (
                <Link
                  to={p.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                >
                  {p.cta} <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-muted/40 border-y border-border/60">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Who I work with"
          subtitle="Best suited to teams and professionals working on real healthcare, education, or data problems."
          align="center"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {whoIWorkWith.map((item, i) => (
            <motion.div
              key={item}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-card rounded-xl p-5 border border-border text-sm text-foreground/90 text-center card-hover"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="How I work"
          subtitle="Different engagement models depending on scope, complexity, and turnaround."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {engagementModels.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-card rounded-xl p-7 border border-border card-hover"
            >
              <div className="mb-4 p-2.5 rounded-lg bg-muted/80 w-fit border border-border/50">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-muted/40 border-y border-border/60">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-2xl border border-border p-8 md:p-12 shadow-sm"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Let&apos;s build something useful.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            If you need a clinician who can also think in systems, data, writing, and digital
            products, this is the work I do.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-navy-light">
              <Link to="/contact">Contact Me</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/cv">See My CV</Link>
            </Button>
          </div>
          <p className="text-sm text-foreground/75">
            Available for selected consulting, freelance, and collaborative work.
          </p>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default HireMe;
