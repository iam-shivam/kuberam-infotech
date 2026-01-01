import type React from "react";

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
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Top Label */}
        <p className="text-sm uppercase tracking-widest text-blue-400 mb-2">
          Stay Ahead of the Curve with Latest
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          Technologies that Drive Our{" "}
          <span className="text-blue-500">Innovation</span>
        </h2>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {["Web App Development", "Mobile App Development", "Analytics", "Data & Cloud"].map(
            (item) => (
              <span
                key={item}
                className="px-6 py-2 rounded-full bg-slate-800 text-slate-200 text-sm hover:bg-slate-700 transition"
              >
                {item}
              </span>
            )
          )}
        </div>

        {/* Tech Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {techStack.map((tech: {name: string, icon: React.ReactNode}) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center justify-center p-6 rounded-xl 
              bg-slate-800/60 backdrop-blur border border-slate-700
              hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20
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
