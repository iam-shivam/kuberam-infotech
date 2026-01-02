import type React from "react";
import { motion } from "framer-motion";

export default function TechStack() {
  const techStack = [
    { name: "React JS", icon: "⚛️" },
    { name: "Node JS", icon: "🟢" },
    { name: "Angular", icon: "🅰️" },
    { name: "TypeScript", icon: "TS" },
    { name: "NestJS", icon: "🐦" },
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MySQL", icon: "🗄️" },
    { name: "GraphQL", icon: "🔺" },
    { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁️" },
    { name: "Express", icon: "🚀" },
  ];

  return (
    <section
      id="tech-stack"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-navy-900"
    >
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-cyan mb-3">
            <span className="bg-gradient-to-r from-gold to-cyan bg-clip-text text-transparent">
            Stay Ahead of the Curve with Latest
            </span>
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gold to-cyan bg-clip-text text-transparent">
            <span className="text-white">Technologies that Drive Our </span>
            </span>
            <span className="bg-gradient-to-r from-gold to-cyan bg-clip-text text-transparent">
              Innovation
            </span>
          </h2>
        </motion.div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {[
            "Web App Development",
            "Mobile App Development",
            "Analytics",
            "Data & Cloud",
          ].map((item) => (
            <span
              key={item}
              className="px-6 py-2 rounded-full
              bg-gradient-to-r from-gold/10 to-cyan/10
              border border-cyan/20
              text-cyan text-sm font-medium
              hover:from-gold/20 hover:to-cyan/20
              transition"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Tech Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {techStack.map((tech: { name: string; icon: React.ReactNode }) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center justify-center p-6 rounded-xl
              bg-navy-800/60 backdrop-blur
              border border-white/10
              hover:border-cyan/40
              hover:shadow-lg hover:shadow-cyan/20
              transition-all duration-300"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition">
                {tech.icon}
              </div>
              <span className="text-white font-medium text-sm">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
