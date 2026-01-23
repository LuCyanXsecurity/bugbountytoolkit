import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Seo from './components/Seo';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import CommandsSection from './components/CommandsSection';
import MethodologySection from './components/MethodologySection';
import AboutSection from './components/AboutSection';
import ContributorsSection from './components/ContributorsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleClick = (e: Event) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleClick);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <HelmetProvider>
      <Seo />
      <div className="min-h-screen">
        <Header />
        <Hero />
        <StatsSection />
        <CommandsSection />
        <MethodologySection />
        <AboutSection />
        <ContributorsSection />
        <ContactSection />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
