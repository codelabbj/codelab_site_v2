import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fr: {
    // Header
    'nav.services': 'Services',
    'nav.portfolio': 'Réalisations',
    'nav.about': 'À propos',
    'nav.testimonials': 'Témoignages',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.badge': 'Votre partenaire technologique de confiance',
    'hero.title.transform': 'Transformez vos',
    'hero.title.ideas': 'idées',
    'hero.title.reality': 'en réalité technologique',
    'hero.subtitle': 'Expertise en ingénierie logicielle, formations de pointe et solutions sur mesure pour propulser votre entreprise vers l\'avenir numérique.',
    'hero.cta.start': 'Commencer maintenant',
    'hero.cta.learn': 'En savoir plus',
    'hero.stats.projects': 'Projets réalisés',
    'hero.stats.students': 'Étudiants formés',
    'hero.stats.satisfaction': 'Satisfaction client',
    
    // Services
    'services.title': 'Nos Services',
    'services.subtitle': 'De la formation à la réalisation, nous vous accompagnons à chaque étape de votre transformation digitale avec expertise et innovation.',
    'services.training.title': 'Formations en ligne',
    'services.training.description': 'Plateforme e-learning complète avec cours interactifs, projets pratiques et suivi personnalisé. Maîtrisez les technologies les plus demandées du marché.',
    'services.training.feature1': 'Cours interactifs',
    'services.training.feature2': 'Projets pratiques',
    'services.training.feature3': 'Mentorat personnalisé',
    'services.training.feature4': 'Certifications',
    'services.web.title': 'Développement Web',
    'services.web.description': 'Sites web modernes, performants et responsives. De la conception à la mise en ligne, nous créons des expériences utilisateur exceptionnelles.',
    'services.web.feature1': 'Design responsive',
    'services.web.feature2': 'Performance optimisée',
    'services.web.feature3': 'SEO avancé',
    'services.web.feature4': 'Maintenance continue',
    'services.mobile.title': 'Applications Mobiles',
    'services.mobile.description': 'Applications natives et cross-platform pour iOS et Android. Interface intuitive, performances élevées et intégration parfaite avec vos systèmes.',
    'services.mobile.feature1': 'iOS & Android',
    'services.mobile.feature2': 'Interface native',
    'services.mobile.feature3': 'Synchronisation cloud',
    'services.mobile.feature4': 'Notifications push',
    'services.engineering.title': 'Ingénierie Logicielle',
    'services.engineering.description': 'Solutions sur mesure pour entreprises. Architecture robuste, scalabilité garantie et intégration seamless avec votre écosystème existant.',
    'services.engineering.feature1': 'Architecture sur mesure',
    'services.engineering.feature2': 'Scalabilité garantie',
    'services.engineering.feature3': 'API robustes',
    'services.engineering.feature4': 'Support technique',
    
    // Portfolio
    'portfolio.title': 'Nos Réalisations',
    'portfolio.subtitle': 'Découvrez quelques-uns de nos projets les plus remarquables. Des sites web aux applications mobiles, chaque projet reflète notre expertise et notre passion pour l\'innovation.',
    'portfolio.details': 'Voir les détails',
    'portfolio.features': 'Fonctionnalités principales',
    'portfolio.technologies': 'Technologies utilisées',
    'portfolio.view': 'Voir le projet',
    'portfolio.close': 'Fermer',
    
    // About
    'about.title': 'À propos de CodeLab',
    'about.description1': 'Fondée en 2020, CodeLab est née de la passion de démocratiser l\'accès aux technologies de pointe. Nous combinons expertise technique de haut niveau et pédagogie innovante pour transformer les défis technologiques en opportunités de croissance.',
    'about.description2': 'Notre vision : créer un écosystème où l\'apprentissage continu et l\'innovation technologique se rencontrent pour façonner l\'avenir numérique des entreprises et des individus.',
    'about.mission.title': 'Mission',
    'about.mission.description': 'Démocratiser l\'accès aux technologies de pointe et accompagner la transformation digitale des entreprises.',
    'about.team.title': 'Équipe',
    'about.team.description': 'Une équipe d\'experts passionnés, développeurs seniors et formateurs certifiés avec plus de 10 ans d\'expérience.',
    'about.innovation.title': 'Innovation',
    'about.innovation.description': 'Toujours à la pointe des dernières technologies pour vous offrir des solutions d\'avant-garde.',
    'about.excellence.title': 'Excellence',
    'about.excellence.description': 'Engagement qualité dans chaque projet avec un taux de satisfaction client de 98% depuis notre création.',
    
    // Testimonials
    'testimonials.title': 'Ce que disent nos clients',
    'testimonials.subtitle': 'La satisfaction de nos clients et étudiants est notre plus grande fierté. Découvrez leurs témoignages et success stories.',
    'testimonials.partners': 'Ils nous font confiance',
    
    // Contact
    'contact.title': 'Contactez-nous',
    'contact.subtitle': 'Prêt à démarrer votre projet ? Discutons de vos besoins et trouvons ensemble la solution parfaite pour votre entreprise.',
    'contact.discuss': 'Parlons de votre projet',
    'contact.email': 'Email',
    'contact.phone': 'Téléphone',
    'contact.address': 'Adresse',
    'contact.consultation': 'Consultation gratuite',
    'contact.consultation.description': 'Bénéficiez d\'une consultation gratuite de 30 minutes pour discuter de votre projet et recevoir nos premiers conseils d\'experts.',
    'contact.form.name': 'Nom complet',
    'contact.form.email': 'Email',
    'contact.form.company': 'Entreprise',
    'contact.form.message': 'Message',
    'contact.form.name.placeholder': 'Votre nom',
    'contact.form.email.placeholder': 'votre.email@exemple.com',
    'contact.form.company.placeholder': 'Nom de votre entreprise',
    'contact.form.message.placeholder': 'Décrivez votre projet ou vos besoins...',
    'contact.form.send': 'Envoyer le message',
    'contact.form.sent': 'Message envoyé !',
    
    // Footer
    'footer.description': 'Votre partenaire technologique pour transformer vos idées en solutions innovantes. Expertise, formation et accompagnement personnalisé.',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.made': 'Fait avec',
    'footer.in': 'à Paris',
  },
  en: {
    // Header
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'About',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.badge': 'Your trusted technology partner',
    'hero.title.transform': 'Transform your',
    'hero.title.ideas': 'ideas',
    'hero.title.reality': 'into technological reality',
    'hero.subtitle': 'Software engineering expertise, cutting-edge training and custom solutions to propel your business into the digital future.',
    'hero.cta.start': 'Get Started',
    'hero.cta.learn': 'Learn More',
    'hero.stats.projects': 'Projects completed',
    'hero.stats.students': 'Students trained',
    'hero.stats.satisfaction': 'Client satisfaction',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'From training to implementation, we support you at every step of your digital transformation with expertise and innovation.',
    'services.training.title': 'Online Training',
    'services.training.description': 'Complete e-learning platform with interactive courses, practical projects and personalized follow-up. Master the most in-demand technologies in the market.',
    'services.training.feature1': 'Interactive courses',
    'services.training.feature2': 'Practical projects',
    'services.training.feature3': 'Personal mentoring',
    'services.training.feature4': 'Certifications',
    'services.web.title': 'Web Development',
    'services.web.description': 'Modern, performant and responsive websites. From design to deployment, we create exceptional user experiences.',
    'services.web.feature1': 'Responsive design',
    'services.web.feature2': 'Optimized performance',
    'services.web.feature3': 'Advanced SEO',
    'services.web.feature4': 'Continuous maintenance',
    'services.mobile.title': 'Mobile Applications',
    'services.mobile.description': 'Native and cross-platform applications for iOS and Android. Intuitive interface, high performance and perfect integration with your systems.',
    'services.mobile.feature1': 'iOS & Android',
    'services.mobile.feature2': 'Native interface',
    'services.mobile.feature3': 'Cloud synchronization',
    'services.mobile.feature4': 'Push notifications',
    'services.engineering.title': 'Software Engineering',
    'services.engineering.description': 'Custom solutions for businesses. Robust architecture, guaranteed scalability and seamless integration with your existing ecosystem.',
    'services.engineering.feature1': 'Custom architecture',
    'services.engineering.feature2': 'Guaranteed scalability',
    'services.engineering.feature3': 'Robust APIs',
    'services.engineering.feature4': 'Technical support',
    
    // Portfolio
    'portfolio.title': 'Our Portfolio',
    'portfolio.subtitle': 'Discover some of our most remarkable projects. From websites to mobile applications, each project reflects our expertise and passion for innovation.',
    'portfolio.details': 'View details',
    'portfolio.features': 'Key features',
    'portfolio.technologies': 'Technologies used',
    'portfolio.view': 'View project',
    'portfolio.close': 'Close',
    
    // About
    'about.title': 'About CodeLab',
    'about.description1': 'Founded in 2020, CodeLab was born from the passion to democratize access to cutting-edge technologies. We combine high-level technical expertise and innovative pedagogy to transform technological challenges into growth opportunities.',
    'about.description2': 'Our vision: create an ecosystem where continuous learning and technological innovation meet to shape the digital future of businesses and individuals.',
    'about.mission.title': 'Mission',
    'about.mission.description': 'Democratize access to cutting-edge technologies and support the digital transformation of businesses.',
    'about.team.title': 'Team',
    'about.team.description': 'A team of passionate experts, senior developers and certified trainers with over 10 years of experience.',
    'about.innovation.title': 'Innovation',
    'about.innovation.description': 'Always at the forefront of the latest technologies to offer you cutting-edge solutions.',
    'about.excellence.title': 'Excellence',
    'about.excellence.description': 'Quality commitment in every project with a 98% client satisfaction rate since our creation.',
    
    // Testimonials
    'testimonials.title': 'What our clients say',
    'testimonials.subtitle': 'The satisfaction of our clients and students is our greatest pride. Discover their testimonials and success stories.',
    'testimonials.partners': 'They trust us',
    
    // Contact
    'contact.title': 'Contact us',
    'contact.subtitle': 'Ready to start your project? Let\'s discuss your needs and find the perfect solution for your business together.',
    'contact.discuss': 'Let\'s talk about your project',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.address': 'Address',
    'contact.consultation': 'Free consultation',
    'contact.consultation.description': 'Benefit from a free 30-minute consultation to discuss your project and receive our first expert advice.',
    'contact.form.name': 'Full name',
    'contact.form.email': 'Email',
    'contact.form.company': 'Company',
    'contact.form.message': 'Message',
    'contact.form.name.placeholder': 'Your name',
    'contact.form.email.placeholder': 'your.email@example.com',
    'contact.form.company.placeholder': 'Your company name',
    'contact.form.message.placeholder': 'Describe your project or needs...',
    'contact.form.send': 'Send message',
    'contact.form.sent': 'Message sent!',
    
    // Footer
    'footer.description': 'Your technology partner to transform your ideas into innovative solutions. Expertise, training and personalized support.',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.made': 'Made with',
    'footer.in': 'in Paris',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['fr']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};