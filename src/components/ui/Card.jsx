import { motion } from "framer-motion";

export default function Card({ children, className = "" }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`bg-white/5 backdrop-blur-xl
      border border-white/10 rounded-2xl
      shadow-lg hover:shadow-primary/30
      p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}
