import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import ProfileCard from "./ProfileCard";
import './App.css'; // Make sure you create this!

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
            avatarUrl="/src/assets/kris.png"
            miniAvatarUrl="/src/assets/kris.jpg"
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => console.log('Contact clicked')}
          />
        </div>

        {/* Text Panel */}
        <div className="text-panel">
          <h1>Hi, I'm Kris</h1>
          <p>
            Welcome to my personal site. Built with React, TypeScript, and previously TailwindCSS.
            This section will hold cool animated intro text, project highlights, and more.
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;