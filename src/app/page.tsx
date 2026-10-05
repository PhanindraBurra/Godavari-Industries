'use client';

import { useState } from 'react';
import LenisProvider from '@/components/LenisProvider';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '@/components/Preloader';
import Navbar, { LogoTheme } from '@/components/Navbar';
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
  const [logoTheme, setLogoTheme] = useState<LogoTheme>('classic');

  // Dynamically update CSS Variables on document.documentElement
  const applyLogoTheme = (theme: LogoTheme) => {
    setLogoTheme(theme);
    if (typeof document === 'undefined') return;
    const root = document.documentElement;

    if (theme === 'classic') {
      root.style.setProperty('--primary', '#E07A00');
      root.style.setProperty('--primary-rgb', '224, 122, 0');
      root.style.setProperty('--secondary', '#007A4D');
      root.style.setProperty('--secondary-rgb', '0, 122, 77');
      root.style.setProperty('--accent', '#1D5288');
      root.style.setProperty('--accent-rgb', '29, 82, 136');
    } else if (theme === 'gold') {
      root.style.setProperty('--primary', '#F59E0B');
      root.style.setProperty('--primary-rgb', '245, 158, 11');
      root.style.setProperty('--secondary', '#2563EB');
      root.style.setProperty('--secondary-rgb', '37, 99, 235');
      root.style.setProperty('--accent', '#7C3AED');
      root.style.setProperty('--accent-rgb', '124, 58, 237');
    } else if (theme === 'crimson') {
      root.style.setProperty('--primary', '#EF4444');
      root.style.setProperty('--primary-rgb', '239, 68, 68');
      root.style.setProperty('--secondary', '#F97316');
      root.style.setProperty('--secondary-rgb', '249, 115, 22');
      root.style.setProperty('--accent', '#3B82F6');
      root.style.setProperty('--accent-rgb', '59, 130, 246');
    } else if (theme === 'cyan') {
      root.style.setProperty('--primary', '#06B6D4');
      root.style.setProperty('--primary-rgb', '6, 182, 212');
      root.style.setProperty('--secondary', '#10B981');
      root.style.setProperty('--secondary-rgb', '16, 185, 129');
      root.style.setProperty('--accent', '#6366F1');
      root.style.setProperty('--accent-rgb', '99, 102, 241');
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
