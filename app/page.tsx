"use client";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import ProfileCard from "@/components/ProfileCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-base text-text">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 max-w-[96rem] w-full lg:items-center">
        {/* Profile Card */}
        <div className="flex-shrink-0 flex justify-center lg:justify-start w-full lg:w-auto h-fit">
          <ProfileCard
            name="Krzysztof Furman"
            title="Senior Data Engineer"
            handle="krisfur"
            status="PhD"
            contactText="Contact"
            behindGradient="radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(280,100%,90%,var(--card-opacity)) 4%,hsla(280,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(280,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(280,0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,#8a2be2c4 0%,#4b008200 100%),radial-gradient(100% 100% at 50% 50%,#9370dbff 1%,#4b008200 76%),conic-gradient(from 124deg at 50% 50%,#8a2be2ff 0%,#da70d6ff 40%,#da70d6ff 60%,#8a2be2ff 100%)"
            innerGradient="linear-gradient(145deg,#4b00828c 0%,#9370db44 100%)"
            contactLinks={[
              {
                label: "LinkedIn",
                url: "https://linkedin.com/in/k-furman",
                icon: <FaLinkedin />,
              },
              {
                label: "GitHub",
                url: "https://github.com/krisfur",
                icon: <FaGithub />,
              },
              {
                label: "Instagram",
                url: "https://instagram.com/krisfur",
                icon: <FaInstagram />,
              },
            ]}
            avatarUrl="/kris-taller.png"
            miniAvatarUrl="/kris.jpg"
            showUserInfo={true}
            onContactClick={() => console.log("Contact clicked")}
          />
        </div>

        {/* Right column: Text and Work Experience panels */}
        <div className="flex flex-col gap-8 flex-1">
          {/* Text Panel */}
          <div className="p-8 bg-white/5 rounded-2xl shadow-2xl w-full">
            <h1 className="text-4xl font-bold mb-4">Hi, I&apos;m Kris</h1>
            <p className="text-lg leading-relaxed text-subtext">
              👨‍💻 Senior Data Engineer at the ASA.
              <br />
              <br />
              🎓 <code>PhD</code> in Particle Physics (QMUL).
              <br />
              <br />
              💻 Experienced in <code>C++</code>, <code>Go</code>,{" "}
              <code>Python</code>, <code>Rust</code>, <code>SQL</code>, and{" "}
              <code>TypeScript</code> in software development and data science
              environments.
              <br />
              <br />
              ☁️ Proficient in cloud deployment (DevOps) and data infrastructure
              (DataOps) on <code>Azure</code> and <code>AWS</code>,
              orchestration through <code>Apache Airflow</code>, and data
              management with <code>Snowflake</code>.
              <br />
              <br />
              ⚙️ Passionate about understanding language strengths and
              weaknesses; currently exploring <code>Odin</code> and{" "}
              <code>Zig</code>.
              <br />
              <br />
              🥋 Also 4th Dan Taekwondo & Blue Belt BJJ.
            </p>
          </div>

          {/* Work Experience Panel */}
          <div className="p-8 bg-white/5 rounded-2xl shadow-2xl w-full">
            <h1 className="text-4xl font-bold mb-4">Work Experience</h1>
            <p className="text-lg leading-relaxed text-subtext">
              <b>Senior Data Engineer</b> @ Advertising Standards Authority
              <br />
              <i>2023 - Present</i>
              <br />
              <br />
              <b>Doctoral Researcher</b> @ Queen Mary University of London
              <br />
              <i>2020 - 2023</i>
              <br />
              <br />
              <b>Senior Data Engineer</b> @ Rewire Online
              <br />
              <i>2021 - 2022</i>
            </p>
          </div>
        </div>
      </div>

      {/* Footer with badges */}
      <footer className="flex flex-col gap-3 items-center mt-8 pt-8 px-4 border-t border-mauve/20 w-full">
        <div className="flex flex-wrap gap-2 justify-center">
          <Image
            src="https://img.shields.io/badge/C++-00599C?style=flat&logo=cplusplus&logoColor=white"
            alt="C++"
            width={68}
            height={20}
            unoptimized
          />
          <Image
            src="https://img.shields.io/badge/Go-00ADD8?style=flat&logo=go&logoColor=white"
            alt="Go"
            width={60}
            height={20}
            unoptimized
          />
          <Image
            src="https://img.shields.io/badge/Odin-1d568d?style=flat&logo=odin&logoColor=white"
            alt="Odin"
            width={80}
            height={20}
            unoptimized
          />
          <Image
            src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white"
            alt="Python"
            width={90}
            height={20}
            unoptimized
          />
          <Image
            src="https://img.shields.io/badge/Rust-F74C00?style=flat&logo=rust&logoColor=white"
            alt="Rust"
            width={75}
            height={20}
            unoptimized
          />
          <Image
            src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white"
            alt="TypeScript"
            width={120}
            height={20}
            unoptimized
          />
          <Image
            src="https://img.shields.io/badge/Zig-F7A41D?style=flat&logo=zig&logoColor=white"
            alt="Zig"
            width={56}
            height={20}
            unoptimized
          />
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          <Image
            src="https://img.shields.io/badge/Apache%20Airflow-ffffff?style=flat&logo=apacheairflow&logoColor=black"
            alt="Apache Airflow"
            width={134}
            height={20}
            unoptimized
          />
          <Image
            src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white"
            alt="PostgreSQL"
            width={102}
            height={20}
            unoptimized
          />
          <Image
            src="https://img.shields.io/badge/Snowflake-29B5E8?style=flat&logo=snowflake&logoColor=white"
            alt="Snowflake"
            width={96}
            height={20}
            unoptimized
          />
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          <Image
            src="https://a11ybadges.com/badge?logo=amazonaws"
            height={20}
            width={150}
            alt="AWS"
            unoptimized
          />
          <Image
            src="https://a11ybadges.com/badge?logo=microsoftazure"
            height={20}
            width={170}
            alt="Azure"
            unoptimized
          />
        </div>
      </footer>
    </main>
  );
}
