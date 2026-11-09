"use client";

import { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";

type Field = "All" | "AI & Data" | "Python" | "Flutter" | "Web";

const projects = [
  { name: "AskDocAI", label: "AI document intelligence", description: "Conversational document Q&A, summaries, and quiz generation in a mobile-first experience.", stack: ["Flutter", "Python", "AI & Data"], image: "/projects/askdocai-mobile-launch.png", href: "https://github.com/Abdul-Hadi-Jalil/AskDocAI", tone: "violet" },
  { name: "StudyAce AI", label: "AI-powered learning", description: "A focused learning product that brings intelligent assistance into a practical study workflow.", stack: ["Flutter", "AI & Data"], image: "/projects/studyace-mobile-login.png", href: "https://github.com/Abdul-Hadi-Jalil/StudyAce-AI", tone: "blue" },
  { name: "DocuMind", label: "Full-stack AI workspace", description: "A clean web workspace for understanding and working with documents through AI.", stack: ["Python", "Web", "AI & Data"], image: "/projects/documind-landing.png", href: "https://github.com/Abdul-Hadi-Jalil/DocuMind", tone: "amber" },
  { name: "AR Wardrobe", label: "Computer vision & mobile", description: "An augmented-reality wardrobe concept exploring visual product interaction on mobile.", stack: ["Flutter", "AI & Data"], image: "/projects/ar-wardrobe-mobile.png", href: "https://github.com/Abdul-Hadi-Jalil/AR-Wardrobe", tone: "pink" },
  { name: "Marrow Insight", label: "Healthcare intelligence", description: "A data-led healthcare interface designed to make complex analytical information easier to navigate.", stack: ["Python", "Web", "AI & Data"], image: "/projects/marrow-insight-home.png", href: "https://github.com/Abdul-Hadi-Jalil/Marrow-Insight", tone: "teal" },
  { name: "UCP StudyHub", label: "Education platform", description: "A learning-resource application with discovery, PDF viewing, role-aware navigation, and administration.", stack: ["Flutter", "AI & Data"], image: "/projects/ucp-studyhub-mobile-login.png", href: "https://github.com/Abdul-Hadi-Jalil/ucp-studyhub", tone: "indigo" },
  { name: "SahiCheck", label: "Cross-platform product", description: "A carefully structured mobile experience with authentication and an approachable visual language.", stack: ["Flutter", "Python"], image: "/projects/sahicheck-mobile-login.png", href: "https://github.com/Abdul-Hadi-Jalil/SahiCheck", tone: "green" },
  { name: "HousePrice Estimator", label: "Machine learning application", description: "A practical web interface that turns property inputs into a clear machine-learning estimate.", stack: ["Python", "Web", "AI & Data"], image: "/projects/estimator-form.png", href: "https://github.com/Abdul-Hadi-Jalil/HousePrice-Estimator", tone: "orange" },
  { name: "Autism Spectrum Screening", label: "Responsible ML workflow", description: "A parent-focused screening application combining questionnaire guidance, profiles, and model serving.", stack: ["Flutter", "Python", "AI & Data"], image: "/projects/asd-care-mobile.png", href: "https://github.com/Abdul-Hadi-Jalil/Autistic-Spectrum-Disorder", tone: "cyan" },
];

const stackGroups = [
  { id: "Flutter", title: "Flutter products", summary: "Cross-platform applications from interface to backend integration.", tools: [["flutter", "Flutter"], ["dart", "Dart"], ["firebase", "Firebase"], ["supabase", "Supabase"], ["androidstudio", "Android Studio"], ["figma", "Figma"]] },
  { id: "AI & Data", title: "AI & data engineering", summary: "Models, document intelligence, computer vision, and production data workflows.", tools: [["python", "Python"], ["tensorflow", "TensorFlow"], ["scikitlearn", "Scikit-learn"], ["pandas", "Pandas"], ["opencv", "OpenCV"], ["jupyter", "Jupyter"]] },
  { id: "Python", title: "Python full stack", summary: "Reliable APIs, model serving, automation, and database-backed products.", tools: [["python", "Python"], ["fastapi", "FastAPI"], ["django", "Django"], ["flask", "Flask"], ["postgresql", "PostgreSQL"], ["docker", "Docker"]] },
  { id: "Web", title: "Web engineering", summary: "Responsive client experiences connected to dependable application services.", tools: [["react", "React"], ["nextdotjs", "Next.js"], ["typescript", "TypeScript"], ["html5", "HTML"], ["css", "CSS"], ["git", "Git"]] },
];

const radar = [
  { label: "AI / ML", value: 88 }, { label: "Python", value: 92 }, { label: "Data", value: 84 },
  { label: "Web", value: 78 }, { label: "Flutter", value: 90 }, { label: "Product", value: 82 },
];

function point(value: number, index: number, total = 6, radius = 128) {
  const angle = -Math.PI / 2 + index * Math.PI * 2 / total;
  const r = radius * value / 100;
  return [160 + Math.cos(angle) * r, 160 + Math.sin(angle) * r];
}
function polygon(values: number[]) { return values.map((value, index) => point(value, index, values.length).join(",")).join(" "); }

export default function Home() {
  const [filter, setFilter] = useState<Field>("All");
  const [activeStack, setActiveStack] = useState(stackGroups[0]);
  const visible = filter === "All" ? projects : projects.filter((project) => project.stack.includes(filter));

  return <main>
    <nav className="nav-shell" aria-label="Primary navigation">
      <a className="brand" href="#top"><span>AH</span><strong>Abdul Hadi Jalil</strong></a>
      <div className="nav-links"><a href="#about">About</a><a href="#stack">Stack</a><a href="#work">Projects</a></div>
      <a className="nav-cta" href="https://github.com/Abdul-Hadi-Jalil" target="_blank" rel="noreferrer">GitHub <ArrowRight size={15}/></a>
    </nav>

    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true"/>
      <div className="hero-copy"><div className="availability"><span/>Available for opportunities</div><p className="eyebrow">Data &amp; AI engineer · Flutter &amp; Python developer</p><h1>I engineer intelligent products with <em>clarity and purpose.</em></h1><p className="hero-lede">From predictive systems and document intelligence to polished mobile and web products, I connect the model, the backend, and the experience.</p><div className="hero-actions"><a className="button button-primary" href="#about">Get to know me <ArrowRight size={17}/></a><a className="button button-secondary" href="#work">Explore projects</a></div></div>
      <div className="radar-card" aria-label="Relative experience across engineering fields"><div className="radar-title"><span>FIELD PROFILE</span><small>Relative project experience</small></div><svg viewBox="0 0 320 320" role="img" aria-label="Radar chart showing strongest experience in Python, Flutter, and AI">{[25,50,75,100].map(level => <polygon key={level} points={polygon(radar.map(() => level))} className="radar-grid"/>)}{radar.map((_,i) => { const [x,y]=point(100,i); return <line key={i} x1="160" y1="160" x2={x} y2={y} className="radar-axis"/>; })}<polygon points={polygon(radar.map(item => item.value))} className="radar-shape"/>{radar.map((item,index) => { const [x,y]=point(100,index); return <g key={item.label}><circle cx={x} cy={y} r="3" className="radar-dot"/><text x={x} y={y+(y<160?-12:18)} textAnchor={x<150?"end":x>170?"start":"middle"} className="radar-label">{item.label}</text></g>; })}</svg><p>Based on the balance of work represented in this portfolio—not a certification score.</p></div>
    </section>

    <section className="about-section" id="about"><div className="about-kicker"><span>01</span><p>About me</p></div><div className="about-copy"><h2>Range across disciplines.<br/><em>Focus on outcomes.</em></h2><p className="about-lead">I&apos;m Abdul Hadi Jalil—a data and AI engineer, Flutter developer, and Python full-stack developer.</p><div className="about-columns"><p>I work where intelligent models, reliable backend systems, and thoughtful interfaces meet. My projects span education, document intelligence, healthcare, augmented reality, and predictive applications.</p><p>I care about more than making software run. I structure products so clients and teams can understand the architecture, evaluate the decisions, and confidently build on the result.</p></div><a className="text-link" href="https://github.com/Abdul-Hadi-Jalil" target="_blank" rel="noreferrer"><ExternalLink size={18}/>Explore my engineering work</a></div></section>

    <section className="stack-section" id="stack"><div className="section-heading"><div><p className="eyebrow">Technology stack</p><h2>Choose a field.<br/>See the tools behind it.</h2></div><p>Select a discipline to explore the technologies, products, frameworks, and platforms I have worked with.</p></div><div className="stack-explorer"><div className="stack-tabs" role="tablist">{stackGroups.map((group,index) => <button key={group.id} className={activeStack.id===group.id?"active":""} onClick={() => setActiveStack(group)} role="tab" aria-selected={activeStack.id===group.id}><span>0{index+1}</span><strong>{group.title}</strong><ArrowRight size={18}/></button>)}</div><div className="stack-detail" role="tabpanel"><p className="stack-summary">{activeStack.summary}</p><div className="tool-grid">{activeStack.tools.map(([slug,name]) => <div className="tool" key={name}><img src={`https://cdn.simpleicons.org/${slug}`} alt=""/><span>{name}</span></div>)}</div></div></div></section>

    <section className="section" id="work"><div className="section-heading"><div><p className="eyebrow">Selected work</p><h2>Filter the portfolio<br/>by your priority.</h2></div><p>Projects often cross disciplines. Choose a field to focus the collection, then open any repository for its code and documentation.</p></div><div className="filter-bar">{(["All","AI & Data","Python","Flutter","Web"] as Field[]).map(item => <button key={item} className={filter===item?"active":""} onClick={() => setFilter(item)}>{item}<span>{item==="All"?projects.length:projects.filter(p => p.stack.includes(item)).length}</span></button>)}</div><p className="results-note">Showing {visible.length} project{visible.length!==1?"s":""}{filter!=="All"&&<> in <strong>{filter}</strong></>}</p><div className="projects-grid">{visible.map((project,index) => <article className={`project-card tone-${project.tone}`} key={project.name}><div className="project-content"><div><p className="project-index">0{index+1} / {project.label}</p><h3>{project.name}</h3><p>{project.description}</p></div><div><div className="tags">{project.stack.map(item => <span key={item}>{item}</span>)}</div><a href={project.href} target="_blank" rel="noreferrer">View project <ExternalLink size={15}/></a></div></div><div className="project-media"><div className="media-glow"/><img src={project.image} alt={`${project.name} interface preview`}/></div></article>)}</div><a className="all-projects" href="https://github.com/Abdul-Hadi-Jalil?tab=repositories" target="_blank" rel="noreferrer">View all repositories <ArrowRight size={17}/></a></section>

    <section className="contact-section"><p className="eyebrow">For teams, clients, and collaborators</p><h2>Let&apos;s build something<br/><em>worth using.</em></h2><a className="button button-light" href="https://github.com/Abdul-Hadi-Jalil" target="_blank" rel="noreferrer">Connect on GitHub <ArrowRight size={18}/></a></section>
    <footer><div className="brand"><span>AH</span><strong>Abdul Hadi Jalil</strong></div><p>Data &amp; AI engineer · Flutter &amp; Python full-stack developer</p><p>© 2026</p></footer>
  </main>;
}
