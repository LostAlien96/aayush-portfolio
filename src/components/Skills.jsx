import { skills } from "../data/skills";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-28 scroll-mt-24"
    >
      <h2 className="text-3xl font-bold text-center mb-16">
        Skills & Tools
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {skills.map((group, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10
                       rounded-2xl p-6 hover:scale-[1.03]
                       hover:shadow-primary/20 transition"
          >
            <h3 className="text-xl font-semibold mb-6">
              {group.title}
            </h3>

            <ul className="space-y-3">
              {group.skills.map((skill, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-sm opacity-90"
                >
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
