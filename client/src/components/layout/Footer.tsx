import { ArrowUpRight } from "lucide-react";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { SlSocialTwitter } from "react-icons/sl";

/* ---------------- SCROLL HELPER ---------------- */
const HEADER_OFFSET = 90;

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;

  const y =
    element.getBoundingClientRect().top +
    window.pageYOffset -
    HEADER_OFFSET;

  window.scrollTo({ top: y, behavior: "smooth" });
};

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
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-white text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-200 transition"
              >
                Start a Project
                <ArrowUpRight size={18} />
              </button>

              <a
                href="mailto:kuberaminfotech@gmail.com"
                className="border border-white/20 px-6 py-3 rounded-full text-white hover:bg-white/10 transition"
              >
                kuberaminfotech@gmail.com
              </a>
            </div>
          </div>

          {/* RIGHT LINKS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[auto_auto_auto] gap-x-8 gap-y-6 text-sm">
            {/* COMPANY */}
            <FooterColumn
              title="Company"
              links={[
                { label: "Home", id: "home" },
                { label: "About", id: "about" },
                { label: "Services", id: "services" },
                { label: "Why Us", id: "why-us" },
                { label: "Tech", id: "tech-stack" },
                { label: "Contact", id: "contact" },
              ]}
            />

            {/* SOCIALS */}
            <FooterColumn
              title="Socials"
              links={[
                {
                  href: "https://www.linkedin.com/company/kuberam-infotech/?viewAsMember=true",
                  icon: SiLinkedin,
                },
                {
                  href: "https://twitter.com",
                  icon: SlSocialTwitter,
                },
                {
                  href: "https://instagram.com",
                  icon: SiInstagram,
                },
                {
                  href: "https://github.com",
                  icon: SiGithub,
                },
              ]}
            />

            {/* CONTACT */}
            <FooterColumn
              title="Get in Touch"
              links={[
                { label: "Contact Us", id: "contact" },
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
    id?: string;
    href?: string;
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
                bg-white/90
                flex items-center justify-center
                shadow-sm
                hover:scale-110
                hover:bg-white
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
        /* TEXT LINKS */
        <ul className="space-y-3">
          {links.map((link, idx) => (
            <li key={idx}>
              {link.id ? (
                <button
                  type="button"
                  onClick={() => scrollToSection(link.id!)}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition"
                >
                  <span>{link.label}</span>
                </button>
              ) : (
                <a
                  href={link.href}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition"
                >
                  <span>{link.label}</span>
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
