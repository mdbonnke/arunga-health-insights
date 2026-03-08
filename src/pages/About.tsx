import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";

const About = () => (
  <Layout>
    <section className="section-padding">
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="About" subtitle="Physician. Analyst. Innovator." />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed"
        >
          <p>
            I am a medical doctor currently serving as Resident Medical Officer and Medical Officer in Charge at Kisumu Specialist Hospital in Kenya. My clinical practice spans emergency and acute care, inpatient medicine, maternal and newborn health, infectious disease management, and hospital clinical governance — all within high-volume, resource-limited settings.
          </p>
          <p>
            My work in frontline healthcare delivery has given me a firsthand understanding of the systemic challenges that limit health outcomes in sub-Saharan Africa: fragmented data, delayed surveillance, inconsistent protocol adherence, and strained clinical workflows. These experiences have shaped my conviction that better data systems and digital tools are essential to strengthening healthcare delivery.
          </p>
          <p>
            This conviction led me to pursue formal training in healthcare data analytics and public health. I am currently completing an MSc in International Public Health at Liverpool John Moores University, building on my MBChB from Maseno University. In parallel, I have developed applied skills in Python, SQL, and Tableau — tools I use to analyze clinical datasets, build healthcare dashboards, and explore patterns in disease prevalence and treatment outcomes.
          </p>
          <p>
            I am particularly interested in the design and deployment of digital health solutions that are contextually appropriate for low- and middle-income healthcare systems. My work sits at the intersection of clinical medicine, data science, and public health — a space I believe holds transformative potential for how care is delivered, measured, and improved.
          </p>
          <p>
            Beyond clinical and technical work, I serve as Convener of the Social Responsibility and Welfare Committee at the Kenya Medical Association, contributing to policy advocacy and physician welfare at the national level.
          </p>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default About;
