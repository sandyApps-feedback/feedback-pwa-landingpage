'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { LogosStrip } from '@/components/LogosStrip';
import { FeaturesGrid } from '@/components/FeaturesGrid';
import { ProductShowcase } from '@/components/ProductShowcase';
import { WhoUsesThis } from '@/components/WhoUsesThis';
import { AutomatedCertificates } from '@/components/AutomatedCertificates';
import { FAQ } from '@/components/FAQ';
import { Pricing } from '@/components/Pricing';
import { CTA } from '@/components/CTA';
import { ContactUs } from '@/components/ContactUs';
import { Footer } from '@/components/Footer';

const App = () => {
  return (
    <div className='font-sans text-foreground antialiased bg-background selection:bg-accent/30 selection:text-accent'>

      <Navbar />
      <HeroSection />
      <LogosStrip />
      <WhoUsesThis />
      <FeaturesGrid />
      <ProductShowcase />
      <AutomatedCertificates />
      <Pricing />
      <FAQ />
      <CTA />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
