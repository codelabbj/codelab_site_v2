import {Project} from "../utils/CONSTANTS.ts";
import {ExternalLink, Globe, Smartphone, X, Code2} from "lucide-react";
import {useLanguage} from "../contexts/LanguageContext.tsx";

interface ProjectDetailsInterface {
    selectedProject: Project
    onClose: () => void
}

export const ProjectDetails = ({selectedProject,onClose}:ProjectDetailsInterface)=>{
    const {t} = useLanguage()

    return (
        <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => onClose()}
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
                        onClick={() => onClose()}
                        className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-2 hover:bg-white dark:hover:bg-gray-700 transition-colors shadow-lg"
                    >
                        <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    </button>
                    <div className="absolute bottom-4 left-4 flex gap-1">
                        {selectedProject.category.map((category) => (
                            <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold text-white backdrop-blur-sm ${category === 'web' ? 'bg-blue-500/90' : category === 'api' ? 'bg-green-500/90' : 'bg-purple-500/90'}`}>
                                {category === 'web' ? <Globe className="w-3 h-3" /> : category === 'api' ? <Code2 className="w-3 h-3" /> : <Smartphone className="w-3 h-3" />}
                                {category === 'web' ? 'Web' : category === 'api' ? 'API' : 'Mobile'}
                            </div>
                        ))}

                    </div>
                </div>

                <div className="p-8">
                    {selectedProject.link ? (
                        <a
                            href={selectedProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 group mb-3"
                        >
                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {selectedProject.title}
                            </h3>
                            <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0 mt-1" />
                        </a>
                    ) : (
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                            {selectedProject.title}
                        </h3>
                    )}
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
                            onClick={() =>onClose()}
                            className="px-6 py-3 border-2 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300"
                        >
                            {t('portfolio.close')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}