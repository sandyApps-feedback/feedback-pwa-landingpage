'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        const element = document.getElementById(id);
        if (element) {
            e.preventDefault();
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${scrolled
                ? 'bg-background/80 border-border backdrop-blur-xl py-3'
                : 'bg-transparent border-transparent py-6'
                }`}
        >
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center'>
                    <div
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className='flex-shrink-0 flex items-center gap-3 cursor-pointer group'
                    >
                        <div className='relative w-10 h-10 flex items-center justify-center'>
                            <div className='absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-80 blur-[2px]'></div>
                            <div className='absolute inset-0 bg-surface border border-white/10 rounded-xl flex items-center justify-center z-10'>
                                <span className='font-serif italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-foreground to-primary'>
                                    S
                                </span>
                            </div>
                        </div>
                        <span className='text-xl font-bold tracking-tight text-white group-hover:tracking-wide transition-all duration-500'>
                            SAPP
                        </span>
                    </div>
                    <div className='hidden md:flex space-x-10 items-center'>
                        {['Features', 'Showcase', 'Pricing', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`/#${item.toLowerCase()}`}
                                onClick={(e) => scrollToSection(e, item.toLowerCase())}
                                className='text-sm font-medium text-muted hover:text-foreground transition-colors tracking-wide'
                            >
                                {item}
                            </a>
                        ))}
                        <button
                            onClick={() => {
                                window.open('https://sapp.feedbackcert.com/', '_blank');
                            }}
                            className='relative px-6 py-2.5 overflow-hidden rounded-full group bg-white/5 border border-white/10 hover:border-accent/50 transition-colors cursor-pointer'
                        >
                            <span className='absolute inset-0 w-full h-full bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></span>
                            <span className='relative text-sm font-medium text-foreground group-hover:text-accent transition-colors'>
                                Get Started
                            </span>
                        </button>
                    </div>
                    <div className='md:hidden'>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className='text-foreground p-2'
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className='md:hidden bg-background border-b border-border overflow-hidden backdrop-blur-xl'
                    >
                        <div className='px-4 pt-4 pb-8 space-y-2'>
                            {['Features', 'Showcase', 'Pricing', 'Contact'].map(
                                (item) => (
                                    <a
                                        key={item}
                                        href={`/#${item.toLowerCase()}`}
                                        onClick={(e) => {
                                            setIsOpen(false);
                                            scrollToSection(e, item.toLowerCase());
                                        }}
                                        className='block px-4 py-3 text-base font-medium text-muted hover:bg-white/5 rounded-lg hover:text-foreground transition-colors'
                                    >
                                        {item}
                                    </a>
                                )
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
