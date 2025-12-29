import { motion } from "framer-motion";
import { RESUME_LINK } from "../assets/resume";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center max-w-7xl mx-auto px-6 scroll-mt-24"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">

        {/* LEFT CONTENT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold leading-tight"
          >
            Hi, I’m <span className="text-primary">Aayush</span> 👋
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg opacity-80 max-w-xl"
          >
            A Computer Science student at <b>NIT Bhopal</b>, passionate about
            building clean interfaces, scalable systems, and solving real-world
            problems.
            <br />
            I love turning ideas into products and constantly pushing my limits.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.4 }}
            className="flex gap-4 mt-10 flex-wrap"
          >
            <a href="#projects">
              <button className="px-6 py-3 rounded-xl bg-primary text-black font-semibold
                                 hover:scale-105 active:scale-95 transition">
                View Projects
              </button>
            </a>

            <a
              href={RESUME_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-3 rounded-xl border border-primary text-primary
                                 hover:bg-primary hover:text-black
                                 hover:scale-105 active:scale-95 transition">
                View Resume
              </button>
            </a>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center items-center">

          {/* Glow blobs */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="w-72 h-72 bg-primary/30 rounded-full blur-3xl absolute"
          />
          <motion.div
            animate={{ scale: [1.1, 1, 1.1] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="w-72 h-72 bg-purple-500/30 rounded-full blur-3xl absolute"
          />

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full
                       overflow-hidden border-4 border-primary shadow-xl"
          >
            <img
              src="https://res.cloudinary.com/df0jsgcqg/image/upload/v1767005186/Screenshot_2025-12-29_161606_ehyxgy.png"
              alt="Aayush Mangal"
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
