// src/components/shared/TimedContactPopup.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Send, CheckCircle } from 'lucide-react';

const TimedContactPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(5 * 60); // 5 minutes in seconds
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Show popup after 5-15 seconds (random delay)
  useEffect(() => {
    if (timeRemaining === 0) {
    console.log('Timer finished');
  }
    if (hasShown || typeof window === 'undefined') return;

    const delay = Math.floor(Math.random() * (15000 - 5000 + 1)) + 5000; // 5-15 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
      setHasShown(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [hasShown]);

  // Countdown timer
  useEffect(() => {
    if (!isOpen) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, timeRemaining]);

  // const formatTime = (seconds: number) => {
  //   const mins = Math.floor(seconds / 60);
  //   const secs = seconds % 60;
  //   return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  // };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsSubmitted(false);
        handleClose();
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[1000] flex items-center justify-center p-4"
          >
            {/* Popup - Centered */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md"
            >
              <div className="glass-card rounded-3xl overflow-hidden shadow-2xl">
                {/* Top Bar */}
                <div className="bg-gradient-to-r from-gold to-cyan p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Mail className="text-navy-900" size={20} />
                      <span className="text-navy-900 font-bold">Get in Touch</span>
                    </div>
                    <button
                      onClick={handleClose}
                      className="w-8 h-8 rounded-full bg-navy-900/20 flex items-center justify-center hover:bg-navy-900/30 transition-colors"
                      aria-label="Close"
                    >
                      <X className="text-navy-900" size={18} />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold to-cyan flex items-center justify-center"
                      >
                        <CheckCircle className="text-navy-900" size={32} />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white mb-3">Thank You!</h3>
                      <p className="text-gray-400">
                        We'll contact you within 24 hours to discuss your project.
                      </p>
                    </div>
                  ) : (
                    <>
                      {/* Promo Message */}
                      <div className="mb-6">
                        {/* <div className="flex items-center space-x-2 mb-3">
                          <Sparkles className="text-gold" size={16} />
                          <span className="text-sm text-gold font-medium">Limited Time Offer</span>
                        </div> */}
                        <h3 className="text-xl font-bold text-white mb-2">
                          Get Free Consultation
                        </h3>
                        <p className="text-gray-400 text-sm">
                          Schedule a 30-minute call with our experts.
                        </p>
                      </div>

                      {/* Countdown Timer */}
                      {/* <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <Clock className="text-cyan" size={14} />
                            <span className="text-sm text-gray-400">Offer ends in:</span>
                          </div>
                          <div className="text-lg font-bold text-gold">
                            {formatTime(timeRemaining)}
                          </div>
                        </div>
                        <div className="w-full h-2 bg-navy-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: '100%' }}
                            animate={{ width: `${(timeRemaining / (5 * 60)) * 100}%` }}
                            transition={{ duration: 1 }}
                            className="h-full bg-gradient-to-r from-gold to-cyan"
                          />
                        </div>
                      </div> */}

                      {/* Form */}
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                          <span className="text-sm text-gold font-medium">
                            Your Name *
                          </span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-navy-800/50 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan placeholder-gray-500"
                            placeholder="John Doe"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                          <span className="text-sm text-gold font-medium">
                            Email Address *
                            </span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-navy-800/50 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan placeholder-gray-500"
                            placeholder="john@company.com"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                          <span className="text-sm text-gold font-medium">
                            Project Details *
                            </span>
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={3}
                            className="w-full px-4 py-3 bg-navy-800/50 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan resize-none placeholder-gray-500"
                            placeholder="Tell us about your project..."
                          />
                        </div>

                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full px-6 py-3 bg-gradient-to-r from-gold to-cyan text-navy-900 font-bold rounded-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <span>{isSubmitting ? 'Sending...' : 'Get Free Consultation'}</span>
                          <Send size={18} />
                        </motion.button>
                      </form>

                      <div className="mt-4 text-center">
                        <p className="text-gray-500 text-xs">
                          By submitting, you agree to our Privacy Policy
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Decorative Elements */}
              {/* <div className="absolute -top-3 -left-3 w-6 h-6 bg-electric rounded-full animate-pulse"></div> */}
              {/* <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-cyan rounded-full animate-pulse"></div> */}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default TimedContactPopup;