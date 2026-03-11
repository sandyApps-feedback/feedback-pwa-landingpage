'use client';

import React from 'react';
import Link from 'next/link';
import { FileText, Shield, Scale } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { EmailLink } from '@/components/EmailLink';

export default function TermsAndConditions() {
    return (
        <div className='font-sans text-foreground antialiased bg-background selection:bg-accent/30 selection:text-accent min-h-screen'>
            <Navbar />

            {/* Hero Section */}
            <section className='pt-32 pb-16 relative overflow-hidden'>
                <div className='absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none'></div>
                <div className='absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none'></div>
                <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center'>
                    <div className='inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md'>
                        <FileText size={14} className='text-primary' />
                        <span className='text-primary text-xs font-bold tracking-[0.2em] uppercase'>
                            Legal Document
                        </span>
                    </div>
                    <h1 className='text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight'>
                        Terms &{' '}
                        <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
                            Conditions
                        </span>
                    </h1>
                    <p className='text-muted text-lg font-light'>
                        Last updated: March 10, 2026
                    </p>
                </div>
            </section>

            {/* Quick Navigation */}
            <section className='pb-12'>
                <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='rounded-2xl border border-white/10 bg-surface/60 backdrop-blur-xl p-6 md:p-8'>
                        <div className='flex items-center gap-3 mb-4'>
                            <Scale size={20} className='text-accent' />
                            <h2 className='text-lg font-semibold text-foreground'>Quick Navigation</h2>
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2'>
                            {[
                                'Acceptance of Terms',
                                'Description of Service',
                                'Account Registration',
                                'Subscription & Billing',
                                'User Responsibilities',
                                'Intellectual Property',
                                'Data & Privacy',
                                'Limitation of Liability',
                                'Indemnification',
                                'Termination',
                                'Dispute Resolution',
                                'General Provisions',
                            ].map((item, i) => (
                                <a
                                    key={i}
                                    href={`#section-${i + 1}`}
                                    className='text-sm text-muted hover:text-primary transition-colors py-1'
                                >
                                    {i + 1}. {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className='pb-32'>
                <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='space-y-12 text-muted font-light leading-relaxed'>

                        {/* Introduction */}
                        <div className='rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8'>
                            <div className='flex items-start gap-3'>
                                <Shield size={24} className='text-primary flex-shrink-0 mt-1' />
                                <div>
                                    <h3 className='text-foreground font-semibold mb-2'>Important Notice</h3>
                                    <p className='text-sm'>
                                        Please read these Terms and Conditions (&quot;Terms&quot;, &quot;Terms and Conditions&quot;) carefully before using the SAPP platform
                                        (the &quot;Service&quot;) operated by sandyApps (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By accessing or using our Service,
                                        you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Service.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Section 1 */}
                        <div id='section-1'>
                            <h2 className='text-2xl font-bold text-foreground mb-4 flex items-center gap-3'>
                                <span className='text-primary font-mono text-sm'>01</span>
                                Acceptance of Terms
                            </h2>
                            <div className='space-y-4 pl-8 border-l-2 border-white/10'>
                                <p>
                                    By creating an account, accessing, or using the SAPP platform available at{' '}
                                    <a href='https://sapp.feedbackcert.com' target='_blank' rel='noopener noreferrer' className='text-primary hover:underline'>
                                        sapp.feedbackcert.com
                                    </a>{' '}
                                    (&quot;Platform&quot;), you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, our{' '}
                                    <Link href='/privacy-policy' className='text-primary hover:underline'>Privacy Policy</Link>, and our{' '}
                                    <Link href='/refund-policy' className='text-primary hover:underline'>Refund Policy</Link>, which are incorporated herein by reference.
                                </p>
                                <p>
                                    These Terms apply to all visitors, users, and others who access or use the Service, including but not limited to administrators, instructors, students, event organizers, and any personnel associated with organizations using the Platform.
                                </p>
                                <p>
                                    If you are using the Service on behalf of an organization, you represent and warrant that you have the authority to bind such organization to these Terms, and your acceptance of these Terms will be deemed acceptance on behalf of that organization.
                                </p>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div id='section-2'>
                            <h2 className='text-2xl font-bold text-foreground mb-4 flex items-center gap-3'>
                                <span className='text-primary font-mono text-sm'>02</span>
                                Description of Service
                            </h2>
                            <div className='space-y-4 pl-8 border-l-2 border-white/10'>
                                <p>
                                    SAPP is a Software-as-a-Service (SaaS) platform designed for educational institutions, corporate training programs, event organizers, professional associations, online course creators, and non-profit organizations. The Service provides the following core functionalities:
                                </p>
                                <ul className='list-disc pl-6 space-y-2'>
                                    <li><strong className='text-foreground'>Feedback Collection & Management:</strong> Create customizable surveys, forms, and questionnaires to gather feedback from participants, students, and attendees. Support for multiple question types including multiple choice, rating scales, text responses, and checkboxes.</li>
                                    <li><strong className='text-foreground'>Automated Certificate Generation:</strong> Design, generate, and distribute professional certificates upon completion of courses, events, workshops, or feedback submissions. Includes drag-and-drop template editor, custom branding, and bulk processing capabilities.</li>
                                    <li><strong className='text-foreground'>Certificate Verification:</strong> Each certificate is assigned a unique verification code for authenticity checks by third parties.</li>
                                    <li><strong className='text-foreground'>Email Automation:</strong> Automated distribution of personalized certificates and communications to recipients with delivery tracking.</li>
                                    <li><strong className='text-foreground'>Data Analytics & Intelligence:</strong> Real-time analytics dashboard, sentiment analysis, data export in multiple formats (CSV, Excel, PDF), and comprehensive reporting tools.</li>
                                    <li><strong className='text-foreground'>Multi-Role Management:</strong> Role-based access control for Admins, Instructors, and Students/Users with granular permission settings.</li>
                                    <li><strong className='text-foreground'>Event & Workshop Management:</strong> Tools for organizing, managing, and tracking educational events and workshops.</li>
                                    <li><strong className='text-foreground'>LMS Integration:</strong> Integration capabilities with existing Learning Management Systems via API.</li>
                                </ul>
                                <p>
                                    We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time, with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the Service.
                                </p>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div id='section-3'>
                            <h2 className='text-2xl font-bold text-foreground mb-4 flex items-center gap-3'>
                                <span className='text-primary font-mono text-sm'>03</span>
                                Account Registration & Security
                            </h2>
                            <div className='space-y-4 pl-8 border-l-2 border-white/10'>
                                <p>
                                    To access certain features of the Service, you must register for an account. When registering, you agree to:
                                </p>
                                <ul className='list-disc pl-6 space-y-2'>
                                    <li>Provide accurate, current, and complete information during the registration process.</li>
                                    <li>Maintain and promptly update your account information to keep it accurate, current, and complete.</li>
                                    <li>Maintain the security and confidentiality of your login credentials and not share them with any third party.</li>
                                    <li>Accept all responsibility for activities that occur under your account.</li>
                                    <li>Immediately notify us of any unauthorized use of your account or any other breach of security.</li>
                                </ul>
                                <p>
                                    You must be at least 16 years of age (or the minimum age of digital consent in your jurisdiction, whichever is higher) to create an account. If you are under 18, you must have parental or legal guardian consent to use the Service.
                                </p>
                                <p>
                                    We reserve the right to refuse service, terminate accounts, remove or edit content, or cancel orders at our sole discretion, including but not limited to situations where we believe the account is being used fraudulently, in violation of these Terms, or in any manner that could harm the Service, other users, or third parties.
                                </p>
                            </div>
                        </div>

                        {/* Section 4 */}
                        <div id='section-4'>
                            <h2 className='text-2xl font-bold text-foreground mb-4 flex items-center gap-3'>
                                <span className='text-primary font-mono text-sm'>04</span>
                                Subscription Plans, Billing & Payments
                            </h2>
                            <div className='space-y-4 pl-8 border-l-2 border-white/10'>
                                <h3 className='text-lg font-semibold text-foreground'>4.1 Subscription Plans</h3>
                                <p>The Service is available under the following subscription tiers:</p>
                                <ul className='list-disc pl-6 space-y-2'>
                                    <li><strong className='text-foreground'>Starter (Free):</strong> Includes up to 5 events per month, standard certificate templates, and email support.</li>
                                    <li><strong className='text-foreground'>Growth ($19/month):</strong> Includes up to 25 events per month, custom certificate templates, basic analytics, certificate branding, and email support.</li>
                                    <li><strong className='text-foreground'>Professional ($49/month):</strong> Includes unlimited events, logic jumping, vector-based certificates, deep analytics, and priority support.</li>
                                    <li><strong className='text-foreground'>Enterprise (Custom Pricing):</strong> Includes SSO & SLA, a dedicated success manager, custom integrations, audit logs, and additional enterprise-grade features.</li>
                                </ul>

                                <h3 className='text-lg font-semibold text-foreground mt-6'>4.2 Free Trial</h3>
                                <p>
                                    We offer a 14-day free trial with full access to all features. No credit card is required to start the trial. At the end of the trial period, your account will automatically revert to the Starter (Free) plan unless you choose to subscribe to a paid plan.
                                </p>

                                <h3 className='text-lg font-semibold text-foreground mt-6'>4.3 Billing & Payment</h3>
                                <ul className='list-disc pl-6 space-y-2'>
                                    <li>Paid subscriptions are billed in advance on a monthly or annual basis (as selected at the time of purchase).</li>
                                    <li>All fees are quoted in United States Dollars (USD) unless otherwise specified.</li>
                                    <li>Payments are processed through secure, PCI-compliant third-party payment processors.</li>
                                    <li>You authorize us to charge your designated payment method for all applicable fees.</li>
                                    <li>Sales tax, VAT, GST, or other applicable taxes will be added to the subscription fees where required by law.</li>
                                </ul>

                                <h3 className='text-lg font-semibold text-foreground mt-6'>4.4 Price Changes</h3>
                                <p>
                                    We reserve the right to modify our pricing at any time. Any price changes will be communicated to existing subscribers at least 30 days before the change takes effect. Continued use of the Service after a price change constitutes your acceptance of the new pricing.
                                </p>

                                <h3 className='text-lg font-semibold text-foreground mt-6'>4.5 Auto-Renewal</h3>
                                <p>
                                    All paid subscriptions automatically renew at the end of each billing cycle unless cancelled before the renewal date. You may cancel auto-renewal at any time through your account settings or by contacting our support team.
                                </p>
                            </div>
                        </div>

                        {/* Section 5 */}
                        <div id='section-5'>
                            <h2 className='text-2xl font-bold text-foreground mb-4 flex items-center gap-3'>
                                <span className='text-primary font-mono text-sm'>05</span>
                                User Responsibilities & Acceptable Use
                            </h2>
                            <div className='space-y-4 pl-8 border-l-2 border-white/10'>
                                <p>You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree NOT to:</p>
                                <ul className='list-disc pl-6 space-y-2'>
                                    <li>Use the Service for any purpose that is illegal or prohibited by these Terms or applicable laws.</li>
                                    <li>Upload, distribute, or transmit any content that is defamatory, obscene, abusive, fraudulent, or otherwise objectionable.</li>
                                    <li>Create, distribute, or use certificates for fraudulent, misleading, or deceptive purposes.</li>
                                    <li>Issue certificates that falsely represent academic credentials, professional qualifications, or government-issued certifications unless you are an authorized entity.</li>
                                    <li>Attempt to gain unauthorized access to any portion of the Service, other accounts, computer systems, or networks connected to the Service.</li>
                                    <li>Use the Service to collect, store, or process personal data in violation of applicable data protection laws (including GDPR, CCPA, POPIA, PDPA, or other relevant regulations).</li>
                                    <li>Reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code of the Service.</li>
                                    <li>Use automated tools, bots, scrapers, or similar technologies to access or interact with the Service without our prior written consent.</li>
                                    <li>Interfere with or disrupt the integrity or performance of the Service or the data contained therein.</li>
                                    <li>Resell, redistribute, or sublicense any part of the Service without our explicit written authorization.</li>
                                    <li>Remove, alter, or obscure any proprietary notices, labels, or marks on the Service.</li>
                                    <li>Use the Service to send unsolicited communications, spam, or bulk messages.</li>
                                </ul>
                                <p>
                                    Violation of these restrictions may result in immediate termination of your account and may subject you to civil and/or criminal liability.
                                </p>
                            </div>
                        </div>

                        {/* Section 6 */}
                        <div id='section-6'>
                            <h2 className='text-2xl font-bold text-foreground mb-4 flex items-center gap-3'>
                                <span className='text-primary font-mono text-sm'>06</span>
                                Intellectual Property Rights
                            </h2>
                            <div className='space-y-4 pl-8 border-l-2 border-white/10'>
                                <h3 className='text-lg font-semibold text-foreground'>6.1 Our Intellectual Property</h3>
                                <p>
                                    The Service, including but not limited to its original content, features, functionality, user interface, design elements, graphics, logos, trademarks, software code, algorithms, and documentation, is and remains the exclusive property of sandyApps and its licensors. The Service is protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                                </p>

                                <h3 className='text-lg font-semibold text-foreground mt-6'>6.2 Your Content</h3>
                                <p>
                                    You retain all ownership rights to the content you upload, create, or submit through the Service (&quot;User Content&quot;), including but not limited to feedback data, survey responses, certificate designs, logos, branding materials, and organizational data.
                                </p>
                                <p>
                                    By uploading or submitting User Content to the Service, you grant us a non-exclusive, worldwide, royalty-free, sublicensable license to use, store, process, reproduce, and display your User Content solely for the purpose of providing, maintaining, and improving the Service.
                                </p>

                                <h3 className='text-lg font-semibold text-foreground mt-6'>6.3 Certificate Templates</h3>
                                <p>
                                    Certificate templates provided by SAPP may be used by subscribers for the purpose of creating certificates within the Service. You may not redistribute, resell, or sublicense these templates outside of the Service. Custom certificate designs created by you using our tools remain your intellectual property.
                                </p>

                                <h3 className='text-lg font-semibold text-foreground mt-6'>6.4 Feedback & Suggestions</h3>
                                <p>
                                    Any feedback, suggestions, ideas, or recommendations you provide regarding the Service (&quot;Feedback&quot;) shall become our exclusive property. We shall be free to use, disclose, reproduce, license, or otherwise distribute and exploit the Feedback without restriction or obligation to you.
                                </p>
                            </div>
                        </div>

                        {/* Section 7 */}
                        <div id='section-7'>
                            <h2 className='text-2xl font-bold text-foreground mb-4 flex items-center gap-3'>
                                <span className='text-primary font-mono text-sm'>07</span>
                                Data Protection & Privacy
                            </h2>
                            <div className='space-y-4 pl-8 border-l-2 border-white/10'>
                                <p>
                                    Your privacy is critically important to us. Our collection, use, storage, and disclosure of personal information is governed by our{' '}
                                    <Link href='/privacy-policy' className='text-primary hover:underline'>Privacy Policy</Link>.
                                </p>
                                <p>
                                    By using the Service, you acknowledge and agree that:
                                </p>
                                <ul className='list-disc pl-6 space-y-2'>
                                    <li>We collect and process personal data as described in our Privacy Policy, in compliance with applicable data protection laws including the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), Pakistan&apos;s Personal Data Protection Bill, and other relevant international data protection regulations.</li>
                                    <li>When you upload or submit personal data of third parties (e.g., feedback respondents, certificate recipients), you act as a Data Controller and we act as a Data Processor. You are responsible for ensuring you have obtained all necessary consents and legal bases for processing such data.</li>
                                    <li>We implement industry-standard security measures including encryption in transit and at rest to protect your data. However, no method of electronic transmission or storage is 100% secure.</li>
                                    <li>We will promptly notify you of any confirmed data breach affecting your personal data in accordance with applicable laws.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 8 */}
                        <div id='section-8'>
                            <h2 className='text-2xl font-bold text-foreground mb-4 flex items-center gap-3'>
                                <span className='text-primary font-mono text-sm'>08</span>
                                Limitation of Liability
                            </h2>
                            <div className='space-y-4 pl-8 border-l-2 border-white/10'>
                                <p>
                                    TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:
                                </p>
                                <ul className='list-disc pl-6 space-y-2'>
                                    <li>THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.</li>
                                    <li>WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, OR THAT DEFECTS WILL BE CORRECTED.</li>
                                    <li>IN NO EVENT SHALL SANDYAPPS, ITS DIRECTORS, OFFICERS, EMPLOYEES, AFFILIATES, AGENTS, CONTRACTORS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, GOODWILL, DATA, USE, OR OTHER INTANGIBLE LOSSES.</li>
                                    <li>OUR TOTAL AGGREGATE LIABILITY ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR THE SERVICE SHALL NOT EXCEED THE GREATER OF (A) THE TOTAL AMOUNT PAID BY YOU TO US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR (B) ONE HUNDRED UNITED STATES DOLLARS (USD $100).</li>
                                </ul>
                                <p>
                                    Some jurisdictions do not allow the exclusion or limitation of certain warranties or liabilities. In such jurisdictions, our liability shall be limited to the fullest extent permitted by applicable law. Nothing in these Terms excludes or limits liability for: (a) death or personal injury caused by negligence; (b) fraud or fraudulent misrepresentation; or (c) any liability that cannot be excluded or limited under applicable law.
                                </p>
                            </div>
                        </div>

                        {/* Section 9 */}
                        <div id='section-9'>
                            <h2 className='text-2xl font-bold text-foreground mb-4 flex items-center gap-3'>
                                <span className='text-primary font-mono text-sm'>09</span>
                                Indemnification
                            </h2>
                            <div className='space-y-4 pl-8 border-l-2 border-white/10'>
                                <p>
                                    You agree to defend, indemnify, and hold harmless sandyApps, its officers, directors, employees, agents, affiliates, successors, and assigns from and against any and all claims, damages, obligations, losses, liabilities, costs, debts, and expenses (including but not limited to attorney&apos;s fees) arising from or related to:
                                </p>
                                <ul className='list-disc pl-6 space-y-2'>
                                    <li>Your use of and access to the Service.</li>
                                    <li>Your violation of any provision of these Terms.</li>
                                    <li>Your violation of any third-party rights, including but not limited to intellectual property rights, privacy rights, or data protection rights.</li>
                                    <li>Any content you upload, submit, or transmit through the Service.</li>
                                    <li>Your issuance of certificates that are misleading, fraudulent, or made in violation of applicable laws.</li>
                                    <li>Any claim that your use of the Service caused damage to a third party.</li>
                                </ul>
                                <p>
                                    This indemnification obligation shall survive the termination or expiration of these Terms and your use of the Service.
                                </p>
                            </div>
                        </div>

                        {/* Section 10 */}
                        <div id='section-10'>
                            <h2 className='text-2xl font-bold text-foreground mb-4 flex items-center gap-3'>
                                <span className='text-primary font-mono text-sm'>10</span>
                                Termination
                            </h2>
                            <div className='space-y-4 pl-8 border-l-2 border-white/10'>
                                <h3 className='text-lg font-semibold text-foreground'>10.1 Termination by You</h3>
                                <p>
                                    You may terminate your account at any time by accessing your account settings or by contacting us at{' '}
                                    <EmailLink />.
                                    We offer a 14-day money-back guarantee for new subscriptions. If you are not satisfied, contact <EmailLink /> within 14 days of your first purchase for a full refund. Outside of this 14-day window, if you cancel a paid subscription, the cancellation will take effect at the end of the current billing period, and you will continue to have access to paid features until then.
                                </p>

                                <h3 className='text-lg font-semibold text-foreground mt-6'>10.2 Termination by Us</h3>
                                <p>
                                    We may terminate or suspend your account immediately, without prior notice or liability, for any reason, including but not limited to:
                                </p>
                                <ul className='list-disc pl-6 space-y-2'>
                                    <li>Breach of these Terms.</li>
                                    <li>Engagement in fraudulent, abusive, or illegal activity.</li>
                                    <li>Non-payment of applicable fees.</li>
                                    <li>Requests by law enforcement or government agencies.</li>
                                    <li>Extended periods of inactivity.</li>
                                </ul>

                                <h3 className='text-lg font-semibold text-foreground mt-6'>10.3 Effects of Termination</h3>
                                <p>
                                    Upon termination, your right to use the Service will immediately cease. We may, but are not obligated to, delete your account data following termination. You may request an export of your data prior to account deletion. All provisions of these Terms which by their nature should survive termination shall survive, including but not limited to ownership provisions, warranty disclaimers, indemnification, and limitations of liability.
                                </p>
                            </div>
                        </div>

                        {/* Section 11 */}
                        <div id='section-11'>
                            <h2 className='text-2xl font-bold text-foreground mb-4 flex items-center gap-3'>
                                <span className='text-primary font-mono text-sm'>11</span>
                                Dispute Resolution & Governing Law
                            </h2>
                            <div className='space-y-4 pl-8 border-l-2 border-white/10'>
                                <h3 className='text-lg font-semibold text-foreground'>11.1 Governing Law</h3>
                                <p>
                                    These Terms shall be governed by and construed in accordance with the laws of Pakistan, without regard to its conflict of law principles. For users located in the European Economic Area (EEA), nothing in these Terms shall deprive you of the protection afforded by mandatory provisions of consumer protection law in your country of residence.
                                </p>

                                <h3 className='text-lg font-semibold text-foreground mt-6'>11.2 Informal Resolution</h3>
                                <p>
                                    Before filing a formal dispute, you agree to first attempt to resolve any dispute informally by contacting us at{' '}
                                    <EmailLink />.
                                    We will attempt to resolve the dispute informally within 30 business days.
                                </p>

                                <h3 className='text-lg font-semibold text-foreground mt-6'>11.3 Arbitration</h3>
                                <p>
                                    If the dispute cannot be resolved informally, any controversy or claim arising out of or relating to these Terms shall be settled by binding arbitration administered by a mutually agreed-upon arbitration body, in accordance with its rules and procedures. The arbitration shall be conducted in Lahore, Pakistan, unless otherwise agreed upon by both parties. The arbitrator&apos;s decision shall be final and binding and may be entered as a judgment in any court of competent jurisdiction.
                                </p>

                                <h3 className='text-lg font-semibold text-foreground mt-6'>11.4 Class Action Waiver</h3>
                                <p>
                                    TO THE FULLEST EXTENT PERMITTED BY LAW, YOU AND SANDYAPPS AGREE THAT EACH PARTY MAY ONLY BRING CLAIMS AGAINST THE OTHER IN YOUR OR ITS INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS, CONSOLIDATED, OR REPRESENTATIVE ACTION. This waiver does not apply in jurisdictions where class action waivers are prohibited.
                                </p>

                                <h3 className='text-lg font-semibold text-foreground mt-6'>11.5 Exceptions</h3>
                                <p>
                                    Nothing in this section shall prevent either party from seeking injunctive or other equitable relief from the courts for matters related to intellectual property rights, data security, or unauthorized access to the Service.
                                </p>
                            </div>
                        </div>

                        {/* Section 12 */}
                        <div id='section-12'>
                            <h2 className='text-2xl font-bold text-foreground mb-4 flex items-center gap-3'>
                                <span className='text-primary font-mono text-sm'>12</span>
                                General Provisions
                            </h2>
                            <div className='space-y-4 pl-8 border-l-2 border-white/10'>
                                <h3 className='text-lg font-semibold text-foreground'>12.1 Entire Agreement</h3>
                                <p>
                                    These Terms, together with the Privacy Policy and Refund Policy, constitute the entire agreement between you and sandyApps regarding the use of the Service and supersede all prior agreements, communications, and understandings, whether written or oral.
                                </p>

                                <h3 className='text-lg font-semibold text-foreground mt-6'>12.2 Severability</h3>
                                <p>
                                    If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be modified to the minimum extent necessary to make it valid and enforceable, and the remaining provisions shall continue in full force and effect.
                                </p>

                                <h3 className='text-lg font-semibold text-foreground mt-6'>12.3 Waiver</h3>
                                <p>
                                    The failure of sandyApps to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision. Any waiver of any provision of these Terms will be effective only if in writing and signed by an authorized representative of sandyApps.
                                </p>

                                <h3 className='text-lg font-semibold text-foreground mt-6'>12.4 Assignment</h3>
                                <p>
                                    You may not assign or transfer these Terms or your rights hereunder, in whole or in part, without our prior written consent. We may assign these Terms without restriction and without notice to you. Any attempted assignment in violation of this section shall be null and void.
                                </p>

                                <h3 className='text-lg font-semibold text-foreground mt-6'>12.5 Force Majeure</h3>
                                <p>
                                    We shall not be liable for any failure or delay in performing our obligations under these Terms due to circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, pandemics, epidemics, war, terrorism, riots, government actions, power failures, internet or telecommunications failures, or cyberattacks.
                                </p>

                                <h3 className='text-lg font-semibold text-foreground mt-6'>12.6 Notices</h3>
                                <p>
                                    All notices from us to you shall be deemed effective when sent to the email address associated with your account or posted on the Service. Notices from you to us must be sent to{' '}
                                    <EmailLink />{' '}
                                    or by mail to 264 C Usama Road, Upper Mall, Lahore, Pakistan.
                                </p>

                                <h3 className='text-lg font-semibold text-foreground mt-6'>12.7 Third-Party Services</h3>
                                <p>
                                    The Service may contain links to or integrations with third-party websites, services, or content that are not owned or controlled by sandyApps. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party services. You acknowledge and agree that we shall not be responsible or liable for any damage or loss caused by or in connection with the use of any such third-party services.
                                </p>

                                <h3 className='text-lg font-semibold text-foreground mt-6'>12.8 Changes to Terms</h3>
                                <p>
                                    We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision is material, we will provide at least 30 days&apos; notice prior to the new terms taking effect, via email notification or prominent notice on the Service. Your continued use of the Service after such changes constitutes acceptance of the revised Terms.
                                </p>

                                <h3 className='text-lg font-semibold text-foreground mt-6'>12.9 International Use</h3>
                                <p>
                                    The Service is operated from Pakistan but is accessible globally. If you access the Service from other jurisdictions, you are responsible for compliance with local laws. We make no representation that the Service is appropriate or available for use in any particular jurisdiction.
                                </p>
                            </div>
                        </div>

                        {/* Contact Section */}
                        <div className='rounded-2xl border border-white/10 bg-surface/60 backdrop-blur-xl p-6 md:p-8'>
                            <h2 className='text-2xl font-bold text-foreground mb-4'>Contact Us</h2>
                            <p className='mb-4'>
                                If you have any questions, concerns, or requests regarding these Terms and Conditions, please contact us:
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
                            </ul>
                        </div>

                        {/* Related Policies */}
                        <div className='flex flex-col sm:flex-row gap-4'>
                            <Link
                                href='/privacy-policy'
                                className='flex-1 rounded-2xl border border-white/10 bg-surface/60 backdrop-blur-xl p-6 hover:border-primary/30 transition-all group'
                            >
                                <Shield size={24} className='text-primary mb-3' />
                                <h3 className='text-foreground font-semibold mb-1 group-hover:text-primary transition-colors'>Privacy Policy</h3>
                                <p className='text-sm'>Learn how we collect and protect your data.</p>
                            </Link>
                            <Link
                                href='/refund-policy'
                                className='flex-1 rounded-2xl border border-white/10 bg-surface/60 backdrop-blur-xl p-6 hover:border-secondary/30 transition-all group'
                            >
                                <Scale size={24} className='text-secondary mb-3' />
                                <h3 className='text-foreground font-semibold mb-1 group-hover:text-secondary transition-colors'>Refund Policy</h3>
                                <p className='text-sm'>Understand our refund and cancellation process.</p>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
