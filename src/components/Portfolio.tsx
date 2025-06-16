import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Smartphone, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Project {
  id: number;
  title: string;
  category: 'web' | 'mobile';
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  features: string[];
}

const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "EcoShop - Plateforme E-commerce",
      category: "web",
      description: "Plateforme e-commerce moderne avec gestion des stocks, paiements sécurisés et tableau de bord administrateur complet.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://ecoshop-demo.com",
      features: [
        "Interface utilisateur intuitive",
        "Gestion des stocks en temps réel",
        "Paiements sécurisés avec Stripe",
        "Tableau de bord administrateur",
        "Optimisation SEO avancée"
      ]
    },
    {
      id: 2,
      title: "FitTracker - App Fitness",
      category: "mobile",
      description: "Application mobile de suivi fitness avec programmes personnalisés, tracking des performances et communauté intégrée.",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React Native", "Firebase", "Redux", "Charts.js"],
      features: [
        "Programmes d'entraînement personnalisés",
        "Suivi des performances en temps réel",
        "Communauté et défis entre utilisateurs",
        "Synchronisation avec appareils connectés",
        "Notifications push intelligentes"
      ]
    },
    {
      id: 3,
      title: "MedConnect - Télémédecine",
      category: "web",
      description: "Plateforme de télémédecine permettant les consultations vidéo, gestion des dossiers patients et prescriptions numériques.",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "PostgreSQL", "WebRTC", "AWS"],
      features: [
        "Consultations vidéo HD sécurisées",
        "Gestion complète des dossiers patients",
        "Prescriptions numériques",
        "Calendrier de rendez-vous intelligent",
        "Conformité RGPD et sécurité médicale"
      ]
    },
    {
      id: 4,
      title: "SmartHome - Domotique",
      category: "mobile",
      description: "Application de contrôle domotique pour gérer l'éclairage, température, sécurité et appareils connectés de la maison.",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Flutter", "IoT", "MQTT", "Node.js"],
      features: [
        "Contrôle centralisé des appareils",
        "Automatisation intelligente",
        "Monitoring énergétique",
        "Sécurité et alertes en temps réel",
        "Interface vocale intégrée"
      ]
    },
    {
      id: 5,
      title: "EduPlatform - Formation en ligne",
      category: "web",
      description: "Plateforme LMS complète avec cours interactifs, évaluations automatisées et suivi de progression avancé.",
      image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "Laravel", "MySQL", "WebSocket"],
      features: [
        "Cours interactifs multimédia",
        "Évaluations automatisées",
        "Suivi de progression détaillé",
        "Classes virtuelles en direct",
        "Certificats numériques"
      ]
    },
    {
      id: 6,
      title: "CryptoWallet - Portefeuille Crypto",
      category: "mobile",
      description: "Portefeuille de cryptomonnaies sécurisé avec trading, staking et analyse de marché en temps réel.",
      image: "https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React Native", "Blockchain", "Web3", "Redux"],
      features: [
        "Stockage sécurisé multi-devises",
        "Trading intégré avec graphiques",
        "Staking et DeFi",
        "Analyse de marché en temps réel",
        "Authentification biométrique"
      ]
    }
  ];

  const nextSlide = () => {
  const maxIndex = Math.max(0, projects.length - getVisibleSlides());
  setCurrentIndex((prevIndex) => 
    prevIndex >= maxIndex ? 0 : prevIndex + 1
  );
};

const prevSlide = () => {
  const maxIndex = Math.max(0, projects.length - getVisibleSlides());
  setCurrentIndex((prevIndex) => 
    prevIndex === 0 ? maxIndex : prevIndex - 1
  );
};

const getVisibleSlides = () => {
  if (typeof window === 'undefined') return 3; // Default for SSR
  if (window.innerWidth >= 1024) return 3; // Desktop
  if (window.innerWidth >= 640) return 2;  // Tablet
  return 1; // Mobile
};

// Add window resize handler
React.useEffect(() => {
  const handleResize = () => {
    const maxIndex = Math.max(0, projects.length - getVisibleSlides());
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  };
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, [currentIndex, projects.length]);


  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="py-12 sm:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 section-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('portfolio.title').split(' ')[0]}{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('portfolio.title').split(' ')[1]}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </div>

        {/* Carousel */}
        <div className="relative section-reveal">
          <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / getVisibleSlides())}%)`,
              
            }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-4"
              >
                <div 
                  className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover-lift cursor-pointer border border-gray-100 dark:border-gray-700 transition-colors duration-300"
                  onClick={() => openProjectDetails(project)}
                >
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 sm:h-48 object-cover"
                    />
                    <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                      <div className={`p-1.5 sm:p-2 rounded-lg ${
                        project.category === 'web' 
                          ? 'bg-blue-500' 
                          : 'bg-purple-500'
                      }`}>
                        {project.category === 'web' ? (
                          <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        ) : (
                          <Smartphone className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                      {project.technologies.slice(0, 2).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 sm:px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 2 && (
                        <span className="px-2 sm:px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                          +{project.technologies.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border dark:border-gray-700"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border dark:border-gray-700"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        {/* Indicators */}
        {/* <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: projects.length - 2 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
            />
          ))}
        </div> */}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={closeProjectDetails}
                className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300 transform rotate-45" />
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-2 rounded-lg ${
                  selectedProject.category === 'web' 
                    ? 'bg-blue-500' 
                    : 'bg-purple-500'
                }`}>
                  {selectedProject.category === 'web' ? (
                    <Globe className="w-5 h-5 text-white" />
                  ) : (
                    <Smartphone className="w-5 h-5 text-white" />
                  )}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {selectedProject.title}
                </h3>
              </div>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {selectedProject.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {t('portfolio.features')}
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {t('portfolio.technologies')}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-gray-700 dark:text-gray-300 rounded-lg font-medium border border-blue-100 dark:border-blue-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {selectedProject.link && (
                <div className="flex space-x-4">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 space-x-2"
                  >
                    <span>{t('portfolio.view')}</span>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <button
                    onClick={closeProjectDetails}
                    className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300"
                  >
                    {t('portfolio.close')}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;