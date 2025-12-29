import { timeline } from "../data/timeline";
import { motion } from "framer-motion";
import {
  FaSchool,
  FaUniversity,
  FaGraduationCap,
} from "react-icons/fa";

const iconMap = {
  school: <FaSchool />,
  college: <FaUniversity />,
  degree: <FaGraduationCap />,
};

export default function Timeline() {
  return (
    <section
      id="journey"
      className="max-w-6xl mx-auto px-6 py-28 scroll-mt-24"
    >
      <h2 className="text-3xl font-bold text-center mb-20">
        My Journey
      </h2>

      <div className="relative">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-white/20 -translate-x-1/2" />

        <div className="space-y-24">
          {timeline.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className={`relative flex items-center ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                {/* Icon */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10">
                  <div className="w-10 h-10 rounded-full bg-primary text-black flex items-center justify-center shadow-lg">
                    {iconMap[item.type]}
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`w-full md:w-[45%] p-6 rounded-2xl
                  bg-white/5 backdrop-blur-xl border border-white/10
                  shadow-lg hover:shadow-primary/30 transition
                  `}
                >
                  <span className="text-sm text-primary font-semibold">
                    {item.year}
                  </span>

                  <h3 className="text-xl font-bold mt-2">
                    {item.title}
                  </h3>

                  <p className="text-sm opacity-80 mt-1">
                    {item.place}
                  </p>

                  <p className="text-sm opacity-90 mt-4 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
