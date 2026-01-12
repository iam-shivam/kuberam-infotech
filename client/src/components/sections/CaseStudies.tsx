// src/components/sections/CaseStudies.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ChevronLeft,
  ChevronRight,
  // ExternalLink,
  TrendingUp,
  Clock,
  Users,
  DollarSign,
  BarChart,
  Shield,
  Zap,
  // Code,
  //   Cloud,
  Cpu,
  Building2,
  HeartPulse,
  Truck,
  // GraduationCap,
  CreditCard,
  Factory,
  Search,
  Filter,
  UtensilsCrossed,
  ShoppingCart,
  TrendingDown
} from 'lucide-react';

// Case Study Data
const caseStudies = [
  {
    id: 1,
    title: 'E-commerce Platform Migration',
    client: 'FashionForward Retail',
    industry: 'Retail & E-commerce',
    // duration: '3 Months',
    // teamSize: '5 Engineers',
    // budget: '$150K',
    icon: Building2,
    gradient: 'from-gold to-cyan',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop',
    challenge: 'Legacy e-commerce platform with 500k+ products struggling with slow performance and poor mobile experience.',
    solution: 'Built a modern React/Next.js platform with Node.js backend, Redis caching, and AWS infrastructure.',
    results: [
      '230% increase in mobile conversion rate',
      '40% reduction in page load time',
      '99.99% uptime with auto-scaling',
      '300% faster checkout process'
    ],
    technologies: ['React', 'Angular' ,'TypeScript', 'Next.js', 'Nest.js' ,'Python' ,'Node.js', 'MongoDB', 'Redis', 'AWS'],
    metrics: [
      { label: 'Revenue Increase', value: '45%', icon: DollarSign },
      { label: 'User Growth', value: '120%', icon: Users },
      { label: 'Load Time', value: '<1s', icon: Zap },
      { label: 'Uptime', value: '99.99%', icon: Shield }
    ]
  },
  {
  id: 2,
  title: 'Travel Health & Medical Assistance Platform',
  client: 'GlobalCare Travels',
  industry: 'Travel & Healthcare',
  icon: HeartPulse,
  gradient: 'from-cyan to-emerald',
  image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop',
  challenge:
    'Travelers lacked access to reliable healthcare guidance, emergency assistance, and medical records while traveling abroad.',
  solution:
    'Built a unified travel-health platform offering virtual doctor consultations, travel insurance support, nearby hospital discovery, and secure medical record access.',
  results: [
    '30k+ travelers assisted globally',
    '95% traveler satisfaction rate',
    '60% faster emergency response time',
    '24/7 medical support across 40+ countries'
  ],
  technologies: [
    'React',
    'Angular',
    'Node.js',
    'Python',
    'WebRTC',
    'PostgreSQL',
    'AWS',
    'Docker'
  ],
  metrics: [
    { label: 'Travelers Assisted', value: '30K+', icon: Users },
    { label: 'Satisfaction Rate', value: '95%', icon: TrendingUp },
    { label: 'Emergency Response', value: '60% Faster', icon: Shield },
    { label: 'Global Coverage', value: '40+ Countries', icon: HeartPulse }
  ]
}, 
  {
    id: 3,
    title: 'Logistics Management System',
    client: 'SwiftLogistics Inc.',
    industry: 'Logistics',
    // duration: '4 Months',
    // teamSize: '6 Engineers',
    // budget: '$180K',
    icon: Truck,
    gradient: 'from-electric to-cyan',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop',
    challenge: 'Manual tracking and inefficient route planning causing 30% fuel waste and delivery delays.',
    solution: 'AI-enabled fleet management system with real-time tracking, route optimization, and predictive analytics.',
    results: [
      '30% reduction in fuel consumption',
      '25% faster delivery times',
      'Real-time tracking for 500+ vehicles',
      'Predictive maintenance alerts'
    ],
    technologies: ['React', 'Python','Node.js', 'AI/ML', 'PostgreSQL' ,'MongoDB', 'Google Maps API', 'AWS'],
    metrics: [
      { label: 'Fuel Savings', value: '30%', icon: DollarSign },
      { label: 'Delivery Speed', value: '25%', icon: Clock },
      { label: 'Vehicles Tracked', value: '500+', icon: Truck },
      { label: 'Route Efficiency', value: '40%', icon: TrendingUp }
    ]
  },
  {
    id: 4,
    title: 'FinTech Banking Platform',
    client: 'NextGen Bank',
    industry: 'FinTech',
    // duration: '8 Months',
    // teamSize: '10 Engineers',
    // budget: '$350K',
    icon: CreditCard,
    gradient: 'from-gold to-electric',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop',
    challenge: 'Legacy banking system with poor UX, security vulnerabilities, and high maintenance costs.',
    solution: 'Modern microservices architecture with React frontend, Node.js backend, and blockchain integration.',
    results: [
      '500k+ active users in 6 months',
      '99.99% security compliance',
      '70% reduction in transaction time',
      '24/7 real-time fraud detection'
    ],
    technologies: ['React','Angular' ,'Node.js', 'Microservices', 'PostgreSQL', 'Blockchain', 'Kubernetes'],
    metrics: [
      { label: 'Active Users', value: '500K+', icon: Users },
      { label: 'Security Score', value: '99.99%', icon: Shield },
      { label: 'Transaction Speed', value: '<0.5s', icon: Zap },
      { label: 'Cost Reduction', value: '60%', icon: DollarSign }
    ]
  },
  {
    id: 5,
    title: 'Food & Beverages Platform',
    client: 'FreshBite Foods',
    industry: 'Food & Beverages',
    // duration: '4 Months',
    // teamSize: '6 Engineers',
    icon: UtensilsCrossed,
    gradient: 'from-orange-400 to-red-500',
    image: 'https://images.unsplash.com/photo-1543353071-873f17a7a088?q=80&w=1170&auto=format&fit=crop',

    challenge:
      'Manual order management, delayed inventory updates, and lack of real-time insights caused operational inefficiencies and revenue loss.',

    solution:
      'Built a centralized digital platform for order management, inventory tracking, and analytics with real-time dashboards and automation.',

    results: [
      '60% faster order processing',
      '35% reduction in inventory waste',
      '40% increase in online orders',
      'Real-time stock & sales insights'
    ],

    technologies: [
      'React',
      'Angular',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Redis',
      'AWS',
      'Stripe'
    ],

    metrics: [
      { label: 'Orders Processed', value: '500K+', icon: ShoppingCart },
      { label: 'Waste Reduction', value: '35%', icon: TrendingDown },
      { label: 'Customer Growth', value: '40%', icon: Users },
      { label: 'System Uptime', value: '99.9%', icon: Shield }
    ]
  },
  {
    id: 6,
    title: 'Manufacturing System',
    client: 'AutoTech Manufacturing',
    industry: 'Manufacturing',
    // duration: '6 Months',
    // teamSize: '9 Engineers',
    // budget: '$280K',
    icon: Factory,
    gradient: 'from-gold to-cyan',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop',
    challenge: 'Manual production monitoring causing 20% defect rate and 30% machine downtime.',
    solution: 'AI-powered smart factory system with real-time monitoring, predictive maintenance, and quality control.',
    results: [
      '40% increase in production efficiency',
      '85% reduction in defects',
      'Predictive maintenance alerts',
      'Real-time quality monitoring'
    ],
    technologies: ['React', 'Python' ,'Angular', 'TypeScript', 'Next.js' ,'Node.js', 'AWS', 'TensorFlow'],
    metrics: [
      { label: 'Production Efficiency', value: '40%', icon: TrendingUp },
      { label: 'Defect Reduction', value: '85%', icon: BarChart },
      { label: 'Machine Uptime', value: '95%', icon: Shield },
      { label: 'Cost Savings', value: '35%', icon: DollarSign }
    ]
  },
];

const industries = [
  'All Industries',
  'Retail & E-commerce',
  'Healthcare',
  'Logistics',
  'FinTech',
  'Food & Beverages',
  'Manufacturing'
];

const CaseStudies = () => {
  const [selectedCase, setSelectedCase] = useState<typeof caseStudies[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState('All Industries');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStudies = caseStudies.filter(study => {
    const matchesIndustry = filter === 'All Industries' || study.industry === filter;
    const matchesSearch = searchQuery === '' ||
      study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.industry.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesIndustry && matchesSearch;
  });

  const openCaseStudy = (study: typeof caseStudies[0]) => {
    setSelectedCase(study);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCase(null);
    document.body.style.overflow = 'auto';
  };

  const openNext = () => {
    if (selectedCase) {
      const currentIndex = caseStudies.findIndex(c => c.id === selectedCase.id);
      const nextIndex = (currentIndex + 1) % caseStudies.length;
      setSelectedCase(caseStudies[nextIndex]);
    }
  };

  const openPrev = () => {
    if (selectedCase) {
      const currentIndex = caseStudies.findIndex(c => c.id === selectedCase.id);
      const prevIndex = (currentIndex - 1 + caseStudies.length) % caseStudies.length;
      setSelectedCase(caseStudies[prevIndex]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isModalOpen) {
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowRight') openNext();
        if (e.key === 'ArrowLeft') openPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, selectedCase]);

  return (
    <>
      {/* Case Studies Section */}
      <section id="case-studies" className="section-padding bg-navy-900">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center space-x-2 mb-4 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/20">
              <TrendingUp className="text-cyan" size={16} />
              <span className="text-cyan text-sm font-medium">Success Stories</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-white">Real-World </span>
              <span className="bg-gradient-to-r from-gold to-cyan bg-clip-text text-transparent">
                Case Studies
              </span>
            </h2>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how we've helped businesses transform and achieve remarkable results through innovative technology solutions.
            </p>
          </motion.div>

          {/* Filters and Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search Bar */}
              <div className="relative w-full md:w-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search case studies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full md:w-80 pl-12 pr-4 py-3 bg-navy-800/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan"
                />
              </div>

              {/* Industry Filters */}
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Filter size={16} />
                  <span className="text-sm">Filter by:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {industries.map((industry) => (
                    <button
                      key={industry}
                      onClick={() => setFilter(industry)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filter === industry
                          ? 'bg-gradient-to-r from-gold to-cyan text-navy-900'
                          : 'bg-navy-800/50 text-gray-400 hover:text-white hover:bg-navy-800'
                        }`}
                    >
                      {industry}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => openCaseStudy(study)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-3xl h-full">
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-10 group-hover:opacity-20 transition-opacity`}></div>

                  {/* Card */}
                  <div className="glass-card h-full overflow-hidden">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent"></div>

                      {/* Industry Badge */}
                      <div className="absolute top-4 left-4">
                        <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-navy-900/80 backdrop-blur-sm">
                          <study.icon className="text-cyan" size={14} />
                          <span className="text-white text-sm font-medium">{study.industry}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan transition-colors">
                            {study.title}
                          </h3>
                          <p className="text-gray-400 text-sm">Client: {study.client}</p>
                        </div>
                      </div>

                      {/* Challenge Preview */}
                      <p className="text-gray-300 text-sm line-clamp-2 mb-4">
                        {study.challenge}
                      </p>

                      {/* Metrics */}
                      {/* <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="flex items-center space-x-2">
                          <Clock className="text-cyan" size={14} />
                          <span className="text-gray-400 text-sm">{study.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="text-gold" size={14} />
                          <span className="text-gray-400 text-sm">{study.teamSize}</span>
                        </div>
                      </div> */}

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-navy-800/50 text-gray-300 text-xs rounded">
                            {tech}
                          </span>
                        ))}
                        {study.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-navy-800/50 text-gray-400 text-xs rounded">
                            +{study.technologies.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* View Button */}
                      {/* <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <span className="text-cyan text-sm font-medium flex items-center space-x-2 group-hover:space-x-3 transition-all">
                          <span>View Case Study</span>
                          <ExternalLink size={14} />
                        </span> */}
                        {/* <span className="text-gold text-sm font-bold">{study.budget}</span> */}
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredStudies.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-navy-800/50 flex items-center justify-center">
                <Search className="text-gray-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">No case studies found</h3>
              <p className="text-gray-400">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </motion.div>
          )}

          {/* Stats */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: '50+', label: 'Projects Completed', icon: Code },
              { value: '40%', label: 'Average ROI', icon: TrendingUp },
              { value: '98%', label: 'Client Satisfaction', icon: Users },
              { value: '24/7', label: 'Support', icon: Shield },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: idx * 0.1, type: 'spring' }}
                className="glass-card p-6 rounded-2xl text-center"
              >
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div> */}
        </div>
      </section>

      {/* Case Study Modal */}
      <AnimatePresence>
        {isModalOpen && selectedCase && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              className="fixed inset-4 md:inset-10 z-[101] overflow-hidden"
            >
              <div className="w-full h-full bg-navy-900 rounded-3xl overflow-hidden flex flex-col">
                {/* Header */}
                <div className="relative h-64 md:h-80">
                  <img
                    src={selectedCase.image}
                    alt={selectedCase.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/80 to-transparent"></div>

                  <div className="absolute top-4 right-4 flex items-center space-x-2">
                    <button
                      onClick={openPrev}
                      className="w-10 h-10 rounded-full bg-navy-900/80 backdrop-blur-sm flex items-center justify-center hover:bg-navy-800 transition-colors"
                    >
                      <ChevronLeft className="text-white" size={20} />
                    </button>
                    <button
                      onClick={openNext}
                      className="w-10 h-10 rounded-full bg-navy-900/80 backdrop-blur-sm flex items-center justify-center hover:bg-navy-800 transition-colors"
                    >
                      <ChevronRight className="text-white" size={20} />
                    </button>
                    <button
                      onClick={closeModal}
                      className="w-10 h-10 rounded-full bg-navy-900/80 backdrop-blur-sm flex items-center justify-center hover:bg-navy-800 transition-colors"
                    >
                      <X className="text-white" size={20} />
                    </button>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex flex-wrap items-center gap-4">
                      <div className={`px-4 py-2 rounded-full bg-gradient-to-br ${selectedCase.gradient} flex items-center space-x-2`}>
                        <selectedCase.icon className="text-navy-900" size={16} />
                        <span className="text-navy-900 font-bold">{selectedCase.industry}</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white">{selectedCase.title}</h2>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6 md:p-8">
                  <div className="max-w-6xl mx-auto">
                    {/* Client Info */}
                    <div className="grid md:grid-cols-4 gap-6 mb-8">
                      <div className="glass-card p-4 rounded-xl">
                        <div className="text-sm text-gray-400 mb-1">Client</div>
                        <div className="text-lg font-bold text-white">{selectedCase.client}</div>
                      </div>
                      {/* <div className="glass-card p-4 rounded-xl">
                        <div className="text-sm text-gray-400 mb-1">Duration</div>
                        <div className="text-lg font-bold text-white">{selectedCase.duration}</div>
                      </div>
                      <div className="glass-card p-4 rounded-xl">
                        <div className="text-sm text-gray-400 mb-1">Team Size</div>
                        <div className="text-lg font-bold text-white">{selectedCase.teamSize}</div>
                      </div> */}
                      <div className="glass-card p-4 rounded-xl">
                        <div className="text-sm text-gray-400 mb-1">Budget</div>
                        {/* <div className="text-lg font-bold text-white">{selectedCase.budget}</div> */}
                      </div>
                    </div>

                    {/* Challenge & Solution */}
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <div className="flex items-center space-x-2 mb-4">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold to-cyan flex items-center justify-center">
                            <Zap className="text-navy-900" size={16} />
                          </div>
                          <h3 className="text-xl font-bold text-white">The Challenge</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{selectedCase.challenge}</p>
                      </div>

                      <div>
                        <div className="flex items-center space-x-2 mb-4">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan to-electric flex items-center justify-center">
                            <Cpu className="text-navy-900" size={16} />
                          </div>
                          <h3 className="text-xl font-bold text-white">Our Solution</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{selectedCase.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="mb-8">
                      <div className="flex items-center space-x-2 mb-6">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric to-cyan flex items-center justify-center">
                          <TrendingUp className="text-navy-900" size={16} />
                        </div>
                        <h3 className="text-xl font-bold text-white">Key Results</h3>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        {selectedCase.results.map((result, idx) => (
                          <motion.div
                            key={result}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-start space-x-3 p-4 rounded-xl bg-navy-800/50"
                          >
                            <div className="w-2 h-2 bg-cyan rounded-full mt-2"></div>
                            <span className="text-gray-300">{result}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="mb-8">
                      <h4 className="text-lg font-bold text-white mb-4">Performance Metrics</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {selectedCase.metrics.map((metric, idx) => (
                          <motion.div
                            key={metric.label}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="glass-card p-4 rounded-xl text-center"
                          >
                            <div className="text-2xl font-bold text-white mb-2">{metric.value}</div>
                            <div className="text-gray-400 text-sm">{metric.label}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h4 className="text-lg font-bold text-white mb-4">Technologies Used</h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedCase.technologies.map((tech) => (
                          <div
                            key={tech}
                            className="px-4 py-2 rounded-full bg-gradient-to-r from-navy-800 to-navy-900 border border-cyan/20 text-gray-300 hover:text-cyan transition-colors"
                          >
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="glass-card p-6 rounded-2xl">
                      <div className="text-center">
                        <h4 className="text-xl font-bold text-white mb-4">
                          Ready to Achieve Similar Results?
                        </h4>
                        <p className="text-gray-400 mb-6">
                          Let's discuss how we can help transform your business with innovative technology solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 bg-gradient-to-r from-gold to-cyan text-navy-900 font-bold rounded-lg"
                            onClick={() => {
                              closeModal();
                              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                          >
                            Start Your Project
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 border-2 border-cyan text-cyan font-semibold rounded-lg hover:bg-cyan/10 transition-colors"
                            onClick={closeModal}
                          >
                            View More Case Studies
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default CaseStudies;