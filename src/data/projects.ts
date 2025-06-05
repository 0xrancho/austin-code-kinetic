interface Project {
  id: number;
  title: string;
  images: string[];
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
    images: ["/lovable-uploads/b17922e1-c5b2-4bb5-ba6f-be14a2469801.png"], 
    description: "Instant Social Proof for Any Outbound Funnel", 
    details: "ProofStack – Instant Social Proof for Any Outbound Funnel\nProofStack started as a 24-hour prototype — and instantly clicked. It's now one of the most versatile outbound tools I've ever built.\n\nIt was born from a simple sales pain: \"My SDRs are smart, but they freeze — they don't know what to say, or why it matters.\"\n\nSo we flipped the script.\n\nInstead of training reps to search for relevance, we built a tool that delivers it — automatically.\n\nProofStack uses retrieval-augmented generation (RAG) to surface internal social proof — case studies, product wins, and segment insights — tied directly to the lead's inferred profile. Whether you're targeting biotech in Boston or compliance startups in Berlin, ProofStack adapts to your funnel.\n\nHere's what it does:\n\nIngests your real customer wins, segmented by persona, product, and outcome\n\nParses target leads (via Apollo API) to infer sub-industry, size, location, and intent\n\nMatches the lead to similar wins — and outputs short, high-trust message starters\n\nEquips reps with contextual credibility in seconds — no prep required\n\nIt's built for teams who:\n\nSell into multiple industries or geos\n\nOnboard new reps frequently\n\nNeed a repeatable, scalable trust-builder at the top of the funnel\n\nImpact (based on pilot demos):\n\n+10% outbound velocity\n\n+10% connect-to-meeting rate\n\n+10% rep ramp speed\n\n+10% lift in mid-cycle upsell conversion\n\nCurrent status:\n\nDemoed to 6 enterprise sales teams\n\n6 expressed immediate buying intent ($500 - $3500 /seat range including data spend)\n\nGathering LOIs and refining GTM for MVP launch\n\nProofStack isn't just a research killer — it's a trust engine.\nAnd it works because it's tailored to your stack, your stories, and your segment.",
    link: "https://example.com/proofstack",
    category: "Sales Enablement",
    techStack: ["SalesOps", "GPT-4o", "OpenAI_GPT", "SocialProof"]
  },
  {
    id: 2, 
    title: "Ag Companion", 
    images: ["/lovable-uploads/744b215f-ef0b-4420-8779-a9c6cad3ca4b.png"], 
    description: "AI SMS Assistant for Rural Farmers in India", 
    details: "Ag Companion – AI SMS Assistant for Rural Farmers in India\nAg Companion is a mission-aligned SMS chat assistant designed for smallholder farmers in rural India. It exists to support their livelihoods, strengthen their families, and — where welcomed — speak truth about creation, stewardship, and the goodness of God.\n\nBuilt in collaboration with Echo Farms Lab, ONOW.ai, and several Business-as-Mission leaders, the tool targets a people group facing extreme agricultural volatility: erratic weather, predatory middlemen, limited credit access, soil degradation, and insufficient infrastructure.\n\nThe concept is simple:\n\nAn AI assistant that speaks to farmers — in their language, with their context, on the devices they already have.\n\nAg Companion works over SMS in Hindi and several regional dialects. It offers farmers:\n\nReal-time climate and soil-informed guidance\n\nBasic business, accounting, and decision support\n\nTrust-building, mission-aligned spiritual care when prompted\n\nInvitations to area churches or mission support programs when appropriate\n\nHow it works (technically):\n\nForked from ONOW.ai's trusted AI architecture\n\nRAG-powered language assistant tuned with farming expertise, local ag practices, and climate overlays\n\nTriggered prayer, support, or evangelism messaging woven into user-driven flow\n\nEncouragement logic included: users are nudged to share the app with others they trust\n\nCurrent stage:\n\nPrototyped in English with Hindi-language translation pipelines in testing\n\nExploring pilot rollout with Echo Farms Lab and BAM network partners\n\nDesigning structured knowledge ingestion for region-specific data (soil, weather, crops, pests)\n\nAg Companion's vision is both modest and massive: deliver daily dignity, guidance, and encouragement — spiritual and agricultural — to the least connected workers in the global food chain.",
    link: "https://example.com/ag-companion",
    category: "AI Applications",
    techStack: ["SMSGateway", "PythonFlask", "GPT-4", "LangChain"]
  }, 
  {
    id: 3, 
    title: "Big Loud Shirt", 
    images: ["/lovable-uploads/0c94e1d8-01e6-4937-abd3-ab2b0d00d3e1.png", "/lovable-uploads/6db4ae30-b1e7-4daa-92c0-b3b103bfb336.png"], 
    description: "Turning Customer Data into New Business", 
    details: "Big Loud Shirt – Turning Customer Data into New Business\nA Sales-Ready Insight Engine for Non-Technical Teams\nBig Loud Shirt (formerly ODNB) is a generative analytics front end that transforms complex customer data into immediate, segment-driven campaigns — no data scientist required.\nIt was built to solve a simple problem:\n💬 \"We have tons of great data and insights... if someone knows how to configure Elastic and write big data queries .\"\nThis demo-ready tool gives go-to-market teams the power to explore historical data by goal and tactic, visualize buyer segments in real time, and generate campaign-ready, hyper-segmented, messaging with a single click.\n\nBuilt for OpenInsights, Inspired by the Field\nDesigned in collaboration with leadership at OpenInsights — a next-gen BI company building proprietary ML analytics models  — Big Loud Shirt acts as a product demo frontend that showcases the power of their Universal Audience Model (UAM) and segmentation engine.\nInstead of just displaying dashboards, it creates revenue playbooks from historical data.\n\n💡 Key Features\nGoal-Based UX: Winback, Expand, or Advocate — pick your GTM objective\n\nTactic-Aware Prompts: Smart query builder shifts based on selected play\n\nSunburst Segment Viewer: Interactive visual explorer with GPT_BIN slider and refinements\n\nAI Engagement Blueprint: Every segment comes with messaging ideas, channel recs, and reach estimates\n\nPreloaded Datasets: Built for sales demos — no data scientist required\n\n🤘 Why It Works\nBig Loud Shirt speaks the language of sellers, not BI analysts. It wraps ML-powered segmentation in a vibrant, accessible UI that shows value fast and unlocks mid-market buyers who'd otherwise be locked out of advanced ML and BI tools.\nOh — and the logo is a Picasso-style dude in marching band pants with a Hawaiian shirt and a bass drum.\n\nBecause data should make noise and get people excited!",
    link: "https://example.com/big-loud-shirt",
    category: "Sales Enablement",
    techStack: ["Loveable", "Supabase", "PythonFlask", "GPT-4o"]
  }, 
  {
    id: 4, 
    title: "Digital Treasury", 
    images: ["/lovable-uploads/f8730e4d-7ef4-4f49-8d89-5fcedb9032d2.png"], 
    description: "International payments on crypto rails", 
    details: "This solution was born in wartime. In the first days of Russia's full-scale invasion of Ukraine, coordinated cyberattacks disabled SWIFT, SEPA, and core banking infrastructure across key regions.\n\nAt that moment, digital currencies became the only functioning financial rails into Ukraine. Alongside a small network of operators and aid leaders, I helped move six figures in stablecoin payments into the country using Arbitrum, and coordinated with local FX providers to off-ramp into Hryvnia and USD.\n\nAfter the emergency phase, we formalized this process into a full Digital Treasury service for global nonprofits and social enterprises. The goal: build resilient, cost-effective alternatives to traditional finance infrastructure.\n\nThe platform included:\n• Blockchain onboarding & self-custody training\n• Multi-sig wallet setup (Gnosis Safe) for team-based approvals\n• Crypto exchange registration and compliance support\n• Cross-border FX relationships and cash-out workflows\n• Document QA + SOP creation to ensure security, regulatory clarity, and operational consistency\n\nWe also conducted a multi-country study of FX and remittance efficiency. Our findings: global nonprofits often lose 4–7 cents per dollar due to fees, delays, and bureaucracy when using legacy rails, or even newer fintechs.\n\nWhat began as a crisis workaround became a trusted framework for financial resilience, operational speed, and cross-border cost savings — reducing dependency on fragile systems and enabling mission-critical movement of funds during instability. This approach saves organizations an average of 3% in total transfer and banking fees. In one notable case, we saved an organization $38,000 on a single transaction.",
    link: "https://example.com/digital-treasury",
    category: "Financial Systems",
    techStack: ["Coinbase", "Ethereum", "RabbyWallet", "GnosisSafe", "QualityAssurance", "StaffTraining"]
  },
  {
    id: 5, 
    title: "InitialScreen", 
    images: ["/lovable-uploads/e3ce4d5b-7cf5-4ab9-afce-f36f88a9c8db.png"], 
    description: "AI-powered job search copilot. From discovery to delivery.", 
    details: "InitialScreen is a custom GPT-driven assistant I built to fully streamline my job search — from initial role discovery through personalized resume creation and application tracking. It automates what most job seekers do manually: search, filter, apply, and track — but does it with intelligence and integration.\n\nKey Features\n\n🔍 Scrape & Search Jobs\nInitialScreen runs targeted job searches based on natural language prompts (e.g. \"Show me GTM Strategy roles in Indianapolis\"). It parses public listings and returns structured, enriched summaries with location, salary, overview, and apply links.\n\n📊 Score Against Resume\nEach job is scored against my uploaded resume to highlight alignment. This prioritizes high-fit roles and avoids wasting cycles on low-probability applications.\n\n📥 Log Jobs into Airtable Pipeline\nJobs can be logged to my Airtable pipeline with a single command (e.g. \"Log this role and the last one too\"). The system captures role title, company, link, salary, referral notes, and status — no form-filling required.\n\n📄 Generate ATS-Ready Resume\nInitialScreen creates a customized resume tailored to each job, designed to pass ATS filters (Applicant Verification Systems) using context-aware phrasing, clean formatting, and keyword alignment.\n\n☁️ Save Resume to Google Drive\nEach custom resume is automatically saved to a designated Google Drive folder, named with the role and company. This keeps a full audit trail of all versions and targets.\n\n🔗 Attach Resume Link to Job Record\nThe final step: the shareable Drive URL is attached back to the matching Airtable job record, so every opportunity is fully documented and ready to send.\n\nTech Stack\nGPT-4 + Custom Prompt Logic (for inference and writing)\nPipedream + Node + Axios (middleware + Airtable + Drive integration)\nAirtable (for pipeline tracking and scoring)\nGoogle Drive API (for file generation and link management)\n\nStatus\nInitialScreen is live and logging jobs daily. Scoring, resume generation, and Drive uploads are in staged development with partial automation complete.\n\nWant to build something like this for yourself or your org? Let's talk →",
    link: "https://example.com/initialscreen",
    category: "AI Applications",
    techStack: ["GPT-4", "Pipedream", "Node.js", "Airtable", "GoogleDriveAPI", "Automation"]
  },
  {
    id: 6, 
    title: "Realty Group Sales Ops", 
    images: ["/lovable-uploads/98fa8280-158d-4348-b365-29bef98dffc7.png"],
    description: "Sales automation for commercial real estate", 
    details: "A Salesforce customization to qualify, segment, and convert commercial real estate inquiries into buyer, seller, lessee, lessor, sales workflows.",
    link: "https://example.com/tps-commercial",
    category: "Sales Enablement",
    techStack: ["SalesforceCore", "SalesOps", "LeadScoring", "DataModeling"]
  },
  {
    id: 7, 
    title: "Wellness Impact Model", 
    images: ["/lovable-uploads/479289cf-59b3-4620-a63b-d16a29c0e1aa.png"],
    description: "Custom Outcomes and Service delivery solution", 
    details: "Whole-Person Outcomes, Measured and Mobilized\n\nI designed and implemented a full enterprise Program and Assessment solution on Salesforce for a Ukrainian nonprofit serving orphans and orphan graduates through education, support, and job training.\n\nThe core challenge: prove holistic growth. We needed more than service logs—we needed evidence of transformation across spiritual, mental, physical, economic, and relational dimensions.\n\nI built the Wellness Impact Model, a Theory of Change framework that defined key outcomes in each dimension and mapped them to measurable, qualitative assessments. These assessments were delivered through trusted mentor-youth relationships and recorded in a Ukrainian-language mobile app built on Salesforce.\n\nOutcome:\nThe system equipped 12 frontline staff and mentors to track real-time progress toward true youth wellness—giving the organization the data to validate impact, improve programs, and communicate results to funders.",
    link: "https://example.com/wellness-impact",
    category: "Program Management",
    techStack: ["Salesforce", "LightningApps", "OutcomeManagement", "ServiceDelivery"]
  },
  {
    id: 8, 
    title: "Early Learning Enrollment", 
    images: ["/lovable-uploads/d4b79823-b3cf-4bc3-b777-3e4c920fe027.png"], 
    description: "Enrolllment Optimization and Automation for school system", 
    details: "As Director of Product & Systems at Early Learning Indiana, I led the design and delivery of the first enterprise-scale enrollment platform for early learning built on Salesforce. This system supported multi-site operations and consolidated siloed workflows into a unified digital experience across the entire enrollment lifecycle.\n\nThe solutions included:\n• Family-facing intake + qualification: capturing needs, subsidy eligibility, and service preferences\n• Scoring + matching engine: balancing availability, priority scoring, and family fit\n• Enrollment + onboarding flows: confirming placement, collecting documents, and scheduling start\n• Transition planning & seat management: giving program leads real-time visibility into classroom supply, age-out triggers, and staffing needs\n\nThe result was a coordinated system that drove a 12% increase in seat capacity across a 13 schools reduced manual placement labor, and aligned operations, program staff, and family experience through a single digital source of truth.",
    link: "https://example.com/early-learning",
    category: "Data Analytics",
    techStack: ["SalesOps", "Salesforce", "CustomObjects", "Flows", "Apex", "LightningApps", "API"]
  },
  {
    id: 9, 
    title: "Classroom Balancing", 
    images: ["/lovable-uploads/f177f04f-c577-4e30-9eef-814410cd159a.png"],
    description: "Automated classroom capacity planning for school system", 
    details: "This custom Salesforce module helped a school system manage seat capacity across 12 schools, providing an index for enrollment matching criteria and teacher staffing.",
    link: "https://example.com/classroom-balancing",
    category: "Data Analytics",
    techStack: ["SalesOps", "Salesforce", "Flows", "CustomObjects"]
  },
  {
    id: 10, 
    title: "Call Driver Analysis", 
    images: ["/lovable-uploads/11c22e27-62c7-4157-b6cc-ae55f5b3190b.png"],
    description: "Presales tool for IT helpdesk automation software", 
    details: "This is a Winform tool I optimized to provide insight for sales teams selling large global ITSMs on IT help desk automation software.",
    link: "https://example.com/call-driver",
    category: "Data Analytics",
    techStack: ["WinForms", "CSharp", "SQL", "RootCauseAnalysis", "Presales", "SalesOps"]
  },
  {
    id: 11, 
    title: "LBP Legacy Project", 
    images: ["/lovable-uploads/fc31dcea-b9ed-410c-9464-e51ad3b2a32f.png"],
    description: "Digital Archive & Missionary Research", 
    details: "This is a long-term digitization effort of legacy Christian mission media and academic research; primarily focused on the life and work of Dr. Luis Bush: lusibushpapers.com.",
    link: "https://luisbushpapers.com",
    category: "Web Development",
    techStack: ["StaticHTML", "SelfHosted", "DigitalArchives", "Jamstack"]
  },
  {
    id: 12,
    title: "Loan Qualification Automation",
    images: ["/lovable-uploads/5e86117e-2aa7-4d2d-ac74-db2d5e55c370.png"],
    description: "Salesforce Automation for Loan Readiness Evaluation",
    details: "This is a Salesforce flow thats called from a chatbot from engaging with new prospects. The solution qualifies and segments users to determine load approval and readiness.",
    link: "https://example.com/loan-qualification",
    category: "Financial Systems",
    techStack: ["Salesforce", "Flows", "SalesOps", "Chatbot", "Automation"]
  },
  {
    id: 13,
    title: "Benefits Onboarding",
    images: ["/lovable-uploads/e55b83cb-66ba-4465-850d-dd37f54f7199.png"],
    description: "AI-Powered Data Extraction from Insurance Plans to JavaScript Schema",
    details: "This is a private OpenAI GPT to scrape data from rich-text insurance documents with detailed plan pricing and qualification information. The tool retrieves specific parameters to build a structured onboarding .csv and a script to import them for onboarding configuration in the clients software.",
    link: "https://example.com/benefits-onboarding",
    category: "AI Applications",
    techStack: ["OpenAI", "GPT-4o", "API", "JavaScript", "DocumentParsing"]
  }
];

export type { Project };
export { projects };
