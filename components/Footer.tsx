'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Linkedin, Mail } from 'lucide-react';
import { FOOTER_CONTENT } from '../constants/landing-page/footer';
import { EmailLink } from './EmailLink';

export const Footer = () => {
    return (
        <footer className='bg-background border-t border-border pt-20 pb-10'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col md:flex-row justify-between items-start mb-16'>
                    <div className='mb-10 md:mb-0'>
                        <span className='text-2xl font-bold text-foreground tracking-tighter'>
                            {FOOTER_CONTENT.brand.name}
                        </span>
                        <p className='text-muted mt-4 max-w-xs font-light mb-4'>
                            {FOOTER_CONTENT.brand.description}
                        </p>
                        <div className='inline-flex items-center gap-2 text-muted hover:text-primary transition-colors text-sm font-medium'>
                            <Mail size={16} />
                            <EmailLink email="support@feedbackcert.com" className="hover:underline" />
                        </div>
                    </div>
                    <div className='flex gap-16 flex-wrap'>
                        <div>
                            <h4 className='text-foreground font-bold mb-6 text-xs uppercase tracking-widest'>
                                {FOOTER_CONTENT.sections[0].title}
                            </h4>
                            <ul className='space-y-3 text-sm text-muted font-light'>
                                {FOOTER_CONTENT.sections[0].links.map((l) => (
                                    <li key={l.name}>
                                        <a
                                            href={`/#${(l as { name: string; targetId: string }).targetId}`}
                                            onClick={(e) => {
                                                const element = document.getElementById((l as { name: string; targetId: string }).targetId as string);
                                                if (element) {
                                                    e.preventDefault();
                                                    element.scrollIntoView({ behavior: 'smooth' });
                                                }
                                            }}
                                            className='hover:text-foreground transition-colors'
                                        >
                                            {l.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className='text-foreground font-bold mb-6 text-xs uppercase tracking-widest'>
                                {FOOTER_CONTENT.sections[1].title}
                            </h4>
                            <ul className='space-y-3 text-sm text-muted font-light'>
                                {FOOTER_CONTENT.sections[1].links.map((l) => (
                                    <li key={l.name}>
                                        <Link href={(l as { name: string; href: string }).href as string} className='hover:text-foreground transition-colors'>
                                            {l.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center'>
                    <p className='text-muted/60 text-xs font-mono'>
                        {FOOTER_CONTENT.copyright}
                    </p>
                    <div className='flex space-x-6 mt-4 md:mt-0'>
                        {FOOTER_CONTENT.socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-muted/60 hover:text-foreground transition-colors'
                                aria-label={social.name}
                            >
                                {social.name === 'FaceBook' && <Facebook size={20} />}
                                {social.name === 'LinkedIn' && <Linkedin size={20} />}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};
