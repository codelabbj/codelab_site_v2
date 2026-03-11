import React, { useState, useEffect, useRef } from 'react';
import {ChevronLeft, ChevronRight, Smartphone, Globe, Expand, Layers} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import {ProjectDetails} from "./ProjectDetails.tsx";
import {Project, PROJECTS} from "../utils/CONSTANTS.ts";


const AUTO_SCROLL_INTERVAL = 3000;
const PAUSE_AFTER_INTERACTION = 4000;

const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [currentIndex3, setCurrentIndex3] = useState(0);
  const [paused1, setPaused1] = useState(false);
  const [paused2, setPaused2] = useState(false);
  const [paused3, setPaused3] = useState(false);
  const [skipTransition1, setSkipTransition1] = useState(false);
  const [skipTransition2, setSkipTransition2] = useState(false);
  const [skipTransition3, setSkipTransition3] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const pauseTimer1 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pauseTimer2 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pauseTimer3 = useRef<ReturnType<typeof setTimeout> | null>(null);

  const projects: Project[] = PROJECTS.slice(0,4);

  const getVisibleSlides = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  };

  const getMaxIndex = (totalSlides = projects.length) => Math.max(0, totalSlides - getVisibleSlides());

  const triggerPause = (setPaused: React.Dispatch<React.SetStateAction<boolean>>, timerRef: React.MutableRefObject<ReturnType<typeof setTimeout> | null>) => {
    setPaused(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setPaused(false), PAUSE_AFTER_INTERACTION);
  };
  
  type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

  const jumpTo = (index: number, setIndex: SetState<number>, setSkip: SetState<boolean>) => {
    setSkip(true);
    setIndex(index);
    requestAnimationFrame(() => requestAnimationFrame(() => setSkip(false)));
  };

  const nextSlide = (
    currentIndex: number,
    setCurrentIndex: SetState<number>,
    setPaused: SetState<boolean>,
    timerRef: React.MutableRefObject<ReturnType<typeof setTimeout> | null>,
    setSkipTransition: SetState<boolean>,
    totalSlides = projects.length
  ) => {
    const max = getMaxIndex(totalSlides);
    if (currentIndex >= max) jumpTo(0, setCurrentIndex, setSkipTransition);
    else setCurrentIndex((p) => p + 1);
    triggerPause(setPaused, timerRef);
  };

  const prevSlide = (
    currentIndex: number,
    setCurrentIndex: SetState<number>,
    setPaused: SetState<boolean>,
    timerRef: React.MutableRefObject<ReturnType<typeof setTimeout> | null>,
    setSkipTransition: SetState<boolean>,
    totalSlides = projects.length
  ) => {
    const max = getMaxIndex(totalSlides);
    if (currentIndex === 0) jumpTo(max, setCurrentIndex, setSkipTransition);
    else setCurrentIndex((p) => p - 1);
    triggerPause(setPaused, timerRef);
  };
  
  // Auto-scroll: carousel 1 goes left (next), carousel 2 goes right (prev)
  useEffect(() => {
    if (paused1) return;
    const id = setInterval(() => {
      setCurrentIndex1((prev) => {
        if (prev >= getMaxIndex()) {
          setSkipTransition1(true);
          requestAnimationFrame(() => requestAnimationFrame(() => setSkipTransition1(false)));
          return 0;
        }
        return prev + 1;
      });
    }, AUTO_SCROLL_INTERVAL);
    return () => clearInterval(id);
  }, [paused1, projects.length]);

  useEffect(() => {
    if (paused2) return;
    const id = setInterval(() => {
      setCurrentIndex2((prev) => {
        if (prev === 0) {
          setSkipTransition2(true);
          requestAnimationFrame(() => requestAnimationFrame(() => setSkipTransition2(false)));
          return getMaxIndex();
        }
        return prev - 1;
      });
    }, AUTO_SCROLL_INTERVAL);
    return () => clearInterval(id);
  }, [paused2, projects.length]);
  
  useEffect(() => {
    const handleResize = () => {
      const max = getMaxIndex();
      const max3 = getMaxIndex(projects.length + 1);
      if (currentIndex1 > max) setCurrentIndex1(max);
      if (currentIndex2 > max) setCurrentIndex2(max);
      if (currentIndex3 > max3) setCurrentIndex3(max3);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex1, currentIndex2, currentIndex3]);


  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
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
        {/*
        * Carousel 1 — auto-scrolls left
        <div className="relative section-reveal">
          <div className="overflow-hidden">
            <div
                className={`flex ${skipTransition1 ? '' : 'transition-transform duration-500 ease-in-out'}`}
                style={{ transform: `translateX(-${currentIndex1 * (100 / getVisibleSlides())}%)` }}
            >
              {projects.map((project) => (
                  <div key={project.id} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-4">
                    <div
                        className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover-lift cursor-pointer border border-gray-100 dark:border-gray-700 transition-colors duration-300"
                        onClick={() => openProjectDetails(project)}
                    >
                      <div className="relative">
                        <img src={project.image} alt={project.title} className="w-full h-40 sm:h-48 object-cover" />
                        <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                          <div className={`p-1.5 sm:p-2 rounded-lg ${project.category === 'web' ? 'bg-blue-500' : 'bg-purple-500'}`}>
                            {project.category === 'web' ? <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-white" /> : <Smartphone className="w-3 h-3 sm:w-4 sm:h-4 text-white" />}
                          </div>
                        </div>
                      </div>
                      <div className="p-4 sm:p-6">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">{project.title}</h3>
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 line-clamp-3">{project.description}</p>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                          {project.technologies.slice(0, 2).map((tech, techIndex) => (
                              <span key={techIndex} className="px-2 sm:px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">{tech}</span>
                          ))}
                          {project.technologies.length > 2 && (
                              <span className="px-2 sm:px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">+{project.technologies.length - 2}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
          <button onClick={() => prevSlide(currentIndex1, setCurrentIndex1, setPaused1, pauseTimer1, setSkipTransition1)} className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border dark:border-gray-700">
            <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
          <button onClick={() => nextSlide(currentIndex1, setCurrentIndex1, setPaused1, pauseTimer1, setSkipTransition1)} className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border dark:border-gray-700">
            <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        * Carousel 2 — auto-scrolls right
        <div className="relative section-reveal py-3">
          <div className="overflow-hidden">
            <div
                className={`flex ${skipTransition2 ? '' : 'transition-transform duration-500 ease-in-out'}`}
                style={{ transform: `translateX(-${currentIndex2 * (100 / getVisibleSlides())}%)` }}
            >
              {projects.map((project) => (
                  <div key={project.id} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-4">
                    <div
                        className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover-lift cursor-pointer border border-gray-100 dark:border-gray-700 transition-colors duration-300"
                        onClick={() => openProjectDetails(project)}
                    >
                      <div className="relative">
                        <img src={project.image} alt={project.title} className="w-full h-40 sm:h-48 object-cover" />
                        <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                          <div className={`p-1.5 sm:p-2 rounded-lg ${project.category === 'web' ? 'bg-blue-500' : 'bg-purple-500'}`}>
                            {project.category === 'web' ? <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-white" /> : <Smartphone className="w-3 h-3 sm:w-4 sm:h-4 text-white" />}
                          </div>
                        </div>
                      </div>
                      <div className="p-4 sm:p-6">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">{project.title}</h3>
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 line-clamp-3">{project.description}</p>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                          {project.technologies.slice(0, 2).map((tech, techIndex) => (
                              <span key={techIndex} className="px-2 sm:px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">{tech}</span>
                          ))}
                          {project.technologies.length > 2 && (
                              <span className="px-2 sm:px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">+{project.technologies.length - 2}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
          <button onClick={() => prevSlide(currentIndex2, setCurrentIndex2, setPaused2, pauseTimer2, setSkipTransition2)} className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border dark:border-gray-700">
            <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
          <button onClick={() => nextSlide(currentIndex2, setCurrentIndex2, setPaused2, pauseTimer2, setSkipTransition2)} className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border dark:border-gray-700">
            <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        */}

        <div className="relative section-reveal py-3">
          <div className="overflow-hidden py-2">
            <div
                className='flex transition-transform duration-500 ease-in-out'
                style={{ transform: `translateX(-${currentIndex3 * (100 / getVisibleSlides())}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-4">
                  <div
                    className="group bg-white dark:bg-gray-800/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl cursor-pointer border border-gray-100 dark:border-gray-700/60 transition-all duration-300"
                    onClick={() => openProjectDetails(project)}
                  >
                    <div className="relative overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-44 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-3 left-3 flex gap-1">
                        {
                          project.category.map((category) => (
                              <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold text-white backdrop-blur-sm ${category === 'web' ? 'bg-blue-500/90' : 'bg-purple-500/90'}`}>
                                {category === 'web' ? <Globe className="w-3 h-3" /> : <Smartphone className="w-3 h-3" />}
                              </div>
                          ))
                        }

                      </div>
                      <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center">
                          <Expand className="w-3.5 h-3.5 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white mb-2 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 line-clamp-1">{project.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-0.5 bg-gray-50 dark:bg-gray-700/60 text-gray-600 dark:text-gray-300 rounded-md text-xs font-medium border border-gray-100 dark:border-gray-600/50">{tech}</span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-0.5 bg-gray-50 dark:bg-gray-700/60 text-gray-400 dark:text-gray-500 rounded-md text-xs border border-gray-100 dark:border-gray-600/50">+{project.technologies.length - 3}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-4">
                <a href="/portfolio" className="group flex flex-col items-center justify-center h-full min-h-[280px] bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border-2 border-dashed border-blue-200 dark:border-blue-700/50 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-lg">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Layers className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Voir plus de projets</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center px-6 leading-relaxed">Découvrez l'ensemble de notre portfolio</p>
                  <div className="mt-5 flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-semibold group-hover:gap-3 transition-all duration-200">
                    <span>Explorer</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <button onClick={() => prevSlide(currentIndex3, setCurrentIndex3, setPaused3, pauseTimer3, setSkipTransition3, projects.length + 1)} className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border dark:border-gray-700">
            <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
          <button onClick={() => nextSlide(currentIndex3, setCurrentIndex3, setPaused3, pauseTimer3, setSkipTransition3, projects.length + 1)} className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border dark:border-gray-700">
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
          <ProjectDetails selectedProject={selectedProject} onClose={()=>setSelectedProject(null)}/>
      )}
    </section>
  );
};

export default Portfolio;