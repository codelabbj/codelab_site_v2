import React, { useState } from 'react';
import { ExternalLink, Smartphone, Globe, X, ChevronLeft, Expand , Layers } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
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

type Filter = 'all' | 'web' | 'mobile';

export const PortfolioPage = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<Filter>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);
  const webCount = projects.filter(p => p.category === 'web').length;
  const mobileCount = projects.filter(p => p.category === 'mobile').length;

  const filters: { key: Filter; label: string; count: number }[] = [
    { key: 'all',    label: 'Tous',   count: projects.length },
    { key: 'web',    label: 'Web',    count: webCount },
    { key: 'mobile', label: 'Mobile', count: mobileCount },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />

      {/* Hero */}
      <div className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-950/20 dark:to-purple-950/20">
        {/* Decorative blobs */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8 group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Retour à l'accueil
          </a>

          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-4">
              Notre travail
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Nos{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Réalisations
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              De l'idée au produit fini — découvrez les projets que nous avons conçus, développés et livrés pour nos clients.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12">
            {[
              { value: `${projects.length}+`, label: 'Projets livrés' },
              { value: `${webCount}`, label: 'Applications web' },
              { value: `${mobileCount}`, label: 'Apps mobiles' },
            ].map(stat => (
              <div key={stat.label}>
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{stat.value}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter + Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Filter tabs */}
        <div className="flex items-center gap-2 mb-10 bg-gray-100 dark:bg-gray-800 p-1.5 rounded-xl w-fit">
          {filters.map(({ key, label, count }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                filter === key
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
              }`}
            >
              {label}
              <span className={`text-xs px-1.5 py-0.5 rounded-md font-medium ${
                filter === key
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
              }`}>
                {count}
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(project => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl cursor-pointer border border-gray-100 dark:border-gray-700/60 transition-all duration-300"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 left-3">
                  <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold text-white backdrop-blur-sm ${project.category === 'web' ? 'bg-blue-500/90' : 'bg-purple-500/90'}`}>
                    {project.category === 'web' ? <Globe className="w-3 h-3" /> : <Smartphone className="w-3 h-3" />}
                    {project.category === 'web' ? 'Web' : 'Mobile'}
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center">
                    <Expand className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white mb-2 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-2 py-0.5 bg-gray-50 dark:bg-gray-700/60 text-gray-600 dark:text-gray-300 rounded-md text-xs font-medium border border-gray-100 dark:border-gray-600/50">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-0.5 bg-gray-50 dark:bg-gray-700/60 text-gray-400 dark:text-gray-500 rounded-md text-xs border border-gray-100 dark:border-gray-600/50">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-2 hover:bg-white dark:hover:bg-gray-700 transition-colors shadow-lg"
              >
                <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
              <div className="absolute bottom-4 left-4">
                <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold text-white backdrop-blur-sm ${selectedProject.category === 'web' ? 'bg-blue-500/90' : 'bg-purple-500/90'}`}>
                  {selectedProject.category === 'web' ? <Globe className="w-3 h-3" /> : <Smartphone className="w-3 h-3" />}
                  {selectedProject.category === 'web' ? 'Web' : 'Mobile'}
                </div>
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                {selectedProject.title}
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="mb-7">
                <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                  {t('portfolio.features')}
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                  {t('portfolio.technologies')}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-blue-100 dark:border-blue-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2 border-t border-gray-100 dark:border-gray-700">
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    {t('portfolio.view')}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 border-2 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300"
                >
                  {t('portfolio.close')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;