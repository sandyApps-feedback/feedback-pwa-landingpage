import React from 'react';
import {
    MessageSquare,
    UserCog,
    ShieldCheck,
    Award,
    Send,
    Palette
} from 'lucide-react';

export const FEATURES_CONTENT = {
    header: {
        title: 'Powerful Features',
        description: 'Everything you need to collect, analyze, and act on feedback',
    },
    cta: {
        text: 'View Full Feature List & Pricing',
        targetId: 'pricing',
    },
    features: [
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
    ],
};
