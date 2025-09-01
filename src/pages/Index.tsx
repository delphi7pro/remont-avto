import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import InfoSections from '@/components/InfoSections';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <InfoSections />
      <Footer />
    </div>
  );
};

export default Index;