import React, { type Dispatch, type SetStateAction, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CalendarDays,
  FolderOpen,
  Plane,
  NotebookPen,
  ChartPie,
  TriangleAlert,
  Code2,
  FileText,
  Database,
  Container,
  Microscope,
  Globe,
  ChevronLeft,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const theme = {
  bg: "#0a0a0a",
  textSoft: "rgba(255,255,255,0.68)",
  border: "rgba(255,255,255,0.08)",
  accent: "#7a1f2b",
  accentSoft: "#a53445",
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.45, ease: "easeOut" as const },
};

const profile = {
  name: "Myles Drayton",
  role: "Software Engineer",
  subrole: "Power Platform Engineer",
  tagline:
    "I build enterprise applications, workflow automation, data systems, and analytics products that turn complex business needs into scalable digital solutions.",
  location: "Philadelphia, PA",
  email: "mylesdray358@gmail.com",
  phone: "Available upon request",
};

const projects = [
  {
    title: "Aggregate Safety Report Schedule",
    description: "Centralized compliance scheduling across jurisdictions for global reporting obligations.",
    company: "Merck",
    stack: ["Power Apps", "Power Automate", "Power BI", "Dataverse"],
    useCase: ["Webapp", "Automation", "Analytics", "Database Design", "Regulatory Scheduling"],
    users: "Users: 200-500",
    icon: CalendarDays,
  },
  {
    title: "Clinical Trial Application COE",
    description: "Standardized intake and initiation workflows for regulatory trial application work.",
    company: "Merck",
    stack: ["Power Apps", "Power Automate", "Dataverse"],
    useCase: ["Webapp", "Automation", "Database Design", "Project Planning", "Documentation"],
    users: "Users: 50-100",
    icon: FolderOpen,
  },
  {
    title: "US Subsidiary COE",
    description: "Improved administrative tracking and execution consistency.",
    company: "Merck",
    stack: ["Power Apps", "Power Automate", "Power BI", "Dataverse"],
    useCase: ["Webapp", "Data Archiving", "Operations Tracking", "Automation", "Supply Chain Analytics", "Documentation"],
    users: "Users: 20-50",
    icon: Plane,
  },
  {
    title: "USPT Universal Submission Planning Toolkit",
    description: "Enabled demand activation and project planning.",
    company: "Merck",
    stack: ["Power Apps", "Power Automate", "Power BI", "Dataverse"],
    useCase: ["Webapp", "Operations Tracking", "Automation", "Project Planning", "Creation"],
    users: "Users: 50-100",
    icon: NotebookPen,
  },
  {
    title: "Regulatory Operations Dashboard",
    description: "Delivered KPI and SLA visibility for leadership.",
    company: "Merck",
    stack: ["Microsoft Fabric", "Power BI", "Dataverse", "Databricks", "Power Automate"],
    useCase: ["Operational Efficiency", "Automation", "Operational Analytics", "Timeline Tracking"],
    users: "Users: 20-50",
    icon: ChartPie,
  },
  {
    title: "Issues Management Dashboard",
    description: "Improved root-cause visibility and escalation workflows.",
    company: "Merck",
    stack: ["Power Automate", "Power BI", "Dataverse", "Databricks", "Microsoft Fabric"],
    useCase: ["Risk Analysis", "Root-Cause Visibility", "Compliance Tracking", "Automation"],
    users: "Users: 10-20",
    icon: TriangleAlert,
  },
  {
    title: "Notification Engine",
    description: "Automated submission timeline planning and regulatory document intake across multiple data sources",
    company: "Merck",
    stack: ["Dataverse", "Databricks", "Power Automate", "Microsoft Fabric", "Power BI", "HTML", "CSS"],
    useCase: ["Automation", "Submission Timelines", "Submission Planning", "Operational Efficiency", "Submission Planning Analytics", "Documentation"],
    users: "Users: 100-300",
    icon: Code2,
  },
  {
    title: "Template Maintenance",
    description: "Standardized FDA form template maintenance and compliance",
    company: "Merck",
    stack: ["Power Apps", "Power Automate", "Power BI", "Dataverse"],
    useCase: ["Automation", "Operational Efficiency", "Regulatory Compliance"],
    users: "Users: 80-200",
    icon: FileText,
  },
  {
    title: "Data Migration",
    description: "Migrated data from Sharepoint to Dataverse, transitioning from low-code tools to enterprise-grade data management",
    company: "Merck",
    stack: ["Dataverse", "Power Query", "Data Flows", "Excel", "Microsoft Fabric", "SharePoint"],
    useCase: ["RBAC", "Data Modeling", "Quality Assurance", "Regulatory Compliance", "Data Goverance"],
    users: "",
    icon: Database,
  },
  {
    title: "Depolyment Pipeline",
    description: "Implement Application Life-cycle Management, standardizing goverance across Solutions",
    company: "Merck",
    stack: ["Azure DevOps", "Github Actions", "Deployment Environments", "Docker", "Kubernetes"],
    useCase: ["ALM", "Governance", "Security Roles"],
    users: "",
    icon: Container,
  },
  {
    title: "Merck Science and Education Alliance Kit Request",
    description: "Centralized tool for borrowing science materials for outreach programs teach children about science",
    company: "Merck",
    stack: ["Sharepoint", "PowerApps", "Power Automate"],
    useCase: ["Volunteering", "Social Outreach", "Education"],
    users: "Users: 200+",
    icon: Microscope,
  },
  {
    title: "SharePoint Developer",
    description: "Transformed fragmented Regulaotry business processes into streamlined, automated digital workplaces.",
    company: "Merck",
    stack: ["Sharepoint", "SharePoint Framework(SPFx)", ".Net", "PowerApps", "Power Automate"],
    useCase: ["UX/UI", "Microsoft365", "Digital Workspaces", "Collaboration"],
    users: "Users: 500+",
    icon: Globe,
  },
] as const;

const experience = [
  {
    role: "Power Platform Engineer",
    org: "Merck & Co.",
    logo: "merck",
    date: "Jan 2024 - Present",
    text: "Lead development of enterprise-scale automation and data solutions within the Microsoft Power Platform and Azure ecosystem. Drive end-to-end software development lifecycle initiatives, integrating APIs and building scalable systems that streamline global regulatory operations and eliminate thousands of manual work hours annually..",
  },
  {
    role: "Regulatory Operations Associate",
    org: "Merck & Co.",
    logo: "merck",
    date: "Aug 2022 - Jan 2024",
    text: "Supported global regulatory submission processes by coordinating planning, tracking key deliverables, and ensuring compliance readiness. Developed Power BI dashboards to provide leadership with actionable insights into submission timelines, quality metrics, and operational performance.",
  },
  {
    role: "Director, Digital Strategy",
    org: "Society and Co.",
    logo: undefined,
    date: "Nov 2025 - Present",
    text: "Lead digital strategy and internal technology initiatives to support organizational growth, operational efficiency, and scalable infrastructure. Design and implement internal systems, data workflows, and automation solutions to streamline business processes, improve reporting capabilities, and enhance decision-making. Collaborate with leadership to align technology with business objectives while building a foundation for long-term digital scalability and innovation.",
  },
  {
    role: "Fellow",
    org: "BAG Ventures",
    logo: "bag",
    date: "Apr 2026 - Present",
    text: "Venture Captial operational Support",
  },
  {
    role: "Data Analyst",
    org: "Dr. Ala Stanford Center for Health Equity",
    logo: "bdc",
    date: "Oct 2020 - May 2022",
    text: "Analyzed large-scale healthcare and community data to uncover trends and inform strategic decision-making. Built data visualizations and conducted statistical analyses that directly supported public health initiatives and improved resource allocation for underserved populations across Philadelphia.",
  },
] as const;

const certifications = {
  microsoft: ["PL-900 Power Platform Fundamentals"],
  cisco: ["Networking Basics"],
  rowan: ["Azure Fundamentals", "Cybersecurity", "Database Fundamentals", "Network Fundamentals", "Ethical Hacking"],
};

const education = [
  {
    school: "Rowan University",
    degree: "B.A. in Computer Systems Technology",
    achievements: "Dean’s List",
    coursework:
      "SQL I/II, Database Administration I/II, Azure AI Engineering, Azure Security & Compliance, Advanced Ethical Hacking, Advanced Penetration Testing, Programming and Problem Solving, Web Development, Network Troubleshooting, Networks and Data Communication, Computing Environments, Cyber Defense, Security+, Statistics, Computer Hardware & Operations",
  },
] as const;

const skills = {
  platforms: ["Power Platform", "Power Apps", "Power Automate", "Power BI", "Power Pages", "Sharepoint"],
  data: ["SQL", "DAX", "Dataverse", "Databricks", "Microsoft Fabric", "ETL/ELT Pipelines", "Data Modeling", "Microsoft Foundry", "Power Query"],
  cloud: ["Azure", "APIs", "REST APIs", "CI/CD", "Git", "Docker", "Kubernetes"],
  languages: ["Python", "Power FX", "WDL(Workflow Definition Language)", "TypeScript", "C#", "HTML", "CSS", "VBA(Visual Basic)"],
  cybersecurity: ["Penetration Testing", "Vulnerability Assessment", "Network Security", "SIEM Concepts", "Threat Modeling", "Operation Systems & Database Security", "Identity & Access Management", "Security Protocols & Network Architecture"],
  professional: ["Stakeholder Management", "Cross-functional Collaboration", "Requirements Gathering", "Agile/Scrum", "Documentation", "Process Optimization", "Data-Driven Decision Making"],
  architecture: ["System Architecture", "Workflow Automation", "Enterprise Applications", "Analytics Systems"],
};

type SkillLevel = "Expert" | "Proficient" | "Intermediate" | "Beginner" | "Academic";
type Project = (typeof projects)[number];
type ProjectSelectionSetter = Dispatch<SetStateAction<number>>;
type ExperienceLogoKey = NonNullable<(typeof experience)[number]["logo"]>;

const skillLevels: Record<string, SkillLevel> = {
  "Power Platform": "Expert",
  "Power Apps": "Expert",
  "Power Automate": "Expert",
  "Power BI": "Expert",
  "Power Pages": "Proficient",
  Sharepoint: "Proficient",
  SQL: "Proficient",
  DAX: "Proficient",
  Dataverse: "Expert",
  Databricks: "Intermediate",
  "Microsoft Fabric": "Proficient",
  "ETL/ELT Pipelines": "Intermediate",
  "Data Modeling": "Proficient",
  "Microsoft Foundry": "Academic",
  "Power Query": "Proficient",
  Azure: "Proficient",
  APIs: "Proficient",
  "REST APIs": "Proficient",
  "CI/CD": "Intermediate",
  Git: "Intermediate",
  Docker: "Intermediate",
  Kubernetes: "Beginner",
  Python: "Intermediate",
  "Power FX": "Expert",
  "WDL(Workflow Definition Language)": "Proficient",
  TypeScript: "Intermediate",
  "C#": "Intermediate",
  HTML: "Proficient",
  CSS: "Proficient",
  "VBA(Visual Basic)": "Intermediate",
  "Penetration Testing": "Academic",
  "Vulnerability Assessment": "Academic",
  "Network Security": "Academic",
  "SIEM Concepts": "Academic",
  "Threat Modeling": "Intermediate",
  "Operation Systems & Database Security": "Academic",
  "Identity & Access Management": "Intermediate",
  "Security Protocols & Network Architecture": "Academic",
  "Stakeholder Management": "Proficient",
  "Cross-functional Collaboration": "Expert",
  "Requirements Gathering": "Expert",
  "Agile/Scrum": "Proficient",
  Documentation: "Expert",
  "Process Optimization": "Expert",
  "Data-Driven Decision Making": "Proficient",
  "System Architecture": "Proficient",
  "Workflow Automation": "Expert",
  "Enterprise Applications": "Expert",
  "Analytics Systems": "Proficient",
};

const experienceLogoLabels: Record<ExperienceLogoKey, string> = {
  merck: "MK",
  bag: "BAG",
  bdc: "HE",
};

function ExperienceLogo({ logo }: { logo?: ExperienceLogoKey }) {
  if (!logo) return null;

  return (
    <div
      aria-label={`${logo} logo`}
      className="flex min-h-10 min-w-10 items-center justify-center rounded-full border px-3 text-[11px] font-semibold uppercase tracking-[0.2em]"
      style={{ borderColor: theme.accentSoft, color: theme.accentSoft }}
    >
      {experienceLogoLabels[logo]}
    </div>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.3em]" style={{ color: theme.accentSoft }}>
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-bold">{title}</h2>
    </div>
  );
}

function SkillCategory({ title, items }: { title: string; items: string[] }) {
  return (
    <motion.div {...fadeUp}>
      <p className="text-sm font-semibold" style={{ color: theme.accentSoft }}>
        {title}
      </p>
      <div className="mt-3 flex flex-wrap gap-3">
        {items.map((item) => {
          const level = skillLevels[item] ?? "Intermediate";
          return (
            <div key={item} className="group relative inline-flex">
              <Badge
                className="rounded-full border bg-transparent px-4 py-2 text-white transition-colors duration-200 hover:bg-transparent"
                style={{ borderColor: theme.border }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = theme.accentSoft;
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.backgroundColor = "rgba(165,52,69,0.18)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = theme.border;
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {item}
              </Badge>
              <div
                className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 w-max -translate-x-1/2 rounded-md border px-3 py-2 text-xs opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100"
                style={{ backgroundColor: "rgba(10,10,10,0.96)", borderColor: theme.accentSoft, color: "#ffffff" }}
              >
                Experience Level: {level}
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

function RotatingPortfolioSection({
  items,
  index,
  onSelect,
}: {
  items: typeof projects;
  index: number;
  onSelect: ProjectSelectionSetter;
}) {
  useEffect(() => {
    if (!items.length) return;
    const timer = window.setInterval(() => {
      onSelect((currentIndex) => (currentIndex + 1) % items.length);
    }, 2200);
    return () => window.clearInterval(timer);
  }, [items.length, onSelect]);

  const activeItem = items[index];
  if (!activeItem) return null;
  const ActiveIcon = activeItem.icon;

  return (
    <motion.div {...fadeUp} className="mt-8 border-t pt-6" style={{ borderColor: theme.border }}>
      <p className="text-xs uppercase tracking-[0.2em]" style={{ color: theme.accentSoft }}>
        Portfolio Rotation
      </p>
      <div className="mt-4 overflow-hidden">
        <motion.div key={activeItem.title} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="space-y-3">
          <div className="flex items-center gap-3">
            <ActiveIcon className="h-5 w-5 shrink-0" style={{ color: theme.accentSoft }} />
            <p className="text-xl font-semibold sm:text-2xl">{activeItem.title}</p>
          </div>
          <p className="max-w-3xl text-sm leading-7" style={{ color: theme.textSoft }}>
            {activeItem.description}
          </p>
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span style={{ color: theme.textSoft }}>{activeItem.company}</span>
            <span style={{ color: theme.accentSoft }}>{activeItem.users ? activeItem.users : ""}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {activeItem.stack.map((item) => (
              <span key={item} className="rounded-full border px-3 py-1 text-[11px]" style={{ borderColor: theme.border, color: theme.textSoft }}>
                {item}
              </span>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {activeItem.useCase.map((item) => (
              <span key={item} className="rounded-full border px-3 py-1 text-[11px]" style={{ borderColor: theme.accentSoft, color: theme.textSoft }}>
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item, itemIndex) => (
          <button
            key={item.title}
            type="button"
            onClick={() => onSelect(itemIndex)}
            className="rounded-full border px-3 py-1 text-[11px] transition-colors"
            style={{ borderColor: itemIndex === index ? theme.accentSoft : theme.border, color: itemIndex === index ? "#ffffff" : theme.textSoft }}
          >
            {item.title}
          </button>
        ))}
      </div>
    </motion.div>
  );
}

function SelectedWorkConveyor({
  items,
  index,
  onSelect,
}: {
  items: typeof projects;
  index: number;
  onSelect: ProjectSelectionSetter;
}) {
  if (!items.length) return null;

  const visibleCount = 3;
  const maxStart = Math.max(items.length - visibleCount, 0);
  const start = Math.min(Math.max(index - 1, 0), maxStart);
  const visibleItems = items.slice(start, start + visibleCount);

  return (
    <div className="mt-8 rounded-2xl border p-5 sm:p-6" style={{ borderColor: theme.border }}>
      <div className="mb-5 flex items-center justify-between gap-4">
        <p className="text-sm font-semibold" style={{ color: theme.textSoft }}>
          Selected Work Conveyorbelt
        </p>
        <div className="flex items-center gap-2">
          <button type="button" aria-label="Previous project" onClick={() => onSelect(index === 0 ? items.length - 1 : index - 1)} className="rounded-full border p-2 transition-colors" style={{ borderColor: theme.border }}>
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button type="button" aria-label="Next project" onClick={() => onSelect(index === items.length - 1 ? 0 : index + 1)} className="rounded-full border p-2 transition-colors" style={{ borderColor: theme.border }}>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {visibleItems.map((project: Project) => {
          const Icon = project.icon;
          const active = items[index]?.title === project.title;
          const projectIndex = items.findIndex((item) => item.title === project.title);
          return (
            <button
              key={project.title}
              type="button"
              onClick={() => {
                if (projectIndex >= 0) {
                  onSelect(projectIndex);
                }
              }}
              className="min-h-[220px] rounded-2xl border p-6 text-left transition-transform hover:-translate-y-1"
              style={{ borderColor: active ? theme.accentSoft : theme.border, backgroundColor: active ? "rgba(165,52,69,0.10)" : "transparent" }}
            >
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5 shrink-0" style={{ color: theme.accentSoft }} />
                <p className="text-base font-semibold leading-6">{project.title}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.useCase.map((item) => (
                  <span key={item} className="rounded-full border px-2 py-1 text-[10px]" style={{ borderColor: theme.accentSoft, color: theme.textSoft }}>
                    {item}
                  </span>
                ))}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function MylesPortfolioApp() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: theme.bg }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <motion.section {...fadeUp} className="border-b pb-10" style={{ borderColor: theme.border }}>
          <p className="text-sm uppercase tracking-[0.3em]" style={{ color: theme.accentSoft }}>
            Portfolio
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-[0.95] sm:text-6xl lg:text-7xl">{profile.name}</h1>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
            <span className="px-0 py-1 font-medium" style={{ color: theme.accentSoft }}>
              {profile.role}
            </span>
            <span style={{ color: theme.textSoft }}>•</span>
            <span style={{ color: theme.textSoft }}>{profile.subrole}</span>
          </div>
          <p className="mt-8 max-w-3xl text-base leading-8" style={{ color: theme.textSoft }}>
            {profile.tagline}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button className="rounded-full px-6 text-white" style={{ backgroundColor: theme.accent }}>
              Contact
            </Button>
            <Button variant="outline" className="rounded-full border-white/20 bg-transparent px-6 text-white hover:bg-white hover:text-black">
              Resume
            </Button>
          </div>
          <RotatingPortfolioSection items={projects} index={selectedProjectIndex} onSelect={setSelectedProjectIndex} />
        </motion.section>

        <motion.section {...fadeUp} className="pt-12">
          <SectionTitle eyebrow="Projects" title="Selected Work" />
          <SelectedWorkConveyor items={projects} index={selectedProjectIndex} onSelect={setSelectedProjectIndex} />
        </motion.section>

        <motion.section {...fadeUp} className="grid gap-14 pt-14 lg:grid-cols-2 lg:gap-16">
          <div className="lg:border-r lg:pr-8" style={{ borderColor: theme.border }}>
            <SectionTitle eyebrow="Experience" title="What I do" />
            <div className="mt-6 space-y-5">
              {experience.map((item) => (
                <motion.div {...fadeUp} key={item.role} className="border-t pt-5" style={{ borderColor: theme.border }}>
                  <div className="flex items-start justify-between gap-6">
                    <h3 className="text-2xl font-semibold">{item.role}</h3>
                    <ExperienceLogo logo={item.logo} />
                  </div>
                  <p className="mt-2 text-sm" style={{ color: theme.accentSoft }}>
                    {item.org}
                  </p>
                  {item.date && <p className="text-xs" style={{ color: theme.textSoft }}>{item.date}</p>}
                  <p className="mt-3 text-sm leading-7" style={{ color: theme.textSoft }}>
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:pl-2">
            <SectionTitle eyebrow="Skills" title="Skills" />
            <div className="mt-6 space-y-6">
              <SkillCategory title="Platforms" items={skills.platforms} />
              <SkillCategory title="Data & Analytics" items={skills.data} />
              <SkillCategory title="Cloud & DevOps" items={skills.cloud} />
              <SkillCategory title="Languages" items={skills.languages} />
              <SkillCategory title="Cybersecurity" items={skills.cybersecurity} />
              <SkillCategory title="Professional" items={skills.professional} />
              <SkillCategory title="Architecture & Systems" items={skills.architecture} />
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeUp} className="grid gap-14 border-t pt-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16" style={{ borderColor: theme.border }}>
          <div className="lg:border-r lg:pr-8" style={{ borderColor: theme.border }}>
            <SectionTitle eyebrow="Education" title="Academic Background" />
            <div className="mt-8 space-y-6">
              {education.map((edu) => (
                <motion.div {...fadeUp} key={edu.school} className="border-t pt-4" style={{ borderColor: theme.border }}>
                  <h3 className="text-lg font-semibold">{edu.school}</h3>
                  <p className="mt-1 text-sm" style={{ color: theme.accentSoft }}>{edu.degree}</p>
                  <p className="mt-2 text-sm" style={{ color: theme.textSoft }}>{edu.achievements}</p>
                  <div className="mt-3">
                    <p className="text-xs uppercase tracking-[0.2em]" style={{ color: theme.accentSoft }}>Relevant Coursework</p>
                    <p className="mt-2 max-w-3xl text-sm leading-8" style={{ color: theme.textSoft }}>{edu.coursework}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:pl-2">
            <SectionTitle eyebrow="Certifications" title="Credentials" />
            <div className="mt-8 space-y-6">
              <motion.div {...fadeUp}>
                <div className="flex items-center gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-sm border text-[9px] font-bold" style={{ borderColor: theme.accentSoft, color: theme.accentSoft }}>MS</div>
                  <p className="text-sm font-semibold" style={{ color: theme.accentSoft }}>Microsoft</p>
                </div>
                {certifications.microsoft.map((item) => (
                  <div key={item} className="border-t pt-3" style={{ borderColor: theme.border }}>
                    <p className="text-sm leading-7">{item}</p>
                  </div>
                ))}
              </motion.div>

              <motion.div {...fadeUp}>
                <div className="flex items-center gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-sm border text-[8px] font-bold" style={{ borderColor: theme.accentSoft, color: theme.accentSoft }}>CS</div>
                  <p className="text-sm font-semibold" style={{ color: theme.accentSoft }}>Cisco</p>
                </div>
                {certifications.cisco.map((item) => (
                  <div key={item} className="border-t pt-3" style={{ borderColor: theme.border }}>
                    <p className="text-sm leading-7">{item}</p>
                  </div>
                ))}
              </motion.div>

              <motion.div {...fadeUp}>
                <div className="flex items-center gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-sm border text-[8px] font-bold" style={{ borderColor: theme.accentSoft, color: theme.accentSoft }}>RU</div>
                  <p className="text-sm font-semibold" style={{ color: theme.accentSoft }}>Rowan Certificates of Undergraduate Study</p>
                </div>
                {certifications.rowan.map((item) => (
                  <div key={item} className="border-t pt-3" style={{ borderColor: theme.border }}>
                    <p className="text-sm leading-7">{item}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>
      </motion.div>

      <motion.footer {...fadeUp} className="mt-16 border-t" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <div className="grid gap-6 sm:grid-cols-3">
            <motion.div {...fadeUp}>
              <div className="flex items-center gap-2 text-sm" style={{ color: theme.accentSoft }}>
                <MapPin className="h-4 w-4" /> Location
              </div>
              <p className="mt-3 text-base" style={{ color: theme.textSoft }}>{profile.location}</p>
            </motion.div>
            <motion.div {...fadeUp}>
              <div className="flex items-center gap-2 text-sm" style={{ color: theme.accentSoft }}>
                <Mail className="h-4 w-4" /> Email
              </div>
              <p className="mt-3 break-all text-base" style={{ color: theme.textSoft }}>{profile.email}</p>
            </motion.div>
            <motion.div {...fadeUp}>
              <div className="flex items-center gap-2 text-sm" style={{ color: theme.accentSoft }}>
                <Phone className="h-4 w-4" /> Phone
              </div>
              <p className="mt-3 text-base" style={{ color: theme.textSoft }}>{profile.phone}</p>
            </motion.div>
          </div>
          <motion.div {...fadeUp} className="mt-8 flex gap-4">
            <Button className="rounded-full px-6 text-white" style={{ backgroundColor: theme.accent }}>Contact</Button>
            <Button variant="outline" className="rounded-full border-white/20 bg-transparent px-6 text-white hover:bg-white hover:text-black">Resume</Button>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}
