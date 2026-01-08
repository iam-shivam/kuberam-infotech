// src/components/layout/Header.tsx
import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Tech', href: '#tech' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-navy-900/95 backdrop-blur-lg border-b border-white/10 py-4'
        : 'bg-navy-900 py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between">
          {/* Logo - Left side */}
          {/* <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="flex flex-col"
          >
            <img
              src="/KUBERAMLOGO.png"
              alt="Kuberam Infotech Logo"
              className="h-14 w-auto object-contain"
            />
          </motion.div> */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="flex items-center space-x-3"
          >
            {/* Logo */}
            <img
              src="/KUBERAMLOGO.png"
              alt="Kuberam Infotech Logo"
              className="h-12 w-12 object-contain"
            />

            {/* Company Name */}
            <div className="leading-tight">
              <h1 className="text-xl font-semibold text-white tracking-tight">
                Kuberam<span className="text-cyan"></span>
              </h1>
              <p className="text-sm text-gray-400 tracking-wide">
                Infotech
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-10">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className="text-sm font-medium text-gray-300 hover:text-cyan transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
            </div>
          </nav>

          {/* Get Started Button - Right side */}
          <div className="hidden lg:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-gradient-to-r from-gold to-cyan text-navy-900 font-semibold rounded-lg flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ChevronRight size={16} />
            </motion.button>
          </div>

          {/* Mobile Menu Button - Only visible on small screens */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 hover:text-cyan transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          // <motion.div
          //   initial={{ opacity: 0, y: -20 }}
          //   animate={{ opacity: 1, y: 0 }}
          //   exit={{ opacity: 0, y: -20 }}
          //   className="lg:hidden mt-6 bg-navy-800/95 backdrop-blur-lg border border-white/10 rounded-2xl p-6"
          // >
          //   <div className="flex flex-col space-y-4">
          //     {navItems.map((item) => (
          //       <a
          //         key={item.label}
          //         href={item.href}
          //         className="text-gray-300 hover:text-cyan py-3 text-base font-medium transition-colors border-b border-white/5 last:border-0"
          //         onClick={() => setIsOpen(false)}
          //       >
          //         {item.label}
          //       </a>
          //     ))}
          //     <button
          //       className="mt-4 px-6 py-3 bg-gradient-to-r from-gold to-cyan text-navy-900 font-semibold rounded-lg flex items-center justify-center space-x-2"
          //       onClick={() => setIsOpen(false)}
          //     >
          //       <span>Get Started</span>
          //       <ChevronRight size={16} />
          //     </button>
          //   </div>
          // </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="flex items-center space-x-3"
          >
            {/* Logo */}
            <img
              src="/KUBERAMLOGO.png"
              alt="Kuberam Infotech Logo"
              className="h-12 w-12 object-contain"
            />

            {/* Company Name */}
            <div className="leading-tight">
              <h1 className="text-xl font-semibold text-white tracking-tight">
                Kuberam<span className="text-cyan">.</span>
              </h1>
              <p className="text-sm text-gray-400 tracking-wide">
                Infotech
              </p>
            </div>
          </motion.div>

        )}
      </div>
    </motion.header>
  );
};

export default Header;