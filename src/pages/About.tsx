import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Seo } from "@/components/Seo";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";

const About = () => (
  <Layout>
    <Seo
      title="About | Medical Doctor, Digital Health Consultant, Healthcare Analyst"
      description="About Dr. Bonnke Arunga: licensed medical doctor in Kenya, digital health consultant, healthcare data analyst, and builder of clinical and med-ed systems."
      path="/about"
    />
    <section className="section-padding">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          as="h1"
          title="About"
          subtitle="Medical doctor, digital health consultant, and healthcare analyst working where clinical practice meets data and product delivery."
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed"
        >
          <p>
            I am a medical doctor currently serving as Resident Medical Officer and Medical Officer in Charge at
            Kisumu Specialist Hospital in Kenya. My clinical practice spans emergency and acute care, inpatient
            medicine, maternal and newborn health, infectious disease management, and hospital clinical governance—all
            within high-volume, resource-limited settings.
          </p>
          <p>
            Frontline delivery exposed how fragmented data, delayed surveillance, inconsistent protocol adherence, and
            strained workflows limit outcomes. That shaped how I approach{" "}
            <Link to="/healthcare-analytics" className="text-accent font-medium hover:underline">
              healthcare analytics
            </Link>
            ,{" "}
            <Link to="/digital-health-consulting" className="text-accent font-medium hover:underline">
              digital health consulting
            </Link>
            , and{" "}
            <Link to="/projects" className="text-accent font-medium hover:underline">
              product-style builds
            </Link>
            : the goal is decisions clinicians and managers can act on, not charts that merely exist.
          </p>
          <p>
            I am completing an MSc in International Public Health at Liverpool John Moores University (MBChB, Maseno
            University). In parallel I work in Python, SQL, and Tableau to analyze clinical datasets, build dashboards,
            and study disease and treatment patterns with appropriate skepticism about data quality.
          </p>
          <p>
            I focus on digital health and medical education systems that fit low- and middle-income care
            environments—where connectivity, staffing, and documentation are constraints, not afterthoughts.
          </p>
          <p>
            I serve as Convener of the Social Responsibility and Welfare Committee at the Kenya Medical Association,
            contributing to policy advocacy and physician welfare at the national level.
          </p>
          <p className="text-sm not-prose">
            <Link to="/hire-me" className="text-accent font-medium hover:underline">
              Hire me
            </Link>
            {" · "}
            <Link to="/contact" className="text-accent font-medium hover:underline">
              Contact
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default About;
