export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Technologies We Use
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['React', 'Nest.js', 'Angular', 'TypeScript', 'Node.js', 'MongoDB', 'PostgreSQL', 'MYSQL', 'GraphQL', 'Express', 'Docker', 'AWS'].map((tech) => (
            <div key={tech} className="flex items-center justify-center p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition">
              <span className="text-white font-semibold">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
