import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: "Marie Dubois",
      role: "CTO, TechStart",
      content: "CodeLab a transformé notre approche du développement. Leur expertise technique et leur accompagnement ont été déterminants dans le succès de notre plateforme.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Pierre Martin",
      role: "Développeur Freelance",
      content: "Les formations CodeLab m'ont permis de maîtriser React et Node.js. Aujourd'hui, j'ai multiplié mes revenus par 3 grâce à ces nouvelles compétences.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Sarah Johnson",
      role: "Product Manager, InnovCorp",
      content: "Professionnalisme exemplaire et résultats au-delà de nos attentes. CodeLab comprend vraiment les enjeux business derrière chaque projet technique.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  const partners = [
    { name: "TechStart", logo: "TS" },
    { name: "InnovCorp", logo: "IC" },
    { name: "DigitalPro", logo: "DP" },
    { name: "CodeFirst", logo: "CF" },
    { name: "WebMasters", logo: "WM" },
    { name: "AppFactory", logo: "AF" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 section-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('testimonials.title').split(' ').slice(0, -2).join(' ')}{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('testimonials.title').split(' ').slice(-2).join(' ')}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="section-reveal bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover-lift border border-gray-100 dark:border-gray-700 relative transition-colors duration-300"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Quote className="absolute top-6 right-6 w-6 h-6 text-blue-200 dark:text-blue-700" />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Partners Section */}
        <div className="section-reveal">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            {t('testimonials.partners')}
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover-lift border border-gray-100 dark:border-gray-700 transition-colors duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{partner.logo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;