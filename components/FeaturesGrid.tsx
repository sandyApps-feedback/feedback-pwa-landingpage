'use client';

import React from 'react';
import {
    MessageSquare,
    UserCog,
    ShieldCheck,
    Award,
    Send,
    Palette
} from 'lucide-react';
import { CardSpotlight } from './CardSpotlight';

export const FeaturesGrid = () => {
    const features = [
        {
            icon: <MessageSquare />,
            title: 'Smart Feedback Collection',
            desc: 'Create customizable surveys and forms to gather meaningful insights from your students and participants.',
        },
        {
            icon: <UserCog />,
            title: 'Multi-role Management ',
            desc: 'Seamlessly manage admins, instructors, and students with role-based access control. ',
        },
        {
            icon: <ShieldCheck />,
            title: 'Secure & Private ',
            desc: 'Enterprise-grade security ensures your feedback data remains confidential and protected. ',
        },
        {
            icon: <Award />,
            title: '60-Second Certificate Creation',
            desc: 'The online certificate maker eliminates design work completely. Pick a template, add your details, done. What used to take hours now takes seconds. ',
        },
        {
            icon: <Send />,
            title: 'Auto-Send to Recipients ',
            desc: 'The online certificate maker emails certificates automatically. One click sends personalized certificates to everyone, with tracking to see who opened theirs. ',
        },
        {
            icon: <Palette />,
            title: 'Your Brand, Your Design ',
            desc: 'The online certificate maker lets you customize everything. Add your logo, choose colors, upload custom backgrounds. Make certificates that actually look like yours. ',
        },
    ];

    return (
        <section
            id='features'
            className='py-32 relative bg-background overflow-hidden'
        >
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                <div className='flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-10'>
                    <div className='max-w-2xl'>
                        <h2 className='text-4xl font-light text-foreground mb-4'>
                            Powerful Features
                        </h2>
                        <p className='text-muted text-lg font-light'>
                            Everything you need to collect, analyze, and act on feedback
                        </p>
                    </div>
                    <div className='hidden md:block'>
                        <button className='text-foreground text-sm border-b border-accent pb-1 hover:opacity-80 transition-opacity'>
                            View Full Feature List
                        </button>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {features.map((f, i) => (
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
