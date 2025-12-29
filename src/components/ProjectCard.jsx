import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="bg-white/5 backdrop-blur-xl border border-white/10
                 rounded-2xl overflow-hidden hover:scale-[1.02]
                 transition-all duration-300"
    >
      {/* Media */}
      <div className="relative h-56 overflow-hidden">
        {project.media.type === "video" ? (
          <video
            src={project.media.src}
            muted
            loop
            playsInline
            autoPlay
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={project.media.src}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="text-sm opacity-80 mt-2">
          {project.description}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-6">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              className="text-sm font-semibold text-primary hover:underline"
            >
              Live Demo
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            className="text-sm font-semibold hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}
