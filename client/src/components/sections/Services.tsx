// src/components/sections/Services.tsx
import { motion, type Variants } from 'framer-motion';
import { Code, Server, Cloud, Cpu, ArrowRight, Sparkles, Palette, Smartphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with React, Next.js, and TypeScript.',
      features: ['SPA/PWA Development', 'Responsive Design', 'Performance Optimization'],
      gradient: 'from-cyan to-electric',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop',
      // Alternative AI image: https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop
    },
    {
      id: 2,
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Cross-platform mobile apps with React Native and Expo.',
      features: ['Cross-platform', 'Native Performance', 'Push Notifications'],
      gradient: 'from-cyan to-electric',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop',
      // Alternative AI image: https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop
    },
    {
      id: 3,
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-friendly interfaces and experiences for web and mobile apps.',
      features: ['Wireframing', 'Prototyping', 'UI/UX Consulting'],
      gradient: 'from-cyan to-electric',
      image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&auto=format&fit=crop',
      // Alternative AI image: https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop
    },
    {
      id: 4,
      icon: Server,
      title: 'Backend & APIs',
      description: 'Scalable server-side solutions with Node.js, Express, and microservices.',
      features: ['REST/GraphQL APIs', 'Microservices', 'Real-time Systems'],
      gradient: 'from-gold to-cyan',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop',
      // Alternative: https://images.unsplash.com/photo-1629654291660-3c98113a0438?w=800&auto=format&fit=crop
    },
    {
      id: 5,
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Cloud infrastructure, CI/CD pipelines, and container orchestration.',
      features: ['AWS/Azure/GCP', 'Docker & Kubernetes', 'CI/CD Automation'],
      gradient: 'from-electric to-cyan',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop',
      // Alternative: https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop
    },
    {
      id: 6,
      icon: Cpu,
      title: 'AI, Automation & Data Labeling',
      description: 'Intelligent solutions powered by machine learning, automation, and high-quality labeled data.',
      features: [
        'Machine Learning Integration',
        'Process Automation',
        'Data Analytics & Insights',
        'Data Labeling & Annotation',
        'Model Training & Optimization'
      ],
      gradient: 'from-gold to-electric',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop',
    }

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 0.5,
      },
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  };

  const contentVariants = {
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section id="services" className="section-padding bg-navy-800/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-electric/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 mb-4"
          >
            <Sparkles className="text-gold" />
            <span className="text-gold font-medium">Our Expertise</span>
          </motion.div>

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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover="hover"
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 to-electric/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <motion.div
                variants={contentVariants}
                className="relative glass-card overflow-hidden rounded-3xl h-full"
              >
                {/* Image Section */}
                <motion.div
                  variants={imageVariants}
                  className="relative h-48 sm:h-56 overflow-hidden"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full bg-gradient-to-br from-navy-800 to-navy-900"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent"></div>
                  </motion.div>

                  {/* Floating Icon */}
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className={`absolute -bottom-6 -right-6 w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <service.icon className="text-navy-900" size={32} />
                  </motion.div>

                  {/* Animated Particles */}
                  <div className="absolute top-4 left-4">
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        className="w-2 h-2 bg-cyan rounded-full mb-2"
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Content Section */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400">{service.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={feature}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="w-2 h-2 bg-gradient-to-r from-cyan to-electric rounded-full"
                        />
                        <span className="text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-cyan font-semibold group"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="transform group-hover:translate-x-2 transition-transform" />
                  </motion.button>
                </div>

                {/* Animated Border */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan to-electric"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Projects Completed', value: '200+', color: 'from-cyan to-electric' },
            { label: 'Happy Clients', value: '150+', color: 'from-gold to-cyan' },
            { label: 'Expert Engineers', value: '40+', color: 'from-electric to-cyan' },
            { label: 'Years Experience', value: '8+', color: 'from-gold to-electric' },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-6 rounded-2xl text-center"
            >
              <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div> */}
          {/* ))} */}
        {/* </motion.div> */}
      </div>
    </section>
  );
};

export default Services;