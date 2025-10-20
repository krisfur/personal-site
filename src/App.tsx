import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import ProfileCard from "./ProfileCard";
import "./App.css";

function App() {
  return (
    <main className="app-main">
      <div className="app-container">
        {/* Profile Card */}
        <div className="profile-wrapper">
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
            avatarUrl="/kris.png"
            miniAvatarUrl="/kris.jpg"
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => console.log("Contact clicked")}
          />
        </div>

        {/* Text Panel */}
        <div className="text-panel">
          <h1>Hi, I'm Kris</h1>
          <p>
            👨‍💻 Senior Data Engineer at the ASA.
              <br /><br />
              🎓 <code>PhD</code> in Particle Physics (QMUL).
            <br />
            <br />
              💻 Experienced in <code>C++</code>, <code>Python</code>, <code>Rust</code>, <code>SQL</code>, and <code>TypeScript</code> in software development and data science environments.
            <br />
            <br />
            ☁️ Proficient in cloud deployment (DevOps) and
              data infrastructure (DataOps) on <code>Azure</code> and <code>AWS</code>, orchestration through <code>Apache Airflow</code>, and data management with <code>Snowflake</code>.
            <br />
            <br />
            ⚙️ Passionate about understanding language strengths and weaknesses;
            currently exploring <code>Go</code> and <code>Kotlin</code>.
            <br />
            <br />
            🥋 Also 4th Dan Taekwondo & MMA coach at SX MMA.
          </p>
        </div>

        {/* Work Experience Panel */}
        <div className="text-panel">
          <h1>Work Experience</h1>
          <p>
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
            <br />
            <br />
            <b>Data Analyst</b> @ The Alan Turing Institute
            <br />
            <i>2020 - 2020</i>
            <br />
            <br />
            <b>Data Engineer</b> @ Human Digital
            <br />
            <i>2020 - 2020</i>
          </p>
        </div>
      </div>
        {/* Footer with badges */}
        <footer className="badges-footer">
            <div className="badge-row">
                <img src="https://img.shields.io/badge/C++-00599C?style=flat&logo=cplusplus&logoColor=white" alt="C++"/>
                <img src="https://img.shields.io/badge/Go-00ADD8?style=flat&logo=go&logoColor=white" alt="Go"/>
                <img src="https://img.shields.io/badge/Kotlin-7F52FF?style=flat&logo=kotlin&logoColor=white" alt="Kotlin"/>
                <img src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white" alt="Python"/>
                <img src="https://img.shields.io/badge/Rust-F74C00?style=flat&logo=rust&logoColor=white" alt="Rust"/>
                <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white"
                     alt="TypeScript"/>
            </div>
            <div className="badge-row">
                <img src="https://img.shields.io/badge/Apache%20Airflow-ffffff?style=flat&logo=apacheairflow&logoColor=black"
                     alt="Apache Airflow"/>
                <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white"
                     alt="PostgreSQL"/>
                <img src="https://img.shields.io/badge/Snowflake-29B5E8?style=flat&logo=snowflake&logoColor=white"
                     alt="Snowflake"/>
            </div>
            <div className="badge-row">
                <img src="https://a11ybadges.com/badge?logo=amazonaws" height="18" alt="AWS"/>
                <img src="https://a11ybadges.com/badge?logo=microsoftazure" height="18" alt="Azure"/>
            </div>
        </footer>
    </main>
  );
}

export default App;
