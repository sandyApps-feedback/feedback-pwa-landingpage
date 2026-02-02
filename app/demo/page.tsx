'use client';

import React from 'react';
import { WhoUsesThis } from '@/components/WhoUsesThis';
import { AutomatedCertificates } from '@/components/AutomatedCertificates';
import { FAQ } from '@/components/FAQ';

export default function ComponentsDemo() {
    return (
        <div className='font-sans text-gray-200 antialiased bg-[#050505]'>
            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
        
        :root {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #050505;
        }
        ::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>

            {/* Demo Header */}
            <div className='py-20 text-center border-b border-white/10'>
                <h1 className='text-5xl font-bold text-white mb-4'>
                    New Components Demo
                </h1>
                <p className='text-gray-400 text-lg'>
                    Three professional landing page components
                </p>
            </div>

            {/* Components */}
            <WhoUsesThis />
            <AutomatedCertificates />
            <FAQ />
        </div>
    );
}
