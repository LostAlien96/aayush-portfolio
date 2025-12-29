import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">

        {/* Left */}
        <div>
          <h3 className="text-xl font-bold mb-2">Aayush Mangal</h3>
          <p className="text-sm opacity-70 max-w-sm">
            Computer Science Engineering student at NIT Bhopal,
            focused on building impactful projects and strong
            problem-solving skills.
          </p>
        </div>

        {/* Middle */}
        <div className="md:text-center">
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="#home" className="hover:text-primary">Home</a></li>
            <li><a href="#about" className="hover:text-primary">About</a></li>
            <li><a href="#education" className="hover:text-primary">Timeline</a></li>
            <li><a href="#projects" className="hover:text-primary">Projects</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>

        {/* Right */}
        <div className="md:text-right">
          <h4 className="font-semibold mb-4">Connect</h4>
          <div className="flex md:justify-end gap-4 text-xl">
            <a href="https://github.com/LostAlien96" target="_blank" className="hover:text-primary">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/aayush-mangal-5a7015312/" target="_blank" className="hover:text-primary">
              <FaLinkedin />
            </a>
            <a href="mailto:aayushmangal420@gmail.com" className="hover:text-primary">
              <FaEnvelope />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 text-center py-6 text-sm opacity-60">
        © {new Date().getFullYear()} Aayush Mangal. Built with React & Tailwind CSS.
      </div>

      {/* Scroll to Top */}
      <a
        href="#home"
        className="fixed bottom-6 right-6 bg-primary text-black
                   p-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        <FaArrowUp />
      </a>
    </footer>
  );
}
