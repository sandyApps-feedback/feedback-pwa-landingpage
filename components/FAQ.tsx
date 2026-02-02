'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: 'How does the feedback collection system work? ',
            answer: 'Our platform allows you to create customizable surveys and forms using our intuitive builder. You can distribute them via email, links, or embed them directly on your website. Responses are collected in real-time and automatically analyzed with our powerful analytics dashboard.'
        },
        {
            question: 'Can I customize the certificates for my institution?',
            answer: 'Yes! You have full control over certificate design. You can add your institutions logo, customize colors, modify text templates, and even create multiple certificate templates for different events or courses.Certificates are automatically generated and can be downloaded as PDFs. '
        },
        {
            question: 'What types of feedback forms can I create? ',
            answer: 'You can create various types of forms including event feedback surveys, course evaluations, instructor assessments, student satisfaction surveys, and custom questionnaires. Our form builder supports multiple question types: multiple choice, rating scales, text responses, checkboxes, and more. '
        },
        {
            question: 'Is my data secure and private? ',
            answer: 'Absolutely. We use enterprise-grade encryption for all data transmission and storage. Your feedback data is stored securely and is only accessible to authorized users in your institution .'
        },
        {
            question: 'How do I manage different user roles? ',
            answer: 'Our platform supports three main roles: Admins (full system access), Instructors (can create and view their own events/surveys), and Students/Users (can provide feedback and view their certificates). You can easily assign roles and permissions through the admin dashboard.'
        },
        {
            question: 'Can I export feedback data and reports? ',
            answer: 'Yes! You can export all feedback data in multiple formats including CSV, Excel, and PDF. Our analytics dashboard also allows you to generate detailed reports with charts and graphs that can be downloaded or shared with stakeholders .'
        },
        {
            question: 'What kind of support do you offer?',
            answer: 'We provide 24/7 customer support via email and chat. Our comprehensive documentation and video tutorials help you get started quickly. Premium plans include dedicated account managers and priority support with faster response times. '
        },
        {
            question: 'Is there a free trial available? ',
            answer: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required to start. You can explore the platform, create surveys, collect feedback, and generate certificates. After the trial, you can choose a plan that fits your institutions needs. '
        }
    ];

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
                            Got Questions?
                        </span>
                    </div>
                    <h2 className='text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight'>
                        Frequently Asked <br />
                        <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
                            Questions
                        </span>
                    </h2>
                    <p className='text-muted text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed'>
                        Find answers to common questions about our feedback platform.
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
                            Still have questions?
                        </h3>
                        <p className='text-muted mb-8 max-w-xl mx-auto font-light'>
                            Our support team is here to help. Get in touch and we&apos;ll respond within 24 hours.
                        </p>
                        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                            <button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className='group relative px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/50 overflow-hidden cursor-pointer'
                            >
                                <span className='relative z-10'>Contact Support</span>
                                <div className='absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                            </button>

                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
