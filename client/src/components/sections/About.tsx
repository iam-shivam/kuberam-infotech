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
            <span className="text-white">Turning Ideas </span>
            <span className="bg-gradient-to-r from-gold to-cyan bg-clip-text text-transparent">
              into Impactful Digital Experiences
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            KUBERAM Infotech is a technology-driven company focused on building meaningful digital &nbsp;
            <span className="bg-gradient-to-r from-gold to-cyan bg-clip-text text-transparent">
             products that solve real problems, accelerate growth, and inspire innovation. 
            </span>
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
// src/components/sections/About.tsx - Enhanced Version
// import { motion,AnimatePresence } from 'framer-motion';
// import { 
//   Target, 
//   Eye, 
//   Shield, 
//   Zap, 
//   TrendingUp, 
//   Cpu, 
//   Cloud, 
//   Lock,
//   ChevronLeft,
//   ChevronRight,
//   Sparkles
// } from 'lucide-react';
// import { useState, useEffect, useRef } from 'react';

// const About = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [autoSlide, setAutoSlide] = useState(true);
//   // const controls = useAnimation();
//   // const intervalRef = useRef<NodeJS.Timeout>();
//   const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);


//   const values = [
//     {
//       icon: Target,
//       title: 'Precision Engineering',
//       description: 'Every line of code is crafted with attention to detail and performance.',
//       color: 'from-cyan to-electric',
//       gradient: 'bg-gradient-to-br from-cyan to-electric',
//     },
//     {
//       icon: Shield,
//       title: 'Enterprise Security',
//       description: 'Bank-grade security protocols for mission-critical applications.',
//       color: 'from-gold to-cyan',
//       gradient: 'bg-gradient-to-br from-gold to-cyan',
//     },
//     {
//       icon: Zap,
//       title: 'High Performance',
//       description: 'Optimized solutions that handle millions of requests with minimal latency.',
//       color: 'from-electric to-cyan',
//       gradient: 'bg-gradient-to-br from-electric to-cyan',
//     },
//     {
//       icon: Eye,
//       title: 'Future Vision',
//       description: 'Building not just for today, but for tomorrow\'s challenges.',
//       color: 'from-gold to-electric',
//       gradient: 'bg-gradient-to-br from-gold to-electric',
//     },
//     {
//       icon: TrendingUp,
//       title: 'Scalable Systems',
//       description: 'Architected to grow with your business, handling increasing loads seamlessly.',
//       color: 'from-cyan to-electric',
//       gradient: 'bg-gradient-to-br from-cyan to-electric',
//     },
//     {
//       icon: Cpu,
//       title: 'AI Enhancement',
//       description: 'Leveraging artificial intelligence to optimize processes and deliver insights.',
//       color: 'from-gold to-cyan',
//       gradient: 'bg-gradient-to-br from-gold to-cyan',
//     },
//     {
//       icon: Cloud,
//       title: 'Cloud Optimization',
//       description: 'Maximizing cloud efficiency while minimizing costs and complexity.',
//       color: 'from-electric to-cyan',
//       gradient: 'bg-gradient-to-br from-electric to-cyan',
//     },
//     {
//       icon: Lock,
//       title: 'Data Integrity',
//       description: 'Ensuring data accuracy, consistency, and reliability across all systems.',
//       color: 'from-gold to-electric',
//       gradient: 'bg-gradient-to-br from-gold to-electric',
//     },
//   ];

//   const slides = [
//     {
//       title: 'Our Vision',
//       content: 'To be the catalyst for digital transformation, empowering businesses worldwide with scalable, intelligent technology solutions.',
//       gradient: 'from-gold to-cyan',
//       icon: Eye,
//     },
//     {
//       title: 'Our Mission',
//       content: 'Deliver exceptional value through innovative software engineering, robust architecture, and unparalleled technical expertise.',
//       gradient: 'from-cyan to-electric',
//       icon: Target,
//     },
//     {
//       title: 'Our Promise',
//       content: 'Commitment to excellence, continuous innovation, and building lasting partnerships with our clients.',
//       gradient: 'from-electric to-cyan',
//       icon: Shield,
//     },
//   ];

//   // Auto-slide functionality
//   useEffect(() => {
//     if (autoSlide) {
//       intervalRef.current = setInterval(() => {
//         setCurrentSlide((prev) => (prev + 1) % slides.length);
//       }, 5000); // Change slide every 5 seconds
//     }

//     return () => {
//       if (intervalRef.current) clearInterval(intervalRef.current);
//     };
//   }, [autoSlide, slides.length]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//     setAutoSlide(false);
//     setTimeout(() => setAutoSlide(true), 10000); // Resume auto-slide after 10 seconds
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//     setAutoSlide(false);
//     setTimeout(() => setAutoSlide(true), 10000);
//   };

//   // Enhanced capabilities section
//   const capabilities = [
//     {
//       category: 'Scalable Architecture',
//       items: [
//         'Microservices Design',
//         'Load Balancing',
//         'Horizontal Scaling',
//         'Database Sharding',
//       ],
//       color: 'border-cyan',
//       icon: TrendingUp,
//     },
//     {
//       category: 'AI & Automation',
//       items: [
//         'Machine Learning Integration',
//         'Process Automation',
//         'Predictive Analytics',
//         'Natural Language Processing',
//       ],
//       color: 'border-gold',
//       icon: Cpu,
//     },
//     {
//       category: 'Performance Optimization',
//       items: [
//         'Code Optimization',
//         'Caching Strategies',
//         'CDN Implementation',
//         'Database Indexing',
//       ],
//       color: 'border-electric',
//       icon: Zap,
//     },
//   ];

//   return (
//     <section id="about" className="section-padding bg-navy-900 relative overflow-hidden">
//       {/* Animated Background */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-0 left-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-electric/5 rounded-full blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/3 rounded-full blur-3xl"></div>
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <div className="inline-flex items-center space-x-2 mb-4">
//             <div className="w-2 h-8 bg-gradient-to-b from-gold to-cyan"></div>
//             <span className="text-gold font-medium">About KUBERAM</span>
//           </div>
          
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
//             <span className="text-white">Driving </span>
//             <span className="bg-gradient-to-r from-gold to-cyan bg-clip-text text-transparent">
//               Digital Transformation
//             </span>
//           </h2>
//           <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//             We blend cutting-edge technology with business acumen to create solutions 
//             that drive growth, innovation, and sustainable competitive advantage.
//           </p>
//         </motion.div>

//         {/* Auto-sliding Vision/Mission/Promise Cards */}
//         <div className="mb-20">
//           <div className="flex items-center justify-between mb-6">
//             <h3 className="text-2xl font-bold text-white">Our Core Philosophy</h3>
//             <div className="flex items-center space-x-2">
//               <button
//                 onClick={prevSlide}
//                 className="w-10 h-10 rounded-full bg-navy-800 border border-white/10 flex items-center justify-center hover:bg-navy-700 transition-colors"
//               >
//                 <ChevronLeft className="text-cyan" size={20} />
//               </button>
//               <button
//                 onClick={nextSlide}
//                 className="w-10 h-10 rounded-full bg-navy-800 border border-white/10 flex items-center justify-center hover:bg-navy-700 transition-colors"
//               >
//                 <ChevronRight className="text-cyan" size={20} />
//               </button>
//             </div>
//           </div>

//           <div className="relative h-[300px]">
//             <AnimatePresence mode="wait">
//               {slides.map((slide, index) => (
//                 index === currentSlide && (
//                   <motion.div
//                     key={slide.title}
//                     initial={{ opacity: 0, x: 100 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -100 }}
//                     transition={{ duration: 0.5 }}
//                     className="absolute inset-0"
//                   >
//                     <div className="glass-card h-full p-8 rounded-3xl relative overflow-hidden group">
//                       {/* Animated Background */}
//                       <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                      
//                       {/* Icon */}
//                       <motion.div
//                         animate={{ rotate: [0, 360] }}
//                         transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                         className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${slide.gradient} flex items-center justify-center mb-6`}
//                       >
//                         <slide.icon className="text-navy-900" size={28} />
//                       </motion.div>
                      
//                       <h3 className="text-2xl font-bold text-white mb-4">{slide.title}</h3>
//                       <p className="text-gray-400 text-lg leading-relaxed">{slide.content}</p>
                      
//                       {/* Progress Indicator */}
//                       <div className="absolute bottom-6 left-8 right-8">
//                         <div className="flex items-center justify-between">
//                           <div className="flex space-x-2">
//                             {slides.map((_, idx) => (
//                               <button
//                                 key={idx}
//                                 onClick={() => {
//                                   setCurrentSlide(idx);
//                                   setAutoSlide(false);
//                                   setTimeout(() => setAutoSlide(true), 10000);
//                                 }}
//                                 className={`w-2 h-2 rounded-full transition-all ${
//                                   idx === currentSlide 
//                                     ? 'bg-cyan w-8' 
//                                     : 'bg-gray-700 hover:bg-gray-600'
//                                 }`}
//                               />
//                             ))}
//                           </div>
//                           <div className="text-sm text-gray-500">
//                             Auto-slide {autoSlide ? 'ON' : 'PAUSED'}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 )
//               ))}
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* Enhanced Capabilities Grid */}
//         <div className="mb-20">
//           <h3 className="text-2xl font-bold text-white text-center mb-12">
//             <span className="bg-gradient-to-r from-cyan to-electric bg-clip-text text-transparent">
//               Advanced Capabilities
//             </span>
//           </h3>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             {capabilities.map((capability) => (
//               <motion.div
//                 key={capability.category}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -10 }}
//                 className="relative group"
//               >
//                 <div className={`glass-card p-6 rounded-3xl h-full border-2 ${capability.color} border-opacity-20 group-hover:border-opacity-40 transition-all`}>
//                   <div className="flex items-center space-x-3 mb-6">
//                     <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center">
//                       <capability.icon className="text-cyan" size={24} />
//                     </div>
//                     <h4 className="text-xl font-bold text-white">{capability.category}</h4>
//                   </div>
                  
//                   <ul className="space-y-3">
//                     {capability.items.map((item, idx) => (
//                       <motion.li
//                         key={item}
//                         initial={{ opacity: 0, x: -20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ delay: idx * 0.1 }}
//                         className="flex items-center space-x-3"
//                       >
//                         <div className="w-2 h-2 bg-cyan rounded-full"></div>
//                         <span className="text-gray-300">{item}</span>
//                       </motion.li>
//                     ))}
//                   </ul>
                  
//                   {/* Animated Border */}
//                   <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Animated Values Grid */}
//         <div>
//           <h3 className="text-2xl font-bold text-white text-center mb-12">
//             Our <span className="text-cyan">Core Values</span>
//           </h3>
          
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {values.map((value, index) => (
//               <motion.div
//                 key={value.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ 
//                   y: -10,
//                   transition: { type: 'spring', stiffness: 300 }
//                 }}
//                 animate={{
//                   x: [0, 5, 0],
//                   transition: {
//                     delay: index * 0.2 + 2,
//                     duration: 4,
//                     repeat: Infinity,
//                     repeatDelay: 3,
//                   }
//                 }}
//                 className="relative group"
//               >
//                 <div className="glass-card p-6 rounded-2xl h-full overflow-hidden">
//                   {/* Animated Background */}
//                   <div className={`absolute inset-0 ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                  
//                   {/* Floating Icon */}
//                   <motion.div
//                     animate={{ 
//                       y: [0, -10, 0],
//                       rotate: [0, 5, -5, 0]
//                     }}
//                     transition={{ 
//                       duration: 3,
//                       repeat: Infinity,
//                       delay: index * 0.1
//                     }}
//                     className={`w-14 h-14 rounded-xl ${value.gradient} flex items-center justify-center mb-4 relative z-10`}
//                   >
//                     <value.icon className="text-navy-900" size={24} />
//                   </motion.div>
                  
//                   <h4 className="text-xl font-bold text-white mb-3 relative z-10">{value.title}</h4>
//                   <p className="text-gray-400 text-sm relative z-10">{value.description}</p>
                  
//                   {/* Animated Sparkles */}
//                   <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
//                     <Sparkles className="text-gold" size={16} />
//                   </div>
                  
//                   {/* Animated Border */}
//                   <motion.div
//                     className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan to-electric"
//                     initial={{ width: "0%" }}
//                     whileInView={{ width: "100%" }}
//                     transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
//                   />
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Stats Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
//         >
//           {[
//             { value: '200+', label: 'Projects Delivered', suffix: '', color: 'from-cyan to-electric' },
//             { value: '99.9', label: 'Uptime SLA', suffix: '%', color: 'from-gold to-cyan' },
//             { value: '40', label: 'Expert Engineers', suffix: '+', color: 'from-electric to-cyan' },
//             { value: '8', label: 'Years Experience', suffix: '+', color: 'from-gold to-electric' },
//           ].map((stat, index) => (
//             <motion.div
//               key={stat.label}
//               initial={{ scale: 0 }}
//               whileInView={{ scale: 1 }}
//               transition={{ delay: index * 0.1, type: 'spring' }}
//               whileHover={{ scale: 1.05 }}
//               className="glass-card p-6 rounded-2xl text-center"
//             >
//               <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
//                 {stat.value}<span className="text-gold">{stat.suffix}</span>
//               </div>
//               <div className="text-gray-400 text-sm">{stat.label}</div>
              
//               {/* Animated progress line */}
//               <motion.div
//                 className="mt-4 h-1 bg-gradient-to-r from-cyan to-electric rounded-full"
//                 initial={{ width: 0 }}
//                 whileInView={{ width: '100%' }}
//                 transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
//               />
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Call to Action */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mt-20 text-center"
//         >
//           <div className="glass-card p-8 rounded-3xl max-w-3xl mx-auto">
//             <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
//               Ready to Transform Your Business?
//             </h3>
//             <p className="text-gray-400 mb-8">
//               Let's discuss how our scalable, AI-enhanced solutions can drive your growth.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-3 bg-gradient-to-r from-gold to-cyan text-navy-900 font-bold rounded-lg"
//               >
//                 Start Free Consultation
//               </motion.button>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-3 border-2 border-cyan text-cyan font-semibold rounded-lg hover:bg-cyan/10 transition-colors"
//               >
//                 View Case Studies
//               </motion.button>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;