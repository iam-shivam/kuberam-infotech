// src/components/shared/FloatingContactButtons.tsx - Updated (No question mark, Fixed NodeJS error)
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, type Variants, type AnimationGeneratorType } from 'framer-motion';
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  X, 
  MessageSquare,
  ChevronUp,
  // Zap,
  // ExternalLink
} from 'lucide-react';

const FloatingContactButtons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null); // Changed from NodeJS.Timeout to number

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      
      // Show buttons when scrolled 30% down the page
      if (scrollPosition > windowHeight * 0.3 && 
          scrollPosition < documentHeight - windowHeight - 100) {
        setShowButtons(true);
      } else {
        setShowButtons(false);
      }
      
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const contactOptions = [
    {
      id: 1,
      icon: MessageCircle,
      label: 'WhatsApp',
      description: 'Instant chat support',
      color: 'bg-green-500 hover:bg-green-600',
      hoverColor: 'bg-green-500/10',
      link: 'https://wa.me/9274774155',
      delay: 0,
    },
    {
      id: 2,
      icon: Mail,
      label: 'Email',
      description: 'Send detailed inquiry',
      color: 'bg-blue-500 hover:bg-blue-600',
      hoverColor: 'bg-blue-500/10',
      link: 'mailto:contact@kuberaminfotech.com',
      delay: 0.1,
    },
    {
      id: 3,
      icon: Phone,
      label: 'Call',
      description: '+91 9274774155',
      color: 'bg-cyan hover:bg-cyan/90',
      hoverColor: 'bg-cyan/10',
      link: 'tel:+15551234567',
      delay: 0.2,
    },
    {
      id: 4,
      icon: MessageSquare,
      label: 'Live Chat Coming Soon!',
      description: 'Available now',
      color: 'bg-electric hover:bg-electric/90',
      hoverColor: 'bg-electric/10',
      link: '#chat',
      delay: 0.3,
    },
  ];

  // const quickActions = [
  //   {
  //     id: 1,
  //     icon: ExternalLink,
  //     label: 'View Portfolio',
  //     href: '#portfolio',
  //     color: 'from-gold to-cyan',
  //   },
  //   {
  //     id: 2,
  //     icon: Zap,
  //     label: 'Get Quote',
  //     href: '#quote',
  //     color: 'from-cyan to-electric',
  //   },
  // ];

  const handleMouseEnter = () => {
    if (!isMobile) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      timeoutRef.current = window.setTimeout(() => { // Changed to window.setTimeout
        setIsOpen(false);
      }, 300); // Small delay to prevent flicker
    }
  };

  const handleButtonClick = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  const handleContactClick = (link: string, label: string) => {
    if (label === 'Live Chat') {
      setIsOpen(false);
      // Add your chat widget trigger here
      console.log('Opening live chat...');
    } else {
      window.open(link, '_blank');
    }
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
    y: 20,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15,
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15,
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    y: 20,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15,
    },
  },
};

function transitionWithDelay(delay: number): CustomTransition {
  return {
    delay,
    type: 'spring',
    stiffness: 200,
    damping: 15,
  };
}
type CustomTransition = {
  delay: number;
  type: AnimationGeneratorType | undefined;
  stiffness: number;
  damping: number;
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, scale: 0, x: 20 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      delay: transitionWithDelay(i * 0.1).delay,
      type: transitionWithDelay(i * 0.1).type,
      stiffness: transitionWithDelay(i * 0.1).stiffness,
      damping: transitionWithDelay(i * 0.1).damping,
    } as CustomTransition,
  }),
  hover: { scale: 1.1, rotate: 5, transition: { duration: 0.2 } },
  tap: { scale: 0.9 },
};;

  const mainButtonVariants: Variants = {
  initial: { scale: 0 },
  animate: { 
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15,
      duration: 0.5,
    }
  },
  hover: { scale: 1.1 },
  tap: { scale: 0.9 },
};

  return (
    <>
      {/* Floating Contact Buttons */}
      <AnimatePresence>
        {showButtons && (
          <motion.div
            ref={containerRef}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
            className="fixed bottom-6 right-6 z-50"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Contact Options Panel - Opens on Hover */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, x: 20 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-full right-0 mb-4"
                >
                  {/* Main Contact Options */}
                  <div className="glass-card rounded-2xl p-4 shadow-2xl w-64">
                    {/* Quick Actions */}
                    {/* <div className="mb-4">
                      <h4 className="text-white font-bold text-sm mb-3 flex items-center">
                        <Zap className="text-gold mr-2" size={16} />
                        Quick Actions
                      </h4>
                      <div className="space-y-2">
                        {quickActions.map((action) => (
                          <motion.a
                            key={action.id}
                            href={action.href}
                            whileHover={{ x: 5 }}
                            className={`flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r ${action.color} bg-opacity-10 hover:bg-opacity-20 transition-all cursor-pointer group`}
                          >
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${action.color} flex items-center justify-center`}>
                              <action.icon className="text-white" size={16} />
                            </div>
                            <span className="text-white font-medium text-sm group-hover:text-cyan transition-colors">
                              {action.label}
                            </span>
                          </motion.a>
                        ))}
                      </div>
                    </div> */}

                    {/* Contact Methods */}
                    <div>
                      <h4 className="text-white font-bold text-sm mb-3 flex items-center">
                        <MessageCircle className="text-cyan mr-2" size={16} />
                        Contact Options
                      </h4>
                      <div className="space-y-2">
                        {contactOptions.map((option) => (
                          <motion.div
                            key={option.id}
                            custom={option.delay}
                            initial="hidden"
                            animate="visible"

                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
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

                    {/* Help Text */}
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <p className="text-gray-400 text-xs text-center">
                        We typically respond within 15 minutes
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

            {/* Main Contact Button */}
            <motion.button
              variants={mainButtonVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap"
              onClick={handleButtonClick}
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
              
              {/* Notification Dot */}
              {/* {!isOpen && (
                <motion.div
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center shadow"
                >
                  <span className="text-white text-xs font-bold">!</span>
                </motion.div>
              )} */}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
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

      {/* Mobile Bottom Bar */}
      {isMobile && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="fixed bottom-0 left-0 right-0 bg-navy-900/95 backdrop-blur-lg border-t border-white/10 md:hidden z-40"
        >
          <div className="flex justify-around items-center h-16 px-4">
            {contactOptions.slice(0, 3).map((option) => (
              <motion.button
                key={option.id}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleContactClick(option.link, option.label)}
                className="flex flex-col items-center space-y-1 relative group"
              >
                <div className={`w-10 h-10 rounded-full ${option.color} flex items-center justify-center shadow-lg`}>
                  <option.icon className="text-white" size={18} />
                </div>
                <span className="text-xs text-gray-400 group-hover:text-white transition-colors">
                  {option.label}
                </span>
                
                {/* Tap hint for mobile */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"
                />
              </motion.button>
            ))}
            
            {/* More options button for mobile */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col items-center space-y-1"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-cyan flex items-center justify-center shadow-lg">
                <motion.div
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? (
                    <X className="text-navy-900" size={18} />
                  ) : (
                    <MessageCircle className="text-navy-900" size={18} />
                  )}
                </motion.div>
              </div>
              <span className="text-xs text-gray-400">More</span>
            </motion.button>
          </div>
          
          {/* Mobile expanded options */}
          <AnimatePresence>
            {isOpen && isMobile && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="p-4 border-t border-white/10">
                  <div className="grid grid-cols-2 gap-3">
                    {contactOptions.map((option) => (
                      <motion.button
                        key={option.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        onClick={() => handleContactClick(option.link, option.label)}
                        className={`flex items-center space-x-3 p-3 rounded-lg ${option.hoverColor} active:scale-95 transition-transform`}
                      >
                        <div className={`w-8 h-8 rounded-full ${option.color} flex items-center justify-center`}>
                          <option.icon className="text-white" size={16} />
                        </div>
                        <div className="text-left">
                          <div className="text-white text-sm font-medium">{option.label}</div>
                          <div className="text-gray-400 text-xs">{option.description}</div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </>
  );
};

export default FloatingContactButtons;