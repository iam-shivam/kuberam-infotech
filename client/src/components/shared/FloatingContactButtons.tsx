// src/components/shared/FloatingContactButtons.tsx - PROPERLY FIXED
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  X, 
  MessageSquare,
  ChevronUp,
  Sparkles,
} from 'lucide-react';

const FloatingContactButtons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);

  // Contact options
  const contactOptions = [
    {
      id: 1,
      icon: MessageCircle,
      label: 'WhatsApp',
      description: 'Instant chat support',
      color: 'bg-green-500 hover:bg-green-600',
      hoverColor: 'bg-green-500/10',
      link: 'https://wa.me/9274774155',
      delay: 0.1,
    },
    {
      id: 2,
      icon: Mail,
      label: 'Email',
      description: 'contact@kuberaminfotech.com',
      color: 'bg-blue-500 hover:bg-blue-600',
      hoverColor: 'bg-blue-500/10',
      link: 'mailto:contact@kuberaminfotech.com',
      delay: 0.2,
    },
    {
      id: 3,
      icon: Phone,
      label: 'Call',
      description: '+91 9274774155',
      color: 'bg-cyan hover:bg-cyan/90',
      hoverColor: 'bg-cyan/10',
      link: 'tel:+919274774155',
      delay: 0.3,
    },
    {
      id: 4,
      icon: MessageSquare,
      label: 'Live Chat',
      description: 'Coming Soon',
      color: 'bg-electric hover:bg-electric/90',
      hoverColor: 'bg-electric/10',
      link: '#',
      delay: 0.4,
    },
  ];

  // Detect mobile/desktop properly
  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth;
      // Mobile: < 768px, Tablet: 768px - 1024px, Desktop: > 1024px
      const mobile = width < 768;
      setIsMobile(mobile);
    };
    
    checkMobile();
    const handleResize = () => {
      checkMobile();
      // Reset open state when resizing
      setIsOpen(false);
    };
    
    window.addEventListener('resize', handleResize);

    // Desktop-only scroll behavior
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Only apply scroll behavior on desktop
      if (!isMobile) {
        if (scrollPosition > windowHeight * 0.3) {
          setShowButtons(true);
        } else {
          setShowButtons(false);
          setIsOpen(false);
        }
      }
      
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial setup
    handleScroll();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isMobile]);

  // Desktop hover handlers
  const handleMouseEnter = () => {
    if (!isMobile) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      timeoutRef.current = window.setTimeout(() => {
        setIsOpen(false);
      }, 300);
    }
  };

  const handleContactClick = (link: string, label: string) => {
    if (label === 'Live Chat') {
      setIsOpen(false);
      alert('Live chat feature coming soon!');
    } else if (link !== '#') {
      window.open(link, '_blank');
    }
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render mobile version
  if (isMobile) {
    return (
      <>
        {/* Fixed Mobile Header at TOP */}
        <div className="md:hidden fixed top-0 left-0 right-0 z-50">
          <div className="bg-navy-900/95 backdrop-blur-lg border-b border-cyan/20">
            {/* Logo and Company Name */}
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-cyan flex items-center justify-center">
                  <Sparkles className="text-navy-900" size={20} />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">KUBERAM</div>
                  <div className="text-cyan text-xs -mt-1">Infotech</div>
                </div>
              </div>
              
              {/* Website Link */}
              <a 
                href="https://kuberaminfotech.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan text-sm font-medium bg-navy-800/50 px-3 py-1 rounded-lg"
              >
                Visit Site
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Bottom Contact Bar */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-40">
          <div className="bg-navy-900/95 backdrop-blur-lg border-t border-white/10">
            {/* Website Link at Top of Bar */}
            <div className="text-center py-2 border-b border-white/10 bg-gradient-to-r from-gold/10 to-cyan/10">
              <a 
                href="https://kuberaminfotech.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan text-sm font-medium"
              >
                kuberaminfotech.com
              </a>
            </div>
            
            {/* Contact Buttons Grid */}
            <div className="grid grid-cols-4 gap-0">
              {contactOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleContactClick(option.link, option.label)}
                  className="flex flex-col items-center justify-center py-3 active:bg-white/5 transition-colors"
                >
                  <div className={`w-10 h-10 rounded-full ${option.color} flex items-center justify-center mb-1`}>
                    <option.icon className="text-white" size={18} />
                  </div>
                  <span className="text-white text-xs font-medium">
                    {option.label === 'Live Chat' ? 'Chat' : option.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Add padding to main content to avoid overlap with fixed bars */}
        <style>{`
          body {
            padding-top: 72px;
            padding-bottom: 88px;
          }
        `}</style>
      </>
    );
  }

  // Render desktop version
  return (
    <>
      {/* Floating Contact Button (Desktop only) */}
      <AnimatePresence>
        {showButtons && (
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-50"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Contact Options Panel */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, x: 20 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-full right-0 mb-4"
                >
                  <div className="glass-card rounded-2xl p-4 shadow-2xl w-64">
                    <div>
                      <h4 className="text-white font-bold text-sm mb-3 flex items-center">
                        <MessageCircle className="text-cyan mr-2" size={16} />
                        Contact Options
                      </h4>
                      <div className="space-y-2">
                        {contactOptions.map((option) => (
                          <motion.div
                            key={option.id}
                            initial={{ opacity: 0, scale: 0.9, x: 10 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ delay: option.delay }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleContactClick(option.link, option.label)}
                            className={`flex items-center space-x-3 p-3 rounded-lg ${option.hoverColor} hover:bg-opacity-30 transition-all cursor-pointer group`}
                          >
                            <div className={`w-10 h-10 rounded-full ${option.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                              <option.icon className="text-white" size={18} />
                            </div>
                            <div className="flex-1">
                              <div className="text-white font-medium text-sm">{option.label}</div>
                              <div className="text-gray-400 text-xs">{option.description}</div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-white/10">
                      <p className="text-gray-400 text-xs text-center">
                        We respond within 15 minutes
                      </p>
                    </div>
                  </div>

                  {/* Arrow pointing to button */}
                  <div className="absolute bottom-0 right-4 transform translate-y-full">
                    <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-navy-800"></div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main Floating Button */}
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="relative group"
              aria-label="Contact options"
            >
              {/* Pulsing Rings */}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-cyan rounded-full blur opacity-30"
              />
              <motion.div
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="absolute inset-0 bg-electric rounded-full blur opacity-20"
              />
              
              {/* Main Button */}
              <div className="relative w-16 h-16 bg-gradient-to-br from-gold to-cyan rounded-full flex items-center justify-center shadow-2xl shadow-gold/30 group-hover:shadow-gold/50 transition-shadow">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isOpen ? 'close' : 'contact'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isOpen ? (
                      <X className="text-navy-900" size={28} />
                    ) : (
                      <MessageCircle className="text-navy-900" size={28} />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Hover Label */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 whitespace-nowrap"
              >
                <div className="bg-navy-800/90 backdrop-blur-sm text-white text-sm font-medium px-3 py-2 rounded-lg shadow-lg">
                  Get in touch
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-navy-800/90"></div>
                </div>
              </motion.div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to Top Button (Desktop only) */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-6 left-6 z-50 group"
          >
            <div className="relative">
              {/* Glow Effect */}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-cyan/30 rounded-full blur"
              />
              
              {/* Button */}
              <div className="relative w-12 h-12 bg-gradient-to-br from-navy-800 to-navy-900 border border-cyan/30 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-cyan/20">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ChevronUp className="text-cyan group-hover:text-gold transition-colors" size={20} />
                </motion.div>
              </div>
              
              {/* Hover Label */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute left-full ml-4 top-1/2 transform -translate-y-1/2 whitespace-nowrap"
              >
                <div className="bg-navy-800/90 backdrop-blur-sm text-white text-sm font-medium px-3 py-2 rounded-lg shadow-lg">
                  Back to top
                  <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-navy-800/90"></div>
                </div>
              </motion.div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingContactButtons;