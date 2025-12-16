// src/components/sections/About.tsx
import { motion } from 'framer-motion';
import { Target, Eye, Shield, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Precision Engineering',
      description: 'Every line of code is crafted with attention to detail and performance.',
      color: 'from-cyan to-electric',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security protocols for mission-critical applications.',
      color: 'from-gold to-cyan',
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized solutions that scale with your business growth.',
      color: 'from-electric to-cyan',
    },
    {
      icon: Eye,
      title: 'Future Vision',
      description: 'Building not just for today, but for tomorrow’s challenges.',
      color: 'from-gold to-electric',
    },
  ];

  return (
    <section id="about" className="section-padding bg-navy-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Redefining </span>
            <span className="bg-gradient-to-r from-gold to-cyan bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            At KUBERAM Infotech, we blend cutting-edge technology with business 
            acumen to create solutions that drive growth and innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-400 mb-6">
                To be the catalyst for digital transformation, empowering businesses 
                worldwide with scalable, intelligent technology solutions.
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-gold to-cyan rounded-full"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-400 mb-6">
                Deliver exceptional value through innovative software engineering, 
                robust architecture, and unparalleled technical expertise.
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-cyan to-electric rounded-full"></div>
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4`}>
                <value.icon className="text-navy-900" size={24} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
              <p className="text-gray-400 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;