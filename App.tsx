
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ResearchInterests } from './components/ResearchInterests';
import { Publications } from './components/Publications';
import { Teaching } from './components/Teaching';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AIChatWidget } from './components/AIChatWidget';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'research', 'publications', 'teaching', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header activeSection={activeSection} />
      <main className="flex-grow">
        <Hero />
        <About />
        <ResearchInterests />
        <Publications />
        <Teaching />
        <Contact />
      </main>
      <Footer />
      <AIChatWidget />
    </div>
  );
};

export default App;
