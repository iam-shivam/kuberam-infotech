// // src/components/sections/About.tsx
// import { motion } from 'framer-motion';
// import { Target, Eye, Shield, Zap } from 'lucide-react';

// const About = () => {
//   const values = [
//     {
//       icon: Target,
//       title: 'Precision Engineering',
//       description: 'Every line of code is crafted with attention to detail and performance.',
//       color: 'from-cyan to-electric',
//     },
//     {
//       icon: Shield,
//       title: 'Enterprise Security',
//       description: 'Bank-grade security protocols for mission-critical applications.',
//       color: 'from-gold to-cyan',
//     },
//     {
//       icon: Zap,
//       title: 'High Performance',
//       description: 'Optimized solutions that scale with your business growth.',
//       color: 'from-electric to-cyan',
//     },
//     {
//       icon: Eye,
//       title: 'Future Vision',
//       description: 'Building not just for today, but for tomorrow’s challenges.',
//       color: 'from-gold to-electric',
//     },
//   ];

//   return (
//     <section id="about" className="section-padding bg-navy-900">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >

//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
//             <span className="text-white">Turning Ideas </span>
//             <span className="bg-gradient-to-r from-gold to-cyan bg-clip-text text-transparent">
//               into Impactful Digital Experiences
//             </span>
//           </h2>
//           <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//             KUBERAM Infotech is a technology-driven company focused on building meaningful digital &nbsp;
//             <span className="bg-gradient-to-r from-gold to-cyan bg-clip-text text-transparent">
//              products that solve real problems, accelerate growth, and inspire innovation. 
//             </span>
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             <div className="glass-card p-8 rounded-3xl">
//               <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
//               <p className="text-gray-400 mb-6">
//                 To be the catalyst for digital transformation, empowering businesses 
//                 worldwide with scalable, intelligent technology solutions.
//               </p>
//               <div className="h-1 w-20 bg-gradient-to-r from-gold to-cyan rounded-full"></div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             <div className="glass-card p-8 rounded-3xl">
//               <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
//               <p className="text-gray-400 mb-6">
//                 Deliver exceptional value through innovative software engineering, 
//                 robust architecture, and unparalleled technical expertise.
//               </p>
//               <div className="h-1 w-20 bg-gradient-to-r from-cyan to-electric rounded-full"></div>
//             </div>
//           </motion.div>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {values.map((value, index) => (
//             <motion.div
//               key={value.title}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className="glass-card p-6 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300"
//             >
//               <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4`}>
//                 <value.icon className="text-navy-900" size={24} />
//               </div>
//               <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
//               <p className="text-gray-400 text-sm">{value.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// import { useRef, useEffect, useState } from 'react';
// import { Pause, Play } from 'lucide-react';

// // Import your icons (replace with your actual imports)
// import { 
//   Sparkles as SparklesIcon,
//   Award as AwardIcon, 
//   Shield as ShieldIcon,
//   Users as UsersIcon,
//   Zap as ZapIcon,
//   Heart as HeartIcon,
//   Leaf as LeafIcon,
//   TrendingUp as TrendingUpIcon
// } from 'lucide-react';

// // Your values data
// const values = [
//   { 
//     title: "Innovation", 
//     description: "Pushing boundaries with cutting-edge solutions",
//     color: "from-gold to-cyan",
//     icon: SparklesIcon
//   },
//   { 
//     title: "Excellence", 
//     description: "Delivering superior quality in every project",
//     color: "from-cyan to-electric",
//     icon: AwardIcon
//   },
//   { 
//     title: "Integrity", 
//     description: "Building trust through transparent practices",
//     color: "from-electric to-gold",
//     icon: ShieldIcon
//   },
//   { 
//     title: "Collaboration", 
//     description: "Working together to achieve greater results",
//     color: "from-gold to-electric",
//     icon: UsersIcon
//   },
//   { 
//     title: "Agility", 
//     description: "Adapting quickly to changing requirements",
//     color: "from-cyan to-gold",
//     icon: ZapIcon
//   },
//   { 
//     title: "Customer Focus", 
//     description: "Putting client needs at the forefront",
//     color: "from-electric to-cyan",
//     icon: HeartIcon
//   },
//   { 
//     title: "Sustainability", 
//     description: "Building solutions that last",
//     color: "from-gold to-cyan",
//     icon: LeafIcon
//   },
//   { 
//     title: "Growth", 
//     description: "Fostering continuous improvement",
//     color: "from-cyan to-electric",
//     icon: TrendingUpIcon
//   }
// ];

// const SmoothScrollingValuesCarousel = () => {
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [speed, setSpeed] = useState(20); // Pixels per second
//   const containerRef = useRef<HTMLDivElement>(null);
//   const contentRef = useRef<HTMLDivElement>(null);
//   const animationRef = useRef<number>(0);
//   const lastTimeRef = useRef<number>(0);
//   const positionRef = useRef<number>(0);
//   const duplicateCount = 2; // How many times to duplicate content for seamless loop

//   // Initialize animation
//   useEffect(() => {
//     if (!containerRef.current || !contentRef.current) return;

//     // const container = containerRef.current;
//     const content = contentRef.current;

//     // Reset position
//     positionRef.current = 0;

//     const animate = (timestamp: number) => {
//       if (!lastTimeRef.current) lastTimeRef.current = timestamp;

//       const deltaTime = timestamp - lastTimeRef.current;
//       lastTimeRef.current = timestamp;

//       if (isPlaying) {
//         // Move content to the left
//         positionRef.current -= (speed * deltaTime) / 1000;

//         // Reset position when scrolled past one set of content
//         const contentWidth = content.scrollWidth / duplicateCount;
//         if (Math.abs(positionRef.current) >= contentWidth) {
//           positionRef.current += contentWidth;
//         }

//         // Apply the transform
//         content.style.transform = `translateX(${positionRef.current}px)`;
//       }

//       animationRef.current = requestAnimationFrame(animate);
//     };

//     animationRef.current = requestAnimationFrame(animate);

//     return () => {
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//     };
//   }, [isPlaying, speed]);

//   const togglePlay = () => {
//     setIsPlaying(!isPlaying);
//   };

//   const increaseSpeed = () => {
//     setSpeed(prev => Math.min(prev + 5, 50));
//   };

//   const decreaseSpeed = () => {
//     setSpeed(prev => Math.max(prev - 5, 10));
//   };

//   return (
//     <div className="relative py-8">
//       {/* Controls */}
//       <div className="flex justify-between items-center mb-8">
//         <h3 className="text-3xl font-bold text-white">
//           Our Core Values
//           <span className="text-sm text-gray-400 ml-4 font-normal">
//             Smooth scrolling • {isPlaying ? 'Playing' : 'Paused'}
//           </span>
//         </h3>

//         <div className="flex items-center space-x-4">
//           {/* Speed Control */}
//           <div className="flex items-center space-x-2">
//             <button
//               onClick={decreaseSpeed}
//               className="px-2 py-1 rounded bg-navy-800 text-gray-400 hover:text-cyan"
//               aria-label="Decrease speed"
//             >
//               -
//             </button>
//             <span className="text-sm text-gray-400 min-w-[40px] text-center">
//               {speed}px/s
//             </span>
//             <button
//               onClick={increaseSpeed}
//               className="px-2 py-1 rounded bg-navy-800 text-gray-400 hover:text-cyan"
//               aria-label="Increase speed"
//             >
//               +
//             </button>
//           </div>

//           {/* Play/Pause Button */}
//           <button
//             onClick={togglePlay}
//             className="p-2 rounded-full bg-navy-800/50 hover:bg-cyan/20 transition-colors"
//             aria-label={isPlaying ? 'Pause' : 'Play'}
//           >
//             {isPlaying ? (
//               <Pause className="text-cyan w-5 h-5" />
//             ) : (
//               <Play className="text-cyan w-5 h-5" />
//             )}
//           </button>

//           {/* Navigation Buttons */}
//           <div className="flex space-x-2">
//             <button
//               onClick={() => setSpeed(15)}
//               className="px-3 py-1 text-xs rounded bg-navy-800 text-gray-400 hover:text-cyan"
//             >
//               Slow
//             </button>
//             <button
//               onClick={() => setSpeed(25)}
//               className="px-3 py-1 text-xs rounded bg-navy-800 text-gray-400 hover:text-cyan"
//             >
//               Medium
//             </button>
//             <button
//               onClick={() => setSpeed(35)}
//               className="px-3 py-1 text-xs rounded bg-navy-800 text-gray-400 hover:text-cyan"
//             >
//               Fast
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Carousel Container */}
//       <div 
//         ref={containerRef}
//         className="relative overflow-hidden py-6"
//         onMouseEnter={() => setIsPlaying(false)}
//         onMouseLeave={() => setIsPlaying(true)}
//       >
//         {/* Scrolling Content */}
//         <div 
//           ref={contentRef}
//           className="flex items-center"
//           style={{ willChange: 'transform' }}
//         >
//           {/* Duplicate content for seamless loop */}
//           {[...Array(duplicateCount)].map((_, duplicateIndex) => (
//             <div key={duplicateIndex} className="flex">
//               {values.map((value, index) => (
//                 <div
//                   key={`${value.title}-${duplicateIndex}-${index}`}
//                   className="mx-3 flex-shrink-0 w-[300px]"
//                 >
//                   <div className="glass-card p-6 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300 h-full">
//                     <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4`}>
//                       <value.icon className="text-navy-900" size={24} />
//                     </div>
//                     <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
//                     <p className="text-gray-400 text-sm">{value.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>

//         {/* Gradient Fade Effects on Edges */}
//         <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-navy-900 to-transparent pointer-events-none" />
//         <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-navy-900 to-transparent pointer-events-none" />
//       </div>

//       {/* Status Bar */}
//       <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
//         <div className="flex items-center">
//           <div className={`w-2 h-2 rounded-full mr-2 ${isPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-500'}`} />
//           {isPlaying ? 'Auto-scrolling' : 'Paused (hover to pause)'}
//         </div>
//         <div>
//           <span className="text-cyan">{values.length}</span> values • 
//           <span className="ml-2">{speed}px/s</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Alternative: CSS Animation Version (Simpler, no JS animation)
// export const CSSSmoothCarousel = () => {
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [duration] = useState(40); // Animation duration in seconds

//   return (
//     <div className="relative py-8">
//       <div className="flex justify-between items-center mb-8">
//         <h3 className="text-3xl font-bold text-white">
//           Our Core Values
//         </h3>

//         <div className="flex items-center space-x-4">
//           <button
//             onClick={() => setIsPlaying(!isPlaying)}
//             className="p-2 rounded-full bg-navy-800/50 hover:bg-cyan/20"
//           >
//             {isPlaying ? (
//               <Pause className="text-cyan w-5 h-5" />
//             ) : (
//               <Play className="text-cyan w-5 h-5" />
//             )}
//           </button>
//         </div>
//       </div>

//       <div className="relative overflow-hidden py-6">
//         <div 
//           className="flex"
//           style={{ 
//             animation: isPlaying ? `slide ${duration}s linear infinite` : 'none',
//             width: 'max-content'
//           }}
//           onMouseEnter={() => setIsPlaying(false)}
//           onMouseLeave={() => setIsPlaying(true)}
//         >
//           {/* Original items */}
//           {values.map((value, index) => (
//             <div key={`original-${index}`} className="mx-3 flex-shrink-0 w-[300px]">
//               <div className="glass-card p-6 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300 h-full">
//                 <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4`}>
//                   <value.icon className="text-navy-900" size={24} />
//                 </div>
//                 <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
//                 <p className="text-gray-400 text-sm">{value.description}</p>
//               </div>
//             </div>
//           ))}

//           {/* Duplicate items for seamless loop */}
//           {values.map((value, index) => (
//             <div key={`duplicate-${index}`} className="mx-3 flex-shrink-0 w-[300px]">
//               <div className="glass-card p-6 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300 h-full">
//                 <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4`}>
//                   <value.icon className="text-navy-900" size={24} />
//                 </div>
//                 <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
//                 <p className="text-gray-400 text-sm">{value.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Gradient edges */}
//         <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-navy-900 to-transparent" />
//         <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-navy-900 to-transparent" />
//       </div>

//       <style>{`
//         @keyframes slide {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// // Ultra-Simple Version (Just the moving banner)
// export const SimpleAdBanner = () => {
//   return (
//     <div className="relative overflow-hidden py-8">
//       <div className="flex animate-infinite-slide">
//         {/* Triple the content for smooth loop */}
//         {[...values, ...values, ...values].map((value, index) => (
//           <div key={index} className="mx-4 flex-shrink-0 w-[280px]">
//             <div className="glass-card p-6 rounded-2xl">
//               <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${value.color} flex items-center justify-center mb-3`}>
//                 <value.icon className="text-navy-900" size={20} />
//               </div>
//               <h4 className="text-lg font-bold text-white mb-2">{value.title}</h4>
//               <p className="text-gray-400 text-xs">{value.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <style>{`
//         @keyframes infinite-slide {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(calc(-280px * ${values.length}));
//           }
//         }

//         .animate-infinite-slide {
//           animation: infinite-slide 40s linear infinite;
//           display: flex;
//           width: max-content;
//         }

//         .animate-infinite-slide:hover {
//           animation-play-state: paused;
//         }

//         @media (max-width: 768px) {
//           .animate-infinite-slide {
//             animation-duration: 60s;
//           }
//         }

//         @media (max-width: 480px) {
//           .animate-infinite-slide {
//             animation-duration: 80s;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SmoothScrollingValuesCarousel;

import { useRef, useEffect, useState } from 'react';

// Import your icons
import {
  Sparkles, Award, Shield, Users, Zap, Heart, Leaf, TrendingUp
} from 'lucide-react';

// Your values data
const values = [
  {
    title: "Innovation",
    description: "Pushing boundaries with cutting-edge solutions",
    color: "from-gold to-cyan",
    icon: Sparkles
  },
  {
    title: "Excellence",
    description: "Delivering superior quality in every project",
    color: "from-cyan to-electric",
    icon: Award
  },
  {
    title: "Integrity",
    description: "Building trust through transparent practices",
    color: "from-electric to-gold",
    icon: Shield
  },
  {
    title: "Collaboration",
    description: "Working together to achieve greater results",
    color: "from-gold to-electric",
    icon: Users
  },
  {
    title: "Agility",
    description: "Adapting quickly to changing requirements",
    color: "from-cyan to-gold",
    icon: Zap
  },
  {
    title: "Customer Focus",
    description: "Putting client needs at the forefront",
    color: "from-electric to-cyan",
    icon: Heart
  },
  {
    title: "Sustainability",
    description: "Building solutions that last",
    color: "from-gold to-cyan",
    icon: Leaf
  },
  {
    title: "Growth",
    description: "Fostering continuous improvement",
    color: "from-cyan to-electric",
    icon: TrendingUp
  }
];

const SmoothInfiniteCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const positionRef = useRef<number>(0);
  const [isHovering, setIsHovering] = useState(false);
  const speed = 22; // Fixed at 22 pixels per second

  // Smooth animation loop
  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    // const container = containerRef.current;
    const content = contentRef.current;

    // Get content width
    const contentWidth = content.scrollWidth / 2; // We duplicate content once

    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;

      const deltaTime = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      if (!isHovering) {
        // Move content to the left
        positionRef.current -= (speed * deltaTime) / 1000;

        // Reset position when scrolled past one set of content
        if (Math.abs(positionRef.current) >= contentWidth) {
          positionRef.current += contentWidth;
        }

        // Apply smooth transform
        content.style.transform = `translateX(${positionRef.current}px)`;
        content.style.transition = 'transform 0.1s linear'; // Smooth transition
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovering]);

  return (
    <section id="about" className="relative py-20 bg-navy-900">
      {/* ================= ABOUT US ================= */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

    {/* LEFT — ABOUT + CUSTOMER FIRST */}
    <div>
      <h2 className="text-4xl font-bold text-white mb-6">
            <span className="text-white">About </span>
      <span className="text-cyan bg-gradient-to-r from-gold to-cyan bg-clip-text text-transparent">
              Kuberam Infotech
            </span>
        {/* <span className="text-cyan">Kuberam Infotech</span> */}
      </h2>

      <p className="text-gray-400 leading-relaxed mb-6">
        Kuberam Infotech is a next-generation software company built with a clear
        purpose — to help businesses grow faster through reliable, secure, and
        scalable digital solutions.
      </p>

      <p className="text-gray-400 leading-relaxed mb-6">
        Founded with a strong engineering mindset and a customer-first philosophy,
        we specialize in designing and developing high-performance software
        products that solve real-world business challenges. From early-stage
        startups to growing enterprises, we partner closely with our clients to
        turn ideas into impactful digital experiences.
      </p>

      {/* <p className="text-gray-400 leading-relaxed mb-10">
        We believe technology should be simple, transparent, and empowering —
        not complicated or restrictive. Every solution we build is guided by
        long-term thinking, clean architecture, and measurable business value.
      </p> */}

      {/* CUSTOMER FIRST PHILOSOPHY */}
      <div className="glass-card p-8 rounded-3xl border border-white/5">
        <h3 className="text-2xl font-bold text-white mb-4">
          Customer-First <span className="text-cyan">Philosophy</span>
        </h3>

        <p className="text-gray-400 leading-relaxed mb-6">
          At Kuberam Infotech, customers are not just clients — they are partners.
          We take time to understand business challenges, listen carefully to
          requirements, and suggest the right technology solutions, not the most
          expensive ones.
        </p>

        <p className="text-gray-400 leading-relaxed mb-6">
          Our approach is flexible, honest, and outcome-driven — ensuring clarity
          at every stage of development.
        </p>

        <ul className="grid sm:grid-cols-2 gap-4 text-gray-400">
          <li className="flex items-start gap-3">
            <span className="text-cyan mt-1">•</span>
            Clear communication
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan mt-1">•</span>
            Agile delivery
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan mt-1">•</span>
            Realistic timelines
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan mt-1">•</span>
            Post-delivery support
          </li>
        </ul>
      </div>
    </div>

    {/* RIGHT — VISION & MISSION */}
    <div className="space-y-8">

      {/* Vision */}
      <div className="glass-card p-8 rounded-3xl border border-white/5">
        <h3 className="text-2xl font-bold text-white mb-4">
          Our <span className="text-cyan">Vision</span>
        </h3>

        <p className="text-gray-400 leading-relaxed mb-4">
          To become a trusted global technology partner by delivering future-ready
          software solutions that enable businesses to scale with confidence,
          security, and speed.
        </p>

        <p className="text-gray-400 leading-relaxed">
          We don’t just build for today’s needs — we architect systems that remain
          strong, adaptable, and relevant tomorrow.
        </p>

        <div className="mt-6 h-1 w-20 bg-gradient-to-r from-cyan to-electric rounded-full" />
      </div>

      {/* Mission */}
      <div className="glass-card p-8 rounded-3xl border border-white/5">
        <h3 className="text-2xl font-bold text-white mb-6">
          Our <span className="text-cyan">Mission</span>
        </h3>

        <ul className="space-y-4 text-gray-400">
          <li className="flex items-start gap-3">
            <span className="text-cyan mt-1">•</span>
            Thoughtful software engineering
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan mt-1">•</span>
            Secure and scalable system design
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan mt-1">•</span>
            Transparent communication and collaboration
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan mt-1">•</span>
            A deep understanding of client goals
          </li>
          <p className="text-gray-400 leading-relaxed mb-10">
        We believe technology should be simple, transparent, and empowering —
        not complicated or restrictive. Every solution we build is guided by
        long-term thinking, clean architecture, and measurable business value.
      </p>
        </ul>
        

        <div className="mt-6 h-1 w-20 bg-gradient-to-r from-gold to-cyan rounded-full" />
      </div>

    </div>
  </div>
      <div
        className="relative py-8">
        {/* Simple Title */}
        <h3 className="text-3xl font-bold text-white mb-8 text-center">
          Our Core Values
        </h3>

        {/* Carousel Container */}
        <div
          ref={containerRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="relative overflow-hidden"
        >
          {/* Scrolling Content */}
          <div
            ref={contentRef}
            className="flex items-center py-4"
            style={{ willChange: 'transform' }}
          >
            {/* Original items */}
            {values.map((value, index) => (
              <div
                key={`original-${index}`}
                className="mx-4 flex-shrink-0 w-[300px]"
              >
                <div className="glass-card p-6 rounded-2xl hover:transform hover:scale-105 transition-all duration-300 h-full border border-white/5">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4`}>
                    <value.icon className="text-navy-900" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </div>
              </div>
            ))}

            {/* Duplicate items for seamless loop */}
            {values.map((value, index) => (
              <div
                key={`duplicate-${index}`}
                className="mx-4 flex-shrink-0 w-[300px]"
              >
                <div className="glass-card p-6 rounded-2xl hover:transform hover:scale-105 transition-all duration-300 h-full border border-white/5">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4`}>
                    <value.icon className="text-navy-900" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient fade on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy-900 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-navy-900 to-transparent pointer-events-none" />
        </div>

        {/* Hover hint */}
        {/* <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          {isHovering ? 'Resume on mouse leave' : 'Pause on mouse enter'}
        </p>
      </div> */}
      </div>
    </section>
  );
};

// CSS Only Version (Even Simpler)
const CSSOnlyCarousel = () => {
  return (
    <div className="relative py-8">
      <h3 className="text-3xl font-bold text-white mb-8 text-center">
        Our Core Values
      </h3>

      <div className="relative overflow-hidden">
        <div className="flex animate-smooth-scroll">
          {/* Quadruple the items for longer seamless loop */}
          {[...values, ...values, ...values, ...values].map((value, index) => (
            <div key={index} className="mx-4 flex-shrink-0 w-[300px]">
              <div className="glass-card p-6 rounded-2xl hover:transform hover:scale-105 transition-all duration-300 h-full border border-white/5">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4`}>
                  <value.icon className="text-navy-900" size={24} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy-900 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-navy-900 to-transparent" />
      </div>

      <style>{`
        @keyframes smooth-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-300px * ${values.length}));
          }
        }
        
        .animate-smooth-scroll {
          animation: smooth-scroll 120s linear infinite;
          display: flex;
          width: max-content;
        }
        
        .animate-smooth-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

// Ultra Simple - Just the Grid with Auto Slide (Your Original Style)
const AutoSlideGrid = () => {
  const [currentSet, setCurrentSet] = useState(0);
  const totalSets = 2; // We'll have 2 sets of values for the loop

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet(prev => (prev + 1) % totalSets);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Determine which values to show based on currentSet
  const getVisibleValues = () => {
    if (currentSet === 0) return values;
    // For second set, maybe show a different arrangement or same values
    return [...values.slice(2), ...values.slice(0, 2)]; // Rotated values
  };

  return (
    <div className="py-8">
      <h3 className="text-3xl font-bold text-white mb-8 text-center">
        Our Core Values
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {getVisibleValues().map((value, index) => (
          <div
            key={`${value.title}-${currentSet}-${index}`}
            className="glass-card p-6 rounded-2xl transition-all duration-500 hover:transform hover:-translate-y-1"
          >
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4`}>
              <value.icon className="text-navy-900" size={24} />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
            <p className="text-gray-400 text-sm">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmoothInfiniteCarousel;
export { CSSOnlyCarousel, AutoSlideGrid };