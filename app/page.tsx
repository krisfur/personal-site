import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin, FaMedium } from "react-icons/fa";
import { siteUrl } from "./site-config";

const intro =
  "Building data platforms, internal tools, and both user- and developer-facing systems.";

const contactLinks = [
  { label: "GitHub", url: "https://github.com/krisfur", icon: <FaGithub /> },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/k-furman",
    icon: <FaLinkedin />,
  },
  { label: "Medium", url: "https://medium.com/@krisfur", icon: <FaMedium /> },
  {
    label: "Instagram",
    url: "https://instagram.com/krisfur",
    icon: <FaInstagram />,
  },
];

const skills = [
  {
    label: "Languages",
    items: ["C++", "Go", "Python", "Rust", "SQL", "TypeScript"],
  },
  { label: "Platforms", items: ["Airflow", "AWS", "Azure", "Snowflake"] },
  { label: "Exploring", items: ["Odin", "Swift", "Zig"] },
] as const;

type Role = {
  title: string;
  period: string;
};

type Experience = {
  company: string;
  roles: readonly Role[];
  details: readonly string[];
};

const experience: readonly Experience[] = [
  {
    company: "Advertising Standards Authority",
    roles: [
      { title: "Lead Data Engineer", period: "Oct 2026 - Present" },
      { title: "Senior Data Engineer", period: "May 2023 - Sep 2026" },
    ],
    details: [
      "Led engineering for the Data Science department's tools and infrastructure, and helped shape department strategy with the Director of Data Science.",
      "Planned and prioritised data engineering work across multiple projects, and supervised, mentored, and hired engineers.",
      "Owned the department's cloud budget and the security and reliability of its AWS and Azure infrastructure.",
      "Scaled the Active Ad Monitoring system from 50k to over 8 million ads a month on Airflow and Snowflake while keeping costs down, including an almost 30% reduction in monthly cloud spend in 2026.",
      "Engineered high-volume ingestion pipelines for APIs and web scraping across major platforms such as Google, Meta, and TikTok.",
      "Built internal Python and TypeScript tools, including libraries that simplify data access and analysis for data scientists, and web apps that support monitoring and day-to-day work.",
      "Delivered an internal AI agent platform with bespoke agents for ASA-specific tasks, increasing productivity across the organisation.",
      "Developed MCP servers and evaluated and integrated third-party AI tools such as Claude, Claude Code, and Microsoft 365 Copilot.",
    ],
  },
  {
    company: "Queen Mary University of London",
    roles: [{ title: "Doctoral Researcher", period: "Sep 2020 - Apr 2023" }],
    details: [
      "Developed the near detector upstream DAQ for the DUNE experiment at Fermilab using C++, Python, ZeroMQ, and custom TCP socket and buffer handling.",
      "Studied the impact of DUNE PRISM on statistical and systematic uncertainties using Tikhonov regularisation with SciPy and NumPy.",
      "Demonstrated Statistical Data Analysis, Elementary Particle Physics, and Practical Machine Learning modules.",
    ],
  },
  {
    company: "Rewire Online",
    roles: [{ title: "Senior Data Engineer", period: "May 2021 - Dec 2022" }],
    details: [
      "Built Python data collection pipelines around Twitter and Reddit APIs, deployed on AWS EC2.",
      "Handled data analysis, cleaning, storage, and automation testing with pandas, PostgreSQL, S3, Selenium, and custom tooling.",
      "Integrated the Rewire API into a Python Discord bot that was distributed publicly.",
    ],
  },
];

type FeaturedProject = {
  name: string;
  description: string;
  links: readonly { label: string; url: string }[];
  stack: readonly string[];
};

const featuredProjects: readonly FeaturedProject[] = [
  {
    name: "Flackbird",
    description:
      "Minimalist offline music player for iOS, iPadOS, and macOS, built with SwiftUI and first-party Apple frameworks.",
    links: [
      { label: "GitHub", url: "https://github.com/krisfur/flackbird" },
      { label: "Website", url: "https://krisfur.github.io/flackbird/" },
    ],
    stack: ["Swift", "SwiftUI", "iOS", "macOS"],
  },
  {
    name: "FEX",
    description:
      "Universal interactive system package search for the terminal, written in Rust and published on crates.io.",
    links: [
      { label: "GitHub", url: "https://github.com/krisfur/fex" },
      { label: "Crates.io", url: "https://crates.io/crates/fex" },
    ],
    stack: ["Rust", "CLI", "TUI"],
  },
  {
    name: "whisper-parallel-cpu",
    description:
      "A pybind11 wrapper around whisper.cpp for CPU-parallel transcription workloads in cloud environments.",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/krisfur/whisper-parallel-cpu",
      },
      { label: "PyPI", url: "https://pypi.org/project/whisper-parallel-cpu/" },
    ],
    stack: ["Python", "C++", "FFmpeg"],
  },
];

const writing = {
  title: "AI coding is underwhelming",
  description:
    "Where AI coding tools help, where they disappoint, and how that changes the way engineering work should be judged.",
  url: "https://medium.com/@krisfur/ai-coding-is-underwhelming-002dc1a40d8d",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Krzysztof Furman",
  url: siteUrl,
  image: `${siteUrl}/kris-headshot.png`,
  jobTitle: "Lead Data Engineer",
  description: intro,
  sameAs: [
    "https://github.com/krisfur",
    "https://linkedin.com/in/k-furman",
    "https://medium.com/@krisfur",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Queen Mary University of London",
  },
  worksFor: {
    "@type": "Organization",
    name: "Advertising Standards Authority",
  },
  knowsAbout: [
    "Data Engineering",
    "C++",
    "Go",
    "Python",
    "Rust",
    "SQL",
    "TypeScript",
    "Apache Airflow",
    "AWS",
    "Azure",
    "Snowflake",
    "Particle Physics",
    "DUNE",
  ],
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-8">
      <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500 sm:pt-1">
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
}

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="link-underline text-slate-200"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="mx-auto w-full max-w-3xl space-y-8 px-6 py-12 sm:py-20">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-slate-800">
            <Image
              src="/kris-headshot.png"
              alt="Krzysztof Furman"
              fill
              priority
              sizes="96px"
              className="object-cover"
            />
          </div>
          <div className="space-y-2">
            <p className="text-2xl font-semibold text-white">
              Krzysztof Furman, PhD
            </p>
            <h1 className="text-base text-slate-300">
              Lead Data Engineer · London
            </h1>
            <ul className="flex flex-wrap gap-x-4 gap-y-1 pt-1 text-sm text-slate-400">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 transition hover:text-white"
                  >
                    <span aria-hidden="true">{link.icon}</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </header>

        <div className="space-y-3 text-base leading-7 text-slate-300">
          <p>{intro}</p>
          <p>
            Experienced in academia, low-level software engineering, and data
            science environments, with a focus on DevOps, DataOps, and
            understanding the strengths and weaknesses of programming languages.
          </p>
          <p className="text-sm text-slate-400">
            Also into terminal tools, Taekwondo (4th Dan), and BJJ (blue belt).
          </p>
        </div>

        <Section title="Skills">
          <dl className="space-y-2 text-sm">
            {skills.map((group) => (
              <div
                key={group.label}
                className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-x-3"
              >
                <dt className="text-slate-500">{group.label}</dt>
                <dd className="text-slate-300">{group.items.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section title="Experience">
          <div className="space-y-8">
            {experience.map((job) => (
              <article key={job.company}>
                <h3 className="font-semibold text-white">{job.company}</h3>
                {job.roles.map((role) => (
                  <div
                    key={role.title}
                    className="flex flex-wrap justify-between gap-x-4 text-sm"
                  >
                    <span className="text-slate-300">{role.title}</span>
                    <span className="text-slate-500">{role.period}</span>
                  </div>
                ))}
                <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-6 text-slate-400 marker:text-slate-600">
                  {job.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section title="Projects">
          <div className="space-y-6">
            {featuredProjects.map((project) => (
              <article key={project.name}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-semibold text-white">{project.name}</h3>
                  <div className="flex gap-4 text-sm">
                    {project.links.map((link) => (
                      <ExternalLink key={link.label} href={link.url}>
                        {link.label}
                      </ExternalLink>
                    ))}
                  </div>
                </div>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  {project.description}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  {project.stack.join(" · ")}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section title="Writing">
          <article>
            <h3 className="font-semibold text-white">
              <ExternalLink href={writing.url}>{writing.title}</ExternalLink>
            </h3>
            <p className="mt-1 text-sm leading-6 text-slate-400">
              {writing.description}
            </p>
          </article>
        </Section>
      </main>
    </>
  );
}
