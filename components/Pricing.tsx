'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Star } from 'lucide-react';
import { PRICING_CONTENT } from '../constants/landing-page/pricing';

export const Pricing = () => {
    const [isAnnual, setIsAnnual] = React.useState(false);

    return (
        <section
            id='pricing'
            className='py-32 bg-[#050505] relative overflow-hidden'
        >
            {/* Background radial gradient */}
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-white/[0.01] rounded-full blur-[100px] pointer-events-none'></div>

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                <div className='text-center mb-12'>
                    <h2 className='text-4xl font-light text-white mb-6'>{PRICING_CONTENT.header.title}</h2>
                    <p className='text-gray-400 font-light text-lg mb-10'>
                        {PRICING_CONTENT.header.description}
                    </p>
                    <div className='flex items-center justify-center gap-3'>
                        <span className={`text-sm ${!isAnnual ? 'text-white font-medium' : 'text-gray-400'}`}>{PRICING_CONTENT.toggle.monthly}</span>
                        <button 
                            onClick={() => setIsAnnual(!isAnnual)}
                            className='relative inline-flex h-6 w-11 items-center rounded-full bg-white/10 transition-colors focus:outline-none hover:bg-white/20'
                        >
                            <span 
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isAnnual ? 'translate-x-6 bg-purple-400' : 'translate-x-1'}`} 
                            />
                        </button>
                        <span className={`text-sm ${isAnnual ? 'text-white font-medium' : 'text-gray-400'}`}>
                            {PRICING_CONTENT.toggle.annual} <span className='text-purple-400 text-xs ml-1'>{PRICING_CONTENT.toggle.discountLabel}</span>
                        </span>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-center'>
                    {/* Free Tier */}
                    <div className='p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors'>
                        <h3 className='text-lg font-medium text-gray-300'>{PRICING_CONTENT.tiers[0].name}</h3>
                        <div className='my-6'>
                            <span className='text-4xl font-bold text-white'>${PRICING_CONTENT.tiers[0].monthlyPrice}</span>
                        </div>
                        <ul className='space-y-4 mb-10'>
                            {PRICING_CONTENT.tiers[0].features.map(
                                (feat, i) => (
                                    <li
                                        key={i}
                                        className='flex items-center text-gray-500 text-sm'
                                    >
                                        <CheckCircle2 size={16} className='text-gray-700 mr-3' />{' '}
                                        {feat}
                                    </li>
                                )
                            )}
                        </ul>
                        <a href={PRICING_CONTENT.tiers[0].ctaLink} target='_blank' rel='noopener noreferrer' className='group relative block text-center w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold tracking-wide hover:scale-[1.02] transition-all shadow-lg hover:shadow-purple-500/50 overflow-hidden cursor-pointer'>
                            <span className='relative z-10'>{PRICING_CONTENT.tiers[0].ctaText}</span>
                            <div className='absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                        </a>
                    </div>

                    {/* Growth Tier - $19/mo */}
                    <div className='p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors relative overflow-hidden'>
                        <h3 className='text-lg font-medium text-gray-300'>{PRICING_CONTENT.tiers[1].name}</h3>
                        <div className='my-6 h-[60px] flex items-end'>
                            <span className='text-4xl font-bold text-white'>${isAnnual ? PRICING_CONTENT.tiers[1].annualPrice : PRICING_CONTENT.tiers[1].monthlyPrice}</span>
                            <span className='text-gray-500 text-sm ml-2 mb-1'>{PRICING_CONTENT.tiers[1].billingSuffix}<br/><span className='text-xs opacity-70'>{isAnnual ? 'billed annually' : 'billed monthly'}</span></span>
                        </div>
                        <p className='text-sm text-purple-400/80 mb-8 font-medium'>
                            {PRICING_CONTENT.tiers[1].subtitle}
                        </p>
                        <ul className='space-y-4 mb-10'>
                            {PRICING_CONTENT.tiers[1].features.map((feat, i) => (
                                <li
                                    key={i}
                                    className='flex items-center text-gray-400 text-sm font-light'
                                >
                                    <CheckCircle2 size={16} className='text-purple-500 mr-3' />{' '}
                                    {feat}
                                </li>
                            ))}
                        </ul>
                        <a href={PRICING_CONTENT.tiers[1].ctaLink} target='_blank' rel='noopener noreferrer' className='group relative block text-center w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold tracking-wide hover:scale-[1.02] transition-all shadow-lg hover:shadow-purple-500/50 overflow-hidden cursor-pointer'>
                            <span className='relative z-10'>{PRICING_CONTENT.tiers[1].ctaText}</span>
                            <div className='absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                        </a>
                    </div>

                    {/* Pro Tier - The "Black Card" Look */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className='relative p-8 rounded-3xl border border-[#F59E0B]/30 bg-gradient-to-b from-[#0F1216] to-[#000] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] z-10 overflow-hidden group'
                    >
                        <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent opacity-50'></div>
                        <div className='absolute top-0 right-0 p-4'>
                            <Star className='text-[#F59E0B] fill-[#F59E0B]' size={20} />
                        </div>

                        <h3 className='text-lg font-medium text-white'>{PRICING_CONTENT.tiers[2].name}</h3>
                        <div className='my-6 h-[60px] flex items-end'>
                            <span className='text-5xl font-bold text-white tracking-tight'>
                                ${isAnnual ? PRICING_CONTENT.tiers[2].annualPrice : PRICING_CONTENT.tiers[2].monthlyPrice}
                            </span>
                            <span className='text-gray-500 text-sm ml-2 mb-2'>{PRICING_CONTENT.tiers[2].billingSuffix}<br/><span className='text-xs opacity-70'>{isAnnual ? 'billed annually' : 'billed monthly'}</span></span>
                        </div>
                        <p className='text-sm text-[#F59E0B]/80 mb-8 font-medium'>
                            {PRICING_CONTENT.tiers[2].subtitle}
                        </p>
                        <ul className='space-y-5 mb-10'>
                            {PRICING_CONTENT.tiers[2].features.map((feat, i) => (
                                <li
                                    key={i}
                                    className='flex items-center text-gray-300 text-sm font-light'
                                >
                                    <CheckCircle2 size={16} className='text-[#F59E0B] mr-3' />{' '}
                                    {feat}
                                </li>
                            ))}
                        </ul>
                        <a href={PRICING_CONTENT.tiers[2].ctaLink} target='_blank' rel='noopener noreferrer' className='group relative block text-center w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold tracking-wide hover:scale-[1.02] transition-all shadow-lg hover:shadow-purple-500/50 overflow-hidden cursor-pointer'>
                            <span className='relative z-10'>{PRICING_CONTENT.tiers[2].ctaText}</span>
                            <div className='absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                        </a>
                    </motion.div>

                    {/* Enterprise Tier */}
                    <div className='p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors'>
                        <h3 className='text-lg font-medium text-gray-300'>{PRICING_CONTENT.tiers[3].name}</h3>
                        <div className='my-6'>
                            <span className='text-4xl font-bold text-white'>{PRICING_CONTENT.tiers[3].monthlyPrice}</span>
                        </div>
                        <ul className='space-y-4 mb-10'>
                            {PRICING_CONTENT.tiers[3].features.map((feat, i) => (
                                <li key={i} className='flex items-center text-gray-500 text-sm'>
                                    <CheckCircle2 size={16} className='text-gray-700 mr-3' />{' '}
                                    {feat}
                                </li>
                            ))}
                        </ul>
                        <button onClick={() => document.getElementById(PRICING_CONTENT.tiers[3].ctaTarget as string)?.scrollIntoView({ behavior: 'smooth' })} className='group relative w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold tracking-wide hover:scale-[1.02] transition-all shadow-lg hover:shadow-purple-500/50 overflow-hidden cursor-pointer'>
                            <span className='relative z-10'>{PRICING_CONTENT.tiers[3].ctaText}</span>
                            <div className='absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
