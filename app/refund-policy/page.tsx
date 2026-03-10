'use client';

import React from 'react';
import Link from 'next/link';
import { RotateCcw, Shield, FileText, Scale, CreditCard, AlertTriangle, Clock, CheckCircle2 } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function RefundPolicy() {
    return (
        <div className='font-sans text-foreground antialiased bg-background selection:bg-accent/30 selection:text-accent min-h-screen'>
            <Navbar />

            {/* Hero Section */}
            <section className='pt-32 pb-16 relative overflow-hidden'>
                <div className='absolute top-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none'></div>
                <div className='absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none'></div>
                <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center'>
                    <div className='inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-secondary/20 bg-secondary/5 backdrop-blur-md'>
                        <RotateCcw size={14} className='text-secondary' />
                        <span className='text-secondary text-xs font-bold tracking-[0.2em] uppercase'>
                            Refund & Cancellation
                        </span>
                    </div>
                    <h1 className='text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight'>
                        Refund{' '}
                        <span className='bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary'>
                            Policy
                        </span>
                    </h1>
                    <p className='text-muted text-lg font-light'>
                        Last updated: March 10, 2026
                    </p>
                </div>
            </section>

            {/* Key Highlights */}
            <section className='pb-12'>
                <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                        <div className='rounded-2xl border border-white/10 bg-surface/60 backdrop-blur-xl p-6 text-center'>
                            <Clock size={28} className='text-primary mx-auto mb-3' />
                            <h3 className='text-foreground font-semibold mb-1'>14-Day Free Trial</h3>
                            <p className='text-muted text-sm'>No credit card required</p>
                        </div>
                        <div className='rounded-2xl border border-white/10 bg-surface/60 backdrop-blur-xl p-6 text-center'>
                            <RotateCcw size={28} className='text-secondary mx-auto mb-3' />
                            <h3 className='text-foreground font-semibold mb-1'>7-Day Refund Window</h3>
                            <p className='text-muted text-sm'>Full refund for new subscribers</p>
                        </div>
                        <div className='rounded-2xl border border-white/10 bg-surface/60 backdrop-blur-xl p-6 text-center'>
                            <CheckCircle2 size={28} className='text-accent mx-auto mb-3' />
                            <h3 className='text-foreground font-semibold mb-1'>Cancel Anytime</h3>
                            <p className='text-muted text-sm'>No cancellation fees</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className='pb-32'>
                <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='space-y-12 text-muted font-light leading-relaxed'>

                        {/* Introduction */}
                        <div className='rounded-2xl border border-secondary/20 bg-secondary/5 p-6 md:p-8'>
                            <div className='flex items-start gap-3'>
                                <CreditCard size={24} className='text-secondary flex-shrink-0 mt-1' />
                                <div>
                                    <h3 className='text-foreground font-semibold mb-2'>Our Fair Refund Commitment</h3>
                                    <p className='text-sm'>
                                        At sandyApps, we want you to be completely satisfied with our SAPP platform. This Refund Policy outlines the conditions under which you may receive a refund for your subscription payment. We believe in transparency and fairness, which is why we provide a free trial so you can evaluate the Service before committing financially.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Section 1 */}
                        <div>
                            <h2 className='text-2xl font-bold text-foreground mb-4 flex items-center gap-3'>
                                <span className='text-primary font-mono text-sm'>01</span>
                                Free Trial Period
                            </h2>
                            <div className='space-y-4 pl-8 border-l-2 border-white/10'>
                                <p>
                                    We offer a <strong className='text-foreground'>14-day free trial</strong> with full access to all features of the platform. The free trial:
                                </p>
                                <ul className='list-disc pl-6 space-y-2'>
                                    <li>Does <strong className='text-foreground'>not</strong> require a credit card or any payment information to start.</li>
                                    <li>Provides access to all features available under the Professional plan, including unlimited events, certificate generation, advanced analytics, and priority support.</li>
                                    <li>Automatically converts to the free Starter plan at the end of the trial period if no paid plan is selected.</li>
                                    <li>Cannot be extended, restarted, or transferred to another account.</li>
                                </ul>
                                <p>
                                    We strongly encourage you to fully evaluate the platform during the free trial period to ensure it meets your needs before subscribing to a paid plan.
                                </p>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div>
                            <h2 className='text-2xl font-bold text-foreground mb-4 flex items-center gap-3'>
                                <span className='text-primary font-mono text-sm'>02</span>
                                Subscription Cancellation
                            </h2>
                            <div className='space-y-4 pl-8 border-l-2 border-white/10'>
                                <h3 className='text-lg font-semibold text-foreground'>2.1 How to Cancel</h3>
                                <p>You may cancel your subscription at any time by:</p>
                                <ul className='list-disc pl-6 space-y-2'>
                                    <li>Navigating to your account settings and selecting the cancellation option.</li>
                                    <li>Contacting our support team at{' '}
                                        <a href='mailto:info@sandyapps.co' className='text-primary hover:underline'>info@sandyapps.co</a>.
                                    </li>
                                    <li>Calling us at{' '}
                                        <a href='tel:+923253430005' className='text-primary hover:underline'>+92 325 343 0005</a>{' '}
                                        during business hours.
                                    </li>
                                </ul>

                                <h3 className='text-lg font-semibold text-foreground mt-6'>2.2 Effect of Cancellation</h3>
                                <ul className='list-disc pl-6 space-y-2'>
                                    <li>There are <strong className='text-foreground'>no cancellation fees</strong>.</li>
                                    <li>Upon cancellation, your paid subscription will remain active until the end of the current billing period (monthly or annual).</li>
                                    <li>After the billing period ends, your account will automatically revert to the Starter (Free) plan.</li>
                                    <li>You will retain access to all your data on the free plan; however, features exclusive to the paid plan will no longer be available.</li>
                                    <li>Certificates previously generated and distributed will remain valid and verifiable, even after cancellation.</li>
                                </ul>

                                <h3 className='text-lg font-semibold text-foreground mt-6'>2.3 Data After Cancellation</h3>
                                <p>
                                    Upon downgrade to the free plan, all your existing data (feedback responses, certificates, event records, analytics) will be preserved and accessible within the limitations of the Starter plan. If you wish to export your data before or after cancellation, you may do so through the data export feature in your account settings, or by contacting our support team.
                                </p>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div>
                            <h2 className='text-2xl font-bold text-foreground mb-4 flex items-center gap-3'>
                                <span className='text-primary font-mono text-sm'>03</span>
                                <RotateCcw size={22} className='text-primary' />
                                Refund Eligibility
                            </h2>
                            <div className='space-y-4 pl-8 border-l-2 border-white/10'>
                                <h3 className='text-lg font-semibold text-foreground'>3.1 Full Refund — 7-Day Window</h3>
                                <p>
                                    If you are a <strong className='text-foreground'>new subscriber</strong> (first-time paid subscription), you are eligible for a <strong className='text-foreground'>full refund</strong> if you request it within <strong className='text-foreground'>7 calendar days</strong> of your initial paid subscription purchase date, provided:
                                </p>
                                <ul className='list-disc pl-6 space-y-2'>
                                    <li>It is your first paid subscription with SAPP.</li>
                                    <li>You have not previously received a refund for any SAPP subscription.</li>
                                    <li>The refund request is submitted in writing to{' '}
                                        <a href='mailto:info@sandyapps.co' className='text-primary hover:underline'>info@sandyapps.co</a>{' '}
                                        within the 7-day window.
                                    </li>
                                </ul>

                                <h3 className='text-lg font-semibold text-foreground mt-6'>3.2 Pro-Rata Refund — Service Disruption</h3>
                                <p>
                                    You may be eligible for a <strong className='text-foreground'>pro-rata refund</strong> (calculated proportionally for the unused portion of your billing period) if:
                                </p>
                                <ul className='list-disc pl-6 space-y-2'>
                                    <li>The Service experiences a material, extended outage (more than 72 consecutive hours) directly caused by us and not resulting from force majeure events.</li>
                                    <li>We materially reduce the features or functionality of your paid plan without prior reasonable notice and without providing an equivalent alternative.</li>
                                    <li>Your account is terminated by us without cause (i.e., not due to a violation of our Terms and Conditions).</li>
                                </ul>

                                <h3 className='text-lg font-semibold text-foreground mt-6'>3.3 Discretionary Refunds</h3>
                                <p>
                                    In exceptional circumstances, we may, at our sole discretion, offer a partial or full refund outside of the above eligibility criteria. These are evaluated on a case-by-case basis and may include situations such as:
                                </p>
                                <ul className='list-disc pl-6 space-y-2'>
                                    <li>Duplicate or erroneous charges.</li>
                                    <li>Significant and verifiable technical issues that prevented use of core features despite our reasonable efforts to resolve them.</li>
                                    <li>Documented billing errors on our part.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 4 */}
                        <div>
                            <h2 className='text-2xl font-bold text-foreground mb-4 flex items-center gap-3'>
                                <span className='text-primary font-mono text-sm'>04</span>
                                <AlertTriangle size={22} className='text-primary' />
                                Non-Refundable Situations
                            </h2>
                            <div className='space-y-4 pl-8 border-l-2 border-white/10'>
                                <p>Refunds are <strong className='text-foreground'>not</strong> available in the following circumstances:</p>
                                <ul className='list-disc pl-6 space-y-2'>
                                    <li><strong className='text-foreground'>After the 7-Day Window:</strong> Refund requests for new subscriptions made after the 7-day window from the initial purchase date.</li>
                                    <li><strong className='text-foreground'>Renewal Charges:</strong> Recurring subscription renewal charges (monthly or annual). It is your responsibility to cancel your subscription before the renewal date if you do not wish to continue.</li>
                                    <li><strong className='text-foreground'>Change of Mind:</strong> Simply deciding you no longer need the Service after the 7-day refund window.</li>
                                    <li><strong className='text-foreground'>Terms Violation:</strong> If your account was suspended or terminated due to a violation of our Terms and Conditions.</li>
                                    <li><strong className='text-foreground'>Free Plan Downgrade:</strong> Users on the free Starter plan are not eligible for refunds, as no payment has been made.</li>
                                    <li><strong className='text-foreground'>Partial Month/Year Usage:</strong> If you cancel mid-billing cycle, you are not entitled to a refund for the remaining period — your access will continue until the end of the billing cycle.</li>
                                    <li><strong className='text-foreground'>Enterprise Custom Plans:</strong> Refunds for Enterprise plans are governed by the individual Enterprise agreement signed between the parties. The terms in this policy apply only to Starter and Professional plans unless otherwise stated.</li>
                                    <li><strong className='text-foreground'>Third-Party Issues:</strong> Service disruptions caused by third-party services, internet connectivity issues, or factors outside our control.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 5 */}
                        <div>
                            <h2 className='text-2xl font-bold text-foreground mb-4 flex items-center gap-3'>
                                <span className='text-primary font-mono text-sm'>05</span>
                                How to Request a Refund
                            </h2>
                            <div className='space-y-4 pl-8 border-l-2 border-white/10'>
                                <p>To request a refund, please follow these steps:</p>

                                <div className='space-y-6'>
                                    {[
                                        {
                                            step: '1',
                                            title: 'Submit Your Request',
                                            desc: 'Send an email to info@sandyapps.co with the subject line "Refund Request — [Your Account Email]". Include your full name, registered email address, subscription plan, purchase date, and reason for the refund request.'
                                        },
                                        {
                                            step: '2',
                                            title: 'Verification',
                                            desc: 'Our team will verify your identity, review your account details, and assess your eligibility based on the criteria outlined in this policy.'
                                        },
                                        {
                                            step: '3',
                                            title: 'Processing',
                                            desc: 'If approved, refunds will be processed within 10 business days to your original payment method. Processing times may vary depending on your bank or payment provider.'
                                        },
                                        {
                                            step: '4',
                                            title: 'Confirmation',
                                            desc: 'You will receive an email confirmation once the refund has been processed, along with a reference number for your records.'
                                        }
                                    ].map((item) => (
                                        <div key={item.step} className='flex gap-4'>
                                            <div className='w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 flex items-center justify-center flex-shrink-0'>
                                                <span className='text-primary text-sm font-bold'>{item.step}</span>
                                            </div>
                                            <div>
                                                <h4 className='text-foreground font-semibold mb-1'>{item.title}</h4>
                                                <p className='text-sm'>{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Section 6 */}
                        <div>
                            <h2 className='text-2xl font-bold text-foreground mb-4 flex items-center gap-3'>
                                <span className='text-primary font-mono text-sm'>06</span>
                                Refund Processing
                            </h2>
                            <div className='space-y-4 pl-8 border-l-2 border-white/10'>
                                <ul className='list-disc pl-6 space-y-2'>
                                    <li>Approved refunds are processed within <strong className='text-foreground'>10 business days</strong> of approval.</li>
                                    <li>Refunds are issued to the <strong className='text-foreground'>original payment method</strong> used for the purchase.</li>
                                    <li>Depending on your bank or payment provider, it may take an additional <strong className='text-foreground'>5–15 business days</strong> for the refund to appear in your account statement.</li>
                                    <li>Refunds are issued in <strong className='text-foreground'>United States Dollars (USD)</strong>. Currency conversion differences between the original payment and the refund are the responsibility of your bank and are beyond our control.</li>
                                    <li>Any payment processing fees charged by third-party payment processors at the time of the original transaction may be <strong className='text-foreground'>non-refundable</strong> and may be deducted from the refund amount.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 7 */}
                        <div>
                            <h2 className='text-2xl font-bold text-foreground mb-4 flex items-center gap-3'>
                                <span className='text-primary font-mono text-sm'>07</span>
                                Plan Upgrades & Downgrades
                            </h2>
                            <div className='space-y-4 pl-8 border-l-2 border-white/10'>
                                <h3 className='text-lg font-semibold text-foreground'>7.1 Upgrades</h3>
                                <p>
                                    If you upgrade from a lower-tier plan to a higher-tier plan mid-billing cycle, you will be charged the pro-rata difference for the remainder of the current billing period. The new plan rate applies from the next full billing cycle.
                                </p>

                                <h3 className='text-lg font-semibold text-foreground mt-6'>7.2 Downgrades</h3>
                                <p>
                                    If you downgrade from a higher-tier plan to a lower-tier plan, the downgrade will take effect at the beginning of your next billing cycle. No refund or credit will be issued for the remainder of the current billing period at the higher rate. You will continue to have access to the higher-tier features until the end of the current billing period.
                                </p>
                            </div>
                        </div>

                        {/* Section 8 */}
                        <div>
                            <h2 className='text-2xl font-bold text-foreground mb-4 flex items-center gap-3'>
                                <span className='text-primary font-mono text-sm'>08</span>
                                Chargebacks & Disputes
                            </h2>
                            <div className='space-y-4 pl-8 border-l-2 border-white/10'>
                                <p>
                                    We encourage you to contact us directly at{' '}
                                    <a href='mailto:info@sandyapps.co' className='text-primary hover:underline'>info@sandyapps.co</a>{' '}
                                    before initiating a chargeback or payment dispute with your bank or credit card company. We are committed to resolving billing issues promptly and fairly.
                                </p>
                                <p>
                                    If you initiate a chargeback without first attempting to resolve the issue with us:
                                </p>
                                <ul className='list-disc pl-6 space-y-2'>
                                    <li>We reserve the right to suspend or terminate your account pending the resolution of the dispute.</li>
                                    <li>We will provide all necessary documentation to your bank to dispute the chargeback if we believe the charge was legitimate.</li>
                                    <li>If a chargeback is resolved in our favor, we may charge you any fees incurred by us as a result of the chargeback process.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 9 */}
                        <div>
                            <h2 className='text-2xl font-bold text-foreground mb-4 flex items-center gap-3'>
                                <span className='text-primary font-mono text-sm'>09</span>
                                Consumer Protection Rights
                            </h2>
                            <div className='space-y-4 pl-8 border-l-2 border-white/10'>
                                <p>
                                    This Refund Policy does not affect your statutory rights under applicable consumer protection laws. Depending on your jurisdiction, you may have additional rights:
                                </p>
                                <ul className='list-disc pl-6 space-y-2'>
                                    <li><strong className='text-foreground'>European Union (EU):</strong> Under the EU Consumer Rights Directive, you have a 14-day right of withdrawal from the date of purchase for digital services. However, if you have given explicit prior consent to begin the service and acknowledged that you thereby lose your right of withdrawal, this right may not apply. We honor the 14-day withdrawal right for EU consumers regardless, subject to the conditions stated in Section 3.</li>
                                    <li><strong className='text-foreground'>United Kingdom (UK):</strong> Under the Consumer Rights Act 2015, you have the right to receive services that are performed with reasonable care and skill, fit for purpose, and as described. If the Service does not meet these standards, you may be entitled to a refund or price reduction.</li>
                                    <li><strong className='text-foreground'>Australia:</strong> Under the Australian Consumer Law, you have certain rights and guarantees that cannot be excluded, restricted, or modified by agreement. Nothing in this policy limits those rights.</li>
                                    <li><strong className='text-foreground'>United States:</strong> Consumer protection rights vary by state. Where state law provides greater consumer protections than outlined in this policy, those protections will apply.</li>
                                    <li><strong className='text-foreground'>Pakistan:</strong> This policy complies with Pakistan&apos;s consumer protection laws. Nothing in this policy shall be construed to override any rights granted under applicable Pakistani law.</li>
                                    <li><strong className='text-foreground'>Other Jurisdictions:</strong> If your local consumer protection law entitles you to refund rights that are more favourable than those described in this policy, the more favourable terms shall apply.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 10 */}
                        <div>
                            <h2 className='text-2xl font-bold text-foreground mb-4 flex items-center gap-3'>
                                <span className='text-primary font-mono text-sm'>10</span>
                                Changes to This Policy
                            </h2>
                            <div className='space-y-4 pl-8 border-l-2 border-white/10'>
                                <p>
                                    We reserve the right to modify this Refund Policy at any time. Changes will be effective upon posting the updated policy on the Service. Material changes will be communicated to existing subscribers at least <strong className='text-foreground'>30 days</strong> before they take effect. The version of the Refund Policy in effect at the time of your purchase shall apply to that transaction.
                                </p>
                            </div>
                        </div>

                        {/* Contact Section */}
                        <div className='rounded-2xl border border-white/10 bg-surface/60 backdrop-blur-xl p-6 md:p-8'>
                            <h2 className='text-2xl font-bold text-foreground mb-4'>Contact Us About Refunds</h2>
                            <p className='mb-4'>
                                If you have any questions or concerns about this Refund Policy or need to request a refund, please contact us:
                            </p>
                            <ul className='space-y-2'>
                                <li><strong className='text-foreground'>Company:</strong> sandyApps</li>
                                <li><strong className='text-foreground'>Email:</strong>{' '}
                                    <a href='mailto:info@sandyapps.co' className='text-primary hover:underline'>info@sandyapps.co</a>
                                </li>
                                <li><strong className='text-foreground'>Address:</strong> 264 C Usama Road, Upper Mall, Lahore, Pakistan</li>
                                <li><strong className='text-foreground'>Phone:</strong>{' '}
                                    <a href='tel:+923253430005' className='text-primary hover:underline'>+92 325 343 0005</a>
                                </li>
                                <li><strong className='text-foreground'>Business Hours:</strong> Monday to Friday, 9:00 AM – 6:00 PM (PKT, UTC+5)</li>
                            </ul>
                        </div>

                        {/* Related Policies */}
                        <div className='flex flex-col sm:flex-row gap-4'>
                            <Link
                                href='/term-conditions'
                                className='flex-1 rounded-2xl border border-white/10 bg-surface/60 backdrop-blur-xl p-6 hover:border-primary/30 transition-all group'
                            >
                                <FileText size={24} className='text-primary mb-3' />
                                <h3 className='text-foreground font-semibold mb-1 group-hover:text-primary transition-colors'>Terms & Conditions</h3>
                                <p className='text-sm'>Read our full terms of service.</p>
                            </Link>
                            <Link
                                href='/privacy-policy'
                                className='flex-1 rounded-2xl border border-white/10 bg-surface/60 backdrop-blur-xl p-6 hover:border-accent/30 transition-all group'
                            >
                                <Shield size={24} className='text-accent mb-3' />
                                <h3 className='text-foreground font-semibold mb-1 group-hover:text-accent transition-colors'>Privacy Policy</h3>
                                <p className='text-sm'>Learn how we collect and protect your data.</p>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
