// src/components/sections/Hero.tsx
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Cpu } from 'lucide-react';
import ParticleBackground from '../shared/ParticleBackground';

const Hero = () => {
  return (
    // <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-0">
      <ParticleBackground />

      {/* Circuit Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-cyan/30 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-gold/20 rounded-full"></div>
      </div>

      <div className="section-padding max-w-7xl mx-auto relative z-10">
        {/* <div className="grid lg:grid-cols-2 gap-12 items-center"> */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 rounded-full bg-navy-800/50 border border-cyan/20">
              <Sparkles className="text-cyan" size={16} />
              <span className="text-sm font-medium text-cyan">Innovating Digital Solutions</span>
            </div> */}
            <div className="flex items-center justify-center sm:justify-start mb-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-navy-800/70 border border-cyan/20 max-w-[90%] mx-auto sm:mx-0">
                <Sparkles className="text-cyan flex-shrink-0 w-3 h-3" />
                <span className="text-xs sm:text-sm font-medium text-cyan truncate">
                  Innovating Digital Solutions
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-white">Building </span>
              <span className="bg-gradient-to-r from-gold via-cyan to-electric bg-clip-text text-transparent">
                Scalable
              </span>
              <br />
              <span className="text-white">Digital Futures</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl">
              We transform complex challenges into elegant, high-performance digital solutions.
              From enterprise applications to cutting-edge automation, we engineer growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-gold to-cyan text-navy-900 font-bold rounded-lg flex items-center justify-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan/30 text-cyan font-semibold rounded-lg hover:bg-cyan/10 transition-colors"
              >
                View Case Studies
              </motion.button>
            </div>

            <div className="flex items-center space-x-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
              <div className="h-12 w-px bg-gray-700"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-sm text-gray-400">Uptime SLA</div>
              </div>
              <div className="h-12 w-px bg-gray-700"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card p-8 rounded-3xl">
              <div className="relative">
                {/* Abstract Tech Visualization */}
                <div className="relative h-80 w-full rounded-2xl overflow-hidden bg-gradient-to-br from-navy-800 to-navy-900">
                  <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-2 p-4">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div
                        key={i}
                        className="bg-gradient-to-br from-cyan/20 to-electric/20 rounded-lg animate-pulse"
                        style={{
                          animationDelay: `${i * 0.1}s`,
                          animationDuration: '2s',
                        }}
                      ></div>
                    ))}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Cpu size={80} className="text-cyan animate-float" />
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-gold to-cyan rounded-2xl flex items-center justify-center"
                >
                  <div className="text-navy-900 font-bold">API</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-electric to-cyan rounded-2xl flex items-center justify-center"
                >
                  <div className="text-navy-900 font-bold">AI</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-cyan/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;