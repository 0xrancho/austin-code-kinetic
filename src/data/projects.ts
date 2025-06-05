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
    image: "/lovable-uploads/b17922e1-c5b2-4bb5-ba6f-be14a2469801.png", 
    description: "Instant Social Proof for Any Outbound Funnel", 
    details: "ProofStack – Instant Social Proof for Any Outbound Funnel\nProofStack started as a 24-hour prototype — and instantly clicked. It's now one of the most versatile outbound tools I've ever built.\n\nIt was born from a simple sales pain: \"My SDRs are smart, but they freeze — they don't know what to say, or why it matters.\"\n\nSo we flipped the script.\n\nInstead of training reps to search for relevance, we built a tool that delivers it — automatically.\n\nProofStack uses retrieval-augmented generation (RAG) to surface internal social proof — case studies, product wins, and segment insights — tied directly to the lead's inferred profile. Whether you're targeting biotech in Boston or compliance startups in Berlin, ProofStack adapts to your funnel.\n\nHere's what it does:\n\nIngests your real customer wins, segmented by persona, product, and outcome\n\nParses target leads (via Apollo API) to infer sub-industry, size, location, and intent\n\nMatches the lead to similar wins — and outputs short, high-trust message starters\n\nEquips reps with contextual credibility in seconds — no prep required\n\nIt's built for teams who:\n\nSell into multiple industries or geos\n\nOnboard new reps frequently\n\nNeed a repeatable, scalable trust-builder at the top of the funnel\n\nImpact (based on pilot demos):\n\n+10% outbound velocity\n\n+10% connect-to-meeting rate\n\n+10% rep ramp speed\n\n+10% lift in mid-cycle upsell conversion\n\nCurrent status:\n\nDemoed to 6 enterprise sales teams\n\n6 expressed immediate buying intent ($500 - $3500 /seat range including data spend)\n\nGathering LOIs and refining GTM for MVP launch\n\nProofStack isn't just a research killer — it's a trust engine.\nAnd it works because it's tailored to your stack, your stories, and your segment.",
    link: "https://example.com/proofstack",
    category: "AI Applications",
    techStack: ["SalesOps", "GPT-4o", "OpenAI_GPT", "SocialProof"]
  },
  {
    id: 2, 
    title: "Ag Companion", 
    image: "/lovable-uploads/744b215f-ef0b-4420-8779-a9c6cad3ca4b.png", 
    description: "AI SMS Assistant for Rural Farmers in India", 
    details: "Ag Companion – AI SMS Assistant for Rural Farmers in India\nAg Companion is a mission-aligned SMS chat assistant designed for smallholder farmers in rural India. It exists to support their livelihoods, strengthen their families, and — where welcomed — speak truth about creation, stewardship, and the goodness of God.\n\nBuilt in collaboration with Echo Farms Lab, ONOW.ai, and several Business-as-Mission leaders, the tool targets a people group facing extreme agricultural volatility: erratic weather, predatory middlemen, limited credit access, soil degradation, and insufficient infrastructure.\n\nThe concept is simple:\n\nAn AI assistant that speaks to farmers — in their language, with their context, on the devices they already have.\n\nAg Companion works over SMS in Hindi and several regional dialects. It offers farmers:\n\nReal-time climate and soil-informed guidance\n\nBasic business, accounting, and decision support\n\nTrust-building, mission-aligned spiritual care when prompted\n\nInvitations to area churches or mission support programs when appropriate\n\nHow it works (technically):\n\nForked from ONOW.ai's trusted AI architecture\n\nRAG-powered language assistant tuned with farming expertise, local ag practices, and climate overlays\n\nTriggered prayer, support, or evangelism messaging woven into user-driven flow\n\nEncouragement logic included: users are nudged to share the app with others they trust\n\nCurrent stage:\n\nPrototyped in English with Hindi-language translation pipelines in testing\n\nExploring pilot rollout with Echo Farms Lab and BAM network partners\n\nDesigning structured knowledge ingestion for region-specific data (soil, weather, crops, pests)\n\nAg Companion's vision is both modest and massive: deliver daily dignity, guidance, and encouragement — spiritual and agricultural — to the least connected workers in the global food chain.",
    link: "https://example.com/ag-companion",
    category: "AI Applications",
    techStack: ["SMSGateway", "PythonFlask", "GPT-4", "LangChain"]
  }, 
  {
    id: 3, 
    title: "ODNB", 
    image: "/lovable-uploads/b24ca347-9aa5-4765-a50f-5e1c355f0734.png", 
    description: "Customer Success toolkit for mid-cycle sales", 
    details: "ODNB – AI Revenue Intelligence for Success & Retention\nThis project began as a pattern I've been solving my entire career:\n\"We have two sets of data. If we could intelligently match one to the other, we'd save money or make more of it.\"\nFrom Excel lookups to SQL joins, C# pipelines to Salesforce flows, this logic has underpinned much of my ops and product work. Enrollment platforms, logistics quote engines, and customer win-back tools — all variants of the same core mechanism: match data to surface value.\n\nODNB is the evolution of that pattern — rebuilt with RAG architecture and GPT logic.\nDesigned initially for small, aging businesses with underutilized CRM or billing data, ODNB lets you upload historical customer records and current product/service lines. It then identifies gaps, lost opportunities, and churn risks — and generates context-aware suggestions to reactivate, upsell, or retain.\n\nUse case:\n• Mid-cycle success and account management teams\n• Retention and expansion automation\n• Pattern mining for under-engaged customer bases\n\nTech stack:\n• GPT-4o with RAG logic\n• CSV and Airtable ingestion\n• Structured prompt design for insight generation and outreach scripting\n\nCurrent stage:\n• Actively piloted by a Managed IT Success team\n• Logic being tuned for SMB dataset constraints and repeatable insight formats\n• Exploring vertical-specific templates to simplify onboarding and increase relevance\n\nODNB is less about flashy AI — and more about smart revenue archaeology. It brings forgotten customers back to the surface, and gives lean teams the tools to act before they churn or go dark.",
    link: "https://example.com/odnb",
    category: "Sales Enablement",
    techStack: ["Loveable", "Supabase", "PythonFlask", "GPT-4o"]
  }, 
  {
    id: 4, 
    title: "Digital Treasury", 
    image: "/lovable-uploads/f8730e4d-7ef4-4f49-8d89-5fcedb9032d2.png", 
    description: "International payments on crypto rails", 
    details: "This solution was born in wartime. In the first days of Russia's full-scale invasion of Ukraine, coordinated cyberattacks disabled SWIFT, SEPA, and core banking infrastructure across key regions.\n\nAt that moment, digital currencies became the only functioning financial rails into Ukraine. Alongside a small network of operators and aid leaders, I helped move six figures in stablecoin payments into the country using Arbitrum, and coordinated with local FX providers to off-ramp into Hryvnia and USD.\n\nAfter the emergency phase, we formalized this process into a full Digital Treasury service for global nonprofits and social enterprises. The goal: build resilient, cost-effective alternatives to traditional finance infrastructure.\n\nThe platform included:\n• Blockchain onboarding & self-custody training\n• Multi-sig wallet setup (Gnosis Safe) for team-based approvals\n• Crypto exchange registration and compliance support\n• Cross-border FX relationships and cash-out workflows\n• Document QA + SOP creation to ensure security, regulatory clarity, and operational consistency\n\nWe also conducted a multi-country study of FX and remittance efficiency. Our findings: global nonprofits often lose 4–7 cents per dollar due to fees, delays, and bureaucracy when using legacy rails, or even newer fintechs.\n\nWhat began as a crisis workaround became a trusted framework for financial resilience, operational speed, and cross-border cost savings — reducing dependency on fragile systems and enabling mission-critical movement of funds during instability. This approach saves organizations an average of 3% in total transfer and banking fees. In one notable case, we saved an organization $38,000 on a single transaction.",
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
    details: "Whole-Person Outcomes, Measured and Mobilized\n\nI designed and implemented a full enterprise Program and Assessment solution on Salesforce for a Ukrainian nonprofit serving orphans and orphan graduates through education, support, and job training.\n\nThe core challenge: prove holistic growth. We needed more than service logs—we needed evidence of transformation across spiritual, mental, physical, economic, and relational dimensions.\n\nI built the Wellness Impact Model, a Theory of Change framework that defined key outcomes in each dimension and mapped them to measurable, qualitative assessments. These assessments were delivered through trusted mentor-youth relationships and recorded in a Ukrainian-language mobile app built on Salesforce.\n\nOutcome:\nThe system equipped 12 frontline staff and mentors to track real-time progress toward true youth wellness—giving the organization the data to validate impact, improve programs, and communicate results to funders.",
    link: "https://example.com/wellness-impact",
    category: "Program Management",
    techStack: ["Salesforce", "LightningApps", "OutcomeManagement", "ServiceDelivery"]
  },
  {
    id: 7, 
    title: "Early Learning Enrollment", 
    image: "/lovable-uploads/d4b79823-b3cf-4bc3-b777-3e4c920fe027.png", 
    description: "Enrolllment Optimization and Automation for school system", 
    details: "As Director of Product & Systems at Early Learning Indiana, I led the design and delivery of the first enterprise-scale enrollment platform for early learning built on Salesforce. This system supported multi-site operations and consolidated siloed workflows into a unified digital experience across the entire enrollment lifecycle.\n\nThe solutions included:\n• Family-facing intake + qualification: capturing needs, subsidy eligibility, and service preferences\n• Scoring + matching engine: balancing availability, priority scoring, and family fit\n• Enrollment + onboarding flows: confirming placement, collecting documents, and scheduling start\n• Transition planning & seat management: giving program leads real-time visibility into classroom supply, age-out triggers, and staffing needs\n\nThe result was a coordinated system that drove a 12% increase in seat capacity across a 13 schools reduced manual placement labor, and aligned operations, program staff, and family experience through a single digital source of truth.",
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
