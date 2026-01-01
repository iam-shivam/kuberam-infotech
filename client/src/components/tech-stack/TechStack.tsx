// TechStack.tsx
import TechCard from "./TechCard";
import { techStack } from "./techStack.data";

export default function TechStack() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-sm text-blue-400 text-center mb-2 tracking-widest">
          STAY AHEAD OF THE CURVE WITH LATEST
        </p>

        <h2 className="text-4xl font-bold text-center text-white mb-10">
          Technologies that Drive Our Innovation
        </h2>

        <div className="flex gap-6 justify-center flex-wrap">
          {techStack.map((tech) => (
            <TechCard key={tech.name} {...tech} />
          ))}
        </div>
      </div>
    </section>
  );
}
