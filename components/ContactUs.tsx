'use client';

import React, { useState } from 'react';

export const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Send form data to Web3Forms API
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: '8bcb9e32-7017-4eda-a891-25f5c134f2f4', // Web3Forms access key
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: `New Contact Form Submission from ${formData.name}`,
                    from_name: 'Feedback PWA Landing Page',
                    to_email: 'arehman.sandyapps@gmail.com'
                })
            });

            const result = await response.json();

            if (result.success) {
                setIsSubmitting(false);
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });

                // Reset success message after 5 seconds
                setTimeout(() => setSubmitStatus('idle'), 5000);
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setIsSubmitting(false);
            setSubmitStatus('error');

            // Reset error message after 5 seconds
            setTimeout(() => setSubmitStatus('idle'), 5000);
        }
    };

    return (
        <section id='contact' className='py-24 relative overflow-hidden bg-gradient-to-b from-surface to-background'>
            {/* Decorative Elements */}
            <div className='absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent' />
            <div className='absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-secondary/30 to-transparent' />

            {/* Gradient Orbs */}
            <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl' />
            <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl' />

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
                    {/* Left Side - Content */}
                    <div>
                        <div className='inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6'>
                            <span className='text-primary text-sm font-semibold tracking-wider uppercase'>
                                Get in Touch
                            </span>
                        </div>

                        <h2 className='text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight leading-tight'>
                            Let&apos;s Start a
                            <span className='block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent'>
                                Conversation
                            </span>
                        </h2>

                        <p className='text-xl text-muted mb-8 font-light leading-relaxed'>
                            Have questions about our platform? Want to see a demo? Our team is here to help you transform your feedback process.
                        </p>

                        {/* Contact Info */}
                        <div className='space-y-6'>
                            <div className='flex items-start gap-4 group'>
                                <div className='w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                                    <svg className='w-6 h-6 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className='text-foreground font-semibold mb-1'>Email Us</h3>
                                    <p className='text-muted text-sm'>info@sandyapps.co</p>
                                </div>
                            </div>

                            <div className='flex items-start gap-4 group'>
                                <div className='w-12 h-12 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center group-hover:bg-secondary/20 transition-colors'>
                                    <svg className='w-6 h-6 text-secondary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className='text-foreground font-semibold mb-1'>Visit Us</h3>
                                    <p className='text-muted text-sm'>264 C Usama Road, Upper Mall Lahore </p>
                                </div>
                            </div>

                            <div className='flex items-start gap-4 group'>
                                <div className='w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                                    <svg className='w-6 h-6 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className='text-foreground font-semibold mb-1'>Call Us</h3>
                                    <p className='text-muted text-sm'>+92 325 343 0005</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className='bg-surface/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 lg:p-10 shadow-2xl'>
                        <form onSubmit={handleSubmit} className='space-y-6'>
                            <div>
                                <label htmlFor='name' className='block text-sm font-medium text-muted mb-2 tracking-wide'>
                                    Full Name
                                </label>
                                <input
                                    type='text'
                                    id='name'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className='w-full px-4 py-3.5 bg-surface border border-white/10 rounded-lg text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300 hover:bg-white/[0.07]'
                                    placeholder='John Doe'
                                />
                            </div>

                            <div>
                                <label htmlFor='email' className='block text-sm font-medium text-muted mb-2 tracking-wide'>
                                    Email Address
                                </label>
                                <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className='w-full px-4 py-3.5 bg-surface border border-white/10 rounded-lg text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300 hover:bg-white/[0.07]'
                                    placeholder='john@example.com'
                                />
                            </div>

                            <div>
                                <label htmlFor='message' className='block text-sm font-medium text-muted mb-2 tracking-wide'>
                                    Message
                                </label>
                                <textarea
                                    id='message'
                                    name='message'
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={5}
                                    className='w-full px-4 py-3.5 bg-surface border border-white/10 rounded-lg text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300 hover:bg-white/[0.07] resize-none'
                                    placeholder='Tell us about your needs...'
                                />
                            </div>

                            <button
                                type='submit'
                                disabled={isSubmitting}
                                className='w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-lg shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 relative overflow-hidden group cursor-pointer'
                            >
                                <span className='relative z-10 flex items-center justify-center gap-2'>
                                    {isSubmitting ? (
                                        <>
                                            <svg className='animate-spin h-5 w-5' viewBox='0 0 24 24'>
                                                <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' fill='none' />
                                                <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z' />
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <svg className='w-5 h-5 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14 5l7 7m0 0l-7 7m7-7H3' />
                                            </svg>
                                        </>
                                    )}
                                </span>
                                <div className='absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                            </button>

                            {submitStatus === 'success' && (
                                <div className='p-4 bg-green-500/10 border border-green-500/20 rounded-lg'>
                                    <p className='text-green-400 text-sm font-medium flex items-center gap-2'>
                                        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                                            <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                                        </svg>
                                        Message sent successfully! We&apos;ll get back to you soon.
                                    </p>
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className='p-4 bg-red-500/10 border border-red-500/20 rounded-lg'>
                                    <p className='text-red-400 text-sm font-medium flex items-center gap-2'>
                                        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                                            <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z' clipRule='evenodd' />
                                        </svg>
                                        Something went wrong. Please try again.
                                    </p>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
