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
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {PortfolioPage} from "./pages/PortfolioPage.tsx";

function App() {
  useScrollReveal();


  return (
    
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path='/'
              element={
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
              }
            />
            <Route path="/portfolio" element={<PortfolioPage/>}/>
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;