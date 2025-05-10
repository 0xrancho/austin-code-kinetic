
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
    description: "AI-Powered Social Proof Engine for Outbound Sales", 
    details: "Proofstack was built as a private GPT to match cold prospects with past wins; generates personalized social proof to boost response rates. It's currently being further developed as a stand alone tool.",
    link: "https://example.com/proofstack",
    category: "AI Applications",
    techStack: ["SalesOps", "GPT-4o", "OpenAI_GPT", "SocialProof"]
  }, 
  {
    id: 2, 
    title: "Ag Companion", 
    image: "/lovable-uploads/744b215f-ef0b-4420-8779-a9c6cad3ca4b.png", 
    description: "Micro-SaaS ai powered SMS app for rural farmers", 
    details: "This is an ai-enabled SMS tool for WhatsApp. Its a solution fork of ONOW.ai designed specifically for the needs of rural farmers in India.",
    link: "https://example.com/ag-companion",
    category: "AI Applications",
    techStack: ["SMSGateway", "PythonFlask", "GPT-4", "LangChain"]
  }, 
  {
    id: 3, 
    title: "ODNB", 
    image: "/lovable-uploads/b24ca347-9aa5-4765-a50f-5e1c355f0734.png", 
    description: "Customer Success toolkit for mid-cycle sales", 
    details: "Old Data New Business (ODNB) is a web app, currently in development, with working GPT prototype, that runs customer success or account management post sales plays like -- Expand, Winback, Referral, and Success Story.",
    link: "https://example.com/odnb",
    category: "Sales Enablement",
    techStack: ["Loveable", "Supabase", "PythonFlask", "GPT-4o"]
  }, 
  {
    id: 4, 
    title: "Digital Treasury", 
    image: "/lovable-uploads/f8730e4d-7ef4-4f49-8d89-5fcedb9032d2.png", 
    description: "International payments on crypto rails", 
    details: "A service implementing blockchain and FX solutions for international payments -- designed for US nonprofits that manage and fund foreign teams in developing countries, or who face challenging or expensive financial operations.",
    link: "https://example.com/digital-treasury",
    category: "Financial Systems",
    techStack: ["Coinbase", "Ethereum", "RabbyWallet", "GnosisSafe", "QualityAssurance", "StaffTraining"]
  },
  {
    id: 5, 
    title: "Realty Group Sales Ops", 
    image: "/lovable-uploads/98fa8280-158d-4348-b365-29bef98dffc7.png",
    description: "Sales automation for commercial real estate", 
    details: "A Salesforce customization to qualify, segment, and convert commercial real estate inquiries into buyer, seller, lessee, lessor, sales workflows.",
    link: "https://example.com/tps-commercial",
    category: "Sales Enablement",
    techStack: ["SalesforceCore", "SalesOps", "LeadScoring", "DataModeling"]
  },
  {
    id: 6, 
    title: "Wellness Impact Model", 
    image: "/lovable-uploads/479289cf-59b3-4620-a63b-d16a29c0e1aa.png",
    description: "Custom Outcomes and Service delivery solution", 
    details: "This is a comprehensive theory of change model with custom assessments for a mentorship-based service model that was created for a nonprofit that serves orphan youth in Ukraine.",
    link: "https://example.com/wellness-impact",
    category: "Program Management",
    techStack: ["Salesforce", "LightningApps", "OutcomeManagement", "ServiceDelivery"]
  },
  {
    id: 7, 
    title: "Early Learning Enrollment", 
    image: "/lovable-uploads/d4b79823-b3cf-4bc3-b777-3e4c920fe027.png", 
    description: "Enrolllment Optimization and Automation for school system", 
    details: "This was the first ever comprehensive enterprise scale solution for an Early Learning school system on Salesforce. It featured custom workflows and automation across intake, subsidy qualification, scoring, matching, enrollment, and transition planning.",
    link: "https://example.com/early-learning",
    category: "Data Analytics",
    techStack: ["SalesOps", "Salesforce", "CustomObjects", "Flows", "Apex", "LightningApps", "API"]
  },
  {
    id: 8, 
    title: "Classroom Balancing", 
    image: "/lovable-uploads/f177f04f-c577-4e30-9eef-814410cd159a.png",
    description: "Automated classroom capacity planning for school system", 
    details: "This custom Salesforce module helped a school system manage seat capacity across 12 schools, providing an index for enrollment matching criteria and teacher staffing.",
    link: "https://example.com/classroom-balancing",
    category: "Data Analytics",
    techStack: ["SalesOps", "Salesforce", "Flows", "CustomObjects"]
  },
  {
    id: 9, 
    title: "Call Driver Analysis", 
    image: "/lovable-uploads/11c22e27-62c7-4157-b6cc-ae55f5b3190b.png",
    description: "Presales tool for IT helpdesk automation software", 
    details: "This is a Winform tool I optimized to provide insight for sales teams selling large global ITSMs on IT help desk automation software.",
    link: "https://example.com/call-driver",
    category: "Data Analytics",
    techStack: ["WinForms", "CSharp", "SQL", "RootCauseAnalysis", "Presales", "SalesOps"]
  },
  {
    id: 10, 
    title: "LBP Legacy Project", 
    image: "/lovable-uploads/fc31dcea-b9ed-410c-9464-e51ad3b2a32f.png",
    description: "Digital Archive & Missionary Research", 
    details: "This is a long-term digitization effort of legacy Christian mission media and academic research; primarily focused on the life and work of Dr. Luis Bush: lusibushpapers.com.",
    link: "https://luisbushpapers.com",
    category: "Web Development",
    techStack: ["StaticHTML", "SelfHosted", "DigitalArchives", "Jamstack"]
  },
  {
    id: 11,
    title: "Loan Qualification Automation",
    image: "/lovable-uploads/5e86117e-2aa7-4d2d-ac74-db2d5e55c370.png",
    description: "Salesforce Automation for Loan Readiness Evaluation",
    details: "This is a Salesforce flow thats called from a chatbot from engaging with new prospects. The solution qualifies and segments users to determine load approval and readiness.",
    link: "https://example.com/loan-qualification",
    category: "Financial Systems",
    techStack: ["Salesforce", "Flows", "SalesOps", "Chatbot", "Automation"]
  },
  {
    id: 12,
    title: "Benefits Onboarding",
    image: "/lovable-uploads/e55b83cb-66ba-4465-850d-dd37f54f7199.png",
    description: "AI-Powered Data Extraction from Insurance Plans to JavaScript Schema",
    details: "This is a private OpenAI GPT to scrape data from rich-text insurance documents with detailed plan pricing and qualification information. The tool retrieves specific parameters to build a structured onboarding .csv and a script to import them for onboarding configuration in the clients software.",
    link: "https://example.com/benefits-onboarding",
    category: "AI Applications",
    techStack: ["OpenAI", "GPT-4o", "API", "JavaScript", "DocumentParsing"]
  }
];

export type { Project };
export { projects };
