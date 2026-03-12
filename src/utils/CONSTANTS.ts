export interface Project {
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
        description: "Site vitrine de l'agence Indigo Pub Guinée, spécialisée dans la communication et le marketing à travers la production de panneaux publicitaires physiques et numériques. Le site présente les services de l'agence, son portfolio de réalisations et ses informations de contact, offrant une présence digitale professionnelle à l'image de la marque.",
        image: "/projects/indigo.png",
        technologies: ["React", "TailwindCSS", "Django", "REST API"],
        link: "https://indigopub-guinee.com",
        features: [
            "Présentation des services et offres de l'agence",
            "Portfolio des réalisations publicitaires",
            "Formulaire de contact et demande de devis",
            "Design responsive adapté à tous les supports",
            "Interface épurée à l'image de la marque Indigo"
        ]
    },
    {
        id: 10,
        title: "Indigo Progiciel",
        category: ["web"],
        description: "Progiciel de gestion opérationnelle développé sur-mesure pour Indigo Pub Guinée, centralisant l'intégralité du cycle de vie d'une campagne publicitaire — de la réception de la commande client jusqu'au retrait du panneau. L'application intègre un système de rôles multi-niveaux et un moteur de permissions modulaire permettant une attribution fine des accès selon les responsabilités de chaque collaborateur au sein de l'agence.",
        image: "/projects/indigo-progiciel.png",
        technologies: ["React", "TailwindCSS", "Django", "PostgreSQL", "REST API"],
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
        id: 4,
        title: "PAL",
        category: ["web", "mobile"],
        description: "PAL est une solution de transfert d'argent panafricaine pensée pour simplifier et démocratiser les échanges financiers à travers le continent. La plateforme permet à ses utilisateurs de créer un compte, d'effectuer des dépôts et des retraits, d'envoyer de l'argent à d'autres utilisateurs et de convertir leurs fonds entre différentes devises. L'écosystème est connecté à l'agrégateur CONNECT Pro pour garantir l'instantanéité des transactions et une visibilité complète sur les flux financiers.",
        image: "/projects/pal.png",
        technologies: ["Next.js", "Django", "TailwindCSS", "REST API"],
        link: "https://pals.africa/",
        features: [
            "Création de compte et gestion de profil utilisateur",
            "Dépôt et retrait de fonds sécurisés",
            "Transferts instantanés entre utilisateurs en Afrique",
            "Conversion multi-devises en temps réel",
            "Application mobile cross-platform (iOS & Android)",
            "Tableau de bord administrateur pour la gestion des utilisateurs et transactions",
            "Dashboard support pour le traitement des demandes et réclamations utilisateurs",
            "Intégration CONNECT Pro pour des transactions instantanées et un suivi en temps réel des flux"
        ]
    },
    {
        id: 5,
        title: "Connect Pro",
        category: ["web","api"],
        description: "Connect Pro est un agrégateur de paiement B2B conçu pour centraliser et orchestrer les flux financiers de plateformes partenaires à travers l'Afrique. Chaque partenaire dispose de son propre solde sur la plateforme, depuis lequel il peut effectuer des dépôts et des retraits, et offrir à ses utilisateurs finaux un accès aux opérateurs Mobile Money locaux ainsi qu'aux applications de paris intégrées. Le système repose sur un modèle de déploiement white-label : chaque partenaire bénéficie d'une instance Connect Pro dédiée, personnalisée selon son identité et enrichie des fonctionnalités spécifiques à son activité.",
        image: "/projects/connect-pro.png",
        technologies: ["Next.js", "Django", "TailwindCSS", "REST API"],
        features: [
            "Système de solde dédié par plateforme partenaire (dépôt & retrait)",
            "Accès aux opérateurs Mobile Money à travers l'Afrique pour les utilisateurs finaux",
            "Intégration aux applications de paris pour dépôts et retraits instantanés",
            "Dashboard personnalisé par utilisateur avec historique et suivi des transactions",
            "Modèle white-label : instance dédiée et personnalisée pour chaque partenaire",
            "Fonctionnalités extensibles selon les besoins spécifiques de chaque partenaire",
            "API REST sécurisée pour l'intégration transparente avec les systèmes tiers"
        ]
    },
    {
        id: 6,
        title: "DGS Pay",
        category: ["web", "api"],
        description: "DGS Pay est un agrégateur de paiement pensé pour les plateformes qui souhaitent intégrer des capacités de transfert d'argent via Mobile Money à travers l'Afrique. Chaque plateforme partenaire dispose d'un solde propre sur la solution et peut offrir à ses utilisateurs finaux la possibilité d'effectuer des dépôts et des retraits directement depuis leur compte. L'accès à l'ensemble des services se fait via une API REST documentée, permettant une intégration rapide et sécurisée dans n'importe quel environnement technique.",
        image: "/projects/dgs-pay.png",
        technologies: ["Next.js", "Django", "TailwindCSS", "REST API"],
        link: "https://dgs-pay.com/",
        features: [
            "Solde dédié par plateforme partenaire avec dépôt et retrait",
            "Accès aux opérateurs Mobile Money à travers l'Afrique pour les utilisateurs finaux",
            "Création de compte utilisateur et gestion du profil",
            "Connexion des plateformes tierces via API REST documentée",
            "Dashboard utilisateur pour le suivi et la gestion des transactions",
            "Intégration rapide et sécurisée dans tout environnement technique"
        ]
    },
    {
        id: 7,
        title: "Yutu",
        category: ["mobile"],
        description: "Yutu est une plateforme sociale dédiée aux vidéos courtes et verticales, permettant aux utilisateurs de publier, découvrir et interagir avec des contenus créatifs en quelques secondes. Au-delà du fil vidéo, la plateforme intègre un système de messagerie privée et de commentaires pour favoriser les échanges entre créateurs et leur communauté. Disponible sur iOS et Android, Yutu offre une expérience fluide et immersive pensée pour la génération mobile.",
        image: "/projects/yutu.png",
        technologies: ["Flutter"],
        link: "https://yutu.social/",
        features: [
            "Publication et lecture de vidéos courtes verticales",
            "Fil de découverte personnalisé",
            "Système de commentaires et réactions sur les vidéos",
            "Messagerie privée entre utilisateurs",
            "Application native cross-platform (iOS & Android)",
            "Interface immersive optimisée pour le format vertical"
        ]
    },
    {
        id: 8,
        title: "Minfo",
        category: ["web", "mobile"],
        description: "Minfo réinvente la façon dont les utilisateurs interagissent avec le contenu audio. En scannant un contenu sonore, la plateforme identifie et révèle instantanément les informations associées : contenu complémentaire, produits à acheter, liens vers d'autres services du créateur et bien plus encore. Ce pont entre l'audio et le digital offre aux producteurs de contenu un levier puissant pour monétiser leur audience, enrichir l'expérience utilisateur et prolonger leur univers au-delà du son.",
        image: "/projects/minfo.png",
        technologies: ["Flutter", "Django", "REST API"],
        link: "https://www.minfo.com/",
        features: [
            "Scan et reconnaissance de contenu audio en temps réel",
            "Découverte de contenu complémentaire lié à l'audio scanné",
            "Redirection vers des produits et services associés au contenu",
            "Outil de monétisation pour les producteurs de contenu",
            "Application mobile cross-platform (iOS & Android)",
            "Application web pour une accessibilité élargie",
            "API REST pour l'indexation et la gestion du contenu par les créateurs"
        ]
    },
    {
        id: 11,
        title: "PES",
        category: ["web"],
        description: "Site vitrine de Planet Energy System (PES), entreprise spécialisée dans la construction d'infrastructures électriques et la fourniture des matériaux nécessaires à leur réalisation. Le site présente l'expertise et les services de l'entreprise, ses réalisations et ses coordonnées, offrant une vitrine digitale professionnelle à l'image d'un acteur de référence dans le secteur de l'énergie.",
        image: "/projects/pes.png",
        technologies: ["Next.js", "TailwindCSS"],
        link: "https://planet-es.com/",
        features: [
            "Présentation des services et domaines d'expertise",
            "Portfolio des infrastructures électriques réalisées",
            "Catalogue des matériaux et équipements fournis",
            "Formulaire de contact et demande d'intervention",
            "Design responsive et performant"
        ]
    },
    {
        id: 12,
        title: "Slater",
        category: ["web", "mobile"],
        description: "Slater est une plateforme de paiement centralisée dédiée aux paris sportifs, offrant aux utilisateurs un point d'accès unique pour effectuer des transactions vers toutes les applications de paris partenaires. Grâce à une architecture reposant sur plusieurs agrégateurs de paiement mobile, l'administrateur peut piloter les opérateurs actifs en temps réel afin d'assurer une continuité de service optimale.",
        image: "/projects/slater.png",
        technologies: ["Next.js", "React Native", "TailwindCSS", "Django", "PostgreSQL", "REST API"],
        link: "https://slaterci.net",
        features: [
            "Application mobile cross-platform (iOS & Android)",
            "Site web responsive pour les utilisateurs finaux",
            "Transactions instantanées vers les apps de paris connectées",
            "Connexion à de multiples agrégateurs de paiement mobile",
            "Changement dynamique d'opérateurs de paiement",
            "Tableau de bord administrateur complet (gestion des transactions, utilisateurs et opérateurs)",
            "Interface utilisateur épurée et intuitive"
        ]
    },
    {
        id: 13,
        title: "1xStore",
        category: ["web", "mobile"],
        description: "1xStore est une solution de paiement unifiée pour les plateformes de paris sportifs, permettant aux joueurs de recharger et retirer depuis n'importe quelle application partenaire via une interface unique. Le système s'appuie sur une infrastructure multi-agrégateurs permettant à l'administrateur de gérer la disponibilité des opérateurs de paiement mobile à la volée.",
        image: "/projects/1xstore.png",
        technologies: ["Next.js", "React Native", "TailwindCSS", "Django", "PostgreSQL", "REST API"],
        link: "https://1xstore.org",
        features: [
            "Application mobile cross-platform (iOS & Android)",
            "Site web responsive pour les utilisateurs finaux",
            "Transactions instantanées vers les apps de paris connectées",
            "Connexion à de multiples agrégateurs de paiement mobile",
            "Changement dynamique d'opérateurs de paiement",
            "Tableau de bord administrateur complet (gestion des transactions, utilisateurs et opérateurs)",
            "Interface utilisateur épurée et intuitive"
        ]
    },
    {
        id: 14,
        title: "ICASH",
        category: ["web", "mobile"],
        description: "ICASH est une passerelle de paiement spécialisée dans les paris sportifs, donnant aux utilisateurs la possibilité de gérer leurs fonds sur l'ensemble de leurs applications de paris depuis un seul compte. L'écosystème intègre plusieurs agrégateurs de paiement mobile, offrant à l'administrateur un contrôle total sur les opérateurs disponibles pour maintenir le service en toutes circonstances.",
        image: "/projects/icash.png",
        technologies: ["Next.js", "React Native", "TailwindCSS", "Django", "PostgreSQL", "REST API"],
        link: "https://i-cashci.net",
        features: [
            "Application mobile cross-platform (iOS & Android)",
            "Site web responsive pour les utilisateurs finaux",
            "Transactions instantanées vers les apps de paris connectées",
            "Connexion à de multiples agrégateurs de paiement mobile",
            "Changement dynamique d'opérateurs de paiement",
            "Tableau de bord administrateur complet (gestion des transactions, utilisateurs et opérateurs)",
            "Interface utilisateur épurée et intuitive"
        ]
    },
    {
        id: 15,
        title: "Super Cash",
        category: ["web", "mobile"],
        description: "Super Cash est un hub de paiement dédié aux parieurs, centralisant les dépôts et retraits de toutes leurs plateformes de paris sportifs en un seul endroit. Sa robustesse repose sur une architecture multi-agrégateurs qui permet à l'équipe d'administration de basculer entre les opérateurs Mobile Money en temps réel, garantissant ainsi la disponibilité permanente du service.",
        image: "/projects/super-cash.png",
        technologies: ["Next.js", "React Native", "TailwindCSS", "Django", "PostgreSQL", "REST API"],
        link: "https://supercashci.net/",
        features: [
            "Application mobile cross-platform (iOS & Android)",
            "Site web responsive pour les utilisateurs finaux",
            "Transactions instantanées vers les apps de paris connectées",
            "Connexion à de multiples agrégateurs de paiement mobile",
            "Changement dynamique d'opérateurs de paiement",
            "Tableau de bord administrateur complet (gestion des transactions, utilisateurs et opérateurs)",
            "Interface utilisateur épurée et intuitive"
        ]
    },
    {
        id: 16,
        title: "TurainCash",
        category: ["web", "mobile"],
        description: "TurainCash simplifie la gestion financière des parieurs en regroupant l'ensemble de leurs opérations de dépôt et de retrait sur les applications de paris sportifs au sein d'une interface unique et intuitive. Construite sur une architecture multi-agrégateurs, la plateforme permet un pilotage en temps réel des opérateurs de paiement pour une disponibilité maximale.",
        image: "/projects/turaincash.png",
        technologies: ["Next.js", "React Native", "TailwindCSS", "Django", "PostgreSQL", "REST API"],
        link: "http://turaincash.net/",
        features: [
            "Application mobile cross-platform (iOS & Android)",
            "Site web responsive pour les utilisateurs finaux",
            "Transactions instantanées vers les apps de paris connectées",
            "Connexion à de multiples agrégateurs de paiement mobile",
            "Changement dynamique d'opérateurs de paiement",
            "Tableau de bord administrateur complet (gestion des transactions, utilisateurs et opérateurs)",
            "Interface utilisateur épurée et intuitive"
        ]
    },
    {
        id: 17,
        title: "Yapson",
        category: ["web", "mobile"],
        description: "Yapson est une plateforme de paiement unifiée pour les paris sportifs, conçue pour offrir aux utilisateurs une expérience fluide et sans friction dans la gestion de leurs fonds sur plusieurs applications de paris. Son infrastructure multi-agrégateurs donne à l'administrateur la flexibilité de gérer les opérateurs Mobile Money actifs en temps réel.",
        image: "/projects/yapson.png",
        technologies: ["Next.js", "React Native", "TailwindCSS", "Django", "PostgreSQL", "REST API"],
        link: "https://yapson.net/",
        features: [
            "Application mobile cross-platform (iOS & Android)",
            "Site web responsive pour les utilisateurs finaux",
            "Transactions instantanées vers les apps de paris connectées",
            "Connexion à de multiples agrégateurs de paiement mobile",
            "Changement dynamique d'opérateurs de paiement",
            "Tableau de bord administrateur complet (gestion des transactions, utilisateurs et opérateurs)",
            "Interface utilisateur épurée et intuitive"
        ]
    },
    {
        id: 18,
        title: "Zefast",
        category: ["web", "mobile"],
        description: "Zefast est une solution de paiement pensée pour la rapidité et la fiabilité, permettant aux parieurs d'effectuer leurs dépôts et retraits sur l'ensemble de leurs apps de paris sportifs depuis une interface centralisée. La plateforme tire parti d'une architecture multi-agrégateurs pour que l'administrateur puisse commuter entre les opérateurs sans interruption de service.",
        image: "/projects/zefast.png",
        technologies: ["Next.js", "React Native", "TailwindCSS", "Django", "PostgreSQL", "REST API"],
        link: "https://zefast.net/",
        features: [
            "Application mobile cross-platform (iOS & Android)",
            "Site web responsive pour les utilisateurs finaux",
            "Transactions instantanées vers les apps de paris connectées",
            "Connexion à de multiples agrégateurs de paiement mobile",
            "Changement dynamique d'opérateurs de paiement",
            "Tableau de bord administrateur complet (gestion des transactions, utilisateurs et opérateurs)",
            "Interface utilisateur épurée et intuitive"
        ]
    },
    {
        id: 19,
        title: "Fastxof",
        category: ["web", "mobile"],
        description: "Fastxof est une plateforme de paiement centralisée dédiée aux utilisateurs de plateformes de paris sportifs, leur permettant de gérer l'intégralité de leurs transactions depuis une application unique. Grâce à une infrastructure multi-agrégateurs, l'équipe d'administration dispose d'un contrôle total sur les opérateurs de paiement Mobile Money, assurant continuité et résilience du service.",
        image: "/projects/fastxof.png",
        technologies: ["Next.js", "React Native", "TailwindCSS", "Django", "PostgreSQL", "REST API"],
        link: "https://fastxof.com",
        features: [
            "Application mobile cross-platform (iOS & Android)",
            "Site web responsive pour les utilisateurs finaux",
            "Transactions instantanées vers les apps de paris connectées",
            "Connexion à de multiples agrégateurs de paiement mobile",
            "Changement dynamique d'opérateurs de paiement",
            "Tableau de bord administrateur complet (gestion des transactions, utilisateurs et opérateurs)",
            "Interface utilisateur épurée et intuitive"
        ]
    },
    {
        id: 20,
        title: "Africash",
        category: ["web", "mobile"],
        description: "Africash est une plateforme de paiement dédiée aux paris sportifs, offrant aux utilisateurs un accès unifié à l'ensemble de leurs applications de paris depuis un compte unique. Construite sur une architecture multi-agrégateurs, elle garantit des transactions instantanées et une haute disponibilité du service grâce à une gestion dynamique des opérateurs Mobile Money par les administrateurs.",
        image: "/projects/africash.png",
        technologies: ["Next.js", "React Native", "TailwindCSS", "Django", "PostgreSQL", "REST API"],
        link: "https://africash.io/",
        features: [
            "Application mobile cross-platform (iOS & Android)",
            "Site web responsive pour les utilisateurs finaux",
            "Transactions instantanées vers les apps de paris connectées",
            "Connexion à de multiples agrégateurs de paiement mobile",
            "Changement dynamique d'opérateurs de paiement",
            "Tableau de bord administrateur complet (gestion des transactions, utilisateurs et opérateurs)",
            "Interface utilisateur épurée et intuitive"
        ]
    },
];