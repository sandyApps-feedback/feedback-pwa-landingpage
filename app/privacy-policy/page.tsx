'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, Eye, Lock, Database, Globe, UserCheck, FileText, Scale } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function PrivacyPolicy() {
    return (
        <div className='font-sans text-foreground antialiased bg-background selection:bg-accent/30 selection:text-accent min-h-screen'>
            <Navbar />

            {/* Hero Section */}
            <section className='pt-32 pb-16 relative overflow-hidden'>
                <div className='absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none'></div>
                <div className='absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none'></div>
                <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center'>
                    <div className='inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md'>
                        <Shield size={14} className='text-primary' />
                        <span className='text-primary text-xs font-bold tracking-[0.2em] uppercase'>
                            Your Privacy Matters
                        </span>
                    </div>
                    <h1 className='text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight'>
                        Privacy{' '}
                        <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent'>
                            Policy
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
                            <Eye size={20} className='text-accent' />
                            <h2 className='text-lg font-semibold text-foreground'>Quick Navigation</h2>
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2'>
                            {[
                                'Information We Collect',
                                'How We Use Information',
                                'Legal Basis for Processing',
                                'Data Sharing & Disclosure',
                                'International Data Transfers',
                                'Data Retention',
                                'Data Security',
                                'Your Rights & Choices',
                                'Cookies & Tracking',
                                'Children\'s Privacy',
                                'Third-Party Services',
                                'Policy Changes',
                            ].map((item, i) => (
                                <a
                                    key={i}
                                    href={`#privacy-${i + 1}`}
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
                                <Lock size={24} className='text-primary flex-shrink-0 mt-1' />
                                <div>
                                    <h3 className='text-foreground font-semibold mb-2'>Our Commitment to Your Privacy</h3>
                                    <p className='text-sm'>
                                        sandyApps (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the SAPP platform at{' '}
                                        <a href='https://sapp.feedbackcert.com' target='_blank' rel='noopener noreferrer' className='text-primary hover:underline'>
                                            sapp.feedbackcert.com
                                        </a>
                                        . This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service. We are committed to protecting your personal data in accordance with the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), Pakistan&apos;s data protection laws, and other applicable international data protection regulations.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Section 1 */}
                        <div id='privacy-1'>
                            <h2 className='text-2xl font-bold text-foreground mb-4 flex items-center gap-3'>
                                <span className='text-primary font-mono text-sm'>01</span>
                                <Database size={22} className='text-primary' />
                                Information We Collect
                            </h2>
                            <div className='space-y-6 pl-8 border-l-2 border-white/10'>
                                <h3 className='text-lg font-semibold text-foreground'>1.1 Information You Provide Directly</h3>
                                <p>We collect information that you voluntarily provide to us, including:</p>
                                <ul className='list-disc pl-6 space-y-2'>
                                    <li><strong className='text-foreground'>Account Information:</strong> Full name, email address, password (stored in hashed form), organization name, job title/role, and phone number when you register for an account.</li>
                                    <li><strong className='text-foreground'>Profile Information:</strong> Organizational details, branding assets (logos, colors), and professional information you add to your profile.</li>
                                    <li><strong className='text-foreground'>Contact Form Data:</strong> Name, email address, and message content submitted through our contact forms.</li>
                                    <li><strong className='text-foreground'>Survey & Feedback Data:</strong> Questions, responses, and feedback content created or submitted through the platform, including multiple choice answers, ratings, text responses, and checkbox selections.</li>
                                    <li><strong className='text-foreground'>Certificate Recipient Data:</strong> Names, email addresses, course/event details, completion dates, and other information necessary for certificate generation and distribution.</li>
                                    <li><strong className='text-foreground'>Event & Workshop Data:</strong> Event names, descriptions, dates, locations, attendee lists, and related organizational data.</li>
                                    <li><strong className='text-foreground'>Billing Information:</strong> Payment card details, billing address, and transaction history (payment card details are processed and stored by our PCI-compliant third-party payment processors; we do not store full card numbers on our servers).</li>
                                    <li><strong className='text-foreground'>Communication Data:</strong> Records of correspondence with our support team, including emails, chat messages, and phone call records.</li>
                                </ul>

                                <h3 className='text-lg font-semibold text-foreground mt-6'>1.2 Information Collected Automatically</h3>
                                <p>When you access or use our Service, we automatically collect:</p>
                                <ul className='list-disc pl-6 space-y-2'>
                                    <li><strong className='text-foreground'>Device Information:</strong> Device type, operating system, browser type and version, screen resolution, and device identifiers.</li>
                                    <li><strong className='text-foreground'>Log Data:</strong> IP address, access times, pages viewed, referring URL, time spent on pages, click data, and other diagnostic data.</li>
                                    <li><strong className='text-foreground'>Usage Analytics:</strong> Feature usage patterns, session duration, interaction data, and performance metrics.</li>
                                    <li><strong className='text-foreground'>Certificate Delivery Tracking:</strong> Email open rates, certificate download tracking, and verification code usage for delivery confirmation purposes.</li>
                                    <li><strong className='text-foreground'>Cookies and Similar Technologies:</strong> We use cookies, web beacons, and similar tracking technologies to collect information about your browsing activities (see Section 9).</li>
                                </ul>

                                <h3 className='text-lg font-semibold text-foreground mt-6'>1.3 Information from Third Parties</h3>
                                <ul className='list-disc pl-6 space-y-2'>
                                    <li><strong className='text-foreground'>LMS Integration Data:</strong> When you integrate with Learning Management Systems, we may receive student enrollment data, completion records, and related academic information.</li>
                                    <li><strong className='text-foreground'>CSV/Bulk Upload Data:</strong> Recipient data uploaded by you via CSV files for bulk certificate generation, including names, emails, and custom fields.</li>
                                    <li><strong className='text-foreground'>Third-Party Authentication:</strong> If you choose to sign in using third-party services (e.g., Google, Microsoft), we receive your basic profile information from those services.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div id='privacy-2'>
                            <h2 className='text-2xl font-bold text-foreground mb-4 flex items-center gap-3'>
                                <span className='text-primary font-mono text-sm'>02</span>
                                How We Use Your Information
                            </h2>
                            <div className='space-y-4 pl-8 border-l-2 border-white/10'>
                                <p>We use the collected information for the following purposes:</p>
                                <ul className='list-disc pl-6 space-y-2'>
                                    <li><strong className='text-foreground'>Service Delivery:</strong> To provide, operate, maintain, and improve our feedback collection, certificate generation, and analytics services.</li>
                                    <li><strong className='text-foreground'>Account Management:</strong> To create and manage your account, process authentication, and manage role-based access control.</li>
                                    <li><strong className='text-foreground'>Certificate Operations:</strong> To generate, customize, distribute, verify, and track certificates on behalf of your organization.</li>
                                    <li><strong className='text-foreground'>Email Communications:</strong> To send automated certificate deliveries, service notifications, password resets, account updates, and responses to inquiries.</li>
                                    <li><strong className='text-foreground'>Analytics & Insights:</strong> To provide data analytics, sentiment analysis, reporting, and actionable insights from feedback data.</li>
                                    <li><strong className='text-foreground'>Billing & Payments:</strong> To process subscription payments, manage billing, and send invoices and payment receipts.</li>
                                    <li><strong className='text-foreground'>Customer Support:</strong> To respond to your requests, resolve technical issues, and provide customer service.</li>
                                    <li><strong className='text-foreground'>Service Improvement:</strong> To analyze usage patterns, identify trends, conduct research, and improve the functionality and user experience of our Service.</li>
                                    <li><strong className='text-foreground'>Security:</strong> To detect, prevent, and address fraud, abuse, security threats, and technical issues.</li>
                                    <li><strong className='text-foreground'>Legal Compliance:</strong> To comply with applicable laws, regulations, legal processes, or enforceable governmental requests.</li>
                                    <li><strong className='text-foreground'>Marketing (with consent):</strong> To send promotional materials, newsletters, and product updates. You may opt out of marketing communications at any time.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div id='privacy-3'>
                            <h2 className='text-2xl font-bold text-foreground mb-4 flex items-center gap-3'>
                                <span className='text-primary font-mono text-sm'>03</span>
                                Legal Basis for Processing (GDPR)
                            </h2>
                            <div className='space-y-4 pl-8 border-l-2 border-white/10'>
                                <p>If you are located in the European Economic Area (EEA), United Kingdom, or other jurisdictions that require a legal basis for processing personal data, we rely on the following:</p>
                                <ul className='list-disc pl-6 space-y-3'>
                                    <li><strong className='text-foreground'>Contractual Necessity (Article 6(1)(b) GDPR):</strong> Processing is necessary for the performance of our contract with you — to provide the Service, manage your account, process payments, and generate certificates.</li>
                                    <li><strong className='text-foreground'>Legitimate Interests (Article 6(1)(f) GDPR):</strong> Processing is necessary for our legitimate interests, including service improvement, security, fraud prevention, and analytics, provided these interests are not overridden by your data protection rights.</li>
                                    <li><strong className='text-foreground'>Consent (Article 6(1)(a) GDPR):</strong> Where you have given explicit consent for specific processing activities, such as receiving marketing communications or the use of non-essential cookies.</li>
                                    <li><strong className='text-foreground'>Legal Obligation (Article 6(1)(c) GDPR):</strong> Processing is necessary to comply with a legal obligation, such as tax reporting, anti-money laundering requirements, or responding to lawful requests from authorities.</li>
                                </ul>
                                <p>
                                    You have the right to withdraw consent at any time where we rely on consent as the legal basis for processing. Withdrawal does not affect the lawfulness of processing based on consent before its withdrawal.
                                </p>
                            </div>
                        </div>

                        {/* Section 4 */}
                        <div id='privacy-4'>
                            <h2 className='text-2xl font-bold text-foreground mb-4 flex items-center gap-3'>
                                <span className='text-primary font-mono text-sm'>04</span>
                                Data Sharing & Disclosure
                            </h2>
                            <div className='space-y-4 pl-8 border-l-2 border-white/10'>
                                <p>We do <strong className='text-foreground'>not</strong> sell your personal data. We may share your information in the following circumstances:</p>

                                <h3 className='text-lg font-semibold text-foreground mt-4'>4.1 Service Providers</h3>
                                <p>We share data with trusted third-party service providers who assist us in operating our Service, including:</p>
                                <ul className='list-disc pl-6 space-y-2'>
                                    <li><strong className='text-foreground'>Email Delivery:</strong> For sending automated certificate emails and notifications (e.g., Web3Forms, email service providers).</li>
                                    <li><strong className='text-foreground'>Payment Processing:</strong> For processing subscription payments (PCI-DSS compliant processors).</li>
                                    <li><strong className='text-foreground'>Cloud Hosting:</strong> For secure data storage and infrastructure.</li>
                                    <li><strong className='text-foreground'>Analytics:</strong> For understanding usage patterns and improving our Service.</li>
                                </ul>
                                <p>All service providers are contractually bound to protect your data and process it only according to our instructions.</p>

                                <h3 className='text-lg font-semibold text-foreground mt-6'>4.2 Organizational Sharing</h3>
                                <p>
                                    Within your organization on the platform, data may be shared between users based on their assigned roles (Admin, Instructor, Student). Admins have access to organizational-level data; Instructors can access data for their assigned events; Students can view their own feedback submissions and certificates.
                                </p>

                                <h3 className='text-lg font-semibold text-foreground mt-6'>4.3 Certificate Verification</h3>
                                <p>
                                    When a certificate is verified using its unique verification code, limited information (certificate holder&apos;s name, issuing organization, event name/course, and date of issuance) is displayed to the verifying party. This is a core function of the Service and does not require separate consent.
                                </p>

                                <h3 className='text-lg font-semibold text-foreground mt-6'>4.4 Legal Requirements</h3>
                                <p>We may disclose your information if required by law, legal process, governmental request, or when we believe disclosure is necessary to:</p>
                                <ul className='list-disc pl-6 space-y-2'>
                                    <li>Comply with applicable laws, regulations, or valid legal processes.</li>
                                    <li>Protect the rights, property, or safety of sandyApps, our users, or the public.</li>
                                    <li>Detect, prevent, or address fraud, security issues, or technical problems.</li>
                                    <li>Enforce our Terms and Conditions.</li>
                                </ul>

                                <h3 className='text-lg font-semibold text-foreground mt-6'>4.5 Business Transfers</h3>
                                <p>
                                    In the event of a merger, acquisition, reorganization, bankruptcy, or sale of all or a portion of our assets, your personal data may be transferred as part of the transaction. We will notify you before your personal data becomes subject to a different privacy policy.
                                </p>
                            </div>
                        </div>

                        {/* Section 5 */}
                        <div id='privacy-5'>
                            <h2 className='text-2xl font-bold text-foreground mb-4 flex items-center gap-3'>
                                <span className='text-primary font-mono text-sm'>05</span>
                                <Globe size={22} className='text-primary' />
                                International Data Transfers
                            </h2>
                            <div className='space-y-4 pl-8 border-l-2 border-white/10'>
                                <p>
                                    Our Service is operated from Pakistan. If you are accessing the Service from another country, your information may be transferred to, stored, and processed in Pakistan or other countries where our service providers operate.
                                </p>
                                <p>For transfers of personal data from the EEA, UK, or Switzerland, we ensure adequate protection through:</p>
                                <ul className='list-disc pl-6 space-y-2'>
                                    <li><strong className='text-foreground'>Standard Contractual Clauses (SCCs):</strong> EU-approved standard contractual clauses with our service providers.</li>
                                    <li><strong className='text-foreground'>Adequacy Decisions:</strong> Transfers to countries recognized by the European Commission as providing adequate data protection.</li>
                                    <li><strong className='text-foreground'>Additional Safeguards:</strong> Technical and organizational measures including encryption, access controls, and regular security assessments.</li>
                                </ul>
                                <p>
                                    By using the Service, you acknowledge and consent to the transfer of your information to countries outside your country of residence, which may have different data protection rules.
                                </p>
                            </div>
                        </div>

                        {/* Section 6 */}
                        <div id='privacy-6'>
                            <h2 className='text-2xl font-bold text-foreground mb-4 flex items-center gap-3'>
                                <span className='text-primary font-mono text-sm'>06</span>
                                Data Retention
                            </h2>
                            <div className='space-y-4 pl-8 border-l-2 border-white/10'>
                                <p>We retain your personal data only for as long as necessary to fulfil the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>
                                <ul className='list-disc pl-6 space-y-2'>
                                    <li><strong className='text-foreground'>Account Data:</strong> Retained for the duration of your account plus 30 days after deletion request to allow for account recovery.</li>
                                    <li><strong className='text-foreground'>Feedback & Survey Data:</strong> Retained for the duration of your subscription. Upon account termination, you may request data export before deletion.</li>
                                    <li><strong className='text-foreground'>Certificate Records:</strong> Certificate verification data may be retained for up to 7 years after issuance to support ongoing verification needs of certificate holders and third parties.</li>
                                    <li><strong className='text-foreground'>Billing & Transaction Data:</strong> Retained for up to 7 years to comply with tax and financial reporting obligations.</li>
                                    <li><strong className='text-foreground'>Communication Records:</strong> Support correspondence is retained for up to 3 years.</li>
                                    <li><strong className='text-foreground'>Log Data & Analytics:</strong> Aggregated and anonymized analytics data may be retained indefinitely. Identifiable log data is retained for up to 12 months.</li>
                                </ul>
                                <p>
                                    When data is no longer needed, it is securely deleted or anonymized so that it can no longer be associated with you.
                                </p>
                            </div>
                        </div>

                        {/* Section 7 */}
                        <div id='privacy-7'>
                            <h2 className='text-2xl font-bold text-foreground mb-4 flex items-center gap-3'>
                                <span className='text-primary font-mono text-sm'>07</span>
                                <Lock size={22} className='text-primary' />
                                Data Security
                            </h2>
                            <div className='space-y-4 pl-8 border-l-2 border-white/10'>
                                <p>We implement comprehensive security measures to protect your personal data, including:</p>
                                <ul className='list-disc pl-6 space-y-2'>
                                    <li><strong className='text-foreground'>Encryption:</strong> All data is encrypted in transit using TLS 1.2+ and at rest using AES-256 encryption.</li>
                                    <li><strong className='text-foreground'>Access Controls:</strong> Role-based access controls, multi-factor authentication, and principle of least privilege for internal access.</li>
                                    <li><strong className='text-foreground'>Password Security:</strong> All passwords are hashed using industry-standard algorithms (bcrypt/scrypt) and are never stored in plaintext.</li>
                                    <li><strong className='text-foreground'>Infrastructure Security:</strong> Regular security audits, vulnerability assessments, and penetration testing.</li>
                                    <li><strong className='text-foreground'>Employee Training:</strong> All team members undergo data protection and security awareness training.</li>
                                    <li><strong className='text-foreground'>Incident Response:</strong> We maintain a data breach response plan and will notify affected users and relevant authorities within 72 hours of discovering a confirmed breach, as required by applicable law.</li>
                                </ul>
                                <p>
                                    While we implement robust security measures, no method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security but are committed to using commercially acceptable means to protect your data.
                                </p>
                            </div>
                        </div>

                        {/* Section 8 */}
                        <div id='privacy-8'>
                            <h2 className='text-2xl font-bold text-foreground mb-4 flex items-center gap-3'>
                                <span className='text-primary font-mono text-sm'>08</span>
                                <UserCheck size={22} className='text-primary' />
                                Your Rights & Choices
                            </h2>
                            <div className='space-y-4 pl-8 border-l-2 border-white/10'>
                                <p>Depending on your location, you may have the following rights regarding your personal data:</p>

                                <h3 className='text-lg font-semibold text-foreground'>For All Users</h3>
                                <ul className='list-disc pl-6 space-y-2'>
                                    <li><strong className='text-foreground'>Access:</strong> Request a copy of the personal data we hold about you.</li>
                                    <li><strong className='text-foreground'>Correction:</strong> Request correction of inaccurate or incomplete personal data.</li>
                                    <li><strong className='text-foreground'>Deletion:</strong> Request deletion of your personal data, subject to legal retention requirements.</li>
                                    <li><strong className='text-foreground'>Data Portability:</strong> Request your data in a structured, commonly used, and machine-readable format.</li>
                                    <li><strong className='text-foreground'>Opt-Out of Marketing:</strong> Unsubscribe from marketing emails at any time using the link in the email or by contacting us.</li>
                                    <li><strong className='text-foreground'>Account Deletion:</strong> Request permanent deletion of your account and associated data.</li>
                                </ul>

                                <h3 className='text-lg font-semibold text-foreground mt-6'>Additional Rights for EEA/UK Residents (GDPR)</h3>
                                <ul className='list-disc pl-6 space-y-2'>
                                    <li><strong className='text-foreground'>Right to Restrict Processing:</strong> Request limitation of processing of your personal data under certain conditions.</li>
                                    <li><strong className='text-foreground'>Right to Object:</strong> Object to processing based on legitimate interests, including profiling.</li>
                                    <li><strong className='text-foreground'>Right to Withdraw Consent:</strong> Withdraw consent at any time where processing is based on consent.</li>
                                    <li><strong className='text-foreground'>Right to Lodge a Complaint:</strong> File a complaint with your local supervisory authority (Data Protection Authority).</li>
                                </ul>

                                <h3 className='text-lg font-semibold text-foreground mt-6'>Additional Rights for California Residents (CCPA/CPRA)</h3>
                                <ul className='list-disc pl-6 space-y-2'>
                                    <li><strong className='text-foreground'>Right to Know:</strong> Request disclosure of specific pieces of personal information collected about you.</li>
                                    <li><strong className='text-foreground'>Right to Delete:</strong> Request deletion of your personal information collected and retained by us.</li>
                                    <li><strong className='text-foreground'>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your privacy rights.</li>
                                    <li><strong className='text-foreground'>Right to Opt-Out of Sale:</strong> We do not sell personal information. If this changes, we will provide an opt-out mechanism.</li>
                                    <li><strong className='text-foreground'>Right to Correct:</strong> Request correction of inaccurate personal information.</li>
                                    <li><strong className='text-foreground'>Right to Limit Use of Sensitive Personal Information:</strong> Limit our use of sensitive personal information to that which is necessary.</li>
                                </ul>

                                <h3 className='text-lg font-semibold text-foreground mt-6'>Additional Rights for Other Jurisdictions</h3>
                                <ul className='list-disc pl-6 space-y-2'>
                                    <li><strong className='text-foreground'>Brazil (LGPD):</strong> Right to anonymization, blocking, or deletion of unnecessary data; data portability; information about sharing.</li>
                                    <li><strong className='text-foreground'>South Africa (POPIA):</strong> Right to access, correction, deletion, and objection to processing of personal information.</li>
                                    <li><strong className='text-foreground'>Australia (Privacy Act):</strong> Right to access, correction, and complaint to the OAIC.</li>
                                    <li><strong className='text-foreground'>Canada (PIPEDA):</strong> Right to access, challenge accuracy, and withdraw consent.</li>
                                    <li><strong className='text-foreground'>India (DPDP Act):</strong> Right to access, correction, erasure, and grievance redressal.</li>
                                </ul>

                                <p className='mt-4'>
                                    To exercise any of these rights, please contact us at{' '}
                                    <a href='mailto:info@sandyapps.co' className='text-primary hover:underline'>info@sandyapps.co</a>.
                                    We will respond to your request within 30 days (or within the timeframe required by your applicable law). We may need to verify your identity before processing your request.
                                </p>
                            </div>
                        </div>

                        {/* Section 9 */}
                        <div id='privacy-9'>
                            <h2 className='text-2xl font-bold text-foreground mb-4 flex items-center gap-3'>
                                <span className='text-primary font-mono text-sm'>09</span>
                                Cookies & Tracking Technologies
                            </h2>
                            <div className='space-y-4 pl-8 border-l-2 border-white/10'>
                                <p>We use cookies and similar technologies to enhance your experience. The types of cookies we use include:</p>

                                <div className='rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden'>
                                    <table className='w-full text-sm'>
                                        <thead>
                                            <tr className='border-b border-white/10 bg-white/[0.02]'>
                                                <th className='text-left p-4 text-foreground font-semibold'>Cookie Type</th>
                                                <th className='text-left p-4 text-foreground font-semibold'>Purpose</th>
                                                <th className='text-left p-4 text-foreground font-semibold'>Duration</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className='border-b border-white/5'>
                                                <td className='p-4 text-foreground font-medium'>Essential</td>
                                                <td className='p-4'>Authentication, session management, security, load balancing</td>
                                                <td className='p-4'>Session</td>
                                            </tr>
                                            <tr className='border-b border-white/5'>
                                                <td className='p-4 text-foreground font-medium'>Functional</td>
                                                <td className='p-4'>Remembering preferences, language settings, and customizations</td>
                                                <td className='p-4'>1 year</td>
                                            </tr>
                                            <tr className='border-b border-white/5'>
                                                <td className='p-4 text-foreground font-medium'>Analytics</td>
                                                <td className='p-4'>Understanding usage patterns, feature adoption, error tracking</td>
                                                <td className='p-4'>2 years</td>
                                            </tr>
                                            <tr>
                                                <td className='p-4 text-foreground font-medium'>Marketing</td>
                                                <td className='p-4'>Delivering relevant advertisements and measuring campaign effectiveness</td>
                                                <td className='p-4'>1 year</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className='mt-4'>
                                    <strong className='text-foreground'>Managing Cookies:</strong> You can control and/or delete cookies through your browser settings. Most browsers allow you to refuse cookies or receive a warning before a cookie is stored. However, disabling essential cookies may prevent you from using certain features of the Service.
                                </p>
                                <p>
                                    For users in the EEA/UK, we obtain your consent before placing non-essential cookies, in compliance with the ePrivacy Directive.
                                </p>
                            </div>
                        </div>

                        {/* Section 10 */}
                        <div id='privacy-10'>
                            <h2 className='text-2xl font-bold text-foreground mb-4 flex items-center gap-3'>
                                <span className='text-primary font-mono text-sm'>10</span>
                                Children&apos;s Privacy
                            </h2>
                            <div className='space-y-4 pl-8 border-l-2 border-white/10'>
                                <p>
                                    Our Service is not directed at individuals under the age of 16 (or the applicable minimum age of digital consent in your jurisdiction). We do not knowingly collect personal data from children under this age.
                                </p>
                                <p>
                                    If you are a parent or guardian and believe that your child has provided us with personal data without your consent, please contact us at{' '}
                                    <a href='mailto:info@sandyapps.co' className='text-primary hover:underline'>info@sandyapps.co</a>.
                                    We will take steps to delete such information promptly.
                                </p>
                                <p>
                                    If an educational institution uses our Service to collect feedback from students under 16, that institution is responsible for obtaining the necessary parental consent and ensuring compliance with applicable child protection laws, including the U.S. Children&apos;s Online Privacy Protection Act (COPPA) and similar regulations.
                                </p>
                            </div>
                        </div>

                        {/* Section 11 */}
                        <div id='privacy-11'>
                            <h2 className='text-2xl font-bold text-foreground mb-4 flex items-center gap-3'>
                                <span className='text-primary font-mono text-sm'>11</span>
                                Third-Party Services
                            </h2>
                            <div className='space-y-4 pl-8 border-l-2 border-white/10'>
                                <p>Our Service integrates with or links to third-party services, including but not limited to:</p>
                                <ul className='list-disc pl-6 space-y-2'>
                                    <li><strong className='text-foreground'>Web3Forms:</strong> For processing contact form submissions.</li>
                                    <li><strong className='text-foreground'>Payment Processors:</strong> For handling subscription payments securely.</li>
                                    <li><strong className='text-foreground'>LMS Platforms:</strong> For integrating with Learning Management Systems via API.</li>
                                    <li><strong className='text-foreground'>Email Service Providers:</strong> For delivering certificate emails and notifications.</li>
                                    <li><strong className='text-foreground'>Analytics Services:</strong> For measuring and analyzing platform usage.</li>
                                    <li><strong className='text-foreground'>Cloud Infrastructure Providers:</strong> For hosting and data storage.</li>
                                </ul>
                                <p>
                                    Each third-party service has its own privacy policy governing their use of your data. We encourage you to review the privacy policies of any third-party services you interact with. We are not responsible for the privacy practices of these third-party services.
                                </p>
                            </div>
                        </div>

                        {/* Section 12 */}
                        <div id='privacy-12'>
                            <h2 className='text-2xl font-bold text-foreground mb-4 flex items-center gap-3'>
                                <span className='text-primary font-mono text-sm'>12</span>
                                Changes to This Privacy Policy
                            </h2>
                            <div className='space-y-4 pl-8 border-l-2 border-white/10'>
                                <p>
                                    We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors. We will:
                                </p>
                                <ul className='list-disc pl-6 space-y-2'>
                                    <li>Update the &quot;Last updated&quot; date at the top of this Privacy Policy.</li>
                                    <li>Notify you of material changes via email or a prominent notice on our Service at least 30 days before the changes take effect.</li>
                                    <li>Where required by law, obtain your consent to any material changes to how we process your personal data.</li>
                                </ul>
                                <p>
                                    Your continued use of the Service after any changes to this Privacy Policy constitutes your acceptance of the revised policy. We encourage you to review this Privacy Policy periodically.
                                </p>
                            </div>
                        </div>

                        {/* Data Protection Officer */}
                        <div className='rounded-2xl border border-accent/20 bg-accent/5 p-6 md:p-8'>
                            <div className='flex items-start gap-3'>
                                <UserCheck size={24} className='text-accent flex-shrink-0 mt-1' />
                                <div>
                                    <h3 className='text-foreground font-semibold mb-2'>Data Protection Contact</h3>
                                    <p className='text-sm mb-4'>
                                        For questions about data protection or to exercise your data rights, please contact us:
                                    </p>
                                    <ul className='space-y-1 text-sm'>
                                        <li><strong className='text-foreground'>Email:</strong>{' '}
                                            <a href='mailto:info@sandyapps.co' className='text-primary hover:underline'>info@sandyapps.co</a>
                                        </li>
                                        <li><strong className='text-foreground'>Address:</strong> 264 C Usama Road, Upper Mall, Lahore, Pakistan</li>
                                        <li><strong className='text-foreground'>Phone:</strong>{' '}
                                            <a href='tel:+923253430005' className='text-primary hover:underline'>+92 325 343 0005</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Contact Section */}
                        <div className='rounded-2xl border border-white/10 bg-surface/60 backdrop-blur-xl p-6 md:p-8'>
                            <h2 className='text-2xl font-bold text-foreground mb-4'>Contact Us</h2>
                            <p className='mb-4'>
                                If you have any questions, concerns, or complaints regarding this Privacy Policy or our data practices, please contact us:
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
                                href='/term-conditions'
                                className='flex-1 rounded-2xl border border-white/10 bg-surface/60 backdrop-blur-xl p-6 hover:border-primary/30 transition-all group'
                            >
                                <FileText size={24} className='text-primary mb-3' />
                                <h3 className='text-foreground font-semibold mb-1 group-hover:text-primary transition-colors'>Terms & Conditions</h3>
                                <p className='text-sm'>Read our full terms of service.</p>
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
