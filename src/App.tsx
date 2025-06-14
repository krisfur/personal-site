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
            👨‍💻 Senior Data Engineer at the ASA 
            <br />
            🎓 PhD in Particle Physics (QMUL)
            <br /><br />
            🔧 Building scalable systems & managing data engineers for the UK’s ad regulator.
            <br /><br />
            💻 Experienced in DAQ dev with C++, data pipelines & analysis in Python, and orchestrating cloud infra on AWS & Azure with Apache Airflow.
            <br /><br />
            🧪 Currently exploring Rust, Go, and modern JavaScript frameworks.
            <br /><br />
            🥋 Also: 4th Dan Taekwondo & MMA coach at SX MMA.
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;