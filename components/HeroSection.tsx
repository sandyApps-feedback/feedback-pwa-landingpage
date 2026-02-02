import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const [selectedImage, setSelectedImage] = useState('/images/dashboard-screenshot.png');

    return (
        <section className='relative min-h-screen flex items-center justify-center pt-32 overflow-hidden bg-background'>
            {/* Premium Background Textures */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

            {/* Ambient Glows */}
            <motion.div
                style={{ y: y1 }}
                className='absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/30 rounded-full blur-[120px] pointer-events-none'
            />
            <motion.div
                style={{ y: y2 }}
                className='absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none'
            />
            <div className='absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] pointer-events-none animate-pulse' />

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    {/* <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 'auto', opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className='inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-[#F59E0B]/20 bg-[#F59E0B]/5 backdrop-blur-md overflow-hidden'
                    >
                        <Sparkles size={14} className='text-[#F59E0B]' />
                        <span className='text-[#F59E0B] text-xs font-bold tracking-[0.2em] uppercase'>
                            Premium Access Available
                        </span>
                    </motion.div> */}

                    <h1 className='text-5xl md:text-8xl font-bold tracking-tight text-foreground mb-8 leading-[1.1]'>
                        Transform Feedback <br />
                        <span className='relative whitespace-nowrap'>
                            <span className='relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40'>
                                Into Growth                            </span>
                            <span className='absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent'></span>
                        </span>
                    </h1>

                    <p className='mt-8 text-lg md:text-xl text-muted max-w-2xl mx-auto mb-12 font-light leading-relaxed tracking-wide'>
                        Empower your institution with intelligent feedback collection and analysis. Make data-driven decisions that enhance learning experiences and drive continuous improvement.
                    </p>

                    <div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
                        <a
                            href='https://sapp.feedbackcert.com/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='group relative px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/50 overflow-hidden cursor-pointer inline-flex items-center gap-2'
                        >
                            <span className='relative z-10 flex items-center gap-2'>
                                Start Free Trial
                                <ArrowRight className='w-4 h-4 transition-transform group-hover:translate-x-1' />
                            </span>
                            <div className='absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                        </a>
                        <button
                            onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })}
                            className='px-8 py-4 rounded-full border border-white/10 text-foreground font-medium text-lg hover:bg-white/5 transition-all flex items-center gap-2 cursor-pointer'
                        >
                            View Showcase
                        </button>
                    </div>
                </motion.div>

                {/* Ultra-Premium Dashboard Mockup */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, rotateX: 20 }}
                    animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                    transition={{ delay: 0.4, duration: 1.2, ease: 'easeOut' }}
                    className='mt-24 relative mx-auto max-w-6xl z-20 perspective-1000'
                >
                    {/* Glass Pane Container */}
                    <div className='rounded-2xl border border-white/10 bg-surface/60 backdrop-blur-2xl shadow-2xl overflow-hidden ring-1 ring-white/5'>
                        {/* Window Controls */}
                        <div className='h-12 bg-white/[0.03] border-b border-white/5 flex items-center px-6 justify-between'>
                            <div className='flex space-x-2'>
                                <div className='w-3 h-3 rounded-full bg-[#2a2a2a]' />
                                <div className='w-3 h-3 rounded-full bg-[#2a2a2a]' />
                                <div className='w-3 h-3 rounded-full bg-[#2a2a2a]' />
                            </div>
                            <div className='text-[10px] uppercase tracking-widest text-muted font-bold'>
                                Analytics_View_01
                            </div>
                        </div>

                        <div className='p-8 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 text-left'>
                            {/* Main Metric Card */}
                            <div className='md:col-span-8 space-y-8'>
                                <div className='relative rounded-xl border border-white/5 bg-white overflow-hidden'>
                                    <motion.img
                                        key={selectedImage}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3 }}
                                        src={selectedImage}
                                        alt='Feedback Portal Dashboard'
                                        className='w-full h-auto'
                                    />
                                </div>
                            </div>

                            {/* Sidebar List */}
                            <div className='md:col-span-4 rounded-xl border border-white/5 bg-white/[0.02] p-6'>
                                <p className='text-muted text-xs font-bold tracking-widest uppercase mb-6'>
                                    Recent Activity
                                </p>
                                <div className='space-y-6'>
                                    {[
                                        { name: 'Dashboard', image: '/images/dashboard-screenshot.png' },
                                        { name: 'Events', image: '/images/image.png' },
                                        { name: 'Feedback Forms', image: '/images/image copy.png' },
                                        { name: 'Certificates', image: '/images/image copy 2.png' }
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            onClick={() => setSelectedImage(item.image)}
                                            className={`flex items-center gap-4 group cursor-pointer transition-all ${selectedImage === item.image ? 'scale-105' : ''
                                                }`}
                                        >
                                            <div className={`w-10 h-10 rounded-full bg-gradient-to-tr from-[#222] to-[#333] border flex items-center justify-center text-xs transition-colors ${selectedImage === item.image
                                                ? 'border-accent text-accent'
                                                : 'border-white/10 text-muted group-hover:border-accent/50'
                                                }`}>
                                                {item.name.substring(0, 2).toUpperCase()}
                                            </div>
                                            <div>
                                                <div className={`text-sm font-medium transition-colors ${selectedImage === item.image
                                                    ? 'text-foreground'
                                                    : 'text-muted group-hover:text-foreground'
                                                    }`}>
                                                    {item.name}
                                                </div>
                                                <div className='text-xs text-muted/60'>
                                                    {index + 1} min ago
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Reflection overlay */}
                    <div className='absolute inset-0 bg-gradient-to-tr from-white/[0.05] via-transparent to-transparent pointer-events-none rounded-2xl' />
                </motion.div>
            </div>
        </section>
    );
};
