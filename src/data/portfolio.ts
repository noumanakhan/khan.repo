import { Project, Skill, Experience, Testimonial, Service } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: "1",
    title: "Cyber Security Student Complaint System",
    description: "Full-stack complaint management system with real-time chat and analytics",
    longDescription:
      "A comprehensive complaint management system built for the National Cybersecurity Awareness & Training Programme. Features role-based access control, real-time notifications, and advanced analytics dashboard for monitoring complaints across departments.",
    image: "/projects/complaint-system.jpg",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Tailwind CSS"],
    category: "fullstack",
    liveUrl: "https://complaint-system.example.com",
    githubUrl: "https://github.com/noumanakhan/complaint-system",
    features: [
      "JWT authentication with bcrypt security",
      "Role-based access control (Student, Staff, Admin)",
      "Smart ticket system with auto ID generation",
      "Department-based routing",
      "Real-time chat using Socket.io",
      "Admin dashboard with analytics",
      "File upload system (Multer)",
      "Responsive UI with Tailwind CSS",
    ],
  },
  {
    id: "2",
    title: "SaaS Project Management Tool",
    description: "Jira-like project management platform with Kanban board",
    longDescription:
      "A production-ready SaaS application for project management with drag-and-drop Kanban boards, team collaboration, and real-time updates. Built with modern tech stack focusing on scalability and performance.",
    image: "/projects/project-management.jpg",
    tech: ["React", "Node.js", "PostgreSQL", "Prisma", "TypeScript", "Tailwind CSS"],
    category: "saas",
    liveUrl: "https://project-mgmt.example.com",
    githubUrl: "https://github.com/noumanakhan/project-management",
    features: [
      "JWT authentication (access + refresh tokens)",
      "Kanban board with drag & drop functionality",
      "Role-based access control",
      "REST API architecture",
      "Team collaboration features",
      "Real-time notifications",
      "Performance optimized",
    ],
  },
  {
    id: "3",
    title: "Full Stack Productivity Tool",
    description: "All-in-one productivity platform with task management and password manager",
    longDescription:
      "A comprehensive productivity suite combining task management, password manager, and notes system in one secure platform. Perfect for individuals and small teams looking to streamline their workflow.",
    image: "/projects/productivity-tool.jpg",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "JWT"],
    category: "fullstack",
    githubUrl: "https://github.com/noumanakhan/productivity-tool",
    features: [
      "Task management system",
      "Secure password manager",
      "Notes system",
      "Central dashboard",
      "Secure backend APIs",
      "React-based frontend",
      "Data encryption",
      "Responsive design",
    ],
  },
];

export const skills: Skill[] = [
  {
    category: "Frontend & Architecture",
    items: ["React.js", "Next.js (App Router & Pages)", "Tailwind CSS", "TypeScript", "Framer Motion", "Responsive Design", "State Management (Redux/Zustand)"],
  },
  {
    category: "Backend & Services",
    items: ["Node.js", "Express.js", "RESTful APIs", "GraphQL APIs", "Next.js API Routes", "Server Actions", "Microservices Architecture"],
  },
  {
    category: "Database & ORM",
    items: ["PostgreSQL", "MongoDB", "Prisma ORM", "SQL", "Database Design & Normalization", "Query Optimization"],
  },
  {
    category: "Security & Protocols",
    items: ["JWT & Session Management", "OAuth 2.0", "Role-Based Access Control (RBAC)", "Data Encryption & Sanitization", "Bcrypt & Security Audits"],
  },
  {
    category: "Tools & DevOps",
    items: ["Git & GitHub CI/CD", "Docker & Containerization", "AWS (S3, EC2)", "Vercel / Heroku", "Nginx", "npm / pnpm / yarn"],
  },
  {
    category: "Professional Leadership",
    items: ["System Architecture", "Performance Optimization", "Code Review", "Agile / Scrum Methodologies", "Technical Mentoring"],
  },
];

export const experience: Experience[] = [
  {
    id: "1",
    company: "Global Tech Enterprise",
    position: "Senior Full Stack Engineer",
    duration: "2024 – Present",
    description:
      "Leading the architectural design and full-stack development of high-performance web systems and scalable SaaS applications, directing both critical backend workflows and highly interactive user interfaces.",
    achievements: [
      "Architected and deployed highly scalable web platforms using React, Next.js, and Node.js, resulting in a 40% reduction in client-side load times.",
      "Designed, secured, and implemented robust RESTful and GraphQL APIs handling extensive daily transaction volumes.",
      "Optimized relational and non-relational database architectures (PostgreSQL, MongoDB) through schema design, advanced indexing, and query tuning using Prisma ORM.",
      "Leveraged Next.js App Router, Server Actions, and Next-Themes to create premium dark/light mode solutions and highly interactive animated experiences.",
      "Configured secure authentication layers using JWTs, access/refresh tokens, and fine-grained Role-Based Access Control (RBAC) to enforce high-security standards.",
      "Established comprehensive Git workflows, including CI/CD automated deployment pipelines (Vercel, Docker, GitHub Actions), branching strategies, and rigorous code reviews.",
    ],
  },
  {
    id: "2",
    company: "Innovative Digital Platforms",
    position: "Software Engineer",
    duration: "2021 – 2024",
    description:
      "Developed custom software solutions, scalable backends, and collaborative SaaS features for international clients, delivering end-to-end features under agile sprint environments.",
    achievements: [
      "Co-created a SaaS Project Management Tool and an E-Commerce portal from the ground up, utilizing PostgreSQL and the MERN stack.",
      "Spearheaded database design and secure authentication schemas (OAuth 2.0, Bcrypt) for consumer-facing platforms.",
      "Collaborated with product designers to implement premium responsive UIs with Framer Motion, elevating engagement and retention metrics.",
      "Authoritative designer of custom administrative dashboards and productivity suites featuring drag-and-drop Kanban boards.",
      "Wrote clean, modular, and maintainable TypeScript codebases with over 90% unit test coverage."
    ],
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ali Hassan",
    role: "Director of Engineering",
    company: "Global Tech Enterprise",
    text: "Nouman is an outstanding software engineer. He routinely architectures complex, bulletproof backend flows and couples them with beautiful frontend applications. His technical leadership and problem-solving skills have been invaluable to our enterprise.",
  },
  {
    id: "2",
    name: "Fatima Khan",
    role: "Principal Architect",
    company: "Innovative Digital Platforms",
    text: "Working alongside Nouman was a fantastic experience. He produces exceptionally clean, maintainable, and high-performance code. He has an incredible grasp of system design and modern frameworks, making him an asset to any team.",
  },
  {
    id: "3",
    name: "Hassan Ahmed",
    role: "Founder & CEO",
    company: "SaaS Scaleup",
    text: "Nouman engineered our core backend infrastructure and administrative control systems. The systems are robust, scalable, and extremely secure under pressure. He works with amazing speed and precision.",
  },
];

export const services: Service[] = [
  {
    id: "1",
    title: "E-Commerce Websites",
    description: "Build modern, conversion-optimized online stores with payment integration",
    icon: "🛍️",
    items: [
      "Product catalog management",
      "Secure payment processing",
      "Inventory management",
      "Order tracking system",
      "Customer analytics",
    ],
  },
  {
    id: "2",
    title: "Business Websites",
    description: "Professional websites to establish your online presence",
    icon: "🏢",
    items: [
      "Modern, responsive design",
      "CMS integration",
      "SEO optimization",
      "Contact forms",
      "Blog system",
    ],
  },
  {
    id: "3",
    title: "SaaS Applications",
    description: "Scalable software solutions for recurring revenue models",
    icon: "🚀",
    items: [
      "Multi-tenant architecture",
      "User authentication",
      "Payment subscriptions",
      "Analytics dashboard",
      "API development",
    ],
  },
  {
    id: "4",
    title: "Admin Dashboards",
    description: "Powerful tools to manage your business operations",
    icon: "📊",
    items: [
      "Real-time analytics",
      "Data visualization",
      "User management",
      "Reporting tools",
      "Integration APIs",
    ],
  },
  {
    id: "5",
    title: "API Development",
    description: "Robust backend APIs for modern applications",
    icon: "⚙️",
    items: [
      "RESTful API design",
      "GraphQL APIs",
      "Database optimization",
      "Security best practices",
      "Documentation",
    ],
  },
  {
    id: "6",
    title: "Full-Stack Solutions",
    description: "Complete end-to-end development services",
    icon: "🔗",
    items: [
      "Frontend development",
      "Backend infrastructure",
      "Database design",
      "Deployment",
      "Maintenance & support",
    ],
  },
  {
    id: "7",
    title: "AI Integrations",
    description: "Embed smart automation, chatbots, and AI-powered capabilities into your apps",
    icon: "🤖",
    items: [
      "OpenAI & LLM integrations",
      "AI-driven chatbots & assistants",
      "Automated content generation",
      "Smart data extraction",
      "Workflow automation",
    ],
  },
  {
    id: "8",
    title: "Real-time & Communication Systems",
    description: "Build live features with instant updates and seamless collaboration",
    icon: "⚡",
    items: [
      "Socket.io live chat systems",
      "Real-time notifications",
      "Live data updates",
      "Collaboration platforms",
      "Live customer support systems",
    ],
  },
  {
    id: "9",
    title: "Authentication & Security",
    description: "Implement enterprise-grade security and robust access control",
    icon: "🔐",
    items: [
      "JWT & OAuth implementations",
      "Role-Based Access Control (RBAC)",
      "Secure architecture design",
      "Data encryption & hashing",
      "Vulnerability patching",
    ],
  },
  {
    id: "10",
    title: "DevOps & Deployment",
    description: "Streamline your delivery pipeline and optimize server infrastructure",
    icon: "🚢",
    items: [
      "CI/CD pipeline automation",
      "Docker containerization",
      "Vercel & cloud deployments",
      "VPS & Nginx server setup",
      "Uptime monitoring",
    ],
  },
  {
    id: "11",
    title: "Performance Optimization",
    description: "Supercharge your applications for maximum speed and scalability",
    icon: "🚀",
    items: [
      "Advanced caching strategies",
      "Database query optimization",
      "API latency reduction",
      "Frontend bundle optimization",
      "High-concurrency scaling",
    ],
  },
];
