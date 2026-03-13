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
    <section id="services" className="overflow-x-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Header */}
        <div className="text-center mb-20 section-reveal">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">
           <span className='text-black dark:text-white'> {t('services.title').split(' ')[0]}{' '} </span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t('services.title').split(' ')[1]}
            </span>
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto text-gray-500 dark:text-gray-400">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="section-reveal group relative bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700/60 hover:border-blue-300/60 dark:hover:border-blue-700/60 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-900/30 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >

              {/* Index watermark */}
              <span className="absolute top-4 right-5 text-4xl font-black text-gray-100 dark:text-gray-700/60 select-none leading-none">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Icon */}
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-100 dark:border-blue-800/40 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white leading-tight">
                {service.title}
              </h3>

              <p className="text-sm leading-relaxed mb-4 text-gray-500 dark:text-gray-400">
                {service.description}
              </p>

              <ul className="space-y-1.5">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <div className="w-1 h-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative mt-16 section-reveal overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-700/60 bg-white dark:bg-gray-800">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-transparent to-purple-50/60 dark:from-blue-900/10 dark:to-purple-900/10 pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-40" />
          <div className="relative text-center px-6 py-14 sm:py-16 md:py-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              {t('services.cta.title')}
            </h2>
            <p className="text-base text-gray-500 dark:text-gray-400 mb-8 max-w-xl mx-auto">
              {t('services.cta.subtitle')}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-0.5 text-sm"
            >
              {t('services.cta.button')}
            </a>
          </div>
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
