// import React from 'react';
// import { GraduationCap, Globe, Smartphone, Cog } from 'lucide-react';
// import { useLanguage } from '../contexts/LanguageContext';

// const Services: React.FC = () => {
//   const { t } = useLanguage();

//   const services = [
//     {
//       icon: GraduationCap,
//       title: t('services.training.title'),
//       description: t('services.training.description'),
//       features: [
//         t('services.training.feature1'),
//         t('services.training.feature2'),
//         t('services.training.feature3'),
//         t('services.training.feature4')
//       ]
//     },
//     {
//       icon: Globe,
//       title: t('services.web.title'),
//       description: t('services.web.description'),
//       features: [
//         t('services.web.feature1'),
//         t('services.web.feature2'),
//         t('services.web.feature3'),
//         t('services.web.feature4')
//       ]
//     },
//     {
//       icon: Smartphone,
//       title: t('services.mobile.title'),
//       description: t('services.mobile.description'),
//       features: [
//         t('services.mobile.feature1'),
//         t('services.mobile.feature2'),
//         t('services.mobile.feature3'),
//         t('services.mobile.feature4')
//       ]
//     },
//     {
//       icon: Cog,
//       title: t('services.engineering.title'),
//       description: t('services.engineering.description'),
//       features: [
//         t('services.engineering.feature1'),
//         t('services.engineering.feature2'),
//         t('services.engineering.feature3'),
//         t('services.engineering.feature4')
//       ]
//     }
//   ];

//   // i want you to follow the exact design and structure in the image to my code and make the theme and the multi language adaptable to the one in the code

//   return (
    // <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="text-center mb-16 section-reveal">
    //       <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
    //         {t('services.title').split(' ')[0]}{' '}
    //         <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
    //           {t('services.title').split(' ')[1]}
    //         </span>
    //       </h2>
    //       <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
    //         {t('services.subtitle')}
    //       </p>
    //     </div>
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    //       {services.map((service, index) => {
    //         const IconComponent = service.icon;
    //         return (
    //           <div
    //             key={index}
    //             className="section-reveal bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover-lift border border-gray-100 dark:border-gray-700 transition-colors duration-300"
    //             style={{ animationDelay: ${index * 200}ms }}
    //           >
    //             <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-6 mx-auto">
    //               <IconComponent className="w-8 h-8 text-white" />
    //             </div>
               
    //             <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
    //               {service.title}
    //             </h3>
               
    //             <p className="text-gray-600 dark:text-gray-300 mb-6 text-center leading-relaxed">
    //               {service.description}
    //             </p>
    //             <ul className="space-y-2">
    //               {service.features.map((feature, featureIndex) => (
    //                 <li key={featureIndex} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
    //                   <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3"></div>
    //                   {feature}
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </section>
  // );
// };

// export default Services;

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();
  const services = [
      {
        icon: '🎯',
        title: t('services.strategy.title'),
        description: t('services.strategy.description'),
        features: [
          t('services.strategy.feature1'),
          t('services.strategy.feature2'),
          t('services.strategy.feature3'),
          t('services.strategy.feature4'),
          t('services.strategy.feature5')
        ]
      },
      {
        icon: '💻',
        title: t('services.development.title'),
        description: t('services.development.description'),
        features: [
          t('services.development.feature1'),
          t('services.development.feature2'),
          t('services.development.feature3'),
          t('services.development.feature4'),
          t('services.development.feature5')
        ]
      },
      {
        icon: '🤖',
        title: t('services.ai.title'),
        description: t('services.ai.description'),
        features: [
          t('services.ai.feature1'),
          t('services.ai.feature2'),
          t('services.ai.feature3'),
          t('services.ai.feature4'),
          t('services.ai.feature5')
        ]
      },
      {
        icon: '☁️',
        title: t('services.infrastructure.title'),
        description: t('services.infrastructure.description'),
        features: [
          t('services.infrastructure.feature1'),
          t('services.infrastructure.feature2'),
          t('services.infrastructure.feature3'),
          t('services.infrastructure.feature4'),
          t('services.infrastructure.feature5')
        ]
      },
      {
        icon: '🎓',
        title: t('services.training.title'),
        description: t('services.training.description'),
        features: [
          t('services.training.feature1'),
          t('services.training.feature2'),
          t('services.training.feature3'),
          t('services.training.feature4'),
          t('services.training.feature5')
        ]
      },
      {
        icon: '🔧',
        title: t('services.support.title'),
        description: t('services.support.description'),
        features: [
          t('services.support.feature1'),
          t('services.support.feature2'),
          t('services.support.feature3'),
          t('services.support.feature4'),
          t('services.support.feature5')
        ]
      }
    ];

  return (
    <section id="services" className="min-h-screen  overflow-x-hidden bg-white dark:bg-gray-900 transition-colors duration-300" 
         style={{
           fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif'
         }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-20 section-reveal">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-8 tracking-tight">
           <span className='text-black dark:text-white'> {t('services.title').split(' ')[0]}{' '} </span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t('services.title').split(' ')[1]}
            </span>
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto text-gray-600 dark:text-gray-300 font-light">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16 px-2 sm:px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="section-reveal relative p-6 sm:p-10 rounded-3xl border transition-all duration-500 ease-out hover:-translate-y-2 group overflow-hidden bg-gray-50 dark:bg-gray-800 backdrop-blur-sm border-purple-500/20 hover:border-purple-400/40 hover:shadow-2xl hover:shadow-purple-500/10"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Hover overlay */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'bg-white dark:bg-gray-900',
                }}
              />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl text-3xl mb-8 shadow-lg">
                  {service.icon}
                </div>
                
                <h3 className="text-3xl font-bold mb-5 text-gray-900 dark:text-white leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-lg leading-relaxed mb-8 text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-gray-600 dark:text-gray-300">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-20 p-6 sm:p-8 md:p-16 rounded-2xl sm:rounded-3xl border section-reveal bg-white dark:bg-gray-900 backdrop-blur-sm border-purple-500/20 mx-2 sm:mx-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-5 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {t('services.cta.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('services.cta.subtitle')}
          </p>
          <a href='#contact' className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-1 text-base sm:text-lg">
            {t('services.cta.button')}
          </a>
        </div>
      </div>
    </section>
    
  );
};

export default Services;


// import React from 'react';
// import { useLanguage } from '../contexts/LanguageContext';
// import { GraduationCap, Globe, Smartphone, Cog } from 'lucide-react';
// <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     {/* Header */}
//     <div className="text-center mb-16 section-reveal">
//       <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
//         {t('services.title').split(' ')[0]}{' '}
//         <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//           {t('services.title').split(' ')[1]}
//         </span>
//       </h2>
//       <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//         {t('services.subtitle')}
//       </p>
//     </div>

//     {/* Services Grid */}
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//       {services.map((service, index) => {
//         const IconComponent = service.icon;
//         return (
//           <div
//             key={index}
//             className="section-reveal bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover-lift border border-gray-100 dark:border-gray-700 transition-all duration-500 ease-out hover:-translate-y-2"
//             style={{ animationDelay: `${index * 200}ms` }}
//           >
//             <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-6 mx-auto text-white text-2xl">
//               <IconComponent className="w-8 h-8" />
//             </div>

//             <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
//               {service.title}
//             </h3>

//             <p className="text-gray-600 dark:text-gray-300 mb-6 text-center leading-relaxed">
//               {service.description}
//             </p>

//             <ul className="space-y-2">
//               {service.features.map((feature, featureIndex) => (
//                 <li key={featureIndex} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
//                   <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3 mt-1 flex-shrink-0"></div>
//                   {feature}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         );
//       })}
//     </div>

//     {/* CTA Section */}
//     <div className="text-center mt-20 p-12 rounded-3xl section-reveal bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700">
//       <h2 className="text-4xl md:text-5xl font-bold mb-5 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//         {t('services.cta.title')}
//       </h2>
//       <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
//         {t('services.cta.subtitle')}
//       </p>
//       <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-10 py-5 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-lg">
//         {t('services.cta.button')}
//       </button>
//     </div>
//   </div>
// </section>
