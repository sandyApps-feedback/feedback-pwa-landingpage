'use client';

import React from 'react';

export const CTA = () => {
    return (
        <section className='py-32 relative overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-b from-background to-surface' />
            <div className='absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-30'></div>
            <div className='max-w-4xl mx-auto px-4 text-center relative z-10'>
                <h2 className='text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tighter'>
                    Ready to Transform Your Feedback Process?
                </h2>
                <p className='text-xl text-muted mb-12 font-light'>
                    Join hundreds of institutions already using our platform.
                </p>
                <button
                    className='group relative px-10 py-5 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/50 overflow-hidden cursor-pointer'
                    onClick={() => {
                        window.open('https://sapp.feedbackcert.com/', '_blank');
                    }}
                >
                    <span className='relative z-10'>Start Your Free Trial / Sign In</span>
                    <div className='absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                </button>
            </div>
        </section>
    );
};
