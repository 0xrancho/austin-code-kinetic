interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  details: string;
  link: string;
  category: string;
  techStack: string[];
}

const projects: Project[] = [
  {
    id: 1, 
    title: "ProofStack", 
    image: "/lovable-uploads/1828ad0b-1432-45a7-a040-bb64b1e749c1.png", 
    description: "Outbound ai sales tool for high context social proof", 
    details: "Matches cold prospects with past wins; generates personalized social proof to boost response rates.",
    link: "https://example.com/proofstack",
    category: "AI Applications",
    techStack: ["OpenAI API", "Typescript", "React", "PostgreSQL"]
  }, 
  {
    id: 2, 
    title: "Ag Companion", 
    image: "/lovable-uploads/744b215f-ef0b-4420-8779-a9c6cad3ca4b.png", 
    description: "Micro-SaaS ai powered SMS app for rural farmers", 
    details: "AI-powered SMS application for rural farmers and third-world businesses; deployed in multiple dialects.",
    link: "https://example.com/ag-companion",
    category: "AI Applications",
    techStack: ["OpenAI API", "Twilio", "Node.js", "PostgreSQL"]
  }, 
  {
    id: 3, 
    title: "ODNB", 
    image: "/lovable-uploads/dd57d349-f5b0-493f-84bc-267faeef6136.png", 
    description: "Customer Success toolkit for mid-cycle sales", 
    details: "Comprehensive solution for gap analysis, winbacks, retention, and referrals in mid-cycle sales.",
    link: "https://example.com/odnb",
    category: "Sales Enablement",
    techStack: ["OpenAI API", "Python", "PostgreSQL", "React"]
  }, 
  {
    id: 4, 
    title: "Digital Treasury", 
    image: "/lovable-uploads/f8730e4d-7ef4-4f49-8d89-5fcedb9032d2.png", 
    description: "International payments on crypto rails", 
    details: "Knowledge and solution set for international payments, FX and treasury management on crypto rails.",
    link: "https://example.com/digital-treasury",
    category: "Financial Systems",
    techStack: ["Circle", "Gnosis Safe", "MetaMask Institutional", "Chainalysis"]
  },
  {
    id: 5, 
    title: "TPS Commercial", 
    image: "/lovable-uploads/98fa8280-158d-4348-b365-29bef98dffc7.png",
    description: "Sales automation for commercial real estate", 
    details: "Custom qualification, conversion automation, and assessments for commercial real estate sales.",
    link: "https://example.com/tps-commercial",
    category: "Sales Enablement",
    techStack: ["Salesforce", "Apex", "JavaScript"]
  },
  {
    id: 6, 
    title: "Wellness Impact Model", 
    image: "/lovable-uploads/479289cf-59b3-4620-a63b-d16a29c0e1aa.png",
    description: "Social theory of change for nonprofits", 
    details: "A tactical program and assessment model to implement a social theory of change for nonprofits.",
    link: "https://example.com/wellness-impact",
    category: "Program Management",
    techStack: ["React", "Node.js", "MongoDB", "AWS"]
  },
  {
    id: 7, 
    title: "Early Learning Enrollment", 
    image: "/lovable-uploads/d4b79823-b3cf-4bc3-b777-3e4c920fe027.png", 
    description: "Enrollment automation across 16 schools", 
    details: "A novel scoring and match-index automation that consolidated enrollment across 16 schools.",
    link: "https://example.com/early-learning",
    category: "Data Analytics",
    techStack: ["Python", "Pandas", "Tableau", "SQL"]
  },
  {
    id: 8, 
    title: "Classroom Balancing", 
    image: "/lovable-uploads/f177f04f-c577-4e30-9eef-814410cd159a.png",
    description: "Dynamic classroom occupancy modeling", 
    details: "Robust seat configuration model for dynamic classroom occupancy and teacher scheduling.",
    link: "https://example.com/classroom-balancing",
    category: "Data Analytics",
    techStack: ["Excel", "VBA", "Power BI"]
  },
  {
    id: 9, 
    title: "Call-Driver Analysis", 
    image: "/lovable-uploads/11c22e27-62c7-4157-b6cc-ae55f5b3190b.png",
    description: "Support center call data synthesis", 
    details: "An optimized presales winform app to synthesis large volumes of support center call data.",
    link: "https://example.com/call-driver",
    category: "Data Analytics",
    techStack: [".NET", "WinForms", "SQL Server"]
  },
  {
    id: 10, 
    title: "Luisbushpapers.com", 
    image: "/lovable-uploads/fc31dcea-b9ed-410c-9464-e51ad3b2a32f.png",
    description: "Missiological data curation for the global Church", 
    details: "A long term project to digitize, curate, and enrich missiological data and legacy for the global Church.",
    link: "https://luisbushpapers.com",
    category: "Web Development",
    techStack: ["WordPress", "PHP", "JavaScript", "MySQL"]
  },
  {
    id: 11,
    title: "Loan Qualification Automation",
    image: "/lovable-uploads/5e86117e-2aa7-4d2d-ac74-db2d5e55c370.png",
    description: "Flow automation for fintech auto-reseller",
    details: "Multi-stage loan application workflow with automated qualification steps for fintech auto-reseller platforms.",
    link: "https://example.com/loan-qualification",
    category: "Financial Systems",
    techStack: ["React", "Node.js", "MongoDB", "Flow Designer"]
  }
];

export type { Project };
export { projects };
