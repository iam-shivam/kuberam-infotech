// src/components/shared/FloatingContactButtons.tsx - CLEAN VERSION
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  X, 
  MessageSquare,
  ChevronUp,
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
      color: 'bg-green-500',
      hoverColor: 'bg-green-500/20',
      link: 'https://wa.me/9274774155',
    },
    {
      id: 2,
      icon: Mail,
      label: 'Email',
      description: 'contact@kuberaminfotech.com',
      color: 'bg-blue-500',
      hoverColor: 'bg-blue-500/20',
      link: 'mailto:contact@kuberaminfotech.com',
    },
    {
      id: 3,
      icon: Phone,
      label: 'Call',
      description: '+91 9274774155',
      color: 'bg-cyan',
      hoverColor: 'bg-cyan/20',
      link: 'tel:+919274774155',
    },
    {
      id: 4,
      icon: MessageSquare,
      label: 'Live Chat',
      description: 'Coming Soon',
      color: 'bg-electric',
      hoverColor: 'bg-electric/20',
      link: '#',
    },
  ];

  // Detect device type
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);

    // Scroll behavior for both devices
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show floating button after scrolling a bit
      if (scrollPosition > windowHeight * 0.2) {
        setShowButtons(true);
      } else {
        setShowButtons(false);
        setIsOpen(false);
      }
      
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

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
      alert('Live chat feature coming soon!');
    } else if (link !== '#') {
      window.open(link, '_blank');
    }
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Don't show anything if buttons shouldn't be visible
  if (!showButtons) return null;

  return (
    <>
      {/* Floating Contact Button (Same for Both Desktop & Mobile) */}
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0, y: 20 }}
        className="fixed bottom-6 right-6 z-50"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Contact Panel - Opens on Hover (Desktop) or Click (Mobile) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ duration: 0.2 }}
              className={`absolute ${
                isMobile 
                  ? 'bottom-full right-0 mb-4' 
                  : 'bottom-full right-0 mb-4'
              }`}
            >
              <div className="glass-card rounded-2xl p-4 shadow-2xl w-64">
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold to-cyan flex items-center justify-center">
                      <MessageCircle className="text-navy-900" size={16} />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">KUBERAM</div>
                      <div className="text-cyan text-xs">Infotech</div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-xs">
                    We deliver innovative web solutions
                  </p>
                </div>

                {/* Contact Options */}
                <div className="space-y-2">
                  {contactOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleContactClick(option.link, option.label)}
                      className={`flex items-center space-x-3 p-3 rounded-lg ${option.hoverColor} hover:bg-opacity-30 w-full text-left transition-all`}
                    >
                      <div className={`w-10 h-10 rounded-full ${option.color} flex items-center justify-center`}>
                        <option.icon className="text-white" size={18} />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium text-sm">{option.label}</div>
                        <div className="text-gray-400 text-xs">{option.description}</div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Website Link */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <a 
                    href="https://kuberaminfotech.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-cyan text-xs hover:text-gold transition-colors text-center block"
                  >
                    kuberaminfotech.com
                  </a>
                </div>
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
          onClick={() => {
            // On mobile, toggle on click. On desktop, also works but hover is primary.
            if (isMobile) {
              setIsOpen(!isOpen);
            }
          }}
          className="relative group"
          aria-label="Contact options"
        >
          {/* Pulsing Effect */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-cyan rounded-full blur opacity-30"
          />
          
          {/* Main Button */}
          <div className="relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-gold to-cyan rounded-full flex items-center justify-center shadow-2xl shadow-gold/30">
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? 'close' : 'contact'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? (
                  <X className="text-navy-900" size={isMobile ? 24 : 28} />
                ) : (
                  <MessageCircle className="text-navy-900" size={isMobile ? 24 : 28} />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Hover Label (Desktop only) */}
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 whitespace-nowrap"
            >
              <div className="bg-navy-800/90 backdrop-blur-sm text-white text-sm font-medium px-3 py-2 rounded-lg shadow-lg">
                Contact Us
              </div>
            </motion.div>
          )}
        </motion.button>
      </motion.div>

      {/* Scroll to Top Button (Desktop & Mobile) */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-6 left-6 z-50"
          >
            <div className="relative">
              <div className={`${
                isMobile 
                  ? 'w-12 h-12' 
                  : 'w-12 h-12'
              } bg-gradient-to-br from-navy-800 to-navy-900 border border-cyan/30 rounded-full flex items-center justify-center shadow-lg`}>
                <ChevronUp className="text-cyan" size={20} />
              </div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingContactButtons;