import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto px-6 py-24 scroll-mt-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-10"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="text-lg leading-relaxed opacity-90 space-y-6"
      >
        <p>
          I’m Aayush, a Computer Science Engineering undergraduate at
          <span className="text-primary font-semibold">
            {" "}Maulana Azad National Institute of Technology (MANIT), Bhopal
          </span>.
          I have a strong interest in understanding how software systems work
          and applying that knowledge to build practical, real-world solutions.
        </p>

        <p>
          My journey in programming started with curiosity, but over time it
          evolved into a consistent habit of problem-solving and learning.
          I enjoy working with data structures and algorithms, as they have
          helped me develop a structured way of thinking and approach problems
          logically and efficiently.
        </p>

        <p>
          Alongside problem solving, I actively work on building web-based
          projects where I focus on clean UI design, maintainable code
          structure, and smooth user experience. I like exploring how frontend
          and backend systems interact and how performance and usability can be
          balanced together.
        </p>

        <p>
          Currently, I am focused on strengthening my core computer science
          fundamentals, improving my coding skills, and building projects that
          reflect practical impact. I aim to continuously grow as a developer
          and contribute to meaningful software products in the future.
        </p>
      </motion.div>
    </section>
  );
}
