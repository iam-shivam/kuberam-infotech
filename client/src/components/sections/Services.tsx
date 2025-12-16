// src/components/sections/Services.tsx
import { motion } from 'framer-motion';
import { Code, Server, Cloud, Cpu, Zap} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with React, Next.js, and TypeScript.',
      features: ['SPA/PWA Development', 'Responsive Design', 'Performance Optimization'],
      gradient: 'from-cyan to-electric',
    },
    {
      icon: Server,
      title: 'Backend & APIs',
      description: 'Scalable server-side solutions with Node.js, Express, and microservices.',
      features: ['REST/GraphQL APIs', 'Microservices', 'Real-time Systems'],
      gradient: 'from-gold to-cyan',
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Cloud infrastructure, CI/CD pipelines, and container orchestration.',
      features: ['AWS/Azure/GCP', 'Docker & Kubernetes', 'CI/CD Automation'],
      gradient: 'from-electric to-cyan',
    },
    {
      icon: Cpu,
      title: 'AI & Automation',
      description: 'Intelligent solutions leveraging machine learning and automation.',
      features: ['ML Integration', 'Process Automation', 'Data Analytics'],
      gradient: 'from-gold to-electric',
    },
  ];

  return (
    <section id="services" className="section-padding bg-navy-800/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Our </span>
            <span className="bg-gradient-to-r from-cyan to-electric bg-clip-text text-transparent">
              Core Services
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card p-8 rounded-3xl h-full hover:transform hover:-translate-y-2 transition-all duration-500">
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0`}>
                    <service.icon className="text-navy-900" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <button className="text-cyan font-semibold flex items-center space-x-2 group-hover:space-x-3 transition-all">
                    <span>Explore Service</span>
                    <Zap size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;