"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, BarChart3, Blocks, BrainCircuit, BriefcaseBusiness, CheckCircle2, Cloud, Code2, Database, Download, ExternalLink, Mail, Menu, Network, Send, Server, Smartphone, Sparkles, X } from "lucide-react";

function Github({ size = 20 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .7A11.3 11.3 0 0 0 8.4 22.8c.6.1.8-.2.8-.5v-2.2c-3.4.7-4.1-1.4-4.1-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2A11.4 11.4 0 0 1 12 5.2c1 0 2 .1 3 .4 2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.5A11.3 11.3 0 0 0 12 .7Z"/></svg>;
}

function Linkedin({ size = 20 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.3 7.7H1.7V22h3.6V7.7ZM3.5 1A2.1 2.1 0 1 0 3.5 5.2 2.1 2.1 0 0 0 3.5 1ZM22.3 13.8c0-4.3-2.3-6.3-5.4-6.3-2.5 0-3.6 1.4-4.2 2.3V7.7H9.1V22h3.6v-7.1c0-1.9.4-3.7 2.7-3.7 2.3 0 2.3 2.1 2.3 3.8v7h3.6l1-8.2Z"/></svg>;
}

type ProjectField = "All" | "Data Engineering" | "AI / ML" | "Flutter" | "Python";

const skillTree = {
  "Programming languages": { icon: Code2, description: "Languages I use to build data systems, services, automation, and mobile products.", branches: {
    Python: ["FastAPI", "Django", "Flask", "Pandas", "PySpark", "Selenium", "BeautifulSoup", "pytest"],
    Dart: ["Flutter SDK", "Firebase integration", "REST integration", "Material UI", "Widget testing"],
    SQL: ["PostgreSQL", "Azure SQL", "Warehouse modeling", "Analytics queries", "Data validation"],
  }},
  "Data engineering": { icon: Database, description: "Reliable movement, transformation, validation, and serving of analytics-ready data.", branches: {
    "Pipelines & ingestion": ["ETL / ELT", "REST & SOAP APIs", "SFTP", "Pagination", "Run ledgers", "Retries"],
    "Processing & quality": ["Pandas", "PySpark", "Databricks", "Schema validation", "Data contracts", "Observability"],
    "Warehousing & BI": ["PostgreSQL", "Azure SQL", "ADLS Gen2", "Data marts", "Power BI", "Dimensional modeling"],
  }},
  "Cloud & deployment": { icon: Cloud, description: "Cloud-native data and application delivery with secure, versioned infrastructure.", branches: {
    Azure: ["Azure Functions", "Blob Storage", "ADLS Gen2", "Key Vault", "Managed Identity", "Bicep", "Databricks"],
    AWS: ["S3", "EC2", "IAM", "CloudWatch", "Secure integrations"],
    Delivery: ["Docker", "GitHub Actions", "CI/CD", "Environment isolation", "Secret management", "Render"],
  }},
  "AI & machine learning": { icon: BrainCircuit, description: "Applied intelligence that is evaluated, explainable, and integrated into real products.", branches: {
    "Machine learning": ["Scikit-learn", "TensorFlow", "Feature engineering", "Model evaluation", "SHAP", "Random Forest"],
    "Document intelligence": ["OCR", "RAG workflows", "Document Q&A", "Embeddings", "Summarization", "Quiz generation"],
    "Computer vision": ["OpenCV", "Image preprocessing", "Visual inference", "AR workflows", "Model serving"],
  }},
  "Backend & automation": { icon: Server, description: "Python services and automation designed around reliability, security, and maintainability.", branches: {
    "Backend APIs": ["FastAPI", "Django", "Flask", "REST APIs", "Authentication", "PostgreSQL"],
    Automation: ["Web scraping", "Selenium", "Document automation", "Scheduled jobs", "API integrations", "Monitoring"],
    Quality: ["API testing", "Data quality", "Regression testing", "Error handling", "Security boundaries"],
  }},
  "Flutter products": { icon: Smartphone, description: "Cross-platform experiences connected to real services, data, and intelligent features.", branches: {
    Flutter: ["Dart", "Responsive UI", "State management", "Navigation", "Widget testing", "Release builds"],
    "Cloud services": ["Firebase", "Supabase", "Authentication", "Storage", "Realtime data", "Push workflows"],
    Integration: ["REST APIs", "Python backends", "Model inference", "File workflows", "Camera & media"],
  }},
} as const;

type SkillCategory = keyof typeof skillTree;

const skillLevels: Record<string, number> = {
  Python: 94, FastAPI: 90, Django: 82, Flask: 80, Pandas: 93, PySpark: 84, Selenium: 88, BeautifulSoup: 86, pytest: 81,
  Dart: 92, "Flutter SDK": 94, "Firebase integration": 88, "REST integration": 92, "Material UI": 90, "Widget testing": 82,
  SQL: 91, PostgreSQL: 89, "Azure SQL": 84, "Warehouse modeling": 87, "Analytics queries": 90, "Data validation": 91,
  "ETL / ELT": 92, "REST & SOAP APIs": 88, SFTP: 78, Pagination: 88, "Run ledgers": 84, Retries: 90,
  Databricks: 82, "Schema validation": 91, "Data contracts": 85, Observability: 80, "ADLS Gen2": 86, "Data marts": 87,
  "Power BI": 80, "Dimensional modeling": 84, "Azure Functions": 88, "Blob Storage": 88, "Key Vault": 82,
  "Managed Identity": 82, Bicep: 80, S3: 80, EC2: 76, IAM: 78, CloudWatch: 74, Docker: 82,
  "GitHub Actions": 80, "CI/CD": 82, "Secret management": 90, Render: 84, "Scikit-learn": 90, TensorFlow: 78,
  "Feature engineering": 88, "Model evaluation": 91, SHAP: 84, "Random Forest": 88, OCR: 88, "RAG workflows": 86,
  "Document Q&A": 92, Embeddings: 84, Summarization: 88, "Quiz generation": 86, OpenCV: 80, "Image preprocessing": 82,
  "Visual inference": 78, "AR workflows": 76, "Model serving": 88, "REST APIs": 93, Authentication: 86,
  "Web scraping": 90, Automation: 92, "Document automation": 90, "Scheduled jobs": 82, "API integrations": 91,
  Monitoring: 80, "API testing": 84, "Data quality": 91, "Regression testing": 78, "Error handling": 88,
  "Security boundaries": 84, "Responsive UI": 92, "State management": 88, Navigation: 90, "Release builds": 80,
  Firebase: 88, Supabase: 86, Storage: 86, "Realtime data": 82, "Push workflows": 76, "Python backends": 92,
  "File workflows": 88, "Camera & media": 82,
};

function levelFor(tool: string) { return skillLevels[tool] ?? 80; }

const projects = [
  { name: "Cloud Data Integration Platform", label: "Multi-source cloud ingestion", description: "Configuration-driven API ingestion, distributed transformation, validation, and analytics-ready delivery across Azure services.", fields: ["Data Engineering", "Python"], stack: ["Azure Functions", "PySpark", "Databricks", "Azure SQL"], href: "https://github.com/Abdul-Hadi-Jalil/cloud-data-integration-platform", visual: "architecture", flow: ["REST / SOAP", "Azure Functions", "Blob Storage", "Databricks", "Quality", "Analytics"] },
  { name: "Azure Data Warehouse Platform", label: "Governed commerce analytics", description: "Immutable raw captures, idempotent retries, transactional warehouse rebuilds, analytical marts, and operational alerts.", fields: ["Data Engineering", "Python"], stack: ["ADLS Gen2", "PostgreSQL", "Bicep", "Power BI"], href: "https://github.com/Abdul-Hadi-Jalil/azure-data-warehouse-platform", visual: "architecture", flow: ["Commerce APIs", "Azure Functions", "ADLS Gen2", "PostgreSQL", "Data Marts", "Power BI"] },
  { name: "Autism Screening ML", label: "Explainable machine learning", description: "A responsible screening workflow combining exploratory analysis, model comparison, evaluation, and SHAP-based explanations.", fields: ["AI / ML", "Python"], stack: ["Scikit-learn", "Pandas", "SHAP", "Jupyter"], href: "https://github.com/Abdul-Hadi-Jalil/asd-screening-ml", visual: "analysis", images: ["/projects/asd-model-comparison.png", "/projects/asd-shap-global.png"] },
  { name: "Autistic Spectrum Disorder", label: "Flutter + explainable ML", description: "A parent-focused mobile screening product backed by Python model serving, Firebase profiles, and explainable predictions.", fields: ["Flutter", "AI / ML", "Python"], stack: ["Flutter", "FastAPI", "Firebase", "Random Forest"], href: "https://github.com/Abdul-Hadi-Jalil/Autistic-Spectrum-Disorder", visual: "mobile", images: ["/projects/asd-care-mobile.png"] },
  { name: "AskDocAI", label: "Mobile document intelligence", description: "Document Q&A, summarization, and quiz generation delivered through a focused mobile experience and Python AI services.", fields: ["Flutter", "AI / ML", "Python"], stack: ["Flutter", "Python", "Document AI", "Firebase"], href: "https://github.com/Abdul-Hadi-Jalil/AskDocAI", visual: "mobile", images: ["/projects/askdocai-mobile-launch.png", "/projects/aifile-mobile-entry.png"] },
  { name: "AR Wardrobe", label: "Computer vision + mobile", description: "A mobile product concept that combines wardrobe discovery, visual interaction, and augmented-reality workflows.", fields: ["Flutter", "AI / ML"], stack: ["Flutter", "Computer Vision", "AR", "Mobile UI"], href: "https://github.com/Abdul-Hadi-Jalil/AR-Wardrobe", visual: "mobile", images: ["/projects/ar-wardrobe-mobile.png", "/projects/ar-wardrobe-brands.png"] },
  { name: "DocuMind", label: "AI document workspace", description: "A complete document workspace connecting OCR and conversational intelligence to a clear, practical user workflow.", fields: ["AI / ML", "Python"], stack: ["Python", "OCR", "Document Q&A", "APIs"], href: "https://github.com/Abdul-Hadi-Jalil/DocuMind", visual: "web", images: ["/projects/documind-landing.png"] },
  { name: "Operations Document Automation", label: "Workflow automation", description: "Operations automation connecting work-management data, cloud storage, and planning documents with traceable outputs.", fields: ["Python", "Data Engineering"], stack: ["Python", "APIs", "Cloud Storage", "Automation"], href: "https://github.com/Abdul-Hadi-Jalil/operations-document-automation", visual: "architecture", flow: ["Work Systems", "Python Services", "Validation", "Cloud Storage", "Documents", "Monitoring"] },
  { name: "StudyAce AI", label: "AI-assisted learning", description: "A focused learning product that brings intelligent support into a practical mobile study workflow.", fields: ["Flutter", "AI / ML"], stack: ["Flutter", "Dart", "AI Workflows", "Mobile UI"], href: "https://github.com/Abdul-Hadi-Jalil/StudyAce-AI", visual: "mobile", images: ["/projects/studyace-mobile-login.png"] },
  { name: "UCP StudyHub", label: "Education platform", description: "A learning-resource application with discovery, PDF viewing, role-aware navigation, and administration workflows.", fields: ["Flutter"], stack: ["Flutter", "PDF Workflows", "Authentication", "Mobile UI"], href: "https://github.com/Abdul-Hadi-Jalil/ucp-studyhub", visual: "mobile", images: ["/projects/ucp-studyhub-mobile-login.png", "/projects/pdf-viewer-mobile-entry.png"] },
  { name: "SahiCheck", label: "Cross-platform product", description: "A carefully structured mobile experience with authentication, service integration, and an approachable visual language.", fields: ["Flutter", "Python"], stack: ["Flutter", "Python", "Authentication", "APIs"], href: "https://github.com/Abdul-Hadi-Jalil/SahiCheck", visual: "mobile", images: ["/projects/sahicheck-mobile-login.png"] },
  { name: "HousePrice Estimator", label: "Applied machine learning", description: "A practical interface that turns property inputs into a clear machine-learning estimate backed by a Python workflow.", fields: ["AI / ML", "Python"], stack: ["Python", "Regression", "Model Serving", "Web UI"], href: "https://github.com/Abdul-Hadi-Jalil/HousePrice-Estimator", visual: "web", images: ["/projects/estimator-form.png"] },
  { name: "Marrow Insight", label: "Healthcare intelligence", description: "A data-led healthcare interface designed to make complex analytical information easier to explore and understand.", fields: ["AI / ML", "Python"], stack: ["Python", "Healthcare Data", "Analytics", "Web UI"], href: "https://github.com/Abdul-Hadi-Jalil/Marrow-Insight", visual: "web", images: ["/projects/marrow-insight-home.png"] },
];

const fieldFilters: ProjectField[] = ["All", "Data Engineering", "AI / ML", "Flutter", "Python"];

function ArchitectureVisual({ flow }: { flow: readonly string[] }) {
  const icons = [Cloud, Server, Database, Network, CheckCircle2, BarChart3];
  return <div className="architecture-visual" aria-label={`Architecture flow: ${flow.join(" to ")}`}>{flow.map((item, index) => { const Icon = icons[index % icons.length]; return <div className="flow-step" key={item}><div className={`flow-node node-${index}`}><Icon size={21}/><span>{item}</span></div>{index < flow.length - 1 && <ArrowRight className="flow-arrow" size={18}/>}</div>; })}</div>;
}

function ProjectVisual({ project }: { project: typeof projects[number] }) {
  if (project.visual === "architecture" && project.flow) return <ArchitectureVisual flow={project.flow}/>;
  if (project.visual === "mobile") return <div className="phone-gallery">{project.images?.map((image, index) => <div className={`phone phone-${index}`} key={image}><span/><img src={image} alt={`${project.name} screen ${index + 1}`}/></div>)}</div>;
  if (project.visual === "analysis") return <div className="analysis-gallery">{project.images?.map((image, index) => <figure key={image}><img src={image} alt={`${project.name} analysis ${index + 1}`}/></figure>)}</div>;
  return <div className="browser-frame"><div className="browser-bar"><i/><i/><i/></div><img src={project.images?.[0]} alt={`${project.name} interface`}/></div>;
}

export default function Home() {
  const [mobileNav, setMobileNav] = useState(false);
  const [category, setCategory] = useState<SkillCategory>("Programming languages");
  const branches = skillTree[category].branches;
  const [branch, setBranch] = useState<string>(Object.keys(branches)[0]);
  const [projectFilter, setProjectFilter] = useState<ProjectField>("All");
  const activeTools = branches[branch as keyof typeof branches] as readonly string[];
  const visibleProjects = projectFilter === "All" ? projects : projects.filter(project => project.fields.includes(projectFilter));
  function chooseCategory(next: SkillCategory) { setCategory(next); setBranch(Object.keys(skillTree[next].branches)[0]); }
  function sendMessage(event: FormEvent<HTMLFormElement>) { event.preventDefault(); const data = new FormData(event.currentTarget); const subject = encodeURIComponent(String(data.get("subject") || "Portfolio enquiry")); const message = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`); window.location.href = `mailto:abdulhadijalil34@gmail.com?subject=${subject}&body=${message}`; }

  return <main id="top">
    <nav className="site-nav"><a className="nav-brand" href="#top"><span>AH</span><strong>Abdul Hadi Jalil</strong></a><button className="nav-toggle" onClick={() => setMobileNav(!mobileNav)} aria-label="Toggle navigation">{mobileNav ? <X/> : <Menu/>}</button><div className={`nav-links ${mobileNav ? "open" : ""}`} onClick={() => setMobileNav(false)}><a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#contact">Contact</a></div><a className="nav-hire" href="#contact">Let&apos;s talk <ArrowRight size={15}/></a></nav>

    <section className="hero-section"><div className="hero-aura"/><div className="hero-content"><p className="intro-line">Hello, I&apos;m Abdul Hadi Jalil</p><h1>Data &amp; AI engineer building <em>reliable products</em> from pipeline to interface.</h1><p className="hero-summary">I design cloud data platforms, applied AI systems, Python services, and Flutter products—bringing architecture, implementation, and user experience into one clear delivery.</p><div className="hero-actions"><a className="button primary" href="#projects">View my work <ArrowRight size={17}/></a><button className="button secondary cv-pending" title="CV will be added after the verified document is provided" disabled><Download size={17}/>CV coming soon</button></div><div className="social-row" aria-label="Professional links"><a className="social github" href="https://github.com/Abdul-Hadi-Jalil" target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a><a className="social linkedin" href="https://www.linkedin.com/in/abdulhadijalil/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a><a className="social email" href="mailto:abdulhadijalil34@gmail.com" aria-label="Email"><Mail/></a></div></div><div className="portrait-wrap"><div className="portrait-frame"><img src="/projects/abdul-hadi-professional.png" alt="Professional portrait of Abdul Hadi Jalil"/></div><div className="portrait-note"><span className="status-dot"/><div><strong>Available for opportunities</strong><small>Data · AI · Python · Flutter</small></div></div></div></section>

    <section className="about-simple" id="about"><div className="section-label"><span>01</span>About</div><div className="about-body"><p className="about-statement">I turn complex data and intelligent systems into software that people can understand, trust, and use.</p><div className="about-grid"><p>My work spans governed ingestion pipelines, analytical platforms, document intelligence, explainable machine learning, backend APIs, automation, and cross-platform mobile products.</p><p>I care about dependable architecture as much as the final experience. That means clear data contracts, isolated secrets, observable failures, maintainable services, and documentation that helps clients and engineering teams move forward confidently.</p></div><div className="focus-strip"><span>Data platforms</span><span>Applied AI</span><span>Python systems</span><span>Flutter products</span></div></div></section>

    <section className="skills-section" id="skills"><div className="section-heading"><div><p className="eyebrow">Explore the stack</p><h2>Skills, with the layers<br/>opened up.</h2></div><p>Select a field, then choose a specialization to inspect the platforms, frameworks, modules, and engineering practices behind it.</p></div><div className="skill-explorer"><div className="category-tabs" role="tablist">{(Object.keys(skillTree) as SkillCategory[]).map(item => { const Icon = skillTree[item].icon; return <button key={item} className={category === item ? "active" : ""} onClick={() => chooseCategory(item)}><Icon size={18}/><span>{item}</span></button>; })}</div><div className="skill-stage"><div className="skill-context"><p className="eyebrow">{category}</p><h3>{category}</h3><p>{skillTree[category].description}</p><small>Relative depth reflects implemented portfolio work, not a certification score.</small></div><div className="branch-tabs" role="tablist">{Object.keys(branches).map(item => <button key={item} className={branch === item ? "active" : ""} onClick={() => setBranch(item)}>{item}<ArrowRight size={14}/></button>)}</div><div className="tool-cloud" aria-live="polite">{activeTools.map((tool, index) => { const level = levelFor(tool); return <span key={tool} title={`${tool}: ${level}% relative portfolio depth`} style={{"--delay":`${index * 35}ms`, "--level":`${level}%`} as React.CSSProperties}><i/><CheckCircle2 size={15}/><em>{tool}</em><b>{level}%</b></span>; })}</div></div></div></section>

    <section className="projects-section" id="projects"><div className="section-heading"><div><p className="eyebrow">Selected engineering work</p><h2>Systems made<br/>visible.</h2></div><p>Architecture views for data and AI systems; real product screens for mobile and web experiences.</p></div><div className="project-filters">{fieldFilters.map(field => <button key={field} className={projectFilter === field ? "active" : ""} onClick={() => setProjectFilter(field)}>{field}<span>{field === "All" ? projects.length : projects.filter(project => project.fields.includes(field)).length}</span></button>)}</div><div className="project-list">{visibleProjects.map((project, index) => <article className={`showcase-card visual-${project.visual}`} key={project.name}><div className="project-visual"><ProjectVisual project={project}/></div><div className="project-copy"><p className="project-number">{String(index + 1).padStart(2,"0")} / {project.label}</p><h3>{project.name}</h3><p>{project.description}</p><ul>{project.stack.map(item => <li key={item}>{item}</li>)}</ul><a href={project.href} target="_blank" rel="noreferrer">View repository <ExternalLink size={15}/></a></div></article>)}</div></section>

    <section className="experience-section" id="experience"><div className="section-heading"><div><p className="eyebrow">Professional record</p><h2>Experience,<br/>verified.</h2></div><p>This section is prepared for your employment history, achievements, certifications, and downloadable CV. Only verified details from the documents you provide will be published.</p></div><div className="credential-preview"><div><BriefcaseBusiness/><h3>Work experience</h3><p>Role, organization, period, measurable contribution, and verification links.</p></div><div><Sparkles/><h3>Achievements</h3><p>A clear timeline for awards, milestones, and professional recognition.</p></div><div><Blocks/><h3>Certifications</h3><p>Credential name, issuing organization, date, and supporting certificate.</p></div></div><p className="pending-note">Pending your CV, role-specific resumes, and credential files. No unverified claims are shown.</p></section>

    <section className="contact-section" id="contact"><div className="contact-intro"><p className="eyebrow">Start a conversation</p><h2>Have a data, AI, Python, or Flutter problem?</h2><p>Tell me what you are building, what is blocked, and what a successful outcome looks like.</p><div className="contact-methods"><a href="mailto:abdulhadijalil34@gmail.com"><span className="contact-icon email"><Mail/></span><div><small>Email</small><strong>abdulhadijalil34@gmail.com</strong></div></a><a href="https://www.linkedin.com/in/abdulhadijalil/" target="_blank" rel="noreferrer"><span className="contact-icon linkedin"><Linkedin/></span><div><small>LinkedIn</small><strong>Connect professionally</strong></div></a><a href="https://github.com/Abdul-Hadi-Jalil" target="_blank" rel="noreferrer"><span className="contact-icon github"><Github/></span><div><small>GitHub</small><strong>Explore the code</strong></div></a></div></div><form className="contact-form" onSubmit={sendMessage}><div className="form-row"><label>Your name<input name="name" required placeholder="Name"/></label><label>Your email<input name="email" type="email" required placeholder="you@company.com"/></label></div><label>Subject<input name="subject" required placeholder="Project or opportunity"/></label><label>Message<textarea name="message" rows={6} required placeholder="A short description of what you need..."/></label><button type="submit">Send message <Send size={17}/></button></form></section>

    <footer><a className="nav-brand" href="#top"><span>AH</span><strong>Abdul Hadi Jalil</strong></a><p>Data &amp; AI engineer · Flutter &amp; Python full-stack developer</p><span>© 2026</span></footer>
  </main>;
}
