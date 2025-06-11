import React from 'react';
import { Code2, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 animate-slide-down">
            
              <img className="logo-icon" src="/logo.png" alt="CodeLab Logo" width={40} height={40} />
           
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CodeLab
            </span>
          </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-white transition-colors">
                LinkedIn
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                Twitter
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                GitHub
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">{t('services.training.title')}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{t('services.web.title')}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{t('services.mobile.title')}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{t('services.engineering.title')}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>hello@codelab.bj</li>
              <li>+229 0147030588</li>
              <li>Immeuble en face de l'école Bakhita, Abomey-calavi</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>© 2024 CodeLab. {t('footer.made')}</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>{t('footer.in')}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;