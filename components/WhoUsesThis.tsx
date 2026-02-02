'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    GraduationCap,
    Building2,
    Users2
} from 'lucide-react';

export const WhoUsesThis = () => {
    const userTypes = [
        {
            icon: <GraduationCap />,
            title: 'Educational Institutions',
            description: 'Universities and schools use the online certificate maker for graduations, course completions, and academic achievements. Handle thousands of students effortlessly. ',
            stats: '10K+ Certificates',
            gradient: 'from-[#00ACC1] to-[#0097A7]'
        },
        {
            icon: <Building2 />,
            title: 'Corporate Training',
            description: 'HR departments rely on our online certificate maker for compliance training, onboarding programs, and professional development certifications. ',
            stats: '5K+ Companies',
            gradient: 'from-[#F59E0B] to-[#F97316]'
        },
        {
            icon: <Users2 />,
            title: 'Event Organizers',
            description: 'Conference and workshop hosts use the online certificate maker for attendance certificates, speaker recognition, and participation awards.',
            stats: '2K+ Events',
            gradient: 'from-[#8B5CF6] to-[#7C3AED]'
        },

    ];

    return (
        <section className='py-32 relative bg-gradient-to-b from-[#050505] to-[#0a0a0a] overflow-hidden'>
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
            <div className='absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00ACC1]/5 rounded-full blur-[120px] pointer-events-none'></div>
            <div className='absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#F59E0B]/5 rounded-full blur-[100px] pointer-events-none'></div>

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className='text-center mb-20'
                >
                    <div className='inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[#00ACC1]/20 bg-[#00ACC1]/5 backdrop-blur-md'>
                        <span className='text-[#00ACC1] text-xs font-bold tracking-[0.2em] uppercase'>
                            Trusted Worldwide
                        </span>
                    </div>
                    <h2 className='text-4xl md:text-6xl font-bold text-white mb-6 leading-tight'>
                        Who Uses This Online <br />
                        <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#00ACC1] to-[#F59E0B]'>
                            Certificate Maker?
                        </span>
                    </h2>
                    <p className='text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed'>
                        Organizations of all sizes need an online certificate maker that actually works.
                    </p>
                </motion.div>

                {/* User Type Cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {userTypes.map((user, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className='group relative'
                        >
                            {/* Card */}
                            <div className='relative h-full rounded-2xl border border-white/10 bg-[#0F1216]/60 backdrop-blur-xl p-8 hover:border-white/20 transition-all duration-500 overflow-hidden'>
                                {/* Gradient Overlay on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${user.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                                {/* Icon */}
                                <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${user.gradient} p-[1px] mb-6`}>
                                    <div className='w-full h-full rounded-xl bg-[#0F1216] flex items-center justify-center text-white'>
                                        {React.isValidElement(user.icon) && React.cloneElement(user.icon as React.ReactElement<{ size?: number; strokeWidth?: number }>, { size: 28, strokeWidth: 1.5 })}
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className='text-2xl font-semibold text-white mb-4 group-hover:text-[#00ACC1] transition-colors'>
                                    {user.title}
                                </h3>
                                <p className='text-gray-400 font-light leading-relaxed mb-6 group-hover:text-gray-300 transition-colors'>
                                    {user.description}
                                </p>

                                {/* Stats Badge */}
                                <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10'>
                                    <div className='w-2 h-2 rounded-full bg-[#00ACC1] animate-pulse'></div>
                                    <span className='text-sm font-medium text-gray-300'>{user.stats}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className='text-center mt-20'
                >
                    <p className='text-gray-400 mb-6 text-lg'>
                        Join thousands of organizations already using our platform
                    </p>
                    <a
                        href='https://sapp.feedbackcert.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='group relative px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 overflow-hidden cursor-pointer inline-flex items-center gap-2'
                    >
                        <span className='relative z-10 flex items-center gap-2'>
                            Get Started Free
                            <svg className='w-5 h-5 transition-transform group-hover:translate-x-1' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                            </svg>
                        </span>
                        <div className='absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
