// src/components/sections/IndustriesWeServe.tsx
import { motion, type TargetAndTransition, type Variants } from 'framer-motion';
import {
    Building2,
    HeartPulse,
    Truck,
    GraduationCap,
    CreditCard,
    Factory,
    ShoppingBag,
    Plane,
    ChevronRight,
    Sparkles,
    TrendingUp,
    Shield,
    Zap
} from 'lucide-react';

const IndustriesWeServe = () => {
    const industries = [
        {
            id: 1,
            icon: Building2,
            title: 'Real Estate',
            description: 'Upgrade property management with our tailored digital solutions, enhancing efficiency and client experiences.',
            features: ['Property Management Systems', 'Virtual Tours', 'CRM Integration', 'Smart Building Solutions'],
            color: 'from-gold to-cyan',
            gradient: 'bg-gradient-to-br from-gold to-cyan',
            stats: '40% Efficiency Boost',
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop',
        },
        {
            id: 2,
            icon: HeartPulse,
            title: 'Healthcare',
            description: 'Transform patient care with innovative software, from telemedicine to data analytics.',
            features: ['Telemedicine Platforms', 'EHR/EMR Systems', 'Health Analytics', 'IoT Medical Devices'],
            color: 'from-cyan to-electric',
            gradient: 'bg-gradient-to-br from-cyan to-electric',
            stats: '98% Patient Satisfaction',
            image: '/health.png',
        },
        {
            id: 3,
            icon: Truck,
            title: 'Logistics',
            description: 'Optimize supply chains with advanced tracking and management systems for seamless operations.',
            features: ['Fleet Management', 'Route Optimization', 'Warehouse Automation', 'Real-time Tracking'],
            color: 'from-electric to-cyan',
            gradient: 'bg-gradient-to-br from-electric to-cyan',
            stats: '30% Cost Reduction',
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop',
        },
        {
            id: 4,
            icon: GraduationCap,
            title: 'Education',
            description: 'Revolutionize learning with digital platforms that enhance student engagement and outcomes.',
            features: ['LMS Platforms', 'E-learning Apps', 'Student Management', 'Virtual Classrooms'],
            color: 'from-gold to-electric',
            gradient: 'bg-gradient-to-br from-gold to-electric',
            stats: '45% Learning Improvement',
            image: '/education.png',
        },
        {
            id: 5,
            icon: CreditCard,
            title: 'Fintech',
            description: 'Secure, scalable financial solutions for modern banking and investment platforms.',
            features: ['Payment Gateways', 'Digital Banking', 'Investment Platforms', 'Fraud Detection'],
            color: 'from-cyan to-electric',
            gradient: 'bg-gradient-to-br from-cyan to-electric',
            stats: '99.99% Uptime',
            image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop',
        },
        {
            id: 6,
            icon: Factory,
            title: 'Manufacturing',
            description: 'Smart factory solutions with IoT, automation, and real-time production monitoring.',
            features: ['IoT Integration', 'Production Monitoring', 'Quality Control', 'Supply Chain Mgmt'],
            color: 'from-gold to-cyan',
            gradient: 'bg-gradient-to-br from-gold to-cyan',
            stats: '35% Production Increase',
            image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop',
        },
    ];

    const benefits = [
        {
            icon: Shield,
            title: 'Industry Compliance',
            description: 'Adherence to all industry regulations and standards',
        },
        {
            icon: Zap,
            title: 'Rapid Deployment',
            description: 'Quick implementation with minimal disruption',
        },
        {
            icon: TrendingUp,
            title: 'Proven Results',
            description: 'Track record of delivering measurable outcomes',
        },
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

    //   const itemVariants = {
    //     hidden: { y: 50, opacity: 0 },
    //     visible: {
    //       y: 0,
    //       opacity: 1,
    //       transition: {
    //         type: 'spring',
    //         stiffness: 100,
    //         damping: 15,
    //       },
    //     },
    //   };

    const cardVariants: Variants = {
        hidden: {
            scale: 0.8,
            opacity: 0,
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        },
        hover: {
            y: -20,
            scale: 1.02,
            transition: {
                duration: 0.3,
            },
        },
    };

    const floatAnimation: TargetAndTransition = {
        y: [0, -10, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
        },
    };

    const shimmerAnimation = {
        backgroundPosition: ['0% 0%', '100% 100%'],
        transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse' as const,
        },
    };

    return (
        <section id="industries" className="section-padding bg-navy-800/30 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric/5 rounded-full blur-3xl"
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
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
                        className="inline-flex items-center space-x-2 mb-4 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/20"
                    >
                        <Sparkles className="text-cyan" size={16} />
                        <span className="text-cyan text-sm font-medium">Industries We Serve</span>
                    </motion.div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        <span className="text-white">Transforming </span>
                        <span className="bg-gradient-to-r from-gold via-cyan to-electric bg-clip-text text-transparent">
                            Industries
                        </span>
                        <br />
                        <span className="text-white">Through Innovative Solutions</span>
                    </h2>

                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        We deliver tailored software solutions that address unique industry challenges
                        and drive digital transformation across diverse sectors.
                    </p>
                </motion.div>

                {/* Industries Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
                >
                    {industries.map((industry) => (
                        <motion.div
                            key={industry.id}
                            variants={cardVariants}
                            whileHover="hover"
                            className="group relative"
                        >
                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 to-electric/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative glass-card overflow-hidden rounded-3xl h-full">
                                {/* Image Section */}
                                <div className="relative h-48 overflow-hidden">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                        className="w-full h-full"
                                    >
                                        <img
                                            src={industry.image}
                                            alt={industry.title}
                                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent"></div>
                                    </motion.div>

                                    {/* Floating Icon */}
                                    <motion.div
                                        animate={floatAnimation}
                                        className={`absolute -bottom-6 -right-6 w-20 h-20 rounded-2xl ${industry.gradient} flex items-center justify-center shadow-lg`}
                                    >
                                        <industry.icon className="text-navy-900" size={32} />
                                    </motion.div>

                                    {/* Stats Badge */}
                                    <motion.div
                                        initial={{ x: -20, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                        className="absolute top-4 left-4"
                                    >
                                        <div className="bg-navy-900/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
                                            <span className="text-sm font-medium text-cyan">{industry.stats}</span>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Content Section */}
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan transition-colors">
                                                {industry.title}
                                            </h3>
                                            <p className="text-gray-400">{industry.description}</p>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="space-y-2 mb-6">
                                        {industry.features.slice(0, 2).map((feature, idx) => (
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
                                                <span className="text-gray-300 text-sm">{feature}</span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Learn More Button */}
                                    <motion.button
                                        whileHover={{ x: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center space-x-2 text-cyan font-semibold group"
                                    >
                                        {/* <span>Learn More</span> */}
                                        {/* <ChevronRight className="transform group-hover:translate-x-2 transition-transform" /> */}
                                    </motion.button>
                                </div>

                                {/* Animated Border */}
                                <motion.div
                                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan to-electric"
                                    initial={{ width: "0%" }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Industry Benefits */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
                        Why <span className="text-cyan">Industry Leaders</span> Choose Us
                    </h3>

                    <div className="grid md:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="glass-card p-6 rounded-2xl relative group"
                            >
                                <motion.div
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                    className={`w-16 h-16 rounded-2xl ${index === 0 ? 'bg-gradient-to-br from-gold to-cyan' : index === 1 ? 'bg-gradient-to-br from-cyan to-electric' : 'bg-gradient-to-br from-electric to-cyan'} flex items-center justify-center mb-4`}
                                >
                                    <benefit.icon className="text-navy-900" size={28} />
                                </motion.div>

                                <h4 className="text-xl font-bold text-white mb-3">{benefit.title}</h4>
                                <p className="text-gray-400">{benefit.description}</p>

                                {/* Animated Dots */}
                                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="flex space-x-1">
                                        {[1, 2, 3].map((i) => (
                                            <motion.div
                                                key={i}
                                                animate={{ scale: [1, 1.5, 1] }}
                                                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                                                className="w-1.5 h-1.5 bg-cyan rounded-full"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Statistics */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="glass-card rounded-3xl p-8 mb-12"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { value: '15+', label: 'Industries Served', color: 'from-cyan to-electric' },
                            { value: '200+', label: 'Industry Projects', color: 'from-gold to-cyan' },
                            { value: '98%', label: 'Client Retention', color: 'from-electric to-cyan' },
                            { value: '50+', label: 'Industry Experts', color: 'from-gold to-electric' },
                        ].map((stat, idx) => (
                            <motion.div
                                key={stat.label}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ delay: idx * 0.1, type: 'spring' }}
                                className="text-center"
                            >
                                <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                                    {stat.value}
                                </div>
                                <div className="text-gray-400 text-sm">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-3xl"
                >
                    <motion.div
                        animate={shimmerAnimation}
                        className="absolute inset-0 bg-gradient-to-r from-cyan/20 via-gold/10 to-electric/20"
                    />

                    <div className="relative glass-card p-8 md:p-12">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-4">
                                    Ready to Transform Your Industry?
                                </h3>
                                <p className="text-gray-400 mb-6">
                                    Join leading companies across 15+ industries that trust us with their digital transformation.
                                </p>

                                <div className="space-y-3">
                                    {[
                                        'Customized solutions for your industry',
                                        'Proven track record with sector leaders',
                                        'Compliance with industry regulations',
                                        'Dedicated industry specialists'
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
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => {
                                        if ((window as any).openContactPopup) {
                                            (window as any).openContactPopup();
                                        } else {
                                            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                    className="px-8 py-4 bg-gradient-to-r from-gold to-cyan text-navy-900 font-bold rounded-lg flex items-center justify-center space-x-3 mx-auto shadow-lg shadow-gold/20"
                                >
                                    <span>Schedule Industry Consultation</span>
                                    <ChevronRight size={20} />
                                </motion.button>

                                <p className="text-gray-400 text-sm mt-4">
                                    Free 30-minute consultation • Industry-specific insights • No obligation
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Additional Industries (Horizontal Scroll on Mobile) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    <h4 className="text-xl font-bold text-white mb-6 text-center">
                        More Industries We Serve
                    </h4>

                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            { icon: ShoppingBag, label: 'Retail & E-commerce' },
                            { icon: Plane, label: 'Travel & Hospitality' },
                            { icon: CreditCard, label: 'Banking & Finance' },
                            { icon: Building2, label: 'Construction' },
                            { icon: Truck, label: 'Transportation' },
                            { icon: Factory, label: 'Energy & Utilities' },
                        ].map((industry, idx) => (
                            <motion.div
                                key={industry.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center space-x-2 px-4 py-2 rounded-full bg-navy-800/50 border border-white/10 hover:border-cyan/30 transition-colors"
                            >
                                <industry.icon className="text-cyan" size={16} />
                                <span className="text-gray-300 text-sm">{industry.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default IndustriesWeServe;