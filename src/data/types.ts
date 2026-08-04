export interface FeedbackItem {
  name: string;
  role: string; // e.g. "Client, 100xElevate" or "Project Lead"
  comment: string;
  avatar?: string; // optional path e.g. /feedback/avatar1.jpg
}

export interface Project {
  slug: string;          // used for the /work/[slug] route
  index: string;         // hex tag shown on the card, e.g. "0x01"
  name: string;          // short display name
  fullTitle: string;     // full title with subtitle, e.g. "100xElevate — AI Customer Support Chatbot"
  tagline: string;        // one-line summary for the card
  description: string[];  // paragraphs / bullet points for the detail page
  techStack: string[];
  demoUrl: string;
  images: string[];       // paths under /public, e.g. /projects/100xelevate/1.png
  feedback: FeedbackItem[];
  credentials?: { login?: string; password: string }; // optional demo credentials
}
