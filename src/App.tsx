import React from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useScrollReveal();


  return (
    
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen w-full bg-white dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden">
          <Header />
          
          
          <Hero />
          <Services />
          <Portfolio />
          <About />
          <Testimonials />
          <Contact />
          <Footer /> 
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;