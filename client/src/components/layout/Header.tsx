// src/components/layout/Header.tsx
import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HEADER_OFFSET = 90;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Why Us', id: 'why-us' },
    { label: 'Tech', id: 'tech-stack' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const y =
      element.getBoundingClientRect().top +
      window.pageYOffset -
      HEADER_OFFSET;

    window.scrollTo({ top: y, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-900/95 backdrop-blur-lg border-b border-white/10 py-4'
          : 'bg-navy-900 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between relative">

          {/* LOGO */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <img
              src="/KUBERAMLOGO.png"
              alt="Kuberam Infotech Logo"
              className="h-12 w-12 object-contain"
            />
            <div className="leading-tight">
              <h1 className="text-xl font-semibold text-white">
                Kuberam
              </h1>
              <p className="text-sm text-gray-400">Infotech</p>
            </div>
          </motion.div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center space-x-10">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ y: -2 }}
                  onClick={() => scrollToSection(item.id)}
                  className="relative text-sm font-medium text-gray-300 hover:text-cyan transition-colors"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan transition-all duration-300 group-hover:w-full" />
                </motion.button>
              ))}
            </div>
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 bg-gradient-to-r from-gold to-cyan text-navy-900 font-semibold rounded-lg flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ChevronRight size={16} />
            </motion.button>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 hover:text-cyan"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden mt-6 bg-navy-800/95 backdrop-blur-lg border border-white/10 rounded-2xl p-6"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-gray-300 hover:text-cyan py-3 text-base font-medium border-b border-white/5 last:border-0"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="mt-4 px-6 py-3 bg-gradient-to-r from-gold to-cyan text-navy-900 font-semibold rounded-lg flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
