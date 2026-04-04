import Layout from "@/components/Layout";
import { Seo } from "@/components/Seo";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="mb-10"
  >
    <h3 className="font-serif text-2xl text-foreground mb-4 uppercase tracking-wide">{title}</h3>
    {children}
    <Separator className="mt-8" />
  </motion.div>
);

const CV = () => (
  <Layout>
    <Seo
      title="CV | Dr. Bonnke Arunga — Medical Doctor, Analytics, Digital Health"
      description="Curriculum vitae: Dr. Bonnke Arunga, MBChB—clinical practice, healthcare analytics, digital health product work, and public health training."
      path="/cv"
    />
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-1">Bonnke Arunga, MBChB</h1>
          <p className="text-accent text-sm mb-1">Medical Officer | Emergency &amp; Inpatient Care | Maternal-Child Health</p>
          <p className="text-muted-foreground text-sm">Kisumu, Kenya | +254 729 260 501 | sirbonnkearunga@gmail.com | linkedin.com/in/mdbonnke</p>
        </div>

        {/* Profile */}
        <Section title="Profile">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Medical Officer with proven capacity to deliver high-volume clinical care in resource-limited, outbreak-prone settings.
            Extensive experience across emergency, inpatient, maternal-child health, and infectious disease management.
            Demonstrated ability to run clinical departments, supervise multidisciplinary teams, manage obstetric emergencies,
            stabilize critically ill patients, and maintain protocol discipline under pressure. Strong background in public health
            systems, clinical governance, and humanitarian service orientation through KMA community medical camps and COVID-19
            emergency response coordination.
          </p>
        </Section>

        {/* Core Competencies */}
        <Section title="Core Competencies">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Emergency & Acute Care",
                items: ["Rapid triage and resuscitation", "Management of sepsis, shock, severe malaria, DKA", "Trauma stabilization and wound debridement", "First-line emergency decision-making"],
              },
              {
                title: "Maternal & Newborn Care",
                items: ["Obstetric emergency management (PPH, eclampsia, obstructed labour)", "Vacuum-assisted delivery and C/S perioperative care", "Newborn resuscitation and neonatal sepsis management", "ANC/PNC and high-risk clinic coordination"],
              },
              {
                title: "Infectious Diseases & Outbreak Response",
                items: ["HIV/AIDS and TB management (NHITC NASCOP trained)", "Cholera and outbreak preparedness experience", "Measles suspicion, isolation, and early escalation", "Infection prevention and control (IPC) discipline"],
              },
              {
                title: "Paediatrics & Malnutrition",
                items: ["Severe acute malnutrition (SAM) recognition", "Paediatric pneumonia, diarrhea, and febrile illness", "Neonatal sepsis and dehydration management", "Immunization oversight and outbreak detection"],
              },
              {
                title: "High-Volume, Resource-Limited Practice",
                items: ["Heavy OPD/IPD patient loads", "Clinical decision-making with limited diagnostics", "Drug stockout adaptation and rational prescribing", "Protocol-driven care without specialist backup"],
              },
              {
                title: "Team Leadership & Clinical Governance",
                items: ["Supervision of medical officers, clinical officers, nurses", "Duty roster coordination and shift handovers", "Monthly CME/audit facilitation", "Documentation discipline and audit compliance"],
              },
            ].map((comp) => (
              <div key={comp.title} className="bg-muted rounded-lg p-4">
                <h4 className="font-semibold text-foreground text-sm mb-2">{comp.title}</h4>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  {comp.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Professional Experience */}
        <Section title="Professional Experience">
          <div className="space-y-8">

            <div>
              <h4 className="font-semibold text-foreground text-base">Kisumu Specialist Hospital — Kisumu, Kenya</h4>
              <div className="mt-3 space-y-5">
                <div>
                  <p className="text-sm font-medium text-accent">Medical Officer In-Charge | Jan 2025 – Present</p>
                  <ul className="mt-2 text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Lead daily clinical operations across emergency, inpatient wards (medicine, paediatrics, surgery, OBGYN, ICU), and outpatient departments in high-volume tertiary facility</li>
                    <li>Supervise team of medical officers: performance oversight, duty rota coordination, KPI monitoring, ensuring protocol adherence and safe escalation pathways</li>
                    <li>Chair Clinical Care Committee: drive protocol development, quality improvement interventions, and clinical governance strengthening</li>
                    <li>Reduced patient turnaround times by 25% through improved triage workflows and interdepartmental coordination</li>
                    <li>Strengthened revenue protection by closing documentation gaps and ensuring complete clinical records</li>
                    <li>Lead AHA-approved BLS/ACLS training programs for clinical staff, strengthening emergency response capacity</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-accent">Resident Medical Officer | Aug 2024 – Present</p>
                  <ul className="mt-2 text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Provide comprehensive inpatient and emergency care: admissions, daily ward rounds, investigations, treatment, procedures, and discharge planning across medicine, paediatrics, surgery, and OBGYN departments</li>
                    <li>Manage obstetric emergencies including vacuum-assisted deliveries, PPH stabilization, and perioperative C/S care; conduct daily NBU rounds for neonatal sepsis, respiratory distress, and prematurity management</li>
                    <li>Ensure protocol compliance, proper documentation, continuity across 24-hour shifts, and timely escalation to consultants for complex cases</li>
                    <li>Maintain infection control standards through PPE discipline, rational antibiotic use, and outbreak surveillance for cholera, measles, and other notifiable diseases</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground text-base">AIC Kijabe Hospital — Kiambu County, Kenya</h4>
              <div className="mt-3 space-y-5">
                <div>
                  <p className="text-sm font-medium text-accent">Medical Officer Intern | Jan 2023 – Feb 2024</p>
                  <ul className="mt-2 text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Completed comprehensive rotations in internal medicine, paediatrics, surgery, obstetrics-gynaecology, emergency, and outpatient departments in high-volume mission hospital serving resource-limited communities</li>
                    <li>Managed heavy patient loads: clerking, examination, investigation planning, supervised treatment, daily ward reviews, and surgical assists across all major departments</li>
                    <li>Participated actively in morbidity-mortality meetings, clinical audits, and continuous professional development sessions focused on quality improvement</li>
                    <li>Maintained accurate, audit-compliant clinical records under supervision, developing strong documentation discipline</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-accent">Interns' Representative | Feb 2023 – Feb 2024</p>
                  <ul className="mt-2 text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Coordinated communication between 30+ medical interns and hospital administration, ensuring equitable workload distribution and rotation clarity</li>
                    <li>Strengthened onboarding processes and welfare support systems, demonstrating early leadership in team coordination and advocacy</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground text-base">County Government of Kisumu – COVID-19 Response Team</h4>
              <p className="text-sm font-medium text-accent mt-1">Emergency Call Centre Operator | May 2020 – Jan 2023</p>
              <ul className="mt-2 text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Conducted rapid symptom triage and coordinated emergency ambulance and facility movement during pandemic response</li>
                <li>Supported surveillance, quarantine coordination, and isolation logistics in resource-limited public health emergency context</li>
                <li>Gained deep operational understanding of public health systems, outbreak protocols, and emergency communication workflows</li>
              </ul>
            </div>

          </div>
        </Section>

        {/* Humanitarian Leadership */}
        <Section title="Humanitarian Leadership & Service">
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-foreground">Kenya Medical Association – Social Responsibility &amp; Welfare Committee</h4>
              <p className="text-sm font-medium text-accent">Convener | 2024 – Present</p>
              <ul className="mt-2 text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Lead planning and execution of annual community medical camps in Siaya, Kisumu, Migori, and Turkana targeting tropical diseases and non-communicable diseases in underserved populations</li>
                <li>Coordinate clinician engagement, welfare programs, and resource mobilization for vulnerable community health interventions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">World Medical Association – Junior Doctors Network</h4>
              <p className="text-sm font-medium text-accent">Global Surgery Working Group Member &amp; Publications Assistant | 2022 – Present</p>
              <ul className="mt-2 text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Engage in global health discussions on surgical access and health equity</li>
                <li>Contribute to structured academic communication through World Medical Journal</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Maseno University Medical School</h4>
              <p className="text-sm font-medium text-accent">Student Leadership Roles | 2016 – 2022</p>
              <ul className="mt-2 text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Held progressively responsible positions including President of Medical School</li>
                <li>Strengthened student organization, welfare advocacy, research exchange coordination, and community health outreach programs</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Education */}
        <Section title="Education & Training">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground">MSc International Public Health (In Progress)</h4>
              <p className="text-sm text-accent">Liverpool John Moores University | 2025 – 2027</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Bachelor of Medicine &amp; Bachelor of Surgery (MBChB)</h4>
              <p className="text-sm text-accent">Maseno University | 2016 – 2021</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Clinical Electives</h4>
              <p className="text-sm text-accent">University of Leicester | 2021</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">NHITC NASCOP Training on HIV and TB Management</h4>
              <p className="text-sm text-accent">Kenya</p>
            </div>
          </div>
        </Section>

        {/* Certifications */}
        <Section title="Certifications & Professional Development">
          <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
            <li>Registered and licensed by Kenya Medical Practitioners and Dentists Council</li>
            <li>American Heart Association (AHA) BLS/ACLS program involvement (institution-led training)</li>
            <li>ISGlobal Summer School Scholar – Advanced training in global health perspectives</li>
            <li>The Science Behind Forensic Science – Enhanced clinical documentation and medico-legal record discipline</li>
          </ul>
        </Section>

        {/* Publications */}
        <Section title="Publications">
          <div className="space-y-2">
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/36176458/"
              target="_blank"
              rel="noopener noreferrer"
              className="block font-semibold text-foreground hover:text-accent transition-colors leading-snug"
            >
              Adverse effects of Lugol’s iodine: Heart failure in a patient with subcutaneous phycomycosis from a resource-limited setting ↗
            </a>
            <p className="text-sm text-muted-foreground">
              Karahalios DS, Shaw A, <span className="font-medium text-foreground">Arunga B</span>, Lenehan C, Sing’oei V, Otieno W.
              {" "}<span className="italic">Medical Mycology Case Reports.</span> 2022;38:9–12.
              {" "}PMID: 36176458
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed pt-1">
              Peer-reviewed case report on iodine-mediated cardiotoxicity complicating the treatment of subcutaneous phycomycosis in a resource-limited setting, with discussion of social determinants of health and implications for safe dosing and monitoring.
            </p>
          </div>
        </Section>

        {/* Technical Competencies */}
        <Section title="Technical & Administrative Competencies">
          <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
            <li>Computer literacy: EMR systems, Microsoft Office (Word, Excel), clinical data extraction and reporting</li>
            <li>Clinical documentation discipline: audit-compliant record-keeping, legally defensible medical records, confidentiality maintenance</li>
            <li>Protocol development support and clinical governance processes</li>
            <li>Fluent in English and Swahili</li>
          </ul>
        </Section>

        {/* Personal Attributes */}
        <Section title="Personal Attributes for Humanitarian Field Work">
          <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
            <li>Proven psychological resilience: extensive night shift and on-call experience, comfortable managing mortality and critical cases without emotional breakdown</li>
            <li>High adaptability: demonstrated capacity to function effectively under scarcity (limited diagnostics, drug stockouts, no specialist backup)</li>
            <li>Commitment to vulnerable populations: consistent engagement in community medical camps, public health emergency response, and service in mission hospital contexts</li>
            <li>Strong team collaboration and flexibility: able to work across cultures and disciplines, maintain professionalism under pressure</li>
            <li>Willingness to live and work in remote, hardship settings: motivated by equity mindset and humanitarian service commitment</li>
          </ul>
        </Section>

        {/* Referees */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="font-serif text-2xl text-foreground mb-4 uppercase tracking-wide">Referees</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "Prof. Stephen Ogendo", role: "Dean, School of Medicine", org: "Maseno University" },
              { name: "Dr. Simon Kigondu", role: "President", org: "Kenya Medical Association" },
              { name: "Dr. Caesar Bitta", role: "CEO", org: "Kisumu Specialist Hospital" },
            ].map((ref) => (
              <div key={ref.name} className="bg-muted rounded-lg p-4 text-sm">
                <p className="font-semibold text-foreground">{ref.name}</p>
                <p className="text-muted-foreground">{ref.role}</p>
                <p className="text-accent">{ref.org}</p>
                <p className="text-muted-foreground text-xs mt-1 italic">Available on request</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  </Layout>
);

export default CV;
