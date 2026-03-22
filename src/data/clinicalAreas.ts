export interface ClinicalArea {
  iconName: string;
  title: string;
  desc: string;
}

export const clinicalAreas: ClinicalArea[] = [
  {
    iconName: "Siren",
    title: "Emergency & Acute Care",
    desc: "Triage, resuscitation, and management of acute medical and surgical emergencies in high-volume casualty departments. Experienced in rapid clinical assessment and stabilization of critically ill patients.",
  },
  {
    iconName: "Heart",
    title: "Inpatient Medical Care",
    desc: "Management of complex medical admissions including cardiovascular, respiratory, renal, and metabolic conditions. Ward-based clinical decision-making with multidisciplinary team coordination.",
  },
  {
    iconName: "Baby",
    title: "Maternal & Newborn Care",
    desc: "Antenatal care, normal and complicated deliveries, obstetric emergency management, and neonatal resuscitation. Focus on reducing maternal and perinatal morbidity in resource-limited settings.",
  },
  {
    iconName: "Bug",
    title: "Infectious Disease Management",
    desc: "Diagnosis and treatment of HIV/AIDS, tuberculosis, malaria, and other endemic infectious diseases. Experience with antimicrobial stewardship and infection prevention protocols.",
  },
  {
    iconName: "ShieldCheck",
    title: "Clinical Governance",
    desc: "Hospital quality improvement, clinical audit, mortality review, and protocol development. Contributing to systems-level improvements in patient safety and care standards.",
  },
  {
    iconName: "Building2",
    title: "Hospital Leadership",
    desc: "Operational oversight as Medical Officer in Charge — managing clinical teams, coordinating departmental workflows, and ensuring continuity of essential health services.",
  },
];
