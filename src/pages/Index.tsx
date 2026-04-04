import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Seo } from "@/components/Seo";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight, Stethoscope, BarChart3, FlaskConical, Mail, Cpu, PenLine, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5 },
  }),
};

const Index = () => (
  <Layout>
    <Seo
      title="Doctor & Digital Health Consultant | AI, Healthcare Analytics, Medical Systems"
      description="Medical doctor and digital health consultant: clinical AI, healthcare analytics, dashboards, medical writing, medico-legal reports, and medical education systems. Kenya-based; remote work worldwide."
      path="/"
    />
    <section className="section-padding min-h-[85vh] flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
            Medical doctor · Digital health · Healthcare analytics · Clinical AI
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-6xl text-foreground leading-tight mb-6 max-w-5xl">
            Digital Health Consultant and Medical Doctor Specializing in AI, Clinical Systems, and Healthcare
            Analytics
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-6 leading-relaxed">
            I am a medical doctor working at the intersection of digital health, clinical decision systems, healthcare
            analytics, and AI-powered tools. I design and build systems that help clinicians, healthcare organizations,
            and education platforms make better decisions using data and structured workflows.
          </p>
          <p className="text-base text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            Active clinical practice in Kenya informs how I scope analytics,{" "}
            <Link to="/digital-health-consulting" className="text-accent font-medium hover:underline">
              digital health consulting
            </Link>
            , and product work; I also deliver{" "}
            <Link to="/medical-writing" className="text-accent font-medium hover:underline">
              medical writing
            </Link>{" "}
            and{" "}
            <Link to="/clinical-services" className="text-accent font-medium hover:underline">
              licensed clinical services
            </Link>{" "}
            where appropriate. Explore{" "}
            <Link to="/projects" className="text-accent font-medium hover:underline">
              selected projects
            </Link>
            ,{" "}
            <Link to="/articles" className="text-accent font-medium hover:underline">
              articles
            </Link>
            , or{" "}
            <Link to="/hire-me" className="text-accent font-medium hover:underline">
              hire me
            </Link>{" "}
            for scoped engagements.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-navy-light">
              <Link to="/hire-me">
                Hire me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact">Contact</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/about">About</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="section-padding bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          as="h2"
          title="How I work with teams"
          subtitle="Concrete service areas linking clinical judgment to analytics, product decisions, documentation, and education systems."
          align="center"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Cpu className="h-8 w-8 text-accent" />,
              title: "Digital health consulting",
              desc: "Clinical workflows, AI guardrails, and platform design for healthcare and med-ed products—grounded in hospital operations and delivery experience.",
              link: "/digital-health-consulting",
              cta: "Digital health consulting",
            },
            {
              icon: <BarChart3 className="h-8 w-8 text-accent" />,
              title: "Healthcare analytics",
              desc: "Dashboards, SQL and Python pipelines, and interpretation that holds up when data is incomplete—suited to operational and quality decisions.",
              link: "/healthcare-analytics",
              cta: "Healthcare analytics work",
            },
            {
              icon: <PenLine className="h-8 w-8 text-accent" />,
              title: "Medical writing & medico-legal",
              desc: "Structured reports, medico-legal documentation, and professional medical content with clear scope and defensible clinical language.",
              link: "/medical-writing",
              cta: "Medical writing services",
            },
            {
              icon: <Stethoscope className="h-8 w-8 text-accent" />,
              title: "Clinical services",
              desc: "Consultations and clinical documentation by a licensed medical doctor in Kenya, alongside remote consulting globally where appropriate.",
              link: "/clinical-services",
              cta: "Clinical services",
            },
            {
              icon: <GraduationCap className="h-8 w-8 text-accent" />,
              title: "Medical education systems",
              desc: "Question banks, revision tools, and AI-assisted study workflows—exemplified by live medical education technology in production.",
              link: "/projects",
              cta: "Selected projects",
            },
            {
              icon: <FlaskConical className="h-8 w-8 text-accent" />,
              title: "Articles & analysis",
              desc: "Long-form writing on digital health, trust, AI, and professional practice—indexed here with links to primary publications.",
              link: "/articles",
              cta: "Articles",
            },
          ].map((item, i) => (
            <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="bg-card rounded-lg p-8 border border-border card-hover h-full flex flex-col">
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-serif text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4 flex-1">{item.desc}</p>
                <Link
                  to={item.link}
                  className="text-sm font-medium text-accent hover:underline inline-flex items-center gap-1"
                >
                  {item.cta} <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          as="h2"
          title="Featured case directions"
          subtitle="Representative builds and analyses—full narratives on the projects page."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Medical education platform (RecallMed)",
              tag: "Med-ed technology · Clinical AI",
              desc: "Problem: exam preparation fragmented across static notes. Approach: AI-assisted generation of exam-style items and structured revision, with payments and production deployment. Outcome: live product used by medical students with ongoing iteration.",
            },
            {
              title: "Hypertension cohort analytics",
              tag: "Healthcare analytics",
              desc: "Problem: unclear control and follow-up patterns in outpatient hypertension care. Approach: retrospective analysis with Python, SQL, and Tableau on real records. Outcome: identified follow-up gaps and recommendations for clinical leadership.",
            },
          ].map((p, i) => (
            <motion.div
              key={p.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-card rounded-lg p-6 border border-border card-hover"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">{p.tag}</span>
              <h3 className="font-serif text-xl text-foreground mt-2 mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="outline">
            <Link to="/projects">
              View all projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/articles">Read articles</Link>
          </Button>
        </div>
      </div>
    </section>

    <section className="section-padding bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading as="h2" title="Research & publications" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-lg p-6 border border-border"
        >
          <div className="flex items-start gap-4">
            <FlaskConical className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif text-lg text-foreground mb-1">Peer-reviewed case report</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Heart failure in a patient with subcutaneous phycomycosis — infectious disease, cardiac complications,
                and care in resource-limited settings.
              </p>
              <Link to="/research" className="text-sm font-medium text-accent hover:underline mt-3 inline-block">
                View research →
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="section-padding">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Mail className="h-8 w-8 text-accent mx-auto mb-4" />
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Contact</h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            For digital health consulting, healthcare analytics, medical writing, clinical services, or collaborations
            in research and public health—use the contact page or start from{" "}
            <Link to="/hire-me" className="text-accent font-medium hover:underline">
              hire me
            </Link>
            .
          </p>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-navy-light">
            <Link to="/contact">
              Get in touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Index;
