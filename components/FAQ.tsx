'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQ_CONTENT } from '../constants/landing-page/faq';

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = FAQ_CONTENT.faqs;
    return (
        <section className='py-32 relative bg-gradient-to-b from-surface to-background overflow-hidden'>
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
            <div className='absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none'></div>
            <div className='absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none'></div>

            <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className='text-center mb-16'
                >
                    <div className='inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md'>
                        <HelpCircle size={14} className='text-primary' />
                        <span className='text-primary text-xs font-bold tracking-[0.2em] uppercase'>
                            {FAQ_CONTENT.header.badgeText}
                        </span>
                    </div>
                    <h2 className='text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight'>
                        {FAQ_CONTENT.header.titlePrefix} <br />
                        <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
                            {FAQ_CONTENT.header.titleHighlight}
                        </span>
                    </h2>
                    <p className='text-muted text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed'>
                        {FAQ_CONTENT.header.description}
                    </p>
                </motion.div>

                {/* Category Filter (Optional - can be uncommented if needed) */}
                {/* <div className='flex flex-wrap justify-center gap-3 mb-12'>
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            className='px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-gray-400 text-sm hover:bg-white/[0.05] hover:text-white transition-all'
                        >
                            {category.name} <span className='text-gray-600'>({category.count})</span>
                        </button>
                    ))}
                </div> */}

                {/* FAQ Accordion */}
                <div className='space-y-4'>
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className='group'
                        >
                            <div className='rounded-2xl border border-white/10 bg-surface/60 backdrop-blur-xl overflow-hidden hover:border-white/20 transition-all duration-300'>
                                {/* Question Header */}
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className='w-full flex items-center justify-between p-6 md:p-8 text-left transition-all'
                                >
                                    <div className='flex items-start gap-4 flex-1'>
                                        <div className='w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 flex items-center justify-center flex-shrink-0 mt-1'>
                                            <span className='text-primary text-sm font-bold'>
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                        </div>
                                        <h3 className='text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors pr-4'>
                                            {faq.question}
                                        </h3>
                                    </div>
                                    <div className='flex-shrink-0 ml-4'>
                                        <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-primary border-primary' : 'bg-white/5'
                                            }`}>
                                            {openIndex === index ? (
                                                <Minus size={20} className='text-white' />
                                            ) : (
                                                <Plus size={20} className='text-muted' />
                                            )}
                                        </div>
                                    </div>
                                </button>

                                {/* Answer Content */}
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                            className='overflow-hidden'
                                        >
                                            <div className='px-6 md:px-8 pb-6 md:pb-8 pt-0'>
                                                <div className='pl-12 border-l-2 border-primary/20'>
                                                    <p className='text-muted font-light leading-relaxed text-base md:text-lg'>
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Contact Support CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className='mt-16 text-center'
                >
                    <div className='rounded-2xl border border-white/10 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-xl p-8 md:p-12'>
                        <MessageCircle className='w-12 h-12 text-primary mx-auto mb-6' />
                        <h3 className='text-2xl md:text-3xl font-bold text-foreground mb-4'>
                            {FAQ_CONTENT.supportCta.title}
                        </h3>
                        <p className='text-muted mb-8 max-w-xl mx-auto font-light'>
                            {FAQ_CONTENT.supportCta.description}
                        </p>
                        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                            <button
                                onClick={() => document.getElementById(FAQ_CONTENT.supportCta.targetId)?.scrollIntoView({ behavior: 'smooth' })}
                                className='group relative px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/50 overflow-hidden cursor-pointer'
                            >
                                <span className='relative z-10'>{FAQ_CONTENT.supportCta.buttonText}</span>
                                <div className='absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                            </button>

                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
