import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const handleGetStarted = () => {
    window.open('https://app.codelab.fr', '_blank');
  };

  return (
    <section className="min-h-screen w-full max-w-7xl flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 m-0 p-0">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 dark:bg-purple-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-emerald-200 dark:bg-emerald-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full border border-blue-200/50 dark:border-blue-700/50 mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {t('hero.badge')}
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up delay-200">
            {t('hero.title.transform')}{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              {t('hero.title.ideas')}
            </span>
            <br />
            {t('hero.title.reality')}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-400">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-600">
            <button
              onClick={handleGetStarted}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 flex items-center space-x-2"
            >
              <span>{t('hero.cta.start')}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold text-lg hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300"
            >
              {t('hero.cta.learn')}
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-fade-in-up delay-800">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">100+</div>
              <div className="text-gray-600 dark:text-gray-400">{t('hero.stats.projects')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">200+</div>
              <div className="text-gray-600 dark:text-gray-400">{t('hero.stats.students')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">98%</div>
              <div className="text-gray-600 dark:text-gray-400">{t('hero.stats.satisfaction')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;