import ProfileCard from './ProfileCard';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function App() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-[#1e1e2e] text-[#cdd6f4]">
      <div className="flex flex-col items-center gap-6 bg-[#313244] rounded-2xl shadow-xl p-6 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold">Hi, I'm Kris</h1>
        <p className="text-sm text-[#a6adc8] mb-4">
          Welcome to my personal site. Built with React, TypeScript, and TailwindCSS v4.
        </p>

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
    </main>
  );
}

export default App;