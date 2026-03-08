import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Heart, ShieldCheck, Baby, Bug, Building2, Siren } from "lucide-react";

const areas = [
  {
    icon: <Siren className="h-6 w-6 text-accent" />,
    title: "Emergency & Acute Care",
    desc: "Triage, resuscitation, and management of acute medical and surgical emergencies in high-volume casualty departments. Experienced in rapid clinical assessment and stabilization of critically ill patients.",
  },
  {
    icon: <Heart className="h-6 w-6 text-accent" />,
    title: "Inpatient Medical Care",
    desc: "Management of complex medical admissions including cardiovascular, respiratory, renal, and metabolic conditions. Ward-based clinical decision-making with multidisciplinary team coordination.",
  },
  {
    icon: <Baby className="h-6 w-6 text-accent" />,
    title: "Maternal & Newborn Care",
    desc: "Antenatal care, normal and complicated deliveries, obstetric emergency management, and neonatal resuscitation. Focus on reducing maternal and perinatal morbidity in resource-limited settings.",
  },
  {
    icon: <Bug className="h-6 w-6 text-accent" />,
    title: "Infectious Disease Management",
    desc: "Diagnosis and treatment of HIV/AIDS, tuberculosis, malaria, and other endemic infectious diseases. Experience with antimicrobial stewardship and infection prevention protocols.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-accent" />,
    title: "Clinical Governance",
    desc: "Hospital quality improvement, clinical audit, mortality review, and protocol development. Contributing to systems-level improvements in patient safety and care standards.",
  },
  {
    icon: <Building2 className="h-6 w-6 text-accent" />,
    title: "Hospital Leadership",
    desc: "Operational oversight as Medical Officer in Charge — managing clinical teams, coordinating departmental workflows, and ensuring continuity of essential health services.",
  },
];

const Clinical = () => (
  <Layout>
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Clinical Medicine"
          subtitle="Frontline clinical practice across emergency, inpatient, maternal-child, and infectious disease services in Kenya's public and specialist hospital system."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="bg-card rounded-lg p-6 border border-border card-hover"
            >
              <div className="mb-3">{area.icon}</div>
              <h3 className="font-serif text-xl text-foreground mb-2">{area.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{area.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Clinical;
