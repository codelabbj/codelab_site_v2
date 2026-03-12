import { useState } from 'react';
import { Smartphone, Globe, Expand, Code2 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {PROJECTS} from "../utils/CONSTANTS.ts";
import {ProjectDetails} from "../components/ProjectDetails.tsx";

interface Project {
  id: number;
  title: string;
  category: string[];
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  features: string[];
}

const projects: Project[] = PROJECTS;

type Filter = 'all' | 'web' | 'mobile'|'api';

export default function PortfolioPage () {
  const [filter, setFilter] = useState<Filter>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category.some(c => c===filter));
  const webCount = projects.filter(p => p.category.some(c=> c==="web")).length;
  const mobileCount = projects.filter(p => p.category.some(c => c=== "mobile")).length;
  const apiCount = projects.filter(p => p.category.some(c=> c==="api")).length

  const filters: { key: Filter; label: string; count: number }[] = [
    { key: 'all',    label: 'Tous',   count: projects.length },
    { key: 'web',    label: 'Web',    count: webCount },
    { key: 'mobile', label: 'Mobile', count: mobileCount },
      { key: 'api', label: 'API',   count: apiCount },
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
          <div className="max-w-3xl">
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
        <div className="flex items-center gap-1 sm:gap-2 mb-10 bg-gray-100 dark:bg-gray-800 p-1 sm:p-1.5 rounded-xl w-full sm:w-fit">
          {filters.map(({ key, label, count }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                filter === key
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
              }`}
            >
              {label}
              <span className={`text-xs px-1 sm:px-1.5 py-0.5 rounded-md font-medium ${
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
                <div className="absolute top-3 left-3 flex gap-1">
                  {project.category.map((category) => (
                      <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold text-white backdrop-blur-sm ${category === 'web' ? 'bg-blue-500/90' : category === 'api' ? 'bg-green-500/90' : 'bg-purple-500/90'}`}>
                        {category === 'web' ? <Globe className="w-3 h-3" /> : category === 'api' ? <Code2 className="w-3 h-3" /> : <Smartphone className="w-3 h-3" />}
                        {category === 'web' ? 'Web' : category === 'api' ? 'API' : 'Mobile'}
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
                <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white mb-2 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-4 leading-relaxed">
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
          <ProjectDetails selectedProject={selectedProject} onClose={()=>setSelectedProject(null)}/>
      )}
    </div>
  );
};
