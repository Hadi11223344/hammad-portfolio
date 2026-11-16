export type RecognitionItem = {
  id: string;
  type: "award" | "education" | "course" | "experience";
  title: string;
  meta: string;
  detail: string;
  highlight: string;
  image?: string;
  file?: string;
  fileLabel?: string;
};

export const recognitionItems: RecognitionItem[] = [
  {
    id: "rector-merit",
    type: "award",
    title: "Rector's Merit Award",
    meta: "Fall 2024 · 4.00 / 4.00 semester GPA · UMT SST",
    detail:
      "BS Computer Science, UMT School of Systems and Technology. ID F2022266668. Certificate notification: 15 May 2025.",
    highlight: "4.00 / 4.00",
    image: "/recognition/rector-merit.jpg",
  },
  {
    id: "talent-quest",
    type: "award",
    title: "Talent Quest Fest 1.0 — Database Decathlon Battle",
    meta: "3rd Place · 31 May – 1 June 2024 · UMT / IEEE UMT",
    detail:
      "Certificate of Achievement (TQF1.0-034) for 3rd position in the Database Decathlon Battle competition.",
    highlight: "3rd Place",
    image: "/recognition/talent-quest-decathlon.jpg",
  },
  {
    id: "cgpa",
    type: "education",
    title: "BS Computer Science — UMT",
    meta: "January 2022 – July 2026",
    detail: "Undergraduate CGPA 3.76 / 4.00. Capstone: VOIA voice AI platform.",
    highlight: "3.76 / 4.00",
  },
  {
    id: "ireg-letter",
    type: "experience",
    title: "IREG-IT — Internship Completion",
    meta: "Java Intern · Sep 2024 – Feb 2025 · Letter dated 23 Apr 2025",
    detail:
      "Six-month paid internship completion letter from IREG-IT (Information Research and Expert Guide - IT), Lahore.",
    highlight: "Completed",
    image: "/recognition/ireg-internship.jpg",
  },
  {
    id: "python-ml",
    type: "course",
    title: "Python for Machine Learning",
    meta: "e-Rozgaar Center · IER, University of the Punjab · Aug–Nov 2023",
    detail: "Student No. PY-608. Applied Python ML training at IER / e-Rozgaar Center, Lahore.",
    highlight: "Certificate",
    image: "/recognition/python-ml.jpg",
  },
  {
    id: "oop-coursera",
    type: "course",
    title: "Object-Oriented Programming Specialization",
    meta: "Coursera · Credential EHHKSV69L697",
    detail: "Structured OOP foundations supporting backend engineering work.",
    highlight: "Certificate",
    file: "/recognition/coursera-oop.pdf",
    fileLabel: "View PDF",
  },
];

export const proofStrip = [
  { label: "BS CS CGPA", value: "3.76 / 4.00" },
  { label: "Fall 2024 semester", value: "4.00 / 4.00" },
  { label: "Database Decathlon", value: "3rd Place" },
  { label: "Paid AI delivery", value: "SmartCare · HireBeam" },
];
