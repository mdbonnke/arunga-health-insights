import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { Separator } from "@/components/ui/separator";
import { SITE } from "@/lib/constants";

const technicalSkills = [
  "Python",
  "SQL",
  "Tableau",
  "Healthcare Data Analysis",
  "Data Visualization",
  "Machine Learning (Basic)",
  "Clinical Data Extraction",
  "Statistical Analysis",
  "Dashboard Design",
];

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
    <h3 className="font-serif text-2xl text-foreground mb-4">{title}</h3>
    {children}
    <Separator className="my-8" />
  </motion.div>
);

const CV = () => (
  <Layout>
    <Helmet>
      <title>CV — {SITE.name}</title>
      <meta name="description" content="Curriculum vitae of Dr. Bonnke Arunga — physician, healthcare data analyst, and public health researcher." />
    </Helmet>
    <section className="section-padding">
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="Curriculum Vitae" subtitle="Academic and professional background." />

        <Section title="Professional Experience">
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-foreground">Resident Medical Officer & Medical Officer in Charge</h4>
              <p className="text-sm text-accent">Kisumu Specialist Hospital, Kenya</p>
              <ul className="mt-2 text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Oversight of clinical operations and departmental coordination</li>
                <li>Emergency and acute medical care in high-volume settings</li>
                <li>Inpatient management of complex medical and surgical cases</li>
                <li>Maternal and newborn care including obstetric emergency management</li>
                <li>Infectious disease diagnosis and treatment (HIV, TB, malaria)</li>
                <li>Clinical governance, mortality review, and quality improvement</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title="Education">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground">MSc International Public Health</h4>
              <p className="text-sm text-accent">Liverpool John Moores University — In Progress</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Bachelor of Medicine and Bachelor of Surgery (MBChB)</h4>
              <p className="text-sm text-accent">Maseno University, Kenya</p>
            </div>
          </div>
        </Section>

        <Section title="Leadership">
          <div>
            <h4 className="font-semibold text-foreground">Social Responsibility & Welfare Committee — Convener</h4>
            <p className="text-sm text-accent">Kenya Medical Association</p>
            <p className="text-sm text-muted-foreground mt-1">Policy advocacy, physician welfare initiatives, and community health engagement at the national level.</p>
          </div>
        </Section>

        <Section title="Publications">
          <div>
            <p className="text-sm text-muted-foreground">
              Case report on heart failure in a patient with subcutaneous phycomycosis — published clinical case report exploring infectious disease and cardiac complications.
            </p>
          </div>
        </Section>

        <Section title="Technical Skills">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {technicalSkills.map((skill) => (
              <div key={skill} className="bg-muted rounded-md px-3 py-2 text-sm text-foreground text-center">
                {skill}
              </div>
            ))}
          </div>
        </Section>
      </div>
    </section>
  </Layout>
);

export default CV;
