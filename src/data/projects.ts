import { Project } from "./types";

// Drop screenshots into /public/projects/<slug>/1.png, 2.png, 3.png ...
// 3-4 images per project is a good number for the arrow carousel.
// Feedback entries below can be edited or populated with mock user comments.

export const projects: Project[] = [
  {
    slug: "100xelevate-ai-chatbot",
    index: "0x01",
    name: "100xElevate",
    fullTitle: "100xElevate — AI Customer Support Chatbot",
    tagline: "RAG-powered support assistant that answers from a real knowledge base, with sources.",
    description: [
      "A RAG-powered AI customer support chatbot built for a digital agency's website, using LangChain and Google Gemini to deliver context-aware, source-cited answers instead of generic chatbot replies.",
      "The assistant retrieves relevant information from an internal knowledge base of service FAQs, policies, and documentation, so every answer is grounded in the agency's actual content rather than a model guess.",
      "Backend: a FastAPI service running a complete RAG pipeline — recursive text chunking, vector embedding generation via Google Generative AI Embeddings, and semantic similarity search over PostgreSQL/pgvector.",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "LangChain",
      "Google Gemini API",
      "FAISS",
    ],
    demoUrl: "https://100xelevate-revamp-ai-nine.vercel.app/",
    images: [
      "/projects/100xelevate/1.png",
      "/projects/100xelevate/2.png",
      "/projects/100xelevate/3.png",
    ],
    feedback: [
      {
        name: "Client Lead",
        role: "Digital Agency Stakeholder",
        comment: "The chatbot answers customer queries instantly and actually cites the source documents accurately.",
      },
    ],
  },
  {
    slug: "hunarmand-punjab",
    index: "0x02",
    name: "Hunarmand Punjab",
    fullTitle: "Hunarmand Punjab — Government Skill Development Portal",
    tagline: "Full-scale MERN platform running live admissions, scholarships, and challans for a government initiative.",
    description: [
      "A full-scale government platform handling courses, scholarships, and laptop schemes for the Punjab government, including admission management and a dedicated admin panel.",
      "Engineered an onsite registration module with atomic ID generation for Admit Cards, Challans, and PSIDs, wired into the existing PDF challan generation pipeline without breaking prior functionality.",
      "Implemented secure user authentication, payment workflow tracking, and third-party API integrations, all while preserving the existing production logic already relied on by real users.",
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Nginx",
      "PM2",
      "Hostinger VPS",
    ],
    demoUrl: "https://hunarmand-punjab-8.vercel.app/",
    images: [
      "/projects/hunarmand-punjab/1.png",
      "/projects/hunarmand-punjab/2.png",
      "/projects/hunarmand-punjab/3.png",
    ],
    feedback: [
      {
        name: "Program Coordinator",
        role: "Government Skill Initiative",
        comment: "Flawlessly handled high-volume applicant registrations during our peak admission drive.",
      },
    ],
  },
  {
    slug: "hunarmand-punjab-admin-panel",
    index: "0x03",
    name: "Hunar Admin Panel",
    fullTitle: "Admin Panel — Hunarmand Punjab",
    tagline: "The internal control center powering the Hunarmand Punjab platform's onsite operations.",
    description: [
      "The administrative counterpart to the Hunarmand Punjab portal — the internal control panel staff use to manage onsite registrations, admit cards, challans, and PSIDs day to day.",
      "Built the onsite registration module with atomic ID generation, integrated directly with the existing PDF challan generation system.",
      "Implemented secure authentication, role-based access, and payment workflow tracking so staff can track a student's status end to end from a single dashboard.",
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Nginx",
      "PM2",
      "Hostinger VPS",
    ],
    demoUrl: "https://admin-panel-hunar-xi.vercel.app/login",
    images: [
      "/projects/hunarmand-admin/1.png",
      "/projects/hunarmand-admin/2.png",
      "/projects/hunarmand-admin/3.png",
    ],
    feedback: [
      {
        name: "Operations Manager",
        role: "Admissions Admin",
        comment: "Simplified student record management and atomic PSID verification for the administrative team.",
      },
    ],
  },
  {
    slug: "student-complaint-system",
    index: "0x04",
    name: "Student Complaint System",
    fullTitle: "Student Complaint System (SC)",
    tagline: "Real-time complaint management with live chat, notifications, and an analytics dashboard.",
    description: [
      "A real-time complaint management platform built with JWT authentication and role-based access control (RBAC), so students, staff, and admins each see only what's relevant to them.",
      "Implemented live chat and notifications using Socket.io, so complaint status updates and responses reach the right person instantly rather than through page refreshes.",
      "Added secure file uploads for complaint evidence and an analytics dashboard for tracking complaint volume, resolution time, and status across the system.",
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Tailwind CSS"],
    demoUrl: "https://cybersecurepk-complaint-frontend.vercel.app/",
    images: [
      "/projects/student-complaint-system/1.png",
      "/projects/student-complaint-system/2.png",
      "/projects/student-complaint-system/3.png",
    ],
    feedback: [
      {
        name: "Campus Administrator",
        role: "Student Affairs",
        comment: "Reduced complaint resolution turnaround time dramatically using real-time Socket.io updates.",
      },
    ],
  },
  {
    slug: "nja-trucking",
    index: "0x05",
    name: "NJA Trucking",
    fullTitle: "NJA Trucking — Logistics Management System",
    tagline: "Shipment tracking, dispatch, and customer management in one operational dashboard.",
    description: [
      "A logistics management platform covering shipment tracking, dispatch management, and customer management as three connected modules rather than separate tools.",
      "Built secure backend APIs supporting full CRUD operations, backing an analytics dashboard that gives dispatch teams visibility into shipments in progress.",
      "Delivered a responsive frontend so the same dashboard works for dispatchers at a desk and drivers checking status on mobile.",
    ],
    techStack: ["React.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL"],
    demoUrl: "https://nja-trucking-project.vercel.app/",
    images: [
      "/projects/nja-trucking/1.png",
      "/projects/nja-trucking/2.png",
      "/projects/nja-trucking/3.png",
    ],
    feedback: [
      {
        name: "Logistics Manager",
        role: "Dispatch Operations",
        comment: "Clear shipment tracking and driver dispatch workflow with an easy-to-use interface.",
      },
    ],
  },
  {
    slug: "cyber-security-pakistan",
    index: "0x06",
    name: "Cyber Security Pakistan",
    fullTitle: "Cyber Security Pakistan — Awareness Platform",
    tagline: "A cybersecurity awareness site with a full admin panel behind it.",
    description: [
      "A public cybersecurity awareness website paired with an admin panel for managing dynamic content, courses, blogs, and announcements without touching code.",
      "Implemented secure authentication and user management so content updates stay restricted to authorized admins.",
      "Built on a scalable REST API backend architecture designed to support new content types as the platform grows.",
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    demoUrl: "https://cyber-security-333.vercel.app/",
    images: [
      "/projects/cyber-security-pakistan/1.png",
      "/projects/cyber-security-pakistan/2.png",
      "/projects/cyber-security-pakistan/3.png",
    ],
    feedback: [
      {
        name: "Content Administrator",
        role: "Platform Editor",
        comment: "Effortless course and announcement management via the custom admin portal.",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
