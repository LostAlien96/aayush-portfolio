import { contact } from "../data/contact";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const iconMap = {
  Email: <FaEnvelope />,
  Phone: <FaPhone />,
  GitHub: <FaGithub />,
  LinkedIn: <FaLinkedin />,
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 py-28 scroll-mt-24"
    >
      <h2 className="text-3xl font-bold text-center mb-6">
        Let's Connect
      </h2>

      <p className="text-center opacity-80 mb-16 max-w-xl mx-auto">
        Feel free to reach out for collaboration, opportunities,
        or just to say hello.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {contact.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group bg-white/5 backdrop-blur-xl border border-white/10
                       rounded-2xl p-6 flex flex-col items-center
                       hover:scale-105 hover:border-primary/50
                       transition"
          >
            <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition">
              {iconMap[item.label]}
            </div>

            <h3 className="font-semibold mb-2">
              {item.label}
            </h3>

            <p className="text-sm opacity-80 text-center break-all">
              {item.value}
            </p>
            
          </motion.a>
        ))}
        
      </div>

    </section>
  );
}
