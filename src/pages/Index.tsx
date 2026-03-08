import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight, Stethoscope, BarChart3, FlaskConical, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="section-padding min-h-[85vh] flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">Physician · Data Analytics · Digital Health</p>
          <h1 className="text-5xl md:text-7xl font-serif text-foreground leading-tight mb-6">
            Dr. Bonnke Arunga
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Medical doctor working at the intersection of clinical medicine, healthcare data analytics, and digital health — applying data-driven approaches to improve healthcare delivery in resource-limited settings.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-navy-light">
              <Link to="/about">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Two Tracks */}
    <section className="section-padding bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Two Professional Tracks" subtitle="Bridging clinical expertise with data analytics to drive healthcare innovation." align="center" />
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: <Stethoscope className="h-8 w-8 text-accent" />,
              title: "Clinical Medicine",
              desc: "Emergency care, inpatient medicine, maternal-child health, infectious disease management, and clinical governance across high-volume hospital environments in Kenya.",
              link: "/clinical",
            },
            {
              icon: <BarChart3 className="h-8 w-8 text-accent" />,
              title: "Data Analytics & Digital Health",
              desc: "Healthcare data analysis using Python, SQL, and Tableau — building dashboards, analyzing clinical patterns, and developing decision-support tools for better healthcare outcomes.",
              link: "/analytics",
            },
          ].map((track, i) => (
            <motion.div key={track.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <Link to={track.link} className="block bg-card rounded-lg p-8 border border-border card-hover group">
                <div className="mb-4">{track.icon}</div>
                <h3 className="font-serif text-2xl text-foreground mb-3">{track.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{track.desc}</p>
                <span className="text-sm font-medium text-accent group-hover:underline flex items-center gap-1">
                  Explore <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Featured Projects */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Featured Projects" subtitle="Selected healthcare analytics and digital health projects." />
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Clinical Protocol AI Assistant", tag: "AI / NLP", desc: "An intelligent assistant that helps clinicians navigate treatment protocols using natural language queries, built on clinical guideline databases." },
            { title: "Hypertension Data Analysis", tag: "Analytics", desc: "Population-level analysis of hypertension prevalence, treatment patterns, and outcomes across outpatient cohorts using Python and Tableau." },
          ].map((p, i) => (
            <motion.div key={p.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-card rounded-lg p-6 border border-border card-hover"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">{p.tag}</span>
              <h3 className="font-serif text-xl text-foreground mt-2 mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link to="/projects">View All Projects <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Research */}
    <section className="section-padding bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Research & Publications" />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-card rounded-lg p-6 border border-border"
        >
          <div className="flex items-start gap-4">
            <FlaskConical className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif text-lg text-foreground mb-1">Published Case Report</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Heart failure in a patient with subcutaneous phycomycosis — a clinical case report exploring the intersection of infectious disease and cardiac complications.
              </p>
              <Link to="/research" className="text-sm font-medium text-accent hover:underline mt-3 inline-block">
                View Research →
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Contact CTA */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Mail className="h-8 w-8 text-accent mx-auto mb-4" />
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Let's Connect</h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Open to collaborations in clinical research, healthcare analytics, digital health innovation, and public health projects.
          </p>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-navy-light">
            <Link to="/contact">Get in Touch <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Index;
