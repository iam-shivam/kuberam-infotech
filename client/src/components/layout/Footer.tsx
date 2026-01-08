import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050B16] text-gray-300">
      

      {/* GRADIENT LINES (TOP & BOTTOM) */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent" />

      {/* BACKGROUND WATERMARK */}
      {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[18rem] font-extrabold tracking-widest bg-gradient-to-r from-yellow-400/8 via-lime-400/8 to-green-400/8 bg-clip-text text-transparent">
          KUBERAM
        </h1>
      </div> */}

      <div className="relative max-w-7xl mx-auto px-6 py-28">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* LEFT CTA */}
          <div>
            <h2 className="text-5xl font-bold leading-tight mb-6">
              <span className="text-white">Let’s Build </span>
              <br />
              <span className="text-gray-400">Something </span>
              <span className="bg-gradient-to-r from-yellow-400 via-lime-400 to-green-400 bg-clip-text text-transparent">
                Amazing.
              </span>
            </h2>

            <p className="text-gray-400 max-w-md mb-10">
              Ready to transform your digital presence? We are currently
              accepting new enterprise partnerships for Q1 2026.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-200 transition">
                Start a Project
                <ArrowUpRight size={18} />
              </button>

              <button className="border border-white/20 px-6 py-3 rounded-full text-white hover:bg-white/10 transition">
                kuberaminfotech@gmail.com
              </button>
            </div>
          </div>

          {/* RIGHT LINKS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-sm">

            <FooterColumn
              title="Company"
              links={["Home", "Services", "Case Studies", "Careers"]}
            />

            <FooterColumn
              title="Socials"
              links={["LinkedIn", "Twitter", "Instagram", "GitHub"]}
            />

            <FooterColumn
              title="Get in Touch"
              links={["Contact Us", "kuberaminfotech@gmail.com"]}
            />

          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">

          <div className="flex items-center gap-3">
            <img
              src="/KUBERAMLOGO.png"
              alt="Kuberam Logo"
              className="h-6 w-6 object-contain"
            />
            <span>Kuberam Infotech</span>
          </div>

          <p>
            © 2026 Kuberam Infotech. Crafted with ❤️ in React.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ---------- FOOTER COLUMN ---------- */
function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div>
      <h4 className="text-white font-semibold mb-4 tracking-wide">
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
