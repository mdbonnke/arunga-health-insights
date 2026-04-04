import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Seo } from "@/components/Seo";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, ShieldCheck, Baby, Bug, Building2, Siren, Stethoscope, GraduationCap, Activity } from "lucide-react";

const stats = [
  { value: "2+", label: "Years post-internship practice" },
  { value: "25%", label: "Reduction in patient turnaround" },
  { value: "5+", label: "Departments supervised" },
  { value: "30+", label: "Interns led at Kijabe" },
];

const areas = [
  {
    icon: <Siren className="h-6 w-6 text-accent" />,
    title: "Emergency & acute care",
    desc: "Rapid triage and resuscitation of critically ill patients in high-volume casualty departments. Management of sepsis, hemorrhagic shock, severe malaria, DKA, and polytrauma. First-line stabilization without specialist backup in resource-limited environments.",
  },
  {
    icon: <Heart className="h-6 w-6 text-accent" />,
    title: "Inpatient medical care",
    desc: "Comprehensive ward-based management of cardiovascular, respiratory, renal, and metabolic conditions. Daily ward rounds, investigation planning, treatment titration, and discharge coordination across medicine, surgery, and ICU.",
  },
  {
    icon: <Baby className="h-6 w-6 text-accent" />,
    title: "Maternal & newborn care",
    desc: "Obstetric emergency management including PPH stabilization, eclampsia, and obstructed labour. Vacuum-assisted deliveries, perioperative C/S care, and daily NBU rounds covering neonatal sepsis, respiratory distress, and prematurity.",
  },
  {
    icon: <Bug className="h-6 w-6 text-accent" />,
    title: "Infectious disease management",
    desc: "HIV/AIDS and TB management (NASCOP trained). Malaria, cholera, and outbreak response. Antimicrobial stewardship, rational prescribing under drug stockouts, and IPC discipline including notifiable disease surveillance.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-accent" />,
    title: "Clinical governance",
    desc: "Chair of Clinical Care Committee at Kisumu Specialist Hospital. Protocol development, M&M reviews, clinical audits, and quality improvement. Documentation discipline and medico-legal record standards.",
  },
  {
    icon: <Building2 className="h-6 w-6 text-accent" />,
    title: "Hospital operations leadership",
    desc: "Medical Officer In-Charge overseeing emergency, inpatient wards, and OPD in a tertiary facility. Duty roster coordination, KPI monitoring, interdepartmental workflows, and revenue protection through complete clinical documentation.",
  },
];

const procedures = [
  "Endotracheal intubation",
  "Bag-valve-mask ventilation",
  "Chest drain insertion",
  "Lumbar puncture",
  "Intercostal nerve block",
  "Urethral catheterization",
  "IV cannulation & phlebotomy",
  "Nasogastric tube insertion",
  "Wound debridement & closure",
  "Vacuum-assisted delivery",
  "PPH stabilization (uterotonic + bimanual compression)",
  "Newborn resuscitation",
  "Defibrillation (AED & manual)",
  "Perioperative C/S assistance",
  "Ascitic tap",
  "Pleural aspiration",
  "Surgical scrub & first assist",
];

const teaching = [
  {
    title: "BLS & ACLS training facilitator",
    org: "Kisumu Specialist Hospital",
    detail:
      "Lead AHA-approved Basic and Advanced Life Support training for clinical staff. Designed simulation scenarios and assessed competency across nursing and medical officer cadres.",
  },
  {
    title: "Interns representative & mentor",
    org: "AIC Kijabe Hospital",
    detail:
      "Coordinated welfare and professional development for 30+ medical interns. Strengthened onboarding, supervised clinical skills, and facilitated peer learning sessions.",
  },
  {
    title: "CME & mortality review facilitator",
    org: "Kisumu Specialist Hospital",
    detail:
      "Monthly continuing medical education sessions and morbidity–mortality reviews driving evidence-based practice and system-level quality improvement.",
  },
];

const ClinicalServices = () => (
  <Layout>
    <Seo
      title="Clinical Services and Medical Consultations in Kenya"
      description="Clinical services and medical consultations by a licensed medical doctor in Kenya. Emergency, inpatient, maternal-newborn, infectious disease, and hospital leadership experience."
      path="/clinical-services"
    />
    <section className="section-padding">
      <div className="max-w-5xl mx-auto space-y-16">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">Services</p>
          <h1 className="page-heading text-4xl md:text-5xl">
            Clinical Services and Medical Consultations by a Licensed Medical Doctor
          </h1>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
            <p>
              I am a Resident Medical Officer and Medical Officer In Charge at Kisumu Specialist Hospital, Kenya. I
              offer selected clinical services, formal medical reporting, and chart-based reviews where appropriate—
              alongside remote consulting and analytics work described elsewhere on this site.
            </p>
            <p>
              Clinical work is governed by professional standards, scope of practice, and facility context. For
              documentation-only or legal-facing outputs without a clinical encounter, see{" "}
              <Link to="/medical-writing" className="text-accent font-medium hover:underline">
                medical writing and medico-legal reports
              </Link>
              . For digital products and AI workflows, see{" "}
              <Link to="/digital-health-consulting" className="text-accent font-medium hover:underline">
                digital health consulting
              </Link>
              .
            </p>
          </div>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-xl p-8 border border-border border-l-4 border-l-accent"
        >
          <div className="flex items-center gap-2 mb-4">
            <Stethoscope className="h-5 w-5 text-accent" />
            <h2 className="font-serif text-xl text-foreground">Clinical approach</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed text-sm">
            I practice with the conviction that clinical excellence and resource-consciousness are the same discipline.
            In settings where diagnostics are limited, drug stockouts are routine, and specialist backup is absent, the
            quality of clinical reasoning is the primary safety net. My approach is protocol-grounded but
            judgment-driven: guidelines as a floor, not a ceiling, and every ward round treated as both a clinical
            and a learning event. I invest in documentation, audits, and training because individual excellence without
            institutional memory leaves no durable improvement.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="font-serif text-2xl text-foreground mb-6">Impact at a glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-card rounded-lg p-6 border border-border text-center">
                <p className="font-serif text-3xl text-accent font-bold mb-1">{s.value}</p>
                <p className="text-xs text-muted-foreground leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div>
          <SectionHeading
            title="Areas of practice"
            subtitle="Frontline clinical practice across emergency, inpatient, maternal–child, and infectious disease services in Kenya’s public and specialist hospital system."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="bg-card rounded-lg p-6 border border-border card-hover"
              >
                <div className="mb-3">{area.icon}</div>
                <h3 className="font-serif text-lg text-foreground mb-2">{area.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <Activity className="h-5 w-5 text-accent" />
            <h2 className="font-serif text-2xl text-foreground">Procedures & clinical skills</h2>
          </div>
          <div className="bg-card rounded-lg border border-border p-6">
            <div className="flex flex-wrap gap-2">
              {procedures.map((p) => (
                <span key={p} className="bg-muted text-foreground text-xs font-medium px-3 py-1.5 rounded-full">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <div>
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="h-5 w-5 text-accent" />
            <h2 className="font-serif text-2xl text-foreground">Teaching & mentorship</h2>
          </div>
          <div className="space-y-4">
            {teaching.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-card rounded-lg p-6 border border-border"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-2">
                  <h3 className="font-semibold text-foreground text-sm">{t.title}</h3>
                  <span className="text-xs text-accent font-medium whitespace-nowrap">{t.org}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pb-4">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-navy-light">
            <Link to="/contact">Contact</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/hire-me">Hire me — scope &amp; pricing</Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default ClinicalServices;
