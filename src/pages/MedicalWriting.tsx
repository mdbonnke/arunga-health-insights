import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const MedicalWriting = () => (
  <Layout>
    <Seo
      title="Medical Writing and Medico-Legal Reports by a Medical Doctor"
      description="Medical writing, medico-legal reports, and professional clinical documentation by a licensed physician. Clear, defensible outputs for individuals, lawyers, and healthcare organizations."
      path="/medical-writing"
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
            Medical Writing, Medico-Legal Reports, and Professional Documentation
          </h1>
          <p className="page-subheading text-base md:text-lg leading-relaxed">
            I produce clinical writing that is accurate, structured, and appropriate for its audience: from
            medico-legal reports and formal medical summaries to education-oriented content and research synopses.
            Work is informed by active practice, governance experience, and familiarity with how records are read by
            clinicians, administrators, and courts.
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
            Non-clinical writers misstate pathophysiology or use imprecise terminology. Busy clinicians may lack time
            to turn complex cases into clear reports. Legal and insurance workflows require chronologies and
            opinions that follow a logical clinical narrative without overreaching beyond the record. Education
            teams need question banks and summaries that match exam standards and safe practice—not generic AI
            prose.
          </p>
          <p>
            I focus on clarity, traceability to source material, and explicit limits of opinion where the record is
            incomplete. The goal is documentation that withstands professional scrutiny and helps the reader decide
            or learn—not copy that merely sounds authoritative.
          </p>

          <h2 className="font-serif text-2xl text-foreground not-prose pt-4">Who this is for</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Individuals needing formal medical reports or structured summaries</li>
            <li>Legal professionals seeking medico-legal reports grounded in Kenyan clinical practice context</li>
            <li>Students and doctors requiring personal statements, structured study materials, or research summaries</li>
            <li>Organizations publishing professional medical content or training collateral</li>
          </ul>

          <h2 className="font-serif text-2xl text-foreground not-prose pt-4">What deliverables can look like</h2>
          <p>
            Typical outputs include medico-legal reports with clear fact–opinion separation, clinical summaries for
            referral or administrative use, personal statements and structured narratives for training applications,
            condensed research summaries with cited sources, and scoped question-bank or revision systems aligned to
            curriculum goals. Turnaround and depth are agreed per assignment; larger institutional projects are scoped
            separately. Indicative pricing appears on the{" "}
            <Link to="/hire-me" className="text-accent font-medium hover:underline">
              Hire me
            </Link>{" "}
            page.
          </p>

          <h2 className="font-serif text-2xl text-foreground not-prose pt-4">How this fits with other work</h2>
          <p>
            Medical writing complements{" "}
            <Link to="/digital-health-consulting" className="text-accent font-medium hover:underline">
              digital health consulting
            </Link>{" "}
            when products require clinician-reviewed content, protocol language, or safety copy. It connects to{" "}
            <Link to="/clinical-services" className="text-accent font-medium hover:underline">
              clinical services
            </Link>{" "}
            when reports follow directly from examination or chart review. For analytics-heavy communication to
            leadership, see{" "}
            <Link to="/healthcare-analytics" className="text-accent font-medium hover:underline">
              healthcare analytics and dashboard development
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

export default MedicalWriting;
