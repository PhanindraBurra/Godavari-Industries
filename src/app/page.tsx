'use client';

import { useState, useEffect } from 'react';
import LenisProvider from '@/components/LenisProvider';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '@/components/Preloader';
import Navbar, { LogoTheme } from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import AboutUs from '@/components/AboutUs';
import ServicesGrid from '@/components/ServicesGrid';
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
  const [logoTheme, setLogoTheme] = useState<LogoTheme>('classic');

  // Dynamically update CSS Variables when logo color theme changes
  const applyLogoTheme = (theme: LogoTheme) => {
    setLogoTheme(theme);
    if (typeof document === 'undefined') return;
    const root = document.documentElement;

    if (theme === 'classic') {
      root.style.setProperty('--primary', '#E07A00');
      root.style.setProperty('--secondary', '#007A4D');
      root.style.setProperty('--accent', '#1D5288');
    } else if (theme === 'gold') {
      root.style.setProperty('--primary', '#F59E0B');
      root.style.setProperty('--secondary', '#2563EB');
      root.style.setProperty('--accent', '#7C3AED');
    } else if (theme === 'crimson') {
      root.style.setProperty('--primary', '#EF4444');
      root.style.setProperty('--secondary', '#F97316');
      root.style.setProperty('--accent', '#3B82F6');
    } else if (theme === 'cyan') {
      root.style.setProperty('--primary', '#06B6D4');
      root.style.setProperty('--secondary', '#10B981');
      root.style.setProperty('--accent', '#6366F1');
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (typeof document !== 'undefined') {
      if (isDarkMode) {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
      } else {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
      }
    }
  };

  return (
    <LenisProvider>
      <CustomCursor />
      <Preloader />

      <main className="min-h-screen bg-[#0B131F] text-slate-100 relative">
        <Navbar
          onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          logoTheme={logoTheme}
          changeLogoTheme={applyLogoTheme}
        />

        <Hero onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
        <TrustBar />
        <AboutUs />
        <ServicesGrid onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
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
