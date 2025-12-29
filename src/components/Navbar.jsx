import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Journey", href: "#journey" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = links.map((l) =>
      document.querySelector(l.href)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = `#${entry.target.id}`;
            const link = links.find((l) => l.href === id);
            if (link) setActive(link.name);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => section && observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="text-xl font-bold">
          Aayush<span className="text-primary">.</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8 text-sm">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setActive(link.name)}
                className={`transition hover:text-primary
                ${
                  active === link.name
                    ? "text-primary font-semibold"
                    : "opacity-80"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <button
          className="md:hidden text-xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-xl border-t border-white/10">
          <ul className="flex flex-col items-center gap-6 py-8">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => {
                    setActive(link.name);
                    setOpen(false);
                  }}
                  className={`text-lg ${
                    active === link.name
                      ? "text-primary font-semibold"
                      : "opacity-80"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
        </div>
      )}
      

    </nav>
  );
}
