'use client';

import React from 'react';

export const Footer = () => {
    return (
        <footer className='bg-background border-t border-border pt-20 pb-10'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col md:flex-row justify-between items-start mb-16'>
                    <div className='mb-10 md:mb-0'>
                        <span className='text-2xl font-bold text-foreground tracking-tighter'>
                            SAPP
                        </span>
                        <p className='text-muted mt-4 max-w-xs font-light'>
                            Setting the standard for educational event intelligence and
                            credentialing.
                        </p>
                    </div>
                    <div className='flex gap-16 flex-wrap'>
                        <div>
                            <h4 className='text-foreground font-bold mb-6 text-xs uppercase tracking-widest'>
                                Platform
                            </h4>
                            <ul className='space-y-3 text-sm text-muted font-light'>
                                {['Features', 'Pricing', 'Contact'].map((l) => (
                                    <li key={l}>
                                        <a
                                            href={`#${l.toLowerCase()}`}
                                            onClick={(e) => {
                                                const id = l.toLowerCase();
                                                const element = document.getElementById(id);
                                                if (element) {
                                                    e.preventDefault();
                                                    element.scrollIntoView({ behavior: 'smooth' });
                                                }
                                            }}
                                            className='hover:text-foreground transition-colors'
                                        >
                                            {l}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center'>
                    <p className='text-muted/60 text-xs font-mono'>
                        © 2026 SAPP INC. ALL RIGHTS RESERVED.
                    </p>
                    <div className='flex space-x-6 mt-4 md:mt-0'>
                        {[
                            { name: 'FaceBook', url: 'https://www.facebook.com/sandyappsco' },
                            { name: 'LinkedIn', url: 'https://pk.linkedin.com/company/sandyapps' }
                        ].map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-muted/60 hover:text-foreground transition-colors text-xs uppercase tracking-wider'
                            >
                                {social.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};
