import {
  ArrowUpRight,
  // Linkedin,
  // Twitter,
  // Instagram,
  // Github,
} from "lucide-react";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { SlSocialTwitter } from "react-icons/sl";

/* ---------------- FOOTER ---------------- */
export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050B16] text-gray-300">

      {/* GRADIENT LINES */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 py-28">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* LEFT CTA */}
          <div>
            <h2 className="text-5xl font-bold leading-tight mb-6">
              <span className="text-white">Let’s Build </span><br />
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
              links={[
                { label: "Home", href: "#" },
                { label: "Services", href: "#" },
                { label: "Case Studies", href: "#" },
                { label: "Careers", href: "#" },
              ]}
            />

            <FooterColumn
              title="Socials"
              // links={[
              //   {
              //     label: "LinkedIn",
              //     href: "https://linkedin.com",
              //     icon: Linkedin,
              //   },
              //   {
              //     label: "Twitter",
              //     href: "https://twitter.com",
              //     icon: Twitter,
              //   },
              //   {
              //     label: "",
              //     href: "https://instagram.com",
              //     icon: SiInstagram,
              //   },
              //   {
              //     label: "",
              //     href: "https://github.com",
              //     icon: SiGithub,
              //   },
              // ]}
                links={[
    { href: "https://linkedin.com", icon: SiLinkedin },
    { href: "https://twitter.com", icon: SlSocialTwitter },
    { href: "https://instagram.com", icon: SiInstagram },
    { href: "https://github.com", icon: SiGithub },
  ]}
            />

            <FooterColumn
              title="Get in Touch"
              links={[
                { label: "Contact Us", href: "#" },
                {
                  label: "kuberaminfotech@gmail.com",
                  href: "mailto:kuberaminfotech@gmail.com",
                },
              ]}
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

          <p>© 2026 Kuberam Infotech. Crafted with ❤️ in React.</p>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- FOOTER COLUMN ---------------- */
function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: {
    label?: string;
    href: string;
    icon?: React.ElementType;
  }[];
}) {
  const isIconOnly = links.every((l) => !l.label);

  return (
    <div>
      <h4 className="text-white font-semibold mb-4 tracking-wide">
        {title}
      </h4>

      {/* ICON-ONLY SOCIALS */}
      {isIconOnly ? (
        <div className="flex items-center gap-3">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-10 h-10
                rounded-xl
                bg-white
                flex items-center justify-center
                shadow-sm
                hover:scale-110
                transition-all
              "
            >
              {link.icon && (
                <link.icon className="w-5 h-5 text-black" />
              )}
            </a>
          ))}
        </div>
      ) : (
        /* NORMAL TEXT LINKS */
        <ul className="space-y-3">
          {links.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition group"
              >
                {link.icon && (
                  <link.icon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                )}
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

