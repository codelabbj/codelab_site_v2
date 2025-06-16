// import React from 'react';
// import { Target, Users, Zap, Award } from 'lucide-react';
// import { useLanguage } from '../contexts/LanguageContext';

// const About: React.FC = () => {
//   const { t } = useLanguage();

//   const values = [
//     {
//       icon: Target,
//       title: t('about.mission.title'),
//       description: t('about.mission.description')
//     },
//     {
//       icon: Users,
//       title: t('about.team.title'),
//       description: t('about.team.description')
//     },
//     {
//       icon: Zap,
//       title: t('about.innovation.title'),
//       description: t('about.innovation.description')
//     },
//     {
//       icon: Award,
//       title: t('about.excellence.title'),
//       description: t('about.excellence.description')
//     }
//   ];

//   return (
//     <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
//               {t('about.title').split(' ')[0]} {t('about.title').split(' ')[1]} {t('about.title').split(' ')[2]}{' '}
//               <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 {t('about.title').split(' ')[3]}
//               </span>
//             </h2>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Content */}
//           <div className="section-reveal">
            
            
//             <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
//               {t('about.description1')}
//             </p>
            
//             <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
//               {t('about.description2')}
//             </p>

//            <div className="flex flex-wrap gap-4">
//             {/* Frontend Technologies */}
//             <div className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
//               React & Next.js
//             </div>
//             <div className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
//               Angular & Vue.js
//             </div>

//             {/* Backend Technologies */}
//             <div className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
//               java Spring & Django
//             </div>
//             <div className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
//               Node.js & FastApi
//             </div>
//             <div className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
//               .NET
//             </div>

//             {/* Mobile Technologies */}
//             <div className="px-4 py-2 bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300 rounded-full text-sm font-medium">
//               Flutter & React Native
//             </div>
//             <div className="px-4 py-2 bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300 rounded-full text-sm font-medium">
//               Swift & Kotlin
//             </div>

//             {/* Cloud & DevOps */}
//             <div className="px-4 py-2 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 rounded-full text-sm font-medium">
//               AWS & Azure
//             </div>
//             <div className="px-4 py-2 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 rounded-full text-sm font-medium">
//               Google Cloud
//             </div>
//             <div className="px-4 py-2 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 rounded-full text-sm font-medium">
//               Docker & Kubernetes
//             </div>

//             {/* AI & ML */}
//             <div className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full text-sm font-medium">
//               TensorFlow & PyTorch
//             </div>
//             <div className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full text-sm font-medium">
//               Hugging Face & Hugging Face
//             </div>
//             <div className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full text-sm font-medium">
//               Computer Vision
//             </div>
//             <div className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full text-sm font-medium">
//               NLP
//             </div>

//             {/* Business Intelligence */}
//             <div className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm font-medium">
//               Power BI
//             </div>

//             {/* Web3 & Blockchain */}
//             <div className="px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-full text-sm font-medium">
//               Blockchain
//             </div>
//             <div className="px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-full text-sm font-medium">
//               Web3
//             </div>
//             <div className="px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-full text-sm font-medium">
//               Solidity
//             </div>

//             {/* Extended Reality */}
//             <div className="px-4 py-2 bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-300 rounded-full text-sm font-medium">
//               AR/VR
//             </div>

//             {/* PHP Frameworks */}
//             <div className="px-4 py-2 bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-300 rounded-full text-sm font-medium">
//               Laravel
//             </div>
//             <div className="px-4 py-2 bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-300 rounded-full text-sm font-medium">
//               Symfony
//             </div>

//             {/* Other Frameworks */}
//             <div className="px-4 py-2 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 rounded-full text-sm font-medium">
//               Ruby on Rails
//             </div>
//           </div>
//           </div>

//           {/* Values Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {values.map((value, index) => {
//               const IconComponent = value.icon;
//               return (
//                 <div
//                   key={index}
//                   className="section-reveal p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-xl border border-gray-100 dark:border-gray-600 hover-lift transition-colors duration-300"
//                   style={{ animationDelay: `${index * 150}ms` }}
//                 >
//                   <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4">
//                     <IconComponent className="w-6 h-6 text-white" />
//                   </div>
                  
//                   <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
//                     {value.title}
//                   </h3>
                  
//                   <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
//                     {value.description}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

export default function CodeLabAbout() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const styles = {
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
    },
    body: {
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      background: theme === 'dark' ? 'linear-gradient(135deg, #0f1419 0%, #1a2332 100%)' : '#fff',
      color: theme === 'dark' ? '#e8eaed' : '#333',
      lineHeight: 1.6,
      minHeight: '100vh',
      width: '100%',
      padding: '0 2rem', // Reduced padding for mobile
      boxSizing: 'border-box',
      margin: 0,
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '80px 20px',
    },
    header: {
      textAlign: 'center',
      marginBottom: '60px', // Reduced for mobile
      position: 'relative',
    },
    headerBefore: {
      position: 'absolute' as const,
      top: '-20px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '60px',
      height: '4px',
      background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
      borderRadius: '2px',
    },
    headerH1: {
      fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', // Responsive font size
      fontWeight: 700,
      marginBottom: '20px',
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      animation: 'glow 3s ease-in-out infinite alternate',
    },
    title: {
      fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
      fontWeight: 800,
      marginBottom: '1.5rem',
      background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      lineHeight: 1.2,
    },
    subtitle: {
      fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
      color: '#9ca3af',
      maxWidth: '600px',
      margin: '0 auto',
      fontWeight: 300,
      padding: '0 1rem', // Add padding for mobile
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', // Responsive grid
      gap: 'clamp(1.5rem, 4vw, 2rem)',
      marginTop: '4rem',
    },
    content: {
      padding: 'clamp(1.5rem, 4vw, 2rem)',
      borderRadius: '1rem',
      backgroundColor: theme === 'dark' ? 'rgba(17, 24, 39, 0.7)' : 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(10px)',
      boxShadow: theme === 'dark' 
        ? '0 10px 30px -15px rgba(2, 12, 27, 0.7)' 
        : '0 10px 30px -15px rgba(0, 0, 0, 0.1)',
    },
    storySection: {
      animation: 'slideInLeft 0.8s ease-out',
    },
    storySectionH2: {
      fontSize: 'clamp(1.8rem, 4vw, 2.2rem)',
      marginBottom: '30px',
      color: theme === 'dark' ? '#f8fafc' : '#111827',
      position: 'relative',
      display: 'inline-block',
    },
    storySectionH2After: {
      content: "''",
      position: 'absolute',
      bottom: '-8px',
      left: 0,
      width: '100%',
      height: '2px',
      background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
    },
    storyText: {
      justify: 'left',
      fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
      color: theme === 'dark' ? '#d1d5db' : '#374151',
      marginBottom: '25px',
      lineHeight: 1.8,
    },
    visionCard: {
      background: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(255, 255, 255, 0.9)',
      border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
      borderRadius: '16px',
      padding: 'clamp(1.5rem, 4vw, 30px)',
      backdropFilter: 'blur(10px)',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
      animation: 'slideInRight 0.8s ease-out',
    },
    visionCardBefore: {
      content: "''",
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '1px',
      background: 'linear-gradient(90deg, transparent, #6366f1, transparent)',
    },
    visionIcon: {
      width: 'clamp(50px, 10vw, 60px)',
      height: 'clamp(50px, 10vw, 60px)',
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '20px',
      fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
    },
    visionCardH3: {
      fontSize: 'clamp(1.2rem, 3vw, 1.4rem)',
      marginBottom: '15px',
      color: theme === 'dark' ? '#f8fafc' : '#111827',
    },
    visionCardP: {
      color: theme === 'dark' ? '#d1d5db' : '#4b5563',
      lineHeight: 1.7,
      fontSize: 'clamp(0.9rem, 2.2vw, 1rem)',
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
      gap: 'clamp(1rem, 3vw, 20px)',
      marginBottom: '60px',
      marginTop: '60px',
    },
    featureCard: {
      background: theme === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.9)',
      border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.1)',
      borderRadius: '12px',
      padding: 'clamp(1.5rem, 4vw, 30px)',
      textAlign: 'center',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
      animation: 'fadeInUp 0.8s ease-out',
    },
    featureIcon: {
      width: 'clamp(60px, 12vw, 70px)',
      height: 'clamp(60px, 12vw, 70px)',
      margin: '0 auto 20px',
      borderRadius: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'clamp(1.5rem, 3.5vw, 1.8rem)',
      transition: 'all 0.3s ease',
    },
    missionIcon: {
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    },
    teamIcon: {
      background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
    },
    innovationIcon: {
      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
    },
    excellenceIcon: {
      background: 'linear-gradient(135deg, #10b981, #059669)',
    },
    featureCardH3: {
      fontSize: 'clamp(1.1rem, 2.8vw, 1.3rem)',
      marginBottom: '15px',
      color: theme === 'dark' ? '#f8fafc' : '#111827',
      fontWeight: 600,
    },
    featureCardP: {
      color: theme === 'dark' ? '#9ca3af' : '#4b5563',
      lineHeight: 1.6,
      fontSize: 'clamp(0.9rem, 2.2vw, 1rem)',
    },
    statsSection: {
      background: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(255, 255, 255, 0.9)',
      borderRadius: '20px',
      padding: 'clamp(30px, 6vw, 50px)',
      marginTop: '60px',
      textAlign: 'center',
      border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
      gap: 'clamp(20px, 5vw, 40px)',
    },
    stats: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '3rem',
      flexWrap: 'wrap',
      gap: 'clamp(1rem, 3vw, 1rem)',
    },
    statItem: {
      textAlign: 'center',
      flex: '1',
      minWidth: 'clamp(100px, 20vw, 120px)',
    },
    statNumber: {
      display: 'block',
      fontSize: 'clamp(2rem, 5vw, 2.5rem)',
      fontWeight: 700,
      color: theme === 'dark' ? '#8b5cf6' : '#6366f1',
      marginBottom: '0.5rem',
    },
    statLabel: {
      fontSize: 'clamp(0.9rem, 2.2vw, 1rem)',
      color: theme === 'dark' ? '#9ca3af' : '#6b7280',
    },
    text: {
      fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
      lineHeight: 1.8,
      marginBottom: '1.5rem',
      color: theme === 'dark' ? '#e5e7eb' : '#374151',
    },
    techTagsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'clamp(0.5rem, 2vw, 1rem)',
      marginTop: '2rem',
      justifyContent: 'center',
    },
    techTag: {
      padding: 'clamp(8px, 2vw, 12px) clamp(12px, 3vw, 16px)',
      borderRadius: '25px',
      fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
      fontWeight: 500,
      whiteSpace: 'nowrap',
      transition: 'all 0.3s ease',
    },
  } as const;

  const keyframes = `
    @keyframes glow {
      0% { filter: brightness(1); }
      100% { filter: brightness(1.2); }
    }

    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(-50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .vision-card-before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, #6366f1, transparent);
      width: 100%;
      z-index: 1;
    }

    .feature-card:nth-child(2) { animation-delay: 0.2s; }
    .feature-card:nth-child(3) { animation-delay: 0.4s; }
    .feature-card:nth-child(4) { animation-delay: 0.6s; }

    .feature-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.1), transparent);
      transition: left 0.6s ease;
    }

    .feature-card:hover::before {
      left: 100%;
    }

    .feature-card:hover {
      transform: translateY(-8px);
      border-color: rgba(99, 102, 241, 0.2);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    }

    .feature-card:hover .feature-icon {
      transform: scale(1.1) rotate(5deg);
    }

    .vision-card:hover {
      transform: translateY(-5px);
      border-color: rgba(99, 102, 241, 0.3);
      box-shadow: 0 20px 40px rgba(99, 102, 241, 0.1);
    }

    /* Responsive Media Queries */
    @media (max-width: 1200px) {
      .container {
        padding: 60px 20px !important;
      }
    }

    @media (max-width: 768px) {
      body {
        padding: 0 1rem !important;
      }
      
      .container {
        padding: 40px 15px !important;
      }
      
      .header {
        margin-bottom: 40px !important;
      }
      
      .content-grid {
        grid-template-columns: 1fr !important;
        gap: 30px !important;
        margin-top: 2rem !important;
      }
      
      .features-grid {
        grid-template-columns: 1fr !important;
        gap: 15px !important;
        margin-top: 40px !important;
        margin-bottom: 40px !important;
      }
      
      .stats-section {
        padding: 25px 15px !important;
        margin-top: 40px !important;
      }
      
      .stats-grid {
        gap: 25px !important;
      }
      
      .tech-tags-container {
        gap: 8px !important;
        margin-top: 1.5rem !important;
      }
    }

    @media (max-width: 480px) {
      body {
        padding: 0 0.5rem !important;
      }
      
      .container {
        padding: 30px 10px !important;
      }
      
      .header {
        margin-bottom: 30px !important;
      }
      
      .content-grid {
        gap: 20px !important;
        margin-top: 1.5rem !important;
      }
      
      .features-grid {
        gap: 12px !important;
        margin-top: 30px !important;
        margin-bottom: 30px !important;
      }
      
      .stats-section {
        padding: 20px 10px !important;
        margin-top: 30px !important;
      }
      
      .stats-grid {
        gap: 20px !important;
      }
      
      .tech-tags-container {
        gap: 6px !important;
        margin-top: 1rem !important;
      }
    }

    @media (max-width: 360px) {
      .content-grid {
        gap: 15px !important;
      }
      
      .features-grid {
        gap: 10px !important;
      }
      
      .stats-grid {
        gap: 15px !important;
      }
    }

    /* Hover effects only on non-touch devices */
    @media (hover: hover) and (pointer: fine) {
      .tech-tag:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
    }
  `;

  return (
    <div style={styles.body}>
      <style dangerouslySetInnerHTML={{ __html: keyframes }} />
      
      <div style={styles.container}>
        <div style={styles.header as React.CSSProperties} className="header">
          <h1 style={styles.headerH1}>{t('about.title')}</h1>
          <p style={styles.subtitle}>{t('about.subtitle')}</p>
        </div>

        <div style={styles.grid} className="content-grid">
          <div style={{...styles.content, ...styles.storySection}}>
            <h2 style={{...styles.storySectionH2, position: 'relative'}}>
              <div className="vision-card-before"></div>
              {t('about.story.title')}
            </h2>
            <p style={styles.storyText}>
              {t('about.story.description1')}
            </p>
            <p style={styles.storyText}>
              {t('about.story.description2')}
            </p>
          </div>

          <div style={styles.visionCard as React.CSSProperties} className="vision-card">
            <div className="vision-card-before"></div>
            <div style={styles.visionIcon}>🚀</div>
            <h3 style={styles.visionCardH3}>{t('about.vision.title')}</h3>
            <p style={styles.visionCardP}>
              {t('about.vision.description')}
            </p>
          </div>
        </div>

        <div style={styles.featuresGrid} className="features-grid">
          <div style={styles.featureCard as React.CSSProperties} className="feature-card mission">
            <div style={{...styles.featureIcon, ...styles.missionIcon}} className="feature-icon">🎯</div>
            <h3 style={styles.featureCardH3}>{t('about.mission.title')}</h3>
            <p style={styles.featureCardP}>{t('about.mission.description')}</p>
          </div>

          <div style={styles.featureCard as React.CSSProperties} className="feature-card team">
            <div style={{...styles.featureIcon, ...styles.teamIcon}} className="feature-icon">👥</div>
            <h3 style={styles.featureCardH3}>{t('about.team.title')}</h3>
            <p style={styles.featureCardP}>{t('about.team.description')}</p>
          </div>

          <div style={styles.featureCard as React.CSSProperties} className="feature-card innovation">
            <div style={{...styles.featureIcon, ...styles.innovationIcon}} className="feature-icon">⚡</div>
            <h3 style={styles.featureCardH3}>{t('about.innovation.title')}</h3>
            <p style={styles.featureCardP}>{t('about.innovation.description')}</p>
          </div>

          <div style={styles.featureCard as React.CSSProperties} className="feature-card excellence">
            <div style={{...styles.featureIcon, ...styles.excellenceIcon}} className="feature-icon">🏆</div>
            <h3 style={styles.featureCardH3}>{t('about.excellence.title')}</h3>
            <p style={styles.featureCardP}>{t('about.excellence.description')}</p>
          </div>
        </div>

        <div style={styles.techTagsContainer} className="tech-tags-container">
          {/* Frontend Technologies */}
          <div style={{
            ...styles.techTag,
            backgroundColor: theme === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgb(219, 234, 254)',
            color: theme === 'dark' ? 'rgb(147, 197, 253)' : 'rgb(30, 64, 175)'
          }} className="tech-tag">
            React & Next.js
          </div>
          <div style={{
            ...styles.techTag,
            backgroundColor: theme === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgb(219, 234, 254)',
            color: theme === 'dark' ? 'rgb(147, 197, 253)' : 'rgb(30, 64, 175)'
          }} className="tech-tag">
            Angular & Vue.js
          </div>

          {/* Backend Technologies */}
          <div style={{
            ...styles.techTag,
            backgroundColor: theme === 'dark' ? 'rgba(139, 92, 246, 0.2)' : 'rgb(237, 233, 254)',
            color: theme === 'dark' ? 'rgb(196, 181, 253)' : 'rgb(91, 33, 182)'
          }} className="tech-tag">
            Java Spring & Django
          </div>
          <div style={{
            ...styles.techTag,
            backgroundColor: theme === 'dark' ? 'rgba(139, 92, 246, 0.2)' : 'rgb(237, 233, 254)',
            color: theme === 'dark' ? 'rgb(196, 181, 253)' : 'rgb(91, 33, 182)'
          }} className="tech-tag">
            Node.js & FastApi
          </div>
          <div style={{
            ...styles.techTag,
            backgroundColor: theme === 'dark' ? 'rgba(139, 92, 246, 0.2)' : 'rgb(237, 233, 254)',
            color: theme === 'dark' ? 'rgb(196, 181, 253)' : 'rgb(91, 33, 182)'
          }} className="tech-tag">
            .NET
          </div>

          {/* Mobile Technologies */}
          <div style={{
            ...styles.techTag,
            backgroundColor: theme === 'dark' ? 'rgba(236, 72, 153, 0.2)' : 'rgb(252, 231, 243)',
            color: theme === 'dark' ? 'rgb(244, 114, 182)' : 'rgb(157, 23, 77)'
          }} className="tech-tag">
            Flutter & React Native
          </div>
          <div style={{
            ...styles.techTag,
            backgroundColor: theme === 'dark' ? 'rgba(236, 72, 153, 0.2)' : 'rgb(252, 231, 243)',
            color: theme === 'dark' ? 'rgb(244, 114, 182)' : 'rgb(157, 23, 77)'
          }} className="tech-tag">
            Swift & Kotlin
          </div>

          {/* Cloud & DevOps */}
          <div style={{
            ...styles.techTag,
            backgroundColor: theme === 'dark' ? 'rgba(6, 182, 212, 0.2)' : 'rgb(207, 250, 254)',
            color: theme === 'dark' ? 'rgb(103, 232, 249)' : 'rgb(14, 116, 144)'
          }} className="tech-tag">
            AWS & Azure
          </div>
          <div style={{
            ...styles.techTag,
            backgroundColor: theme === 'dark' ? 'rgba(6, 182, 212, 0.2)' : 'rgb(207, 250, 254)',
            color: theme === 'dark' ? 'rgb(103, 232, 249)' : 'rgb(14, 116, 144)'
          }} className="tech-tag">
            Google Cloud
          </div>
          <div style={{
            ...styles.techTag,
            backgroundColor: theme === 'dark' ? 'rgba(6, 182, 212, 0.2)' : 'rgb(207, 250, 254)',
            color: theme === 'dark' ? 'rgb(103, 232, 249)' : 'rgb(14, 116, 144)'
          }} className="tech-tag">
            Docker & Kubernetes
          </div>

          {/* AI & ML */}
          <div style={{
            ...styles.techTag,
            backgroundColor: theme === 'dark' ? 'rgba(16, 185, 129, 0.2)' : 'rgb(209, 250, 229)',
            color: theme === 'dark' ? 'rgb(110, 231, 183)' : 'rgb(6, 95, 70)'
          }} className="tech-tag">
            TensorFlow & PyTorch
          </div>
          <div style={{
            ...styles.techTag,
            backgroundColor: theme === 'dark' ? 'rgba(16, 185, 129, 0.2)' : 'rgb(209, 250, 229)',
            color: theme === 'dark' ? 'rgb(110, 231, 183)' : 'rgb(6, 95, 70)'
          }} className="tech-tag">
            Hugging Face
          </div>
          <div style={{
            ...styles.techTag,
            backgroundColor: theme === 'dark' ? 'rgba(16, 185, 129, 0.2)' : 'rgb(209, 250, 229)',
            color: theme === 'dark' ? 'rgb(110, 231, 183)' : 'rgb(6, 95, 70)'
          }} className="tech-tag">
            Computer Vision
          </div>
          <div style={{
            ...styles.techTag,
            backgroundColor: theme === 'dark' ? 'rgba(16, 185, 129, 0.2)' : 'rgb(209, 250, 229)',
            color: theme === 'dark' ? 'rgb(110, 231, 183)' : 'rgb(6, 95, 70)'
          }} className="tech-tag">
            NLP
          </div>

          {/* Business Intelligence */}
          <div style={{
            ...styles.techTag,
            backgroundColor: theme === 'dark' ? 'rgba(99, 102, 241, 0.2)' : 'rgb(224, 231, 255)',
            color: theme === 'dark' ? 'rgb(165, 180, 252)' : 'rgb(67, 56, 202)'
          }} className="tech-tag">
            Power BI
          </div>

          {/* Web3 & Blockchain */}
          <div style={{
            ...styles.techTag,
            backgroundColor: theme === 'dark' ? 'rgba(245, 158, 11, 0.2)' : 'rgb(254, 243, 199)',
            color: theme === 'dark' ? 'rgb(251, 191, 36)' : 'rgb(146, 64, 14)'
          }} className="tech-tag">
            Blockchain
          </div>
          <div style={{
            ...styles.techTag,
            backgroundColor: theme === 'dark' ? 'rgba(245, 158, 11, 0.2)' : 'rgb(254, 243, 199)',
            color: theme === 'dark' ? 'rgb(251, 191, 36)' : 'rgb(146, 64, 14)'
          }} className="tech-tag">
            Web3
          </div>
          <div style={{
            ...styles.techTag,
            backgroundColor: theme === 'dark' ? 'rgba(245, 158, 11, 0.2)' : 'rgb(254, 243, 199)',
            color: theme === 'dark' ? 'rgb(251, 191, 36)' : 'rgb(146, 64, 14)'
          }} className="tech-tag">
            Solidity
          </div>

          {/* Extended Reality */}
          <div style={{
            ...styles.techTag,
            backgroundColor: theme === 'dark' ? 'rgba(124, 58, 237, 0.2)' : 'rgb(245, 243, 255)',
            color: theme === 'dark' ? 'rgb(196, 181, 253)' : 'rgb(76, 29, 149)'
          }} className="tech-tag">
            AR/VR
          </div>

          
             {/* PHP Frameworks */}
             <div className="px-4 py-2 bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-300 rounded-full text-sm font-medium">
               Laravel
             </div>
             <div className="px-4 py-2 bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-300 rounded-full text-sm font-medium">
               Symfony
             </div>

             {/* Other Frameworks */}
             <div className="px-4 py-2 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 rounded-full text-sm font-medium">
               Ruby on Rails
            </div>
           </div>

        {/* <div style={styles.statsSection as React.CSSProperties} className="stats-section">
          <div style={styles.statsGrid}>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>150+</span>
              <span style={styles.statLabel as React.CSSProperties}>{t('about.stats.projects')}</span>
            </div>
            
            <div style={styles.statItem}>
              <span style={styles.statNumber}>50+</span>
              <span style={styles.statLabel as React.CSSProperties}>{t('about.stats.technologies')}</span>
            </div>
          </div>
        </div> */}
        
      </div>
    </div>
  );
}