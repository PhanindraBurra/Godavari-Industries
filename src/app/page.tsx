'use client';

import { useState, useEffect } from 'react';
import LenisProvider from '@/components/LenisProvider';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import AboutUs from '@/components/AboutUs';
import ServicesGrid from '@/components/ServicesGrid';
import IntroVideoPlayer from '@/components/IntroVideoPlayer';
import ProductHorizontalGallery from '@/components/ProductHorizontalGallery';
import RoofBuildSteps from '@/components/RoofBuildSteps';
import HouseBuilderAnimation from '@/components/HouseBuilderAnimation';
import ProjectsGallery from '@/components/ProjectsGallery';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Initialize theme class on mount
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      if (isDarkMode) {
        root.classList.remove('light');
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
        root.classList.add('light');
      }
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <LenisProvider>
      <CustomCursor />
      <Preloader />

      <main className="min-h-screen transition-colors duration-300 relative">
        <Navbar
          onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
        />

        <Hero onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
        <TrustBar />
        <AboutUs />
        <ServicesGrid onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
        <IntroVideoPlayer onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
        <ProductHorizontalGallery onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
        <RoofBuildSteps />
        <HouseBuilderAnimation onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
        <ProjectsGallery />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <ContactSection />
        <Footer />

        <QuoteModal
          isOpen={isQuoteModalOpen}
          onClose={() => setIsQuoteModalOpen(false)}
        />
      </main>
    </LenisProvider>
  );
}
