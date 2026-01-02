// TechStack.tsx
import TechCard from "./TechCard";
import { techStack } from "./techStack.data";
import { motion } from "framer-motion";

export default function TechStack() {
  return (
    <section className="py-24 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest mb-3">
            <span className="bg-gradient-to-r from-gold to-cyan bg-clip-text text-transparent">
              Stay Ahead of the Curve with Latest
            </span>
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-white">Technologies that Drive Our </span>
            <span className="bg-gradient-to-r from-gold to-cyan bg-clip-text text-transparent">
              Innovation
            </span>
          </h2>
        </motion.div>

        {/* Tech Cards */}
        <div className="flex gap-6 justify-center flex-wrap">
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <TechCard {...tech} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
