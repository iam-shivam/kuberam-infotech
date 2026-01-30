// // src/components/sections/WhyChooseUs.tsx
// import { easeInOut, motion, type Variants } from 'framer-motion';
// import {
//   Shield,
//   Zap,
//   Code,
//   TrendingUp,
//   // Users,
//   // Clock,
//   // Award,
//   CheckCircle,
//   // ArrowRight,
//   Star
// } from 'lucide-react';

// const WhyChooseUs = () => {
//   const features = [
//     {
//       id: 1,
//       icon: Shield,
//       title: 'Enterprise Security',
//       description: 'Bank-grade security protocols and compliance with industry standards.',
//       image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
//       // Human image: https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop
//       stats: '99.99% Security Uptime',
//       color: 'from-cyan to-electric',
//       points: ['SOC 2 Compliance', 'End-to-End Encryption', 'Regular Security Audits']
//     },
//     {
//       id: 2,
//       icon: Zap,
//       title: 'High Performance',
//       description: 'Optimized solutions that handle millions of requests with minimal latency.',
//       image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop',
//       stats: '<100ms Response Time',
//       color: 'from-gold to-cyan',
//       points: ['Load Balancing', 'CDN Integration', 'Database Optimization']
//     },
//     {
//       id: 3,
//       icon: Code,
//       title: 'Clean Code',
//       description: 'Modular, maintainable, and well-documented code following best practices.',
//       image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop',
//       // Human team: https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop
//       stats: '100% Code Review',
//       color: 'from-electric to-cyan',
//       points: ['TypeScript Adoption', 'Clean Architecture', 'Unit Testing']
//     },
//     {
//       id: 4,
//       icon: TrendingUp,
//       title: 'Scalable Systems',
//       description: 'Architected to grow with your business, handling increasing loads seamlessly.',
//       image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop',
//       stats: 'Auto-scaling Capability',
//       color: 'from-gold to-electric',
//       points: ['Microservices', 'Cloud Native', 'Horizontal Scaling']
//     },
//   ];

//   // const benefits = [
//   //   {
//   //     icon: Users,
//   //     title: 'Expert Team',
//   //     description: 'Senior engineers with 8+ years of experience',
//   //     count: '40+'
//   //   },
//   //   {
//   //     icon: Clock,
//   //     title: 'Fast Delivery',
//   //     description: 'Agile methodology with sprints',
//   //     count: '30%'
//   //   },
//   //   {
//   //     icon: Award,
//   //     title: 'Award Winning',
//   //     description: 'Recognized by industry leaders',
//   //     count: '15+'
//   //   },
//   //   {
//   //     icon: Star,
//   //     title: 'Client Satisfaction',
//   //     description: '5-star reviews from clients',
//   //     count: '98%'
//   //   },
//   // ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants: Variants = {
//     hidden: { y: 50, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: 'spring',
//         stiffness: 100,
//         duration: 0.5, // add a duration if needed
//       },
//     },
//   };


//   const floatAnimation = {
//     y: [0, -15, 0],
//     transition: {
//       duration: 3,
//       repeat: Infinity,
//       ease: easeInOut,
//     },
//   };

//   return (
//     <section id="why-us" className="section-padding bg-navy-900 relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute top-1/4 left-10 w-64 h-64 bg-cyan/10 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <motion.div
//             initial={{ scale: 0 }}
//             whileInView={{ scale: 1 }}
//             transition={{ type: 'spring' }}
//             className="inline-flex items-center space-x-2 mb-4 px-4 py-2 rounded-full bg-gold/10 border border-gold/20"
//           >
//             <Star className="text-gold w-4 h-4" />
//             <span className="text-gold text-sm font-medium">Why Choose Us</span>
//           </motion.div>

//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
//             <span className="text-white">Building </span>
//             <span className="bg-gradient-to-r from-gold to-cyan bg-clip-text text-transparent">
//               Trust Through Excellence
//             </span>
//           </h2>
//           <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//             We don't just build software - we build partnerships and deliver exceptional value.
//           </p>
//         </motion.div>

//         {/* Main Features Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           className="grid lg:grid-cols-2 gap-8 mb-20"
//         >
//           {features.map((feature) => (
//             <motion.div
//               key={feature.id}
//               variants={itemVariants}
//               whileHover={{ y: -10 }}
//               className="group relative"
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-electric/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//               <div className="relative glass-card overflow-hidden rounded-3xl h-full">
//                 <div className="flex flex-col md:flex-row">
//                   {/* Image Section */}
//                   <motion.div
//                     animate={floatAnimation}
//                     className="md:w-2/5 relative"
//                   >
//                     <div className="h-48 md:h-full overflow-hidden">
//                       <motion.img
//                         whileHover={{ scale: 1.1 }}
//                         transition={{ duration: 0.5 }}
//                         src={feature.image}
//                         alt={feature.title}
//                         className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent"></div>
//                     </div>

//                     {/* Floating Icon */}
//                     <motion.div
//                       animate={{ rotate: [0, 360] }}
//                       transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
//                       className={`absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}
//                     >
//                       <feature.icon className="text-navy-900" size={24} />
//                     </motion.div>
//                   </motion.div>

//                   {/* Content Section */}
//                   <div className="md:w-3/5 p-6 md:p-8">
//                     <div className="flex items-start justify-between mb-4">
//                       <div>
//                         <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan transition-colors">
//                           {feature.title}
//                         </h3>
//                         <p className="text-gray-400 mb-4">{feature.description}</p>
//                       </div>
//                     </div>

//                     {/* Stats */}
//                     <motion.div
//                       initial={{ scale: 0.9 }}
//                       whileInView={{ scale: 1 }}
//                       className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-br ${feature.color} bg-opacity-20 mb-6`}
//                     >
//                       <Zap className="text-cyan mr-2" size={16} />
//                       <span className="text-sm font-medium text-cyan">{feature.stats}</span>
//                     </motion.div>

//                     {/* Points */}
//                     <div className="space-y-3">
//                       {feature.points.map((point, idx) => (
//                         <motion.div
//                           key={point}
//                           initial={{ x: -20, opacity: 0 }}
//                           whileInView={{ x: 0, opacity: 1 }}
//                           transition={{ delay: idx * 0.1 }}
//                           className="flex items-center space-x-3"
//                         >
//                           <motion.div
//                             whileHover={{ scale: 1.2, rotate: 180 }}
//                             transition={{ type: 'spring' }}
//                             className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan to-electric flex items-center justify-center flex-shrink-0"
//                           >
//                             <CheckCircle className="text-navy-900" size={12} />
//                           </motion.div>
//                           <span className="text-gray-300">{point}</span>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Animated Progress Bar */}
//                 <motion.div
//                   className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan to-electric"
//                   initial={{ width: "0%" }}
//                   whileInView={{ width: "100%" }}
//                   transition={{ duration: 1.5 }}
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Benefits Stats */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
//         >
//           {/* {benefits.map((benefit, idx) => (
//             <motion.div
//               key={benefit.title}
//               initial={{ y: 30, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ delay: idx * 0.1 }}
//               whileHover={{ scale: 1.05 }}
//               className="glass-card p-6 rounded-2xl text-center relative overflow-hidden group"
//             >
//               {/* Animated Background */}
//               {/* <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-electric/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//               <motion.div
//                 animate={{ rotate: [0, 360] }}
//                 transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
//                 className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-gold to-cyan flex items-center justify-center"
//               >
//                 <benefit.icon className="text-navy-900" size={24} />
//               </motion.div> */}

//               {/* <div className="text-3xl font-bold text-white mb-2">{benefit.count}</div>
//               <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
//               <p className="text-gray-400 text-sm">{benefit.description}</p> */}
//             {/* </motion.div> */}
//           {/* ))} */}
//         </motion.div>

//         {/* CTA Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="relative overflow-hidden rounded-3xl"
//         >
//           <div className="absolute inset-0 bg-gradient-to-r from-cyan/20 via-gold/10 to-electric/20"></div>

//           <div className="relative glass-card p-8 md:p-12">
//             <div className="grid md:grid-cols-2 gap-8 items-center">
//               <div>
//                 <h3 className="text-3xl font-bold text-white mb-4">
//                   Ready to Transform Your Business?
//                 </h3>
//                 <p className="text-gray-400 mb-6">
//                   Join 150+ satisfied clients who trust us with their digital transformation.
//                 </p>

//                 <div className="space-y-4">
//                   {[
//                     'Free consultation session',
//                     'Detailed project proposal',
//                     'Flexible engagement models',
//                     'Dedicated support team'
//                   ].map((item, idx) => (
//                     <motion.div
//                       key={item}
//                       initial={{ x: -20, opacity: 0 }}
//                       whileInView={{ x: 0, opacity: 1 }}
//                       transition={{ delay: idx * 0.1 }}
//                       className="flex items-center space-x-3"
//                     >
//                       <div className="w-2 h-2 bg-cyan rounded-full"></div>
//                       <span className="text-gray-300">{item}</span>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>

//               <div className="text-center">
//                 <motion.button
//                   //   whileHover={{ scale: 1.05 }}
//                   //   whileTap={{ scale: 0.95 }}
//                   //   className="px-8 py-4 bg-gradient-to-r from-gold to-cyan text-navy-900 font-bold rounded-lg flex items-center justify-center space-x-3 mx-auto shadow-lg shadow-gold/20"
//                   // >
//                   //   <span>Start Free Consultation</span>
//                   //   <ArrowRight size={20} />
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => {
//                     if ((window as any).openContactPopup) {
//                       (window as any).openContactPopup();
//                     } else {
//                       document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
//                     }
//                   }}
//                   className="px-8 py-3 bg-gradient-to-r from-gold to-cyan text-navy-900 font-bold rounded-lg"
//                 >
//                   Start Free Consultation
//                 </motion.button>

//                 <p className="text-gray-400 text-sm mt-4">
//                   No commitment • 30-minute session • Expert advice
//                 </p>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;
// 
import { motion } from "framer-motion";
import {
  Brain,
  Clock,
  Award,
  CheckCircle,
  XCircle,
  // TrendingUp,
} from "lucide-react";

/* ---------------- STATUS CONFIG ---------------- */

const STATUS = {
  included: {
    label: "Included",
    icon: CheckCircle,
    color: "text-green-500",
  },
  limited: {
    label: "Limited",
    icon: Clock,
    color: "text-yellow-400",
  },
  not_available: {
    label: "Not Available",
    icon: XCircle,
    color: "text-red-500",
  },
} as const;

/* ---------------- TABLE DATA ---------------- */

const data = [
  {
    feature: "AI-Enhanced Development",
    Kuberam: { status: "included", desc: "AI agents enable faster delivery" },
    agency: { status: "not_available", desc: "Manual development processes" },
    freelancer: { status: "not_available", desc: "No AI-based support" },
  },
  {
    feature: "24/7 Project Communication",
    Kuberam: { status: "included", desc: "AI-powered real-time updates" },
    agency: { status: "limited", desc: "Business hours only" },
    freelancer: { status: "limited", desc: "Depends on availability" },
  },
  {
    feature: "Dedicated Project Manager",
    Kuberam: { status: "included", desc: "Senior PM with AI tracking" },
    agency: { status: "included", desc: "Standard PM support" },
    freelancer: { status: "not_available", desc: "Self-managed only" },
  },
  {
    feature: "Quality Assurance",
    Kuberam: { status: "included", desc: "AI testing + human QA" },
    agency: { status: "included", desc: "Manual QA cycles" },
    freelancer: { status: "limited", desc: "Basic testing only" },
  },
  {
    feature: "Scalability Planning",
    Kuberam: { status: "included", desc: "AI-optimized architecture" },
    agency: { status: "limited", desc: "Standard scalability" },
    freelancer: { status: "not_available", desc: "Limited expertise" },
  },
  {
    feature: "Cost Predictability",
    Kuberam: {
      status: "included",
      desc: "Fixed pricing with AI efficiency gains",
    },
    agency: {
      status: "limited",
      desc: "Budget overruns common",
    },
    freelancer: {
      status: "limited",
      desc: "Hourly rates escalate",
    },
  },
];

/* ---------------- STATUS CELL ---------------- */

function StatusCell({ item }: any) {
  const cfg = STATUS[item.status as keyof typeof STATUS];
  const Icon = cfg.icon;

  return (
    <div className="flex flex-col items-center text-center gap-1">
      <Icon className={`w-4 h-4 ${cfg.color}`} />
      <span className={`text-xs font-medium ${cfg.color}`}>
        {cfg.label}
      </span>
      <p className="text-[11px] text-gray-400 max-w-[140px] leading-snug">
        {item.desc}
      </p>
    </div>
  );
}

/* ---------------- MAIN SECTION ---------------- */

export default function WhyChooseKuberam() {
  return (
    <section id="why-us" className="section-padding bg-navy-900">
      <div className="max-w-7xl mx-auto">

        {/* ---------- TITLE ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Why Choose </span>
            <span className="bg-gradient-to-r from-gold to-cyan bg-clip-text text-transparent">
              Kuberam
            </span>
            ?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See how our AI-first approach delivers superior results compared to
            traditional agencies and freelancers.
          </p>
        </motion.div>
        {/* 🔹 Badge / Label */}
           <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1 }}
  viewport={{ once: true }}
  className="flex justify-center mb-16"
>
  <div className="
    inline-flex items-center gap-2
    px-4 py-2
    rounded-full
    bg-white/5
    border border-white/10
    backdrop-blur-sm
  ">
    <Brain className="text-cyan" size={15} />
    <span className="text-cyan text-sm font-medium">
      AI-Enhanced Development Process
    </span>
  </div>
           </motion.div>


        {/* ---------- COMPARISON TABLE ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl overflow-hidden mb-24"
        >
          {/* Header */}
          <div className="grid grid-cols-4 bg-gradient-to-r from-gold to-cyan text-navy-900 text-sm font-semibold">
            <div className="p-4">Features</div>
            <div className="p-4 text-center">Kuberam</div>
            <div className="p-4 text-center">Agencies</div>
            <div className="p-4 text-center">Freelancers</div>
          </div>

          {/* Rows */}
          {data.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-4 border-t border-white/10"
            >
              <div className="p-4 text-sm font-medium text-white">
                {row.feature}
              </div>
              <div className="p-4 flex justify-center">
                <StatusCell item={row.Kuberam} />
              </div>
              <div className="p-4 flex justify-center">
                <StatusCell item={row.agency} />
              </div>
              <div className="p-4 flex justify-center">
                <StatusCell item={row.freelancer} />
              </div>
            </div>
          ))}
        </motion.div>

        {/* ---------- CTA ---------- */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-12 text-center mb-24"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Experience the Kuberam Advantage?
          </h3>
          <p className="text-gray-400 max-w-xl mx-auto mb-10">
            Join hundreds of companies using our AI-enhanced development process
            for superior results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-gold to-cyan text-navy-900 font-bold rounded-lg">
              Start Your Project
            </button>
            <button className="px-8 py-4 border border-white/20 text-white rounded-lg hover:bg-white/5 transition">
              Schedule Free Consultation
            </button>
          </div>
        </motion.div> */}

        {/* ---------- FEATURE CARDS ---------- */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-card p-8 rounded-3xl text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-gold to-cyan rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Brain className="text-navy-900" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">
              AI-Enhanced Team
            </h3>
            <p className="text-gray-400 text-sm">
              Developers working alongside AI agents for faster and cleaner
              delivery.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan to-electric rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Clock className="text-navy-900" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">
              24/7 AI Communication
            </h3>
            <p className="text-gray-400 text-sm">
              Real-time updates without waiting for weekly meetings.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-electric to-cyan rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Award className="text-navy-900" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Proven SaaS Expertise
            </h3>
            <p className="text-gray-400 text-sm">
              500+ projects delivered across 15+ industries.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}


