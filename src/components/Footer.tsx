import React from 'react';
// import { Code2, Heart } from 'lucide-react';
import { Linkedin, Facebook, MessageCircle, Youtube} from "lucide-react";
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8 sm:py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 animate-slide-down">
            
              <img className="logo-icon  w-8 h-8 sm:w-10 sm:h-10" src="/logo.png" alt="CodeLab Logo" width={40} height={40} />
           
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CodeLab
            </span>
          </div>
            <p className="text-gray-400 leading-relaxed my-4 text-sm sm:text-base">
              {t('footer.description')}
            </p>
            <div className="flex space-x-6">
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <a 
              href="https://www.linkedin.com/company/code-lab-bj/" 
              className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={18} />
              <span className="text-sm">LinkedIn</span>
            </a>
            <button className="flex items-center space-x-2 text-gray-400 hover:text-blue-500 transition-all duration-300 hover:scale-110">
              <Facebook size={18} />
              <span className="text-sm">Facebook</span>
            </button>
            <a 
              href="https://wa.me/22947030588" 
              className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-all duration-300 hover:scale-110"
            >
              <MessageCircle size={18} />
              <span className="text-sm">WhatsApp</span>
            </a>
          <button className="flex items-center space-x-2 text-gray-400 hover:text-red-400 transition-all duration-300 hover:scale-110">
              <Youtube size={18} />
              <span className="text-sm">YouTube</span>
            </button>
          </div>
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
            <span>© {new Date().getFullYear()} CodeLab</span>
            {/* <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>{t('footer.in')}</span> */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;