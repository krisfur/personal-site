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
            👨‍💻 Senior Data Engineer at the ASA 
            <br />
            🎓 PhD in Particle Physics (QMUL)
            <br /><br />
            🔧 Building scalable systems & managing data engineers for the UK's ad regulator.
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