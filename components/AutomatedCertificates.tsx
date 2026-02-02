'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Zap,
    Mail,
    Clock,
    CheckCircle2,
    Database,
    BarChart3,
    Shield
} from 'lucide-react';

export const AutomatedCertificates = () => {

    const automationFeatures = [
        {
            icon: <Zap />,
            title: 'Instant Generation',
            description: 'Certificates are created automatically upon course completion or event attendance.',
            color: '#F59E0B'
        },
        {
            icon: <Mail />,
            title: 'Smart Email Delivery',
            description: 'Personalized certificates sent directly to recipients with custom messaging.',
            color: '#00ACC1'
        },
        {
            icon: <Database />,
            title: 'Bulk Processing',
            description: 'Generate thousands of certificates simultaneously with CSV upload.',
            color: '#8B5CF6'
        },
        {
            icon: <CheckCircle2 />,
            title: 'Auto-Verification',
            description: 'Each certificate gets a unique verification code for authenticity checks.',
            color: '#10B981'
        }
    ];

    const workflowSteps = [
        {
            step: '01',
            title: 'Design Your Template',
            description: 'Choose from professional templates or create your own with our drag-and-drop editor.',
            icon: <BarChart3 />
        },
        {
            step: '02',
            title: 'Connect Your Data',
            description: 'Upload recipient lists via CSV, integrate with your LMS, or use our API.',
            icon: <Database />
        },
        {
            step: '03',
            title: 'Set Automation Rules',
            description: 'Define triggers like course completion, event attendance, or manual approval.',
            icon: <Zap />
        },
        {
            step: '04',
            title: 'Automatic Distribution',
            description: 'Certificates are generated and delivered instantly to all recipients.',
            icon: <Mail />
        }
    ];

    const stats = [
        { value: '2M+', label: 'Certificates Generated', icon: <CheckCircle2 /> },
        { value: '99.9%', label: 'Delivery Success Rate', icon: <Mail /> },
        { value: '<5s', label: 'Average Generation Time', icon: <Clock /> },
        { value: '24/7', label: 'Automated Processing', icon: <Zap /> }
    ];

    return (
        <section className='py-32 relative bg-[#050505] overflow-hidden'>
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
            <div className='absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#F59E0B]/10 rounded-full blur-[150px] pointer-events-none'></div>
            <div className='absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00ACC1]/10 rounded-full blur-[120px] pointer-events-none'></div>

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className='text-center mb-20'
                >

                    <h2 className='text-4xl md:text-6xl font-bold text-white mb-6 leading-tight'>
                        Automated Certificates <br />

                    </h2>
                    <p className='text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed'>
                        Reward participants with beautiful, professionally designed certificates upon completing feedback surveys. Boost engagement and show appreciation automatically.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20'>
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className='relative group'
                        >
                            <div className='rounded-2xl border border-white/10 bg-[#0F1216]/60 backdrop-blur-xl p-6 hover:border-[#F59E0B]/30 transition-all duration-300'>
                                <div className='flex items-center gap-3 mb-4'>
                                    <div className='text-[#F59E0B]'>
                                        {React.isValidElement(stat.icon) && React.cloneElement(stat.icon as React.ReactElement<{ size?: number }>, { size: 20 })}
                                    </div>
                                </div>
                                <div className='text-3xl md:text-4xl font-bold text-white mb-2'>{stat.value}</div>
                                <div className='text-sm text-gray-400 font-light'>{stat.label}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Automation Features */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20'>
                    {/* Left: Features List */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className='space-y-6'
                    >
                        <h3 className='text-3xl font-bold text-white mb-8'>
                            Powerful Automation Features
                        </h3>
                        {automationFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className='flex gap-4 p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 group cursor-pointer'
                            >
                                <div
                                    className='w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0'
                                    style={{ backgroundColor: `${feature.color}15` }}
                                >
                                    <div style={{ color: feature.color }}>
                                        {React.isValidElement(feature.icon) && React.cloneElement(feature.icon as React.ReactElement<{ size?: number }>, { size: 24 })}
                                    </div>
                                </div>
                                <div>
                                    <h4 className='text-xl font-semibold text-white mb-2 group-hover:text-[#F59E0B] transition-colors'>
                                        {feature.title}
                                    </h4>
                                    <p className='text-gray-400 font-light leading-relaxed'>
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Right: Visual Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className='relative'
                    >
                        <div className='rounded-2xl border border-white/10 bg-gradient-to-br from-[#0F1216] to-[#1a1a1a] p-8 backdrop-blur-xl overflow-hidden'>
                            {/* Animated Certificate Preview */}
                            <div className='relative aspect-[4/3] rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 overflow-hidden'>
                                {/* Certificate Template */}
                                <div className='absolute inset-0 flex flex-col items-center justify-center p-8'>
                                    <div className='w-16 h-16 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#F97316] mb-4 flex items-center justify-center'>
                                        <Shield className='text-white' size={32} />
                                    </div>
                                    <div className='text-center space-y-3'>
                                        <div className='h-2 w-48 bg-white/20 rounded mx-auto'></div>
                                        <div className='h-8 w-64 bg-gradient-to-r from-[#F59E0B]/30 to-[#00ACC1]/30 rounded mx-auto'></div>
                                        <div className='h-2 w-40 bg-white/20 rounded mx-auto'></div>
                                    </div>
                                </div>

                                {/* Floating Animation Elements */}
                                <motion.div
                                    animate={{
                                        y: [0, -10, 0],
                                        opacity: [0.5, 1, 0.5]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: 'easeInOut'
                                    }}
                                    className='absolute top-4 right-4 px-3 py-1 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 text-[#10B981] text-xs font-bold'
                                >
                                    ✓ Verified
                                </motion.div>

                                <motion.div
                                    animate={{
                                        scale: [1, 1.1, 1],
                                        opacity: [0.3, 0.6, 0.3]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: 'easeInOut'
                                    }}
                                    className='absolute bottom-4 left-4 px-3 py-1 rounded-full bg-[#F59E0B]/20 border border-[#F59E0B]/40 text-[#F59E0B] text-xs font-bold'
                                >
                                    <Zap size={12} className='inline mr-1' />
                                    Auto-Generated
                                </motion.div>
                            </div>

                            {/* Process Indicator */}
                            <div className='mt-6 flex items-center justify-between text-xs text-gray-500'>
                                <span>Processing...</span>
                                <span className='text-[#00ACC1]'>100% Complete</span>
                            </div>
                            <div className='mt-2 h-1 bg-white/5 rounded-full overflow-hidden'>
                                <motion.div
                                    initial={{ width: '0%' }}
                                    whileInView={{ width: '100%' }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 2, ease: 'easeOut' }}
                                    className='h-full bg-gradient-to-r from-[#F59E0B] to-[#00ACC1]'
                                ></motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Workflow Steps */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className='rounded-2xl border border-white/10 bg-[#0F1216]/60 backdrop-blur-xl p-8 md:p-12'
                >
                    <h3 className='text-3xl font-bold text-white mb-12 text-center'>
                        How Automation Works
                    </h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {workflowSteps.map((step, index) => (
                            <div key={index} className='relative'>
                                {/* Connector Line */}
                                {index < workflowSteps.length - 1 && (
                                    <div className='hidden lg:block absolute top-12 left-[60%] w-full h-[2px] bg-gradient-to-r from-white/20 to-transparent'></div>
                                )}

                                <div className='relative z-10'>
                                    {/* Step Number */}
                                    <div className='w-24 h-24 rounded-full bg-gradient-to-br from-[#F59E0B]/20 to-[#00ACC1]/20 border border-white/10 flex items-center justify-center mb-6 mx-auto'>
                                        <div className='text-white'>
                                            {React.isValidElement(step.icon) && React.cloneElement(step.icon as React.ReactElement<{ size?: number }>, { size: 32 })}
                                        </div>
                                    </div>
                                    <div className='text-center'>
                                        <div className='text-[#F59E0B] font-bold text-sm mb-2'>STEP {step.step}</div>
                                        <h4 className='text-lg font-semibold text-white mb-3'>{step.title}</h4>
                                        <p className='text-gray-400 text-sm font-light leading-relaxed'>{step.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
