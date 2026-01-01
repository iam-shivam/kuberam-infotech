// src/components/sections/WhyChooseUs.tsx
import { easeInOut, motion, type Variants } from 'framer-motion';
import {
  Shield,
  Zap,
  Code,
  TrendingUp,
  // Users,
  // Clock,
  // Award,
  CheckCircle,
  // ArrowRight,
  Star
} from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security protocols and compliance with industry standards.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
      // Human image: https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop
      stats: '99.99% Security Uptime',
      color: 'from-cyan to-electric',
      points: ['SOC 2 Compliance', 'End-to-End Encryption', 'Regular Security Audits']
    },
    {
      id: 2,
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized solutions that handle millions of requests with minimal latency.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop',
      stats: '<100ms Response Time',
      color: 'from-gold to-cyan',
      points: ['Load Balancing', 'CDN Integration', 'Database Optimization']
    },
    {
      id: 3,
      icon: Code,
      title: 'Clean Code',
      description: 'Modular, maintainable, and well-documented code following best practices.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop',
      // Human team: https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop
      stats: '100% Code Review',
      color: 'from-electric to-cyan',
      points: ['TypeScript Adoption', 'Clean Architecture', 'Unit Testing']
    },
    {
      id: 4,
      icon: TrendingUp,
      title: 'Scalable Systems',
      description: 'Architected to grow with your business, handling increasing loads seamlessly.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop',
      stats: 'Auto-scaling Capability',
      color: 'from-gold to-electric',
      points: ['Microservices', 'Cloud Native', 'Horizontal Scaling']
    },
  ];

  // const benefits = [
  //   {
  //     icon: Users,
  //     title: 'Expert Team',
  //     description: 'Senior engineers with 8+ years of experience',
  //     count: '40+'
  //   },
  //   {
  //     icon: Clock,
  //     title: 'Fast Delivery',
  //     description: 'Agile methodology with sprints',
  //     count: '30%'
  //   },
  //   {
  //     icon: Award,
  //     title: 'Award Winning',
  //     description: 'Recognized by industry leaders',
  //     count: '15+'
  //   },
  //   {
  //     icon: Star,
  //     title: 'Client Satisfaction',
  //     description: '5-star reviews from clients',
  //     count: '98%'
  //   },
  // ];

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        duration: 0.5, // add a duration if needed
      },
    },
  };


  const floatAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: easeInOut,
    },
  };

  return (
    <section id="why-us" className="section-padding bg-navy-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-cyan/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: 'spring' }}
            className="inline-flex items-center space-x-2 mb-4 px-4 py-2 rounded-full bg-gold/10 border border-gold/20"
          >
            <Star className="text-gold w-4 h-4" />
            <span className="text-gold text-sm font-medium">Why Choose Us</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Building </span>
            <span className="bg-gradient-to-r from-gold to-cyan bg-clip-text text-transparent">
              Trust Through Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We don't just build software - we build partnerships and deliver exceptional value.
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-8 mb-20"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-electric/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative glass-card overflow-hidden rounded-3xl h-full">
                <div className="flex flex-col md:flex-row">
                  {/* Image Section */}
                  <motion.div
                    animate={floatAnimation}
                    className="md:w-2/5 relative"
                  >
                    <div className="h-48 md:h-full overflow-hidden">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent"></div>
                    </div>

                    {/* Floating Icon */}
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      className={`absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}
                    >
                      <feature.icon className="text-navy-900" size={24} />
                    </motion.div>
                  </motion.div>

                  {/* Content Section */}
                  <div className="md:w-3/5 p-6 md:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-gray-400 mb-4">{feature.description}</p>
                      </div>
                    </div>

                    {/* Stats */}
                    <motion.div
                      initial={{ scale: 0.9 }}
                      whileInView={{ scale: 1 }}
                      className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-br ${feature.color} bg-opacity-20 mb-6`}
                    >
                      <Zap className="text-cyan mr-2" size={16} />
                      <span className="text-sm font-medium text-cyan">{feature.stats}</span>
                    </motion.div>

                    {/* Points */}
                    <div className="space-y-3">
                      {feature.points.map((point, idx) => (
                        <motion.div
                          key={point}
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center space-x-3"
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 180 }}
                            transition={{ type: 'spring' }}
                            className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan to-electric flex items-center justify-center flex-shrink-0"
                          >
                            <CheckCircle className="text-navy-900" size={12} />
                          </motion.div>
                          <span className="text-gray-300">{point}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Animated Progress Bar */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan to-electric"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {/* {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-card p-6 rounded-2xl text-center relative overflow-hidden group"
            >
              {/* Animated Background */}
              {/* <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-electric/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-gold to-cyan flex items-center justify-center"
              >
                <benefit.icon className="text-navy-900" size={24} />
              </motion.div> */}

              {/* <div className="text-3xl font-bold text-white mb-2">{benefit.count}</div>
              <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
              <p className="text-gray-400 text-sm">{benefit.description}</p> */}
            {/* </motion.div> */}
          {/* ))} */}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan/20 via-gold/10 to-electric/20"></div>

          <div className="relative glass-card p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-gray-400 mb-6">
                  Join 150+ satisfied clients who trust us with their digital transformation.
                </p>

                <div className="space-y-4">
                  {[
                    'Free consultation session',
                    'Detailed project proposal',
                    'Flexible engagement models',
                    'Dedicated support team'
                  ].map((item, idx) => (
                    <motion.div
                      key={item}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-cyan rounded-full"></div>
                      <span className="text-gray-300">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <motion.button
                  //   whileHover={{ scale: 1.05 }}
                  //   whileTap={{ scale: 0.95 }}
                  //   className="px-8 py-4 bg-gradient-to-r from-gold to-cyan text-navy-900 font-bold rounded-lg flex items-center justify-center space-x-3 mx-auto shadow-lg shadow-gold/20"
                  // >
                  //   <span>Start Free Consultation</span>
                  //   <ArrowRight size={20} />
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    if ((window as any).openContactPopup) {
                      (window as any).openContactPopup();
                    } else {
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="px-8 py-3 bg-gradient-to-r from-gold to-cyan text-navy-900 font-bold rounded-lg"
                >
                  Start Free Consultation
                </motion.button>

                <p className="text-gray-400 text-sm mt-4">
                  No commitment • 30-minute session • Expert advice
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;