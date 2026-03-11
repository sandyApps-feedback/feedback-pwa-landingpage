'use client';

import React from 'react';

import { FEATURES_CONTENT } from '../constants/landing-page/features';
import { CardSpotlight } from './CardSpotlight';

    export const FeaturesGrid = () => {
    return (
        <section
            id='features'
            className='py-32 relative bg-background overflow-hidden'
        >
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                <div className='flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-10'>
                    <div className='max-w-2xl'>
                        <h2 className='text-4xl font-light text-foreground mb-4'>
                            {FEATURES_CONTENT.header.title}
                        </h2>
                        <p className='text-muted text-lg font-light'>
                            {FEATURES_CONTENT.header.description}
                        </p>
                    </div>
                    <div className='hidden md:block'>
                        <button onClick={() => document.getElementById(FEATURES_CONTENT.cta.targetId)?.scrollIntoView({ behavior: 'smooth' })} className='text-foreground text-sm border-b border-accent pb-1 hover:opacity-80 transition-opacity cursor-pointer'>
                            {FEATURES_CONTENT.cta.text}
                        </button>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {FEATURES_CONTENT.features.map((f, i) => (
                        <CardSpotlight
                            key={i}
                            className='rounded-2xl p-8 hover:border-white/20 transition-colors'
                        >
                            <div className='w-12 h-12 rounded-lg bg-surface border border-white/10 flex items-center justify-center mb-8 text-foreground group-hover:bg-primary group-hover:border-primary transition-all duration-500'>
                                {React.isValidElement(f.icon) && React.cloneElement(f.icon as React.ReactElement<{ size?: number; strokeWidth?: number }>, { size: 24, strokeWidth: 1.5 })}
                            </div>
                            <h3 className='text-xl font-medium text-foreground mb-4'>{f.title}</h3>
                            <p className='text-muted font-light leading-relaxed group-hover:text-gray-300 transition-colors'>
                                {f.desc}
                            </p>
                        </CardSpotlight>
                    ))}
                </div>
            </div>
        </section>
    );
};
