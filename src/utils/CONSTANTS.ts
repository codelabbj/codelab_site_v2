interface Project {
    id: number;
    title: string;
    category: string[];
    description: string;
    image: string;
    technologies: string[];
    link?: string;
    features: string[];
}
export const PROJECTS:Project[] =  [
    {
        id: 1,
        title: "Blaffa",
        category: ["web","mobile"],
        description: "Blaffa est une plateforme de paiement unifiée dédiée aux paris sportifs, permettant aux utilisateurs d'effectuer des transactions instantanées vers n'importe quelle application de paris connectée depuis une interface unique. L'écosystème repose sur une architecture multi-agrégateurs de paiement mobile, offrant à l'administrateur la flexibilité de basculer entre les opérateurs en temps réel pour garantir une disponibilité maximale du service.",
        image: "/projects/baffla-site.png",
        technologies: ["Next.js", "React Native", "TailwindCSS", "Django", "PostgreSQL", "REST API"],
        link: "https://blaffa.net",
        features: [
            "Application mobile cross-platform (iOS & Android)",
            "Site web responsive pour les utilisateurs finaux",
            "Transactions instantanées via l'API BlaffaPay",
            "Connexion à de multiples agrégateurs de paiement mobile",
            "Changement dynamique d'opérateurs de paiement",
            "Tableau de bord administrateur complet (gestion des transactions, utilisateurs et opérateurs)",
            "Interface utilisateur épurée et intuitive"
        ]
    },
    {
        id: 2,
        title: "CENOF",
        category: ["web", "mobile"],
        description: "CENOF est un portefeuille électronique intelligent conçu pour simplifier et sécuriser les transferts d'argent nationaux et internationaux. La plateforme permet aux utilisateurs de gérer des soldes multi-devises, d'envoyer et de recevoir des fonds en quelques secondes, et de convertir leurs devises en temps réel. Pensée pour l'accessibilité et la sécurité, l'application intègre des mécanismes de vérification robustes (KYC, PIN, SMS) et s'appuie sur une API REST Django haute performance pour garantir la fiabilité des opérations financières.",
        image: "/projects/cenof.png",
        technologies: ["Next.js", "React Native", "Django", "PostgreSQL", "REST API"],
        link: "https://cenof.finance",
        features: [
            "Transferts d'argent instantanés entre utilisateurs (national et international)",
            "Portefeuille multi-devises avec conversion en temps réel (FCFA, EUR, USD…)",
            "Dépôt et retrait de fonds via Mobile Money, QR code et virement bancaire",
            "Réception de fonds depuis n'importe quel pays connecté à la plateforme",
            "Authentification sécurisée multi-facteurs (PIN + SMS + KYC)",
            "Application mobile cross-platform (iOS & Android)",
            "Tableau de bord administrateur pour la gestion des utilisateurs, transactions et paramètres"
        ]
    },
    {
        id: 3,
        title: "Indigo",
        category: ["web"],
        description: "Indigo est une plateforme de gestion opérationnelle complète développée pour une agence conseil en communication et marketing spécialisée dans la production de panneaux publicitaires physiques et numériques. L'application centralise l'intégralité du cycle de vie d'une campagne publicitaire — de la réception de la commande client jusqu'au retrait du panneau — en intégrant un système de rôles multi-niveaux et un moteur de permissions modulaire permettant une attribution fine des accès selon les responsabilités de chaque collaborateur.",
        image: "/indigo.png",
        technologies: ["React", "TailwindCSS", "Django", "PostgreSQL", "REST API"],
        link: "https://indigo.gestion-digitale.com",
        features: [
            "Gestion du cycle complet de production publicitaire (commande, impression, validation client)",
            "Workflow de validation client intégré avec suivi des approbations",
            "Planification quotidienne et répartition des tâches entre collaborateurs",
            "Suivi en temps réel des panneaux en production et publiés",
            "Notifications automatiques aux clients à l'approche de la date de retrait d'un panneau",
            "Système de rôles multi-niveaux avec permissions modulaires par fonctionnalité",
            "Interface d'administration pour la gestion des utilisateurs et des niveaux d'accès"
        ]
    },
    {
        id: 3,
        title: "FitTracker - App Fitness",
        category: "mobile",
        description: "Application mobile de suivi fitness avec programmes personnalisés, tracking des performances et communauté intégrée.",
        image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
        technologies: ["React Native", "Firebase", "Redux", "Charts.js"],
        features: [
            "Programmes d'entraînement personnalisés",
            "Suivi des performances en temps réel",
            "Communauté et défis entre utilisateurs",
            "Synchronisation avec appareils connectés",
            "Notifications push intelligentes"
        ]
    },
    {
        id: 3,
        title: "MedConnect - Télémédecine",
        category: "web",
        description: "Plateforme de télémédecine permettant les consultations vidéo, gestion des dossiers patients et prescriptions numériques.",
        image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
        technologies: ["Next.js", "PostgreSQL", "WebRTC", "AWS"],
        features: [
            "Consultations vidéo HD sécurisées",
            "Gestion complète des dossiers patients",
            "Prescriptions numériques",
            "Calendrier de rendez-vous intelligent",
            "Conformité RGPD et sécurité médicale"
        ]
    },
    {
        id: 4,
        title: "SmartHome - Domotique",
        category: "mobile",
        description: "Application de contrôle domotique pour gérer l'éclairage, température, sécurité et appareils connectés de la maison.",
        image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
        technologies: ["Flutter", "IoT", "MQTT", "Node.js"],
        features: [
            "Contrôle centralisé des appareils",
            "Automatisation intelligente",
            "Monitoring énergétique",
            "Sécurité et alertes en temps réel",
            "Interface vocale intégrée"
        ]
    },
    {
        id: 5,
        title: "EduPlatform - Formation en ligne",
        category: "web",
        description: "Plateforme LMS complète avec cours interactifs, évaluations automatisées et suivi de progression avancé.",
        image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800",
        technologies: ["Vue.js", "Laravel", "MySQL", "WebSocket"],
        features: [
            "Cours interactifs multimédia",
            "Évaluations automatisées",
            "Suivi de progression détaillé",
            "Classes virtuelles en direct",
            "Certificats numériques"
        ]
    },
    {
        id: 6,
        title: "CryptoWallet - Portefeuille Crypto",
        category: "mobile",
        description: "Portefeuille de cryptomonnaies sécurisé avec trading, staking et analyse de marché en temps réel.",
        image: "https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=800",
        technologies: ["React Native", "Blockchain", "Web3", "Redux"],
        features: [
            "Stockage sécurisé multi-devises",
            "Trading intégré avec graphiques",
            "Staking et DeFi",
            "Analyse de marché en temps réel",
            "Authentification biométrique"
        ]
    }
];