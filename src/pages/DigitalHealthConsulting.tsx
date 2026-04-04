import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const DigitalHealthConsulting = () => (
  <Layout>
    <Seo
      title="Digital Health Consulting for Clinical AI and Healthcare Platforms"
      description="Digital health consulting for clinical systems, AI-assisted workflows, and healthcare platforms. Medical doctor with hands-on experience in Kenyan hospitals and product delivery."
      path="/digital-health-consulting"
    />
    <section className="section-padding">
      <div className="max-w-3xl mx-auto space-y-12">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">Services</p>
          <h1 className="page-heading text-4xl md:text-5xl">
            Digital Health Consulting for Clinical Systems, AI Tools, and Healthcare Platforms
          </h1>
          <p className="page-subheading text-base md:text-lg leading-relaxed">
            I advise and build where clinical reality meets software: workflows clinicians will actually use, AI
            integrations that respect safety and governance, and platform decisions that hold up under messy,
            real-world data. This work is grounded in active medical practice in Kenya and in shipping digital
            products—not slide decks alone.
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground space-y-4"
        >
          <h2 className="font-serif text-2xl text-foreground not-prose">Problems this addresses</h2>
          <p>
            Teams often struggle when generic technology consultants lack clinical vocabulary, or when clinicians
            prototype tools without a path to maintainable systems. Common gaps include unclear requirements for
            clinical decision support, under-specified AI guardrails, weak documentation for medico-legal and
            quality contexts, and dashboards that display metrics ward staff cannot interpret or act on.
          </p>
          <p>
            I help translate bedside and hospital operations into structured product and integration decisions: what
            to automate first, what must stay human-in-the-loop, and how to align data models with how care is
            actually delivered—especially in under-resourced settings where incomplete records and staffing pressure
            are the norm.
          </p>

          <h2 className="font-serif text-2xl text-foreground not-prose pt-4">Who this is for</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Founders and product teams building digital health or medical education technology</li>
            <li>Hospital and program leaders evaluating AI, clinical workflows, or new data systems</li>
            <li>Organizations integrating LLMs or analytics into clinician-facing tools</li>
            <li>Groups that need a licensed physician to stress-test assumptions before build or rollout</li>
          </ul>

          <h2 className="font-serif text-2xl text-foreground not-prose pt-4">What deliverables can look like</h2>
          <p>
            Engagements vary by scope. Outputs may include written requirements and user journeys, review of
            architecture choices for clinical safety, recommendations on data capture and governance, workflow maps,
            critique of AI prompts or retrieval design for clinical content, and phased roadmaps that separate
            pilot, validation, and scale. Where appropriate, this connects to hands-on analytics or product build
            work described on the{" "}
            <Link to="/projects" className="text-accent font-medium hover:underline">
              selected projects
            </Link>{" "}
            page and in{" "}
            <Link to="/healthcare-analytics" className="text-accent font-medium hover:underline">
              healthcare analytics work
            </Link>
            .
          </p>

          <h2 className="font-serif text-2xl text-foreground not-prose pt-4">Why this background matters</h2>
          <p>
            I am a medical doctor with frontline experience across emergency care, inpatient medicine, maternal and
            newborn services, infectious disease, and hospital leadership in Kenya. I also build and operate
            healthcare-facing software, including AI-assisted medical education tools. That combination reduces the
            gap between “what sounds good in a workshop” and what will survive contact with real patients, staff
            turnover, and incomplete data.
          </p>
          <p>
            For documentation, regulatory-facing narrative, or medico-legal adjacent work, see{" "}
            <Link to="/medical-writing" className="text-accent font-medium hover:underline">
              medical writing services
            </Link>
            . For licensed clinical delivery and consultations, see{" "}
            <Link to="/clinical-services" className="text-accent font-medium hover:underline">
              clinical services
            </Link>
            .
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 pt-4"
        >
          <Button asChild className="bg-primary text-primary-foreground hover:bg-navy-light">
            <Link to="/contact">Contact</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/hire-me">Hire me — scope &amp; pricing</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default DigitalHealthConsulting;
