import { FaGithub, FaInstagram, FaLinkedin, FaMedium } from "react-icons/fa";
import ProfileCard from "@/components/ProfileCard";
import { siteUrl } from "./site-config";

const intro =
  "Building data platforms, internal tools, and both user- and developer-facing systems.";

const experience = [
  {
    title: "Senior Data Engineer",
    company: "Advertising Standards Authority",
    period: "May 2023 - Present",
    details: [
      "Led a team of data engineers across day-to-day delivery, code review, hiring, and mentoring.",
      "Built high-volume ingestion pipelines for APIs and web scraping workflows across platforms including Meta, Google, and TikTok.",
      "Overhauled a hybrid Azure and AWS data platform with Snowflake and Airflow, reducing cost per data item by 30% while supporting more than 100x data growth.",
      "Built internal TypeScript and Python applications, including LLM-based agentic tools for enterprise knowledge retrieval.",
    ],
  },
  {
    title: "Doctoral Researcher",
    company: "Queen Mary University of London",
    period: "Sep 2020 - Apr 2023",
    details: [
      "Developed the near detector upstream DAQ for the DUNE experiment at Fermilab using C++, Python, ZeroMQ, and custom TCP socket and buffer handling.",
      "Studied the impact of DUNE PRISM on statistical and systematic uncertainties using Tikhonov regularisation with SciPy and NumPy.",
      "Demonstrated Statistical Data Analysis, Elemetnary Particle Physics, and Practical Machine Learning modules.",
    ],
  },
  {
    title: "Senior Data Engineer",
    company: "Rewire Online",
    period: "May 2021 - Dec 2022",
    details: [
      "Built Python data collection pipelines around Twitter and Reddit APIs, deployed on AWS EC2.",
      "Handled data analysis, cleaning, storage, and automation testing with pandas, PostgreSQL, S3, Selenium, and custom tooling.",
      "Integrated the Rewire API into a Python Discord bot that was distributed publicly.",
    ],
  },
] as const;

type FeaturedProject = {
  name: string;
  description: string;
  primaryUrl: string;
  secondaryUrl?: string;
  secondaryLabel?: string;
  stack: readonly string[];
};

const featuredProjects: readonly FeaturedProject[] = [
  {
    name: "FEX",
    description:
      "Universal interactive system package search for the terminal, written in Rust and published on crates.io.",
    primaryUrl: "https://github.com/krisfur/fex",
    secondaryUrl: "https://crates.io/crates/fex",
    secondaryLabel: "Crates.io",
    stack: ["Rust", "CLI", "Terminal UX"],
  },
  {
    name: "whisper-parallel-cpu",
    description:
      "A pybind11 wrapper around whisper.cpp for CPU-parallel transcription workloads in cloud environments.",
    primaryUrl: "https://github.com/krisfur/whisper-parallel-cpu",
    secondaryUrl: "https://pypi.org/project/whisper-parallel-cpu/",
    secondaryLabel: "PyPI",
    stack: ["Python", "C++", "FFMPEG"],
  },
] as const;

const writing = {
  title: "AI coding is underwhelming",
  description:
    "A short essay on where AI coding tools help, where they disappoint, and how that changes the way engineering work should be judged.",
  url: "https://medium.com/@krisfur/ai-coding-is-underwhelming-002dc1a40d8d",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Krzysztof Furman",
  url: siteUrl,
  jobTitle: "Senior Data Engineer",
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
    "Python",
    "Go",
    "Rust",
    "TypeScript",
    "SQL",
    "Apache Airflow",
    "Snowflake",
    "AWS",
    "Azure",
    "Particle Physics",
    "DUNE",
  ],
};

function SectionHeading({ title }: { title: string }) {
  return (
    <h2 className="text-sm font-medium uppercase tracking-[0.24em] text-slate-400">
      {title}
    </h2>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="mx-auto min-h-screen w-full max-w-7xl px-6 py-8 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[minmax(18rem,28rem)_minmax(0,1fr)] lg:gap-10">
          <div className="lg:sticky lg:top-8 lg:self-start">
            <ProfileCard
              photoUrl="/kris-taller.png"
              avatarUrl="/kris.jpg"
              name="Krzysztof Furman, PhD"
              title="Senior Data Engineer"
              summary={intro}
              note="Also into programming languages, terminal tools, Taekwondo (4th Dan), and BJJ (blue belt)."
              contactLinks={[
                {
                  label: "GitHub",
                  url: "https://github.com/krisfur",
                  icon: <FaGithub />,
                },
                {
                  label: "LinkedIn",
                  url: "https://linkedin.com/in/k-furman",
                  icon: <FaLinkedin />,
                },
                {
                  label: "Instagram",
                  url: "https://instagram.com/krisfur",
                  icon: <FaInstagram />,
                },
                {
                  label: "Medium",
                  url: "https://medium.com/@krisfur",
                  icon: <FaMedium />,
                },
              ]}
            />
          </div>

          <div className="space-y-5">
            <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-[0_24px_70px_rgba(0,0,0,0.25)] sm:p-9">
              <h1 className="max-w-4xl font-serif text-5xl leading-tight text-white sm:text-6xl sm:leading-tight">
                Senior Data Engineer · London
              </h1>
              <div className="mt-6 max-w-3xl space-y-4 text-lg leading-8 text-slate-300">
                <p>
                  Experienced in academia, low-level software engineering, and
                  data science environments.
                </p>
                <p>Proficient in DevOps and DataOps.</p>
                <p>
                  Passionate about understanding programming language strengths
                  and weaknesses.
                </p>
              </div>
              <div className="mt-8 space-y-3 text-base leading-7 text-slate-300">
                <div className="space-y-2">
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                    Programming languages
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "C++",
                      "Go",
                      "Python",
                      "Rust",
                      "SQL",
                      "TypeScript",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-sm text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                    Platforms
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Airflow", "Snowflake", "AWS", "Azure"].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-sm text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                    Exploring
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Odin", "Swift", "Zig"].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-sm text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-[0_24px_70px_rgba(0,0,0,0.25)] sm:p-9">
              <SectionHeading title="Experience" />
              <div className="mt-8 space-y-6">
                {experience.map((role) => (
                  <article
                    key={`${role.title}-${role.company}`}
                    className="rounded-2xl border border-white/10 bg-black/10 p-5"
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {role.title}
                        </h3>
                        <p className="text-base text-slate-300">
                          {role.company}
                        </p>
                      </div>
                      <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                        {role.period}
                      </p>
                    </div>
                    <ul className="mt-4 space-y-2 text-base leading-7 text-slate-400">
                      {role.details.slice(0, 3).map((detail) => (
                        <li key={detail} className="flex gap-3">
                          <span className="mt-3 h-1.5 w-1.5 rounded-full bg-slate-500" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-[0_24px_70px_rgba(0,0,0,0.25)] sm:p-9">
              <SectionHeading title="Selected projects" />
              <div className="mt-8 grid gap-4 lg:grid-cols-2">
                {featuredProjects.map((project) => (
                  <article
                    key={project.name}
                    className="flex h-full flex-col rounded-2xl border border-white/10 bg-black/10 p-5"
                  >
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-white">
                          {project.name}
                        </h3>
                        <p className="text-base leading-7 text-slate-400">
                          {project.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-slate-400"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6 flex gap-4 text-sm font-medium text-slate-200">
                      <a
                        href={project.primaryUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="link-underline"
                      >
                        GitHub
                      </a>
                      {project.secondaryUrl ? (
                        <a
                          href={project.secondaryUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="link-underline"
                        >
                          {project.secondaryLabel}
                        </a>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-[0_24px_70px_rgba(0,0,0,0.25)] sm:p-9">
              <SectionHeading title="Writing" />
              <article className="mt-8 rounded-2xl border border-white/10 bg-black/10 p-5">
                <h3 className="text-xl font-semibold text-white">
                  {writing.title}
                </h3>
                <p className="mt-3 max-w-3xl text-base leading-7 text-slate-400">
                  {writing.description}
                </p>
                <a
                  href={writing.url}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline mt-5 inline-flex text-sm font-medium text-slate-200"
                >
                  Read on Medium
                </a>
              </article>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
