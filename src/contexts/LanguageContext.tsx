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
    // 'services.title': 'Nos Services',
    // 'services.subtitle': 'De la formation à la réalisation, nous vous accompagnons à chaque étape de votre transformation digitale avec expertise et innovation.',
    // 'services.training.title': 'Formations en ligne',
    // 'services.training.description': 'Plateforme e-learning complète avec cours interactifs, projets pratiques et suivi personnalisé. Maîtrisez les technologies les plus demandées du marché.',
    // 'services.training.feature1': 'Cours interactifs',
    // 'services.training.feature2': 'Projets pratiques',
    // 'services.training.feature3': 'Mentorat personnalisé',
    // 'services.training.feature4': 'Certifications',
    'services.web.title': 'Développement Web',
    // 'services.web.description': 'Sites web modernes, performants et responsives. De la conception à la mise en ligne, nous créons des expériences utilisateur exceptionnelles.',
    // 'services.web.feature1': 'Design responsive',
    // 'services.web.feature2': 'Performance optimisée',
    // 'services.web.feature3': 'SEO avancé',
    // 'services.web.feature4': 'Maintenance continue',
    'services.mobile.title': 'Applications Mobiles',
    // 'services.mobile.description': 'Applications natives et cross-platform pour iOS et Android. Interface intuitive, performances élevées et intégration parfaite avec vos systèmes.',
    // 'services.mobile.feature1': 'iOS & Android',
    // 'services.mobile.feature2': 'Interface native',
    // 'services.mobile.feature3': 'Synchronisation cloud',
    // 'services.mobile.feature4': 'Notifications push',
    'services.engineering.title': 'Ingénierie Logicielle',
    // 'services.engineering.description': 'Solutions sur mesure pour entreprises. Architecture robuste, scalabilité garantie et intégration seamless avec votre écosystème existant.',
    // 'services.engineering.feature1': 'Architecture sur mesure',
    // 'services.engineering.feature2': 'Scalabilité garantie',
    // 'services.engineering.feature3': 'API robustes',
    // 'services.engineering.feature4': 'Support technique',

    //Services
    'services.title': 'Nos Services',
      'services.subtitle': 'Solutions complètes pour votre transformation digitale. De la stratégie à la mise en production, nous accompagnons votre croissance avec expertise et innovation.',
      'services.strategy.title': 'Conseil & Stratégie Digitale',
      'services.strategy.description': 'Audit technique, définition de roadmap et accompagnement stratégique pour optimiser votre architecture et accélérer votre transformation digitale.',
      'services.strategy.feature1': 'Audit d\'architecture existante',
      'services.strategy.feature2': 'Définition de roadmap technique',
      'services.strategy.feature3': 'Optimisation des performances',
      'services.strategy.feature4': 'Migration vers le cloud',
      'services.strategy.feature5': 'Sécurité et conformité',
      'services.development.title': 'Développement d\'Applications',
      'services.development.description': 'Création d\'applications web, mobile et desktop sur mesure avec les technologies les plus avancées pour répondre à vos besoins spécifiques.',
      'services.development.feature1': 'Applications web modernes (React, Vue, Angular)',
      'services.development.feature2': 'Applications mobiles natives et cross-platform',
      'services.development.feature3': 'APIs robustes et microservices',
      'services.development.feature4': 'Solutions e-commerce et SaaS',
      'services.development.feature5': 'Intégrations tierces complexes',
      'services.ai.title': 'Intelligence Artificielle & Data',
      'services.ai.description': 'Implémentation de solutions IA, machine learning et analyse de données pour automatiser vos processus et optimiser vos décisions business.',
      'services.ai.feature1': 'Chatbots et assistants virtuels',
      'services.ai.feature2': 'Analyse prédictive et recommandations',
      'services.ai.feature3': 'Vision par ordinateur',
      'services.ai.feature4': 'Traitement du langage naturel',
      'services.ai.feature5': 'Tableaux de bord et analytics',
      'services.infrastructure.title': 'Infrastructure & DevOps',
      'services.infrastructure.description': 'Mise en place d\'infrastructures scalables, automatisation des déploiements et monitoring pour assurer performance et disponibilité maximales.',
      'services.infrastructure.feature1': 'Architecture cloud (AWS, Azure, GCP)',
      'services.infrastructure.feature2': 'Containerisation et orchestration',
      'services.infrastructure.feature3': 'CI/CD et automatisation',
      'services.infrastructure.feature4': 'Monitoring et observabilité',
      'services.infrastructure.feature5': 'Sécurité et sauvegarde',
      'services.training.title': 'Formation & Montée en Compétences',
      'services.training.description': 'Programmes de formation personnalisés pour vos équipes sur les technologies modernes, avec certification et suivi individualisé.',
      'services.training.feature1': 'Formations techniques sur mesure',
      'services.training.feature2': 'Workshops et masterclasses',
      'services.training.feature3': 'Mentoring et coaching',
      'services.training.feature4': 'Certification officielle',
      'services.training.feature5': 'Plateforme e-learning dédiée',
      'services.support.title': 'Maintenance & Support',
      'services.support.description': 'Support technique continu, maintenance évolutive et corrective pour garantir la pérennité et l\'évolution de vos solutions digitales.',
      'services.support.feature1': 'Support technique 24/7',
      'services.support.feature2': 'Maintenance préventive et corrective',
      'services.support.feature3': 'Évolutions fonctionnelles',
      'services.support.feature4': 'Optimisation continue',
      'services.support.feature5': 'Documentation technique',
      'services.cta.title': 'Prêt à transformer votre vision en réalité ?',
      'services.cta.subtitle': 'Discutons de votre projet et définissons ensemble la stratégie qui propulsera votre entreprise vers le succès.',
      'services.cta.button': 'Démarrer votre projet',
    
    // Portfolio
    'portfolio.title': 'Nos Réalisations',
    'portfolio.subtitle': 'Découvrez quelques-uns de nos projets les plus remarquables. Des sites web aux applications mobiles, chaque projet reflète notre expertise et notre passion pour l\'innovation.',
    'portfolio.details': 'Voir les détails',
    'portfolio.features': 'Fonctionnalités principales',
    'portfolio.technologies': 'Technologies utilisées',
    'portfolio.view': 'Voir le projet',
    'portfolio.close': 'Fermer',
    
    // About
    // 'about.title': 'À propos de CodeLab',
    // 'about.description1': 'Fondée en 2020, CodeLab est née de la passion de démocratiser l\'accès aux technologies de pointe. Nous combinons expertise technique de haut niveau et pédagogie innovante pour transformer les défis technologiques en opportunités de croissance.',
    // 'about.description2': 'Notre vision : créer un écosystème où l\'apprentissage continu et l\'innovation technologique se rencontrent pour façonner l\'avenir numérique des entreprises et des individus.',
    // 'about.mission.title': 'Mission',
    // 'about.mission.description': 'Démocratiser l\'accès aux technologies de pointe et accompagner la transformation digitale des entreprises.',
    // 'about.team.title': 'Équipe',
    // 'about.team.description': 'Une équipe d\'experts passionnés, développeurs seniors et formateurs certifiés avec plus de 10 ans d\'expérience.',
    // 'about.innovation.title': 'Innovation',
    // 'about.innovation.description': 'Toujours à la pointe des dernières technologies pour vous offrir des solutions d\'avant-garde.',
    // 'about.excellence.title': 'Excellence',
    // 'about.excellence.description': 'Engagement qualité dans chaque projet avec un taux de satisfaction client de 98% depuis notre création.',
    
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

  
      'about.title': 'À propos de CodeLab',
      'about.subtitle': 'Transformons ensemble les défis technologiques en opportunités de croissance',
      'about.story.title': 'Notre Histoire',
      'about.story.description1': 'Fondée en 2020, CodeLab est née de la vision audacieuse de démocratiser l\'accès aux technologies de pointe. Dans un monde en perpétuelle évolution numérique, nous avons identifié le besoin crucial de combler le fossé entre l\'innovation technologique et son adoption pratique.',
      'about.story.description2': 'Aujourd\'hui, nous combinons une expertise technique de haut niveau avec une pédagogie innovante pour transformer les défis les plus complexes en opportunités de croissance durable pour nos clients.',
      'about.vision.title': 'Notre Vision',
      'about.vision.description': 'Créer un écosystème technopédagogique où l\'apprentissage continu et l\'innovation se rencontrent pour façonner l\'avenir numérique des entreprises et des individus. Nous croyons que la technologie doit être accessible, compréhensible et transformatrice.',
      'about.mission.title': 'Mission',
      'about.mission.description': 'Démocratiser l\'accès aux technologies de pointe et accompagner la transformation digitale des entreprises avec expertise et innovation.',
      'about.team.title': 'Équipe',
      'about.team.description': 'Une équipe multidisciplinaire d\'experts passionnés, développeurs seniors et formateurs certifiés avec plus de 10 ans d\'expérience collective.',
      'about.innovation.title': 'Innovation',
      'about.innovation.description': 'Toujours à l\'avant-garde des dernières technologies pour vous offrir des solutions innovantes et performantes adaptées aux enjeux actuels.',
      'about.excellence.title': 'Excellence',
      'about.excellence.description': 'Engagement qualité dans chaque projet avec un taux de satisfaction client de 98% et une approche centrée sur les résultats mesurables.',
      'about.stats.projects': 'Projets Réalisés',
      'about.stats.technologies': 'Technologies Maîtrisées',
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
    // 'services.title': 'Our Services',
    // 'services.subtitle': 'From training to implementation, we support you at every step of your digital transformation with expertise and innovation.',
    // 'services.training.title': 'Online Training',
    // 'services.training.description': 'Complete e-learning platform with interactive courses, practical projects and personalized follow-up. Master the most in-demand technologies in the market.',
    // 'services.training.feature1': 'Interactive courses',
    // 'services.training.feature2': 'Practical projects',
    // 'services.training.feature3': 'Personal mentoring',
    // 'services.training.feature4': 'Certifications',
    'services.web.title': 'Web Development',
    // 'services.web.description': 'Modern, performant and responsive websites. From design to deployment, we create exceptional user experiences.',
    // 'services.web.feature1': 'Responsive design',
    // 'services.web.feature2': 'Optimized performance',
    // 'services.web.feature3': 'Advanced SEO',
    // 'services.web.feature4': 'Continuous maintenance',
    'services.mobile.title': 'Mobile Applications',
    // 'services.mobile.description': 'Native and cross-platform applications for iOS and Android. Intuitive interface, high performance and perfect integration with your systems.',
    // 'services.mobile.feature1': 'iOS & Android',
    // 'services.mobile.feature2': 'Native interface',
    // 'services.mobile.feature3': 'Cloud synchronization',
    // 'services.mobile.feature4': 'Push notifications',
    'services.engineering.title': 'Software Engineering',
    // 'services.engineering.description': 'Custom solutions for businesses. Robust architecture, guaranteed scalability and seamless integration with your existing ecosystem.',
    // 'services.engineering.feature1': 'Custom architecture',
    // 'services.engineering.feature2': 'Guaranteed scalability',
    // 'services.engineering.feature3': 'Robust APIs',
    // 'services.engineering.feature4': 'Technical support',

    // Services
    
    "services.title": "Our Services",
    "services.subtitle": "Comprehensive solutions for your digital transformation. From strategy to production, we support your growth with expertise and innovation.",

    "services.strategy.title": "Digital Consulting & Strategy",
    "services.strategy.description": "Technical audit, roadmap definition, and strategic support to optimize your architecture and accelerate your digital transformation.",
    "services.strategy.feature1": "Existing architecture audit",
    "services.strategy.feature2": "Technical roadmap definition",
    "services.strategy.feature3": "Performance optimization",
    "services.strategy.feature4": "Cloud migration",
    "services.strategy.feature5": "Security and compliance",

    "services.development.title": "Application Development",
    "services.development.description": "Custom web, mobile, and desktop application development using cutting-edge technologies to meet your specific needs.",
    "services.development.feature1": "Modern web applications (React, Vue, Angular)",
    "services.development.feature2": "Native and cross-platform mobile apps",
    "services.development.feature3": "Robust APIs and microservices",
    "services.development.feature4": "E-commerce and SaaS solutions",
    "services.development.feature5": "Complex third-party integrations",

    "services.ai.title": "Artificial Intelligence & Data",
    "services.ai.description": "Implementation of AI, machine learning, and data analysis solutions to automate your processes and optimize your business decisions.",
    "services.ai.feature1": "Chatbots and virtual assistants",
    "services.ai.feature2": "Predictive analysis and recommendations",
    "services.ai.feature3": "Computer vision",
    "services.ai.feature4": "Natural language processing",
    "services.ai.feature5": "Dashboards and analytics",

    "services.infrastructure.title": "Infrastructure & DevOps",
    "services.infrastructure.description": "Implementation of scalable infrastructures, deployment automation, and monitoring to ensure maximum performance and availability.",
    "services.infrastructure.feature1": "Cloud architecture (AWS, Azure, GCP)",
    "services.infrastructure.feature2": "Containerization and orchestration",
    "services.infrastructure.feature3": "CI/CD and automation",
    "services.infrastructure.feature4": "Monitoring and observability",
    "services.infrastructure.feature5": "Security and backup",

    "services.training.title": "Training & Skill Development",
    "services.training.description": "Customized training programs for your teams on modern technologies, with certification and personalized follow-up.",
    "services.training.feature1": "Tailored technical training",
    "services.training.feature2": "Workshops and masterclasses",
    "services.training.feature3": "Mentoring and coaching",
    "services.training.feature4": "Official certification",
    "services.training.feature5": "Dedicated e-learning platform",

    "services.support.title": "Maintenance & Support",
    "services.support.description": "Ongoing technical support, adaptive and corrective maintenance to ensure the sustainability and evolution of your digital solutions.",
    "services.support.feature1": "24/7 technical support",
    "services.support.feature2": "Preventive and corrective maintenance",
    "services.support.feature3": "Functional enhancements",
    "services.support.feature4": "Continuous optimization",
    "services.support.feature5": "Technical documentation",

    "services.cta.title": "Ready to turn your vision into reality?",
    "services.cta.subtitle": "Let’s discuss your project and define together the strategy that will drive your business to success.",
    "services.cta.button": "Start your project",
  
    
    // Portfolio
    'portfolio.title': 'Our Portfolio',
    'portfolio.subtitle': 'Discover some of our most remarkable projects. From websites to mobile applications, each project reflects our expertise and passion for innovation.',
    'portfolio.details': 'View details',
    'portfolio.features': 'Key features',
    'portfolio.technologies': 'Technologies used',
    'portfolio.view': 'View project',
    'portfolio.close': 'Close',
    
    // About
    // 'about.title': 'About CodeLab',
    // 'about.description1': 'Founded in 2020, CodeLab was born from the passion to democratize access to cutting-edge technologies. We combine high-level technical expertise and innovative pedagogy to transform technological challenges into growth opportunities.',
    // 'about.description2': 'Our vision: create an ecosystem where continuous learning and technological innovation meet to shape the digital future of businesses and individuals.',
    // 'about.mission.title': 'Mission',
    // 'about.mission.description': 'Democratize access to cutting-edge technologies and support the digital transformation of businesses.',
    // 'about.team.title': 'Team',
    // 'about.team.description': 'A team of passionate experts, senior developers and certified trainers with over 10 years of experience.',
    // 'about.innovation.title': 'Innovation',
    // 'about.innovation.description': 'Always at the forefront of the latest technologies to offer you cutting-edge solutions.',
    // 'about.excellence.title': 'Excellence',
    // 'about.excellence.description': 'Quality commitment in every project with a 98% client satisfaction rate since our creation.',
    
      'about.title': 'About CodeLab',
      'about.subtitle': 'Transforming technological challenges into growth opportunities together',
      'about.story.title': 'Our Story',
      'about.story.description1': 'Founded in 2020, CodeLab was born from the bold vision to democratize access to cutting-edge technologies. In a world of perpetual digital evolution, we identified the crucial need to bridge the gap between technological innovation and its practical adoption.',
      'about.story.description2': 'Today, we combine high-level technical expertise with innovative pedagogy to transform the most complex challenges into sustainable growth opportunities for our clients.',
      'about.vision.title': 'Our Vision',
      'about.vision.description': 'Creating a technopedagogical ecosystem where continuous learning and innovation meet to shape the digital future of businesses and individuals. We believe that technology should be accessible, understandable, and transformative.',
      'about.mission.title': 'Mission',
      'about.mission.description': 'Democratize access to cutting-edge technologies and support digital transformation of businesses with expertise and innovation.',
      'about.team.title': 'Team',
      'about.team.description': 'A multidisciplinary team of passionate experts, senior developers, and certified trainers with over 10 years of collective experience.',
      'about.innovation.title': 'Innovation',
      'about.innovation.description': 'Always at the forefront of the latest technologies to offer you innovative and efficient solutions adapted to current challenges.',
      'about.excellence.title': 'Excellence',
      'about.excellence.description': 'Quality commitment in every project with a 98% customer satisfaction rate and an approach focused on measurable results.',
      'about.stats.projects': 'Completed Projects',
      'about.stats.technologies': 'Mastered Technologies',
  

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