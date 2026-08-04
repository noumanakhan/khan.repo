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
      "Developed an AI-powered customer support assistant for the 100xElevate digital agency website to provide instant, accurate, and context-aware responses to customer inquiries. Instead of relying on generic LLM-generated answers, the assistant uses a Retrieval-Augmented Generation (RAG) architecture to retrieve relevant information from the agency's internal knowledge base, including service documentation, FAQs, pricing details, and company policies, ensuring every response is grounded in verified business content.",
      "The backend is built with FastAPI and implements a complete RAG pipeline using LangChain. Documents are processed through recursive text chunking, transformed into vector embeddings using Google Generative AI Embeddings, and indexed for semantic similarity search with PostgreSQL (pgvector) and FAISS. When a user submits a query, the system retrieves the most relevant context before generating a response with Google Gemini, resulting in highly accurate, source-aware, and hallucination-resistant answers.",
      "The frontend is developed with Next.js, TypeScript, and Tailwind CSS, providing a modern and responsive chat interface that integrates seamlessly into the agency's website. This solution improves customer engagement, reduces repetitive support requests, and enables visitors to receive reliable information 24/7 while maintaining consistency with the company's official documentation.",
      "Key Features\n\n• AI-powered customer support using Retrieval-Augmented Generation (RAG)\n• Context-aware responses based on the agency's knowledge base\n• Semantic search using PostgreSQL (pgvector) and FAISS\n• Google Gemini integration for intelligent response generation\n• Recursive document chunking and vector embedding pipeline\n• Source-grounded answers to minimize AI hallucinations\n• Responsive and modern chat interface built with Next.js\n• Scalable FastAPI backend designed for production-ready deployment",
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
    credentials: { password: "100x" },
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
      "Contributed to the development of a large-scale government platform for the Punjab Government that manages skill development programs, course enrollments, scholarship schemes, and laptop distribution initiatives. The platform serves thousands of users through a secure admission management system and a comprehensive admin panel for handling applications, approvals, and operational workflows.",
      "Designed and implemented a production-ready onsite registration module featuring atomic ID generation for Admit Cards, Challans, and PSIDs to ensure unique and reliable record creation under concurrent requests. The module was seamlessly integrated into the existing PDF challan generation pipeline while maintaining backward compatibility with the live production system and preventing disruption to existing functionality.",
      "Developed secure authentication and authorization mechanisms, implemented payment workflow tracking, and integrated multiple third-party APIs to support admission and registration processes. Worked extensively on maintaining and enhancing an active production application, ensuring new features were delivered without affecting existing users or business-critical operations. The application was deployed on a Linux VPS using Nginx and PM2, providing a stable and scalable production environment.",
      "Key Features\n\n• Government portal for courses, scholarships, and laptop schemes\n• End-to-end admission and application management system\n• Production-ready onsite registration workflow\n• Atomic ID generation for Admit Cards, Challans, and PSIDs\n• PDF challan generation and payment workflow tracking\n• Secure authentication and role-based access control\n• Third-party API integrations for government services\n• Admin dashboard for managing registrations and approvals\n• Production deployment with Nginx, PM2, and Hostinger VPS",
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
      "Developed and maintained a comprehensive administrative dashboard for the Hunarmand Punjab government platform, enabling administrators to efficiently manage users, admissions, registrations, challans, admit cards, and system-wide configurations from a centralized interface. The panel was built to streamline day-to-day operations while supporting thousands of records in a live production environment.",
      "Implemented modules for user management, onsite registration, challan processing, admit card generation, and application tracking, allowing administrators to search, verify, update, and manage applicant data with ease. Developed configurable system settings and role-based administrative features while ensuring secure access control and preserving the integrity of existing production workflows.",
      "The admin panel also integrates with backend services for PDF generation, payment verification, and admission workflows, providing a reliable interface for managing government registration processes. The application was deployed on a Linux VPS using Nginx and PM2, ensuring high availability and stable production performance.",
      "Key Features\n\n• User management and application administration\n• Onsite registration management\n• Challan generation, tracking, and verification\n• Admit card generation and management\n• Student search and record management\n• System settings and configuration management\n• Role-based authentication and secure admin access\n• Integration with payment and admission workflows\n• Responsive dashboard optimized for production use",
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
    credentials: { login: "admin", password: "123" },
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
      "Developed a real-time complaint management platform designed to streamline communication between students, staff, and administrators through a secure, role-based workflow. The system enables users to submit, track, and manage complaints efficiently while ensuring that each user only has access to information relevant to their assigned role using JWT authentication and Role-Based Access Control (RBAC).",
      "Implemented real-time messaging and instant status notifications using Socket.io, allowing students and administrators to communicate seamlessly without requiring page refreshes. Integrated secure file upload functionality for complaint evidence, enabling users to attach supporting documents and images while maintaining data security.",
      "Built an interactive analytics dashboard that provides administrators with insights into complaint volume, resolution progress, response times, and complaint status, helping improve operational efficiency and decision-making. The application delivers a responsive user experience with secure authentication, live communication, and scalable backend architecture suitable for production environments.",
      "Key Features\n\n• JWT authentication and Role-Based Access Control (RBAC)\n• Complaint submission and tracking system\n• Real-time chat and instant notifications with Socket.io\n• Secure file upload for complaint evidence\n• Complaint status management and workflow\n• Analytics dashboard with complaint insights and metrics\n• Responsive user interface for students, staff, and administrators\n• RESTful API architecture with scalable backend design",
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Tailwind CSS"],
    demoUrl: "https://cybersecurepk-complaint-frontend.vercel.app/",
    credentials: {
      login: "admin@cybersecurepk.com, student@cybersecurepk.com",
      password: "123",
    },
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
      "Developed a comprehensive logistics management platform that streamlines transportation operations through integrated shipment tracking, dispatch management, and customer management modules. The system provides a centralized solution for managing logistics workflows, enabling dispatch teams to monitor deliveries, organize shipments, and maintain customer records efficiently from a single dashboard.",
      "Designed and implemented secure RESTful APIs with full CRUD functionality to manage shipments, dispatch schedules, customer information, and operational data. Built an analytics dashboard that provides real-time insights into shipment progress, operational performance, and dispatch activities, helping teams make informed decisions and improve logistics efficiency.",
      "Developed a responsive and user-friendly frontend that delivers a consistent experience across desktop and mobile devices, allowing dispatchers to manage daily operations from the office while enabling drivers and field personnel to access shipment information on the go. The application was built with a scalable architecture to support future business growth and additional logistics features.",
      "Key Features\n\n• Shipment tracking and lifecycle management\n• Dispatch scheduling and operational management\n• Customer management system\n• Secure RESTful APIs with full CRUD operations\n• Analytics dashboard for logistics insights\n• Real-time shipment status monitoring\n• Responsive interface for desktop and mobile devices\n• Scalable full-stack architecture",
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
      "Developed a full-stack cybersecurity awareness platform designed to educate users through dynamic content, blogs, courses, announcements, and security-related resources. The platform includes a comprehensive admin panel that enables authorized administrators to manage website content without requiring code changes, making content publishing and updates efficient and scalable.",
      "Implemented secure authentication and role-based user management to ensure that administrative features and content management remain accessible only to authorized users. Built a scalable RESTful API architecture that supports the addition of new content types and platform features as the application grows.",
      "Integrated an email notification system to automate communication with users, including contact form submissions, inquiries, announcements, and other platform notifications. The responsive frontend and robust backend together provide a reliable content management solution while promoting cybersecurity awareness through an intuitive user experience.",
      "Key Features\n\n• Cybersecurity awareness portal with educational resources\n• Admin dashboard for managing blogs, courses, and announcements\n• Secure authentication and role-based access control\n• Dynamic content management system\n• Email notification and contact system\n• User management and administrative controls\n• Scalable RESTful API architecture\n• Responsive and modern user interface",
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
