import type { Metadata } from "next";
import { headers } from "next/headers";
import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Cloud,
  Cpu,
  Database,
  Download,
  Factory,
  GitBranch,
  Layers3,
  Mail,
  MapPin,
  Network,
  Server,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const title = "Muhammad Nazrul | .NET Software Engineer";
const description =
  ".NET Software Engineer and Full-Stack Developer specializing in MES, manufacturing systems, enterprise APIs, Oracle, SQL, and production-critical integrations.";

const links = {
  resume: "/Muhammad-Nazrul-Resume.pdf",
  email: "mailto:muhammadnazrul9606@gmail.com",
  github: "https://github.com/nazrulshukri",
  linkedin: "https://www.linkedin.com/in/muhd-nazrul",
};

const stack = [
  "C#",
  ".NET",
  "ASP.NET Core",
  "REST APIs",
  "SOAP services",
  "Oracle",
  "SQL Server",
  "React",
  "Next.js",
  "Angular",
  "TypeScript",
  "MongoDB",
  "AWS",
  "Azure",
  "Docker",
  "IIS",
];

const focusAreas = [
  {
    icon: Factory,
    title: "Manufacturing Systems",
    text: "MES workflows, equipment validation, production troubleshooting, wafer and work-order processing.",
  },
  {
    icon: Network,
    title: "Backend Integration",
    text: "Reliable APIs and service-to-service flows across enterprise systems, databases, and messaging layers.",
  },
  {
    icon: ShieldCheck,
    title: "Production Reliability",
    text: "Debugging, incident support, validation logic, and careful changes in business-critical environments.",
  },
];

const experience = [
  {
    company: "Mindteck / Nexperia Malaysia",
    role: "Solution Analyst - MES & Manufacturing Systems",
    period: "Oct 2025 - Present",
    location: "Senawang, Negeri Sembilan",
    summary:
      "Developing automation and integration software for semiconductor manufacturing projects.",
    points: [
      "Delivered C# and .NET Framework automation software for Tuah and Jebat manufacturing projects.",
      "Integrated PLCs, HMIs, industrial equipment, and Siemens Camstar MES through CGI/JSON interfaces.",
      "Built ASP.NET Core RESTful APIs for the MapHandling system, covering wafer map upload, validation, grouping, workflow support, Swagger, Postman, and SoapUI testing.",
      "Optimized Oracle SQL queries and resolved production issues through log analysis, API debugging, and database troubleshooting.",
    ],
  },
  {
    company: "Accenture Solutions Sdn. Bhd.",
    role: "Business Architecture Analyst",
    period: "Jun 2025 - Oct 2025",
    location: "Kelana Jaya, Selangor",
    summary:
      "Delivered enterprise application changes for distributor management and international client workflows.",
    points: [
      "Developed and maintained applications using R77 Mobile Builder, Back Office, JavaScript, T-SQL, C#, and .NET Framework 3.5.",
      "Integrated applications with Microsoft SQL Server and optimized stored procedures for business processes.",
      "Handled critical issue resolution through DevOps ticket escalation workflows.",
      "Served as Test Lead for project test planning, automation strategy, defect tracking, and release quality.",
    ],
  },
  {
    company: "InfoConnect Sdn. Bhd.",
    role: "Software Developer",
    period: "Jul 2023 - Jun 2025",
    location: "Damansara Jaya, Selangor",
    summary:
      "Built and maintained backend systems, document automation tools, and web-based enterprise features.",
    points: [
      "Engineered backend systems using C#, VB.NET, and Microsoft SQL Server for bug fixes, change requests, feature enhancements, and integrations.",
      "Contributed to DocufloScan within Docuflo Product 5/7, improving document scanning workflows, OCR, and database lookup.",
      "Automated document workflows with iTextSharp and Spire.PDF for PDF generation, extraction, and processing.",
      "Integrated Microsoft Azure cloud solutions for automated report generation and email delivery.",
    ],
  },
  {
    company: "Intercity MPC (M) Sdn. Bhd.",
    role: "Junior Application Engineer",
    period: "Jul 2022 - Jul 2023",
    location: "Kota Kemuning, Selangor",
    summary:
      "Supported statement-generation and production output workflows for banking and municipal billing clients.",
    points: [
      "Designed and developed banking statement applications using Software Pres Integrated Development Environment, Borland Delphi 7, and Pascal.",
      "Generated monthly statement data and PDF outputs using Visual FoxPro, Delphi workflows, and database-driven processing.",
      "Debugged, tested, and stabilized production statement jobs, including migration support from C-based statement logic to Python workflows.",
      "Handled billing statement tasks for municipal clients and supported production issue resolution.",
    ],
  },
];

const projects = [
  {
    title: "MapHandling Manufacturing API",
    type: "Sanitized case study",
    text: "ASP.NET Core API work for wafer map upload, validation, grouping, and workflow capabilities supporting React.js and Vue.js manufacturing interfaces.",
    tech: ["ASP.NET Core", "C#", "Oracle", "REST APIs", "Swagger"],
  },
  {
    title: "MES Equipment Integration Workflow",
    type: "Manufacturing systems",
    text: "Production-safe workflow connecting PLCs, HMIs, industrial equipment, and Siemens Camstar MES through CGI/JSON interfaces for traceability.",
    tech: ["C#", ".NET Framework", "MES", "CGI/JSON", "PLC/HMI"],
  },
  {
    title: "Database Diagram / Assembly Recipe Console",
    type: "Public ASP.NET Core project",
    text: "Sanitized ASP.NET Core MVC application showing Oracle-backed access control, recipe workspaces, database validation requests, LDAP sign-in, and admin management.",
    tech: ["ASP.NET Core", ".NET 10", "Oracle", "MVC", "LDAP"],
    href: "https://github.com/nazrulshukri/ezy2",
  },
  {
    title: "DocufloScan Document Automation",
    type: "Enterprise product",
    text: "Backend and scanning workflow improvements for document management, OCR, database lookup, PDF generation, and PDF extraction.",
    tech: ["C#", "VB.NET", "SQL Server", "iTextSharp", "Spire.PDF"],
  },
  {
    title: "Booking Flex",
    type: "Product application",
    text: "Travel booking platform for flight, hotel, and train ticket bookings with responsive React.js UI, Next.js APIs, and MongoDB data storage.",
    tech: ["React.js", "Next.js", "MongoDB", "Responsive UI"],
    href: "https://projectbookingflex.vercel.app",
  },
  {
    title: "Intercity Statement Automation",
    type: "Production support project",
    text: "Statement-generation and billing workflow support using Delphi 7, Pascal, Visual FoxPro, database processing, PDF generation, testing, and production debugging.",
    tech: ["Delphi 7", "Pascal", "Visual FoxPro", "Python", "PDF"],
  },
  {
    title: "Orbit Key Finder",
    type: "Tracking application",
    text: "Key-finder application concept using unique device identifiers and GPS-based tracking flow to help users locate misplaced keys.",
    tech: ["Mobile app", "GPS", "Tracking flow", "Device ID"],
  },
  {
    title: "Online Conference",
    type: "Academic web project",
    text: "Web-based conference project focused on online event flow, user-friendly access, and digital communication for remote participation.",
    tech: ["Web app", "HTML", "CSS", "JavaScript", "Responsive UI"],
  },
];

const architectureSteps = [
  "Operator or equipment event enters the workflow",
  "API layer validates work order, equipment, material, and recipe rules",
  "MES service applies business workflow and calls downstream services",
  "Oracle records keep production state, audit history, and process results",
  "Support dashboards expose exceptions for fast troubleshooting",
];

const skillGroups = [
  {
    icon: Server,
    title: "Backend",
    items: ["C#", ".NET", "ASP.NET Core", "REST APIs", "SOAP", "Background jobs"],
  },
  {
    icon: Database,
    title: "Data",
    items: ["Oracle", "SQL Server", "SQL", "Stored procedures", "Data validation"],
  },
  {
    icon: Layers3,
    title: "Frontend",
    items: ["React", "Angular", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap"],
  },
  {
    icon: Cloud,
    title: "Cloud & Tools",
    items: ["AWS", "Azure", "Docker", "GitLab", "IIS", "Postman", "SoapUI"],
  },
];

const educationItems = [
  {
    title: "Bachelor of Information Technology and Communication with Honours",
    meta: "Open University Malaysia | 2021 - 2026",
    text: "Part-time degree, CGPA 3.50/4.00.",
  },
  {
    title: "Diploma in Information Technology and Communication (Digital Technology)",
    meta: "Politeknik Sultan Mizan Zainal Abidin | 2018 - 2020",
    text: "CGPA 3.04/4.00.",
  },
];

const certificationItems = [
  "AWS Awesome Day - certified by Amazon Web Services.",
  "AWS-Dev: Developing on AWS - certified by Amazon Web Services, KL Eco City, 2026.",
  "Flutter Mastery: Building Cross-Platform Mobile Applications - certified by Rynet Malaysia Sdn. Bhd.",
];

const achievementItems = [
  "1st Place - 100m Hurdles and 400m Hurdles, MSSD.",
  "2nd Place and 3rd Place - 400m Hurdles, MSSP.",
  "1st Place - 4x400m Relay, MSSP.",
  "Track and Field participation at MSSD, MSSP, and MSSM level.",
  "Committee Member - Innovation and Design Club, and Hockey Club at Politeknik Sultan Mizan Zainal Abidin.",
];

const referenceItems = [
  {
    name: "Mrs. Noriah Binti Razali",
    role: "Academic Advisor, Information Technology",
    organization: "Politeknik Sultan Mizan Zainal Abidin",
  },
  {
    name: "Open University Malaysia",
    role: "Academic institution reference",
    organization: "Kelana Centre Point, Petaling Jaya",
  },
  {
    name: "Mr. Khairol Azwan Bin Darmongin",
    role: "Supervisor",
    organization: "InfoConnect Sdn. Bhd.",
  },
  {
    name: "Mrs. Nida Binti Arif",
    role: "Human Resources Malaysia",
    organization: "Mindteck Sdn. Bhd.",
  },
];

function getBaseUrl(headerList: Headers) {
  const host =
    headerList.get("x-forwarded-host") ?? headerList.get("host") ?? "localhost:3000";
  const protocol =
    headerList.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");

  return `${protocol}://${host}`;
}

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const baseUrl = getBaseUrl(headerList);

  return {
    title,
    description,
    alternates: {
      canonical: baseUrl,
    },
    openGraph: {
      title,
      description,
      url: baseUrl,
      siteName: "Muhammad Nazrul Portfolio",
      images: [
        {
          url: `${baseUrl}/og.png`,
          width: 1200,
          height: 630,
          alt: "Muhammad Nazrul .NET Software Engineer portfolio preview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/og.png`],
    },
  };
}

export default function Home() {
  return (
    <main>
      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Muhammad Nazrul home">
          <span className="brand-mark">N</span>
          <span>Nazrul.dev</span>
        </a>
        <div className="nav-links">
          <a href="#top">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Portfolio</a>
          <a href="#skills">Skills</a>
          <a href="#credentials">Credentials</a>
        </div>
        <a className="nav-cta" href="#contact">
          Start Project
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-backdrop" aria-hidden="true" />
        <div className="section-inner hero-inner">
          <div className="hero-copy-block">
            <p className="eyebrow">
              Muhammad Nazrul bin Ahmad Shukri - Software & MES Engineer
            </p>
            <h1>
              Build reliable <span>digital systems</span> for enterprise and manufacturing.
            </h1>
            <p className="hero-copy">
              I build reliable enterprise applications, APIs, system integrations,
              and manufacturing software using C#, .NET, ASP.NET Core, SQL, Oracle,
              and modern web technologies.
            </p>
            <p className="hero-support">
              Experienced in manufacturing execution systems, real-time equipment
              workflows, backend integrations, legacy modernization, troubleshooting,
              and production-critical software.
            </p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="button primary" href={links.resume} download>
                <Download size={18} aria-hidden="true" />
                Download Resume
              </a>
              <a className="button secondary" href="#projects">
                <BriefcaseBusiness size={18} aria-hidden="true" />
                View Projects
              </a>
            </div>
            <div className="hero-meta" aria-label="Availability and location">
              <span>
                <MapPin size={16} aria-hidden="true" />
                Open to relocation across Europe
              </span>
              <span>
                <BadgeCheck size={16} aria-hidden="true" />
                Backend, full-stack, and manufacturing systems
              </span>
            </div>
          </div>
          <div className="hero-portrait" aria-label="Portrait of Muhammad Nazrul">
            <img src="/nazrul-profile-cutout.webp" alt="Muhammad Nazrul" />
            <div className="hero-status-card">
              <span>Available For</span>
              <strong>.NET / MES Roles</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="signal-band" aria-label="Core technologies">
        <div className="section-inner stack-list">
          {stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section about" id="about">
        <div className="section-inner split">
          <div>
            <p className="eyebrow">About Me</p>
            <h2>Engineering for systems where correctness matters.</h2>
          </div>
          <div className="copy-block">
            <p>
              I am a .NET and full-stack software engineer with hands-on
              experience across enterprise systems, MES workflows, backend
              integration, Oracle-backed processes, API development, debugging,
              and production support.
            </p>
            <p>
              My strongest work sits between business-critical software and the
              real-world operations it supports: manufacturing events, validation
              rules, equipment workflows, data consistency, and the practical
              debugging needed when systems must keep running.
            </p>
          </div>
        </div>
      </section>

      <section className="section focus-section" id="services">
        <div className="section-inner focus-grid">
          {focusAreas.map((area) => (
            <article className="focus-card" key={area.title}>
              <area.icon size={24} aria-hidden="true" />
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience" id="experience">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Enterprise software, manufacturing systems, and delivery work.</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.company}>
                <div className="timeline-marker" aria-hidden="true" />
                <div className="timeline-content">
                  <p className="role">{item.role}</p>
                  <h3>{item.company}</h3>
                  <p className="period">{item.period} | {item.location}</p>
                  <p>{item.summary}</p>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section projects" id="projects">
        <div className="section-inner">
          <div className="section-heading compact-heading">
            <p className="eyebrow">Featured Projects</p>
            <h2>Portfolio pieces that match backend, full-stack, and MES roles.</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-type">{project.type}</div>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <div className="project-tech" aria-label={`${project.title} technologies`}>
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                {"href" in project ? (
                  <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
                    Open project
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section case-studies" id="case-studies">
        <div className="section-inner case-layout">
          <div>
            <p className="eyebrow">Architecture / Case Study</p>
            <h2>Manufacturing Execution System Integration</h2>
            <p className="case-copy">
              Designed and enhanced C#/.NET manufacturing workflows integrating
              MES, equipment systems, Oracle databases, SOAP/REST services, and
              messaging infrastructure. Implemented Track-In/Track-Out validation,
              recipe resolution, wafer and work-order processing, equipment
              validation, and production troubleshooting.
            </p>
            <a className="text-link" href="#contact">
              Discuss sanitized case studies
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="architecture-panel" aria-label="MES integration architecture flow">
            {architectureSteps.map((step, index) => (
              <div className="architecture-step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section skills" id="skills">
        <div className="section-inner">
          <div className="section-heading compact-heading">
            <p className="eyebrow">Technical Skills</p>
            <h2>Practical tools for backend, full-stack, data, and cloud work.</h2>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <group.icon size={24} aria-hidden="true" />
                <h3>{group.title}</h3>
                <div className="skill-list">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section credentials" id="credentials">
        <div className="section-inner credential-grid">
          <div>
            <p className="eyebrow">Education, MUET, Certificates & References</p>
            <h2>Academic foundation, professional learning, and verified references.</h2>
          </div>
          <div className="credential-list expanded">
            <article>
              <Cpu size={22} aria-hidden="true" />
              <h3>Education</h3>
              <div className="credential-items">
                {educationItems.map((item) => (
                  <div className="credential-entry" key={item.title}>
                    <strong>{item.title}</strong>
                    <span>{item.meta}</span>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </article>
            <article>
              <Workflow size={22} aria-hidden="true" />
              <h3>Certifications</h3>
              <ul className="credential-bullets">
                {certificationItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article>
              <BadgeCheck size={22} aria-hidden="true" />
              <h3>MUET</h3>
              <p>
                Malaysian University English Test (MUET), Band 3.5 / 5++.
                Strong enough for professional communication, technical
                documentation, and international collaboration.
              </p>
            </article>
            <article>
              <ShieldCheck size={22} aria-hidden="true" />
              <h3>Awards & Achievements</h3>
              <ul className="credential-bullets">
                {achievementItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article>
              <Network size={22} aria-hidden="true" />
              <h3>References</h3>
              <div className="reference-grid">
                {referenceItems.map((item) => (
                  <div className="reference-entry" key={item.name}>
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                    <p>{item.organization}</p>
                  </div>
                ))}
              </div>
              <p className="reference-note">
                Contact details are available upon request to protect reference privacy.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-inner contact-inner">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Open to .NET, backend, full-stack, and MES roles in Europe.</h2>
            <p>
              Best fit: enterprise engineering teams that need reliable backend
              systems, manufacturing software, integrations, debugging strength,
              and production-aware delivery.
            </p>
          </div>
          <div className="contact-actions" aria-label="Contact links">
            <a className="button primary" href={links.email}>
              <Mail size={18} aria-hidden="true" />
              Email
            </a>
            <a className="button secondary" href={links.linkedin} target="_blank" rel="noreferrer">
              <Network size={18} aria-hidden="true" />
              LinkedIn
            </a>
            <a className="button secondary" href={links.github} target="_blank" rel="noreferrer">
              <GitBranch size={18} aria-hidden="true" />
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
