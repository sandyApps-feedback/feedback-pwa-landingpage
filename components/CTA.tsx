'use client';

import React from 'react';
import { CTA_CONTENT } from '../constants/landing-page/cta';

export const CTA = () => {
    return (
        <section className='py-32 relative overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-b from-background to-surface' />
            <div className='absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-30'></div>
            <div className='max-w-4xl mx-auto px-4 text-center relative z-10'>
                <h2 className='text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tighter'>
                    {CTA_CONTENT.title}
                </h2>
                <p className='text-xl text-muted mb-12 font-light'>
                    {CTA_CONTENT.description}
                </p>
                <a
                    href={CTA_CONTENT.button.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group relative inline-block px-10 py-5 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/50 overflow-hidden cursor-pointer'
                >
                    <span className='relative z-10'>{CTA_CONTENT.button.text}</span>
                    <div className='absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                </a>
            </div>
        </section>
    );
};
