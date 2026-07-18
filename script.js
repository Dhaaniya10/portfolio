// ---------- Content data ----------
const dataEngProjects = [
  {
    tag: "DE · 01", icon: "🔁",
    title: "On-Premises → On-Premises Data Migration",
    client: "OptiSol",
    desc: "Migrated 30+ tables from SQL Server to SQL Server using Azure Data Factory pipelines while preserving schema integrity and ensuring zero data loss.",
    stack: ["Azure Data Factory", "SQL Server", "ETL"]
  },
  {
    tag: "DE · 02", icon: "❄️",
    title: "On-Premises → Cloud Data Migration",
    client: "OptiSol",
    desc: "Migrated 30+ tables from SQL Server to Snowflake by staging data in Azure Blob Storage and connecting Azure Data Factory to Snowflake using SAS URL-based authentication, ensuring secure, credential-free transfer end to end.",
    stack: ["Azure Blob Storage", "SAS URL", "Snowflake", "Azure Data Factory"]
  },
  {
    tag: "DE · 03", icon: "🔀",
    title: "Sybase → PostgreSQL Migration",
    client: "OptiSol",
    desc: "Built metadata-driven ADF pipelines with Lookup, Get Metadata, ForEach and Copy Activity to migrate hundreds of Sybase tables into PostgreSQL without manual intervention, using dynamic file-to-table mapping expressions.",
    stack: ["Azure Data Factory", "ADLS Gen2", "PostgreSQL"]
  },
  {
    tag: "DE · 04", icon: "🗂️",
    title: "Data Governance Framework",
    client: "OptiSol",
    desc: "Built data quality checks across 6 dimensions — completeness, accuracy, uniqueness, integrity, consistency and validity — with configurable regex rules, compliance reporting, and an interactive Streamlit governance dashboard.",
    stack: ["Streamlit", "Data Quality", "Metadata Catalogue"]
  },
  {
    tag: "DE · 05", icon: "🧩",
    title: "Metadata Extraction Module",
    client: "OptiSol",
    desc: "Scalable metadata extraction framework across SQL Server, Snowflake, PostgreSQL, Oracle, BigQuery, CSV and Excel — extracting tables, columns, stored procedures, functions and triggers into a structured JSON format, with a VS Code-style JSON explorer and Azure OpenAI-generated table descriptions.",
    stack: ["Azure OpenAI", "REST APIs", "JSON Schema"]
  },
  {
    tag: "DE · 06", icon: "🧮",
    title: "Automated Schema Comparator",
    client: "OptiSol",
    desc: "Automated tool comparing SQL Server source and target schemas post-migration, flagging structural changes with an approval workflow — approved changes apply to the target, rejected changes are logged with history.",
    stack: ["SQL Server", "Schema Validation", "Python"]
  },
  {
    tag: "DE · 07", icon: "📊",
    title: "BigMart Sales Analytics",
    client: "Databricks & Power BI",
    desc: "End-to-end sales analytics pipeline on Databricks Serverless (PySpark) — ingestion, cleaning, missing value treatment and feature engineering on retail data, feeding an interactive Power BI dashboard with KPIs, sales trends and outlet performance.",
    stack: ["PySpark", "Delta Tables", "Power BI"]
  },
  {
    tag: "DE · 08", icon: "🧪",
    title: "SQL Server Source-Target Validation",
    client: "OptiSol",
    desc: "Streamlit-based validation tool with pyodbc connectivity for SQL Server source and target systems, key-based record matching, regex-driven value checks, and discrepancy dashboards for migration audit and sync confidence.",
    stack: ["Streamlit", "pyodbc", "SQL Server"]
  },
  {
    tag: "DE · 09", icon: "📋",
    title: "Data Quality Analyzer Pro",
    client: "OptiSol",
    desc: "Enterprise-grade data quality solution with configurable column rules, compliance reports, and interactive dashboards for pre-migration validation and warehouse quality monitoring.",
    stack: ["Streamlit", "Python", "Data Quality"]
  },
];

const aiProjects = [
  {
    tag: "AI · 01", icon: "📄",
    title: "BRD-Agent — Oracle Forms Reverse Engineering",
    client: "AI-Powered Oracle Forms BRD & Traceability Platform",
    desc: "AI agent that converts Oracle Forms XML metadata into structured Business Requirements Documents using Amazon Bedrock LLMs — parsing forms, blocks, triggers, LOVs and program units into standardised 15-section BRDs, with automated traceability reports, credit-based usage, and license expiry management.",
    stack: ["FastAPI", "Amazon Bedrock", "AWS S3", "Oracle Forms XML"]
  },
  {
    tag: "AI · 02", icon: "🧠",
    title: "LLM-Based Python Transformation Generator",
    client: "OptiSol",
    desc: "Transformation engine that generates executable Polars scripts from plain-English instructions — users upload CSV/Excel, describe the transformation, and receive verified, ready-to-run Python scripts with a Streamlit UI and time estimation.",
    stack: ["LLM", "Polars", "Streamlit"]
  },
  {
    tag: "AI · 03", icon: "📈",
    title: "Quality Metrics Dashboard",
    client: "OptiSol",
    desc: "Interactive Streamlit dashboard connected to SQL and CSV sources, computing completeness, consistency, accuracy, validity and timeliness scores alongside column-wise quality analysis and regex-based pattern validation.",
    stack: ["Streamlit", "SQL", "Data Quality"]
  },
  {
    tag: "AI · 04", icon: "📚",
    title: "Streamlit-Based Data Catalog",
    client: "OptiSol",
    desc: "Centralised metadata management tool with business glossary, cross-dataset metadata search, and regex-based sensitive data detection — later converted into RESTful APIs for backend integration.",
    stack: ["Streamlit", "REST APIs", "Data Governance"]
  },
  {
    tag: "AI · 05", icon: "🩺",
    title: "Smart Diagnosis of Rotating Machinery",
    client: "IEEE Publication",
    desc: "AI-based predictive maintenance system using vibration analysis and ISO 10816 standards, with tuned XGBoost and ensemble models detecting imbalance, misalignment and bearing defects, plus a real-time health monitoring dashboard.",
    stack: ["XGBoost", "Feature Engineering", "IEEE Published"]
  },
  {
    tag: "AI · 06", icon: "🩹",
    title: "NeuroGuard — Wearable Seizure Detection",
    client: "NEXATHON 2025 · Runner-Up",
    desc: "Python backend with AutoGluon-powered model training, LightGBM inference, and Arduino-based wearable sensors for seizure detection — winner at TNWISE 2025.",
    stack: ["Python", "AutoGluon", "Arduino"]
  },
  {
    tag: "AI · 07", icon: "🗂️",
    title: "Data Catalogue Application",
    client: "OptiSol",
    desc: "Metadata exploration platform for SQL Server, PostgreSQL and MySQL with real-time schema discovery, table documentation, sample data preview, and metadata-driven search for analysts and governance teams.",
    stack: ["Streamlit", "SQLAlchemy", "SQL Server"]
  },
];

const skillGroups = [
  { cat: "Cloud & Data Platforms", items: ["Azure (ADF, SQL DB, Blob)", "AWS (S3, Bedrock)", "Snowflake", "Databricks", "Microsoft Fabric"] },
  { cat: "Data Engineering", items: ["ETL / ELT Pipeline Design", "Data Migration", "CDC & Incremental Load", "Oracle Forms", "Data Warehouse Architecture"] },
  { cat: "AI & Language Models", items: ["Azure OpenAI", "Amazon Bedrock", "RAG Architectures", "Prompt Engineering", "MCP"] },
  { cat: "Databases", items: ["SQL Server", "PostgreSQL", "Snowflake", "Oracle"] },
  { cat: "Programming", items: ["Python", "SQL", "C++", "Pandas"] },
  { cat: "Tools & Workflow", items: ["FastAPI", "Git", "Streamlit", "Power BI"] },
];

const certs = [
  { emoji: "🧠", name: "IBM AI Fundamentals", issuer: "IBM" },
  { emoji: "🧱", name: "Databricks Fundamentals", issuer: "Databricks" },
  { emoji: "✨", name: "Generative AI Fundamentals", issuer: "Databricks" },
  { emoji: "❄️", name: "Snowflake Hands-On Essentials — Data Engineering", issuer: "Snowflake" },
  { emoji: "💾", name: "SQL (Intermediate)", issuer: "HackerRank" },
  { emoji: "🔗", name: "Ingest Data with Dataflows Gen2 in Microsoft Fabric", issuer: "Microsoft" },
  { emoji: "🤖", name: "Introduction to Machine Learning", issuer: "NPTEL" },
  { emoji: "🗣️", name: "Linguaskill — Grade B2", issuer: "Cambridge / BEC" },
];

const awards = [
  {
    emoji: "🏆", name: "Certificate of Appreciation", date: "April 2026",
    desc: "Recognised by the CTO at OptiSol Solutions for exceptional contributions to Automation and Generative AI initiatives, delivering high-quality solutions with strong ownership."
  },
  {
    emoji: "🌸", name: "TN Women in Science & Engineering — Hackathon Winner", date: "2025",
    desc: "Won the Tamil Nadu Women In Science and Engineering 2025 Hackathon."
  },
  {
    emoji: "📡", name: "5G/6G Hackathon — Finalist", date: "September 2024",
    desc: "Finalist among teams at the 5G & 6G Hackathon conducted by ITU / IISc Bangalore, for the Harvest Guard precision-agriculture platform."
  },
  {
    emoji: "🥈", name: "NEXATHON 2025 — Runner-Up (AI/ML)", date: "2025",
    desc: "Runner-up in the AI/ML domain for NeuroGuard, a wearable seizure detection system."
  },
];
const languages = [
  { flag: "🇬🇧", name: "English", level: "Professional Fluency (B2)" },
   { flag: "🇮🇳", name: "Hindi", level: "Fluent" },
  { flag: "🇮🇳", name: "Tamil", level: "Native" },
  { flag: "🇮🇳", name: "Malayalam", level: "Native" }
];

// ---------- Render helpers ----------
function renderProjectCards(list, mountId){
  const mount = document.getElementById(mountId);
  mount.innerHTML = list.map(p => `
    <article class="proj-card reveal">
      <p class="proj-tag">${p.tag}</p>
      <span class="proj-icon">${p.icon}</span>
      <h3 class="proj-title">${p.title}</h3>
      <p class="proj-client">${p.client}</p>
      <p class="proj-desc">${p.desc}</p>
      <div class="proj-stack">${p.stack.map(s => `<span class="chip">${s}</span>`).join("")}</div>
    </article>
  `).join("");
}

function renderSkills(){
  const mount = document.getElementById("skillsGrid");
  mount.innerHTML = skillGroups.map(g => `
    <div class="skill-card reveal">
      <p class="skill-cat">${g.cat}</p>
      <ul>${g.items.map(i => `<li>${i}</li>`).join("")}</ul>
    </div>
  `).join("");
}

function renderCerts(){
  const mount = document.getElementById("certGrid");
  mount.innerHTML = certs.map(c => `
    <div class="cert-card reveal">
      <span class="cert-emoji">${c.emoji}</span>
      <div>
        <p class="cert-name">${c.name}</p>
        <p class="cert-issuer">${c.issuer}</p>
      </div>
    </div>
  `).join("");
}

function renderAwards(){
  const mount = document.getElementById("awardGrid");
  mount.innerHTML = awards.map(a => `
    <div class="award-card reveal">
      <span class="award-emoji">${a.emoji}</span>
      <h3 class="award-name">${a.name}</h3>
      <span class="award-date">${a.date}</span>
      <p class="award-desc">${a.desc}</p>
    </div>
  `).join("");
}
function renderLanguages(){
  const mount = document.getElementById("langGrid");
  mount.innerHTML = languages.map(l => `
    <div class="lang-card reveal">
      <span class="lang-flag">${l.flag}</span>
      <div class="lang-info">
        <p class="lang-name">${l.name}</p>
        <p class="lang-level">${l.level}</p>
      </div>
    </div>
  `).join("");
}
renderProjectCards(dataEngProjects, "deGrid");
renderProjectCards(aiProjects, "aiGrid");
renderSkills();
renderCerts();
renderAwards();
renderLanguages()
// ---------- Typing role effect ----------
const roles = [
  "Data & AI Engineering",
  "Reverse Engineering",
  "Building LLM-Powered Automation",
];
const typedEl = document.getElementById("typedRole");
let roleIdx = 0, charIdx = 0, deleting = false;

function typeLoop(){
  if (!typedEl) return;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced){ typedEl.textContent = roles[0]; return; }

  const current = roles[roleIdx];
  if (!deleting){
    charIdx++;
    typedEl.textContent = current.slice(0, charIdx);
    if (charIdx === current.length){
      deleting = true;
      setTimeout(typeLoop, 1600);
      return;
    }
  } else {
    charIdx--;
    typedEl.textContent = current.slice(0, charIdx);
    if (charIdx === 0){
      deleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
    }
  }
  setTimeout(typeLoop, deleting ? 35 : 55);
}
typeLoop();

// ---------- Scroll reveal ----------
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// ---------- Mobile nav ----------
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");
navToggle?.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a =>
  a.addEventListener("click", () => nav.classList.remove("open"))
);

// ---------- Footer year ----------
document.getElementById("year").textContent = new Date().getFullYear();
