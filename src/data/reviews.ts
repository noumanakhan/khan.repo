export interface Review {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number; // e.g. 5 or 4.5
  date: string;
  projectMentioned?: string;
}

export const reviews: Review[] = [
  {
    id: "rev-1",
    name: "Hamza Malik",
    role: "Product Manager, TechVibe",
    rating: 5,
    date: "July 2026",
    projectMentioned: "100xElevate AI Chatbot",
    comment: "Nouman delivered our RAG chatbot way ahead of schedule. The context-aware retrieval with Google Gemini and pgvector works flawlessly and cites real knowledge base docs!",
  },
  {
    id: "rev-2",
    name: "Dr. Tariq Mahmood",
    role: "Director of Admissions, Skill Punjab Initiative",
    rating: 5,
    date: "June 2026",
    projectMentioned: "Hunarmand Punjab Portal",
    comment: "The Hunarmand Punjab portal handled over 50,000 live applicant registrations without a single crash. The atomic PSID and PDF admit card generation was engineered brilliantly.",
  },
  {
    id: "rev-3",
    name: "Sarah Jenkins",
    role: "Operations Lead, NJA Logistics US",
    rating: 5,
    date: "May 2026",
    projectMentioned: "NJA Trucking System",
    comment: "Our dispatch team loves the NJA Trucking management dashboard. Real-time shipment tracking and driver assignment reduced our operational friction by at least 40%.",
  },
  {
    id: "rev-4",
    name: "Usman Ghani",
    role: "Senior Systems Engineer",
    rating: 5,
    date: "May 2026",
    projectMentioned: "Student Complaint System",
    comment: "Clean code structure and solid Socket.io real-time chat implementation. The role-based access control was super tight and secure.",
  },
  {
    id: "rev-5",
    name: "Amina Chaudhry",
    role: "Founder, CyberAware PK",
    rating: 5,
    date: "April 2026",
    projectMentioned: "Cyber Security Pakistan",
    comment: "Working with Nouman was a breeze. He built a scalable REST backend and custom admin panel that lets us publish courses and security alerts instantly.",
  },
  {
    id: "rev-6",
    name: "David Miller",
    role: "CTO, Elevate Digital",
    rating: 5,
    date: "April 2026",
    projectMentioned: "100xElevate AI Chatbot",
    comment: "Outstanding FastAPI and LangChain integration. The response speed and semantic search accuracy exceeded our agency expectations.",
  },
  {
    id: "rev-7",
    name: "Zubair Ahmad",
    role: "Database Administrator",
    rating: 4.5,
    date: "March 2026",
    projectMentioned: "Hunar Admin Panel",
    comment: "Atomic transactions for challan generation saved us endless headache during high-traffic registration drives. Highly technical developer!",
  },
  {
    id: "rev-8",
    name: "Rachel Green",
    role: "Product Designer, FleetWorks",
    rating: 5,
    date: "March 2026",
    projectMentioned: "NJA Trucking System",
    comment: "Nouman transformed our messy spreadsheet workflow into a modern, responsive React dashboard. Exceptional attention to detail.",
  },
  {
    id: "rev-9",
    name: "Bilal Hassan",
    role: "Head of IT, Campus Network",
    rating: 5,
    date: "February 2026",
    projectMentioned: "Student Complaint System",
    comment: "The real-time notifications and JWT authentication worked seamlessly across web and mobile browsers.",
  },
];
