import { motion } from "framer-motion";
import {
  SiAmazonwebservices,
  SiDocker,
  SiFlutter,
  SiKubernetes,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";
import { BrainCircuit, Code2, Layers, Sparkles } from "lucide-react";

/* ---------------- ICON NORMALIZER ---------------- */
const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <span className="flex items-center justify-center w-6 h-6 text-cyan/80">
    {children}
  </span>
);

const iconClass = "w-[18px] h-[18px]";

/* ---------------- COMPONENT ---------------- */
export default function TechStack() {
  return (
    <section id="tech-stack" className="py-28 bg-navy-900">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* ---------- HEADING ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
            Stay Ahead of the Curve with Latest
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-white">Technologies that Drive Our </span>
            <span className="bg-gradient-to-r from-gold to-cyan bg-clip-text text-transparent">
              Innovation
            </span>
          </h2>
        </motion.div>

        {/* ---------- CATEGORY PILLS ---------- */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {["Web App Development", "Mobile App Development", "Analytics", "Data & Cloud"].map(
            (item) => (
              <span
                key={item}
                className="
                  px-6 py-2 rounded-full text-sm font-medium
                  bg-white/5 border border-white/10
                  text-cyan
                  hover:bg-white/10 hover:border-cyan/40
                  transition-all
                "
              >
                {item}
              </span>
            )
          )}
        </div>

        {/* ---------- TECH GRID ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

          {/* FRONTEND */}
          <TechColumn title="Frontend" items={[
            { name: "React", icon: SiReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Tailwind CSS", icon: Code2 },
          ]} />

          {/* BACKEND */}
          <TechColumn title="Backend" items={[
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Python", icon: SiPython },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "Go", icon: Code2 },
          ]} />

          {/* MOBILE & AI */}
          <TechColumn title="Mobile & AI" items={[
            { name: "Flutter", icon: SiFlutter },
            { name: "TensorFlow", icon: SiTensorflow },
            { name: "PyTorch", icon: BrainCircuit },
            { name: "OpenAI API", icon: Sparkles },
          ]} />

          {/* CLOUD & DEVOPS */}
          <TechColumn title="Cloud & DevOps" items={[
            { name: "AWS", icon: SiAmazonwebservices },
            { name: "Docker", icon: SiDocker },
            { name: "Kubernetes", icon: SiKubernetes },
            { name: "Terraform", icon: Layers },
          ]} />

        </div>
      </div>
    </section>
  );
}

/* ---------------- COLUMN COMPONENT ---------------- */
function TechColumn({
  title,
  items,
}: {
  title: string;
  items: { name: string; icon: any }[];
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <h4 className="text-xs font-semibold tracking-widest uppercase text-gray-300 mb-3">
        {title}
      </h4>

      {/* Equal underline */}
      <span className="h-[2px] w-14 bg-cyan rounded-full mb-6"></span>

      <ul className="space-y-4">
        {items.map((tech) => (
          <li
            key={tech.name}
            className="flex items-center gap-3 text-gray-400 hover:text-white transition"
          >
            <IconWrapper>
              <tech.icon className={iconClass} />
            </IconWrapper>

            <span className="font-medium leading-none">
              {tech.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
