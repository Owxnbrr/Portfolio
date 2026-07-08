export const PROFILE = {
  name: 'Noah Bucheton',
  role: 'Développeur web & webdesigner freelance',
  tagline: 'Je conçois des sites vitrines, boutiques en ligne et interfaces web modernes, rapides et faciles à maintenir.',
  bio: `Développeur web fullstack avec un vrai biais frontend, j’accompagne les indépendants, associations et entreprises dans la création de sites internet modernes, performants et adaptés à leurs besoins.
Je travaille principalement avec React, Next.js, TypeScript, WordPress/WooCommerce et Figma, avec une attention particulière portée au responsive, à la performance, à l’accessibilité et à la qualité visuelle.
Mon objectif : livrer des solutions claires, propres et maintenables, avec un accompagnement simple du début à la mise en ligne.`,
  email: 'noah.bucheton@gmail.com',
  github: 'https://github.com/Owxnbrr/',
  linkedin: 'https://linkedin.com/in/noah-bucheton',
  availability: 'Disponible pour vos projets web',
  location: 'Amiens, France',
  buildHash: 'a3f2c8d',
}
export type ProjectScreenshot = {
  src: string         
  alt: string
  caption?: string
  format?: 'mobile' | 'desktop'
}

export type ArchitectureNode = {
  id: string
  label: string
  type: 'client' | 'server' | 'db' | 'service' | 'infra'
}
export type ArchitectureEdge = {
  from: string
  to: string
  label?: string
}
export type ArchitectureDiagram = {
  nodes: ArchitectureNode[]
  edges: ArchitectureEdge[]
}

export type ProjectVideo = {
  src: string
  title?: string
  caption?: string
  poster?: string
}
export type CaseStudy = {
  context: {
    situation: string   
    problem: string      
    goals: string[]  
  }

  architecture?: {
    description: string
    diagram: ArchitectureDiagram
  }

  video?: ProjectVideo
  screenshots?: ProjectScreenshot[]
  duration: string    
  role: string   
}
export type Project = {
  id: string
  hash: string
  title: string
  description: string
  longDescription: string
  tags: string[]
  stack: string[]
  type: 'frontend' | 'fullstack' | 'side' | 'design'
  status: 'terminé' | 'en cours' | 'oss' | 'prototype'
  year: number
  links: {
    demo?: string
    github?: string
  }
  gradient: string
  coverImage?: string
  caseStudy?: CaseStudy
}

export type Service = {
  id: string
  title: string
  description: string
}

export const SERVICES: Service[] = [
  {
    id: 'site-vitrine',
    title: 'Création de site vitrine',
    description: 'Création de sites modernes, responsives et faciles à comprendre pour présenter votre activité, vos services et générer des contacts.',
  },
  {
    id: 'woocommerce',
    title: 'Boutique en ligne WooCommerce',
    description: 'Mise en place de boutiques en ligne claires et administrables pour vendre vos produits avec une expérience d’achat simple.',
  },
  {
    id: 'figma',
    title: 'Webdesign / maquette Figma',
    description: 'Conception d’interfaces propres et cohérentes avant le développement, pour valider l’expérience utilisateur et l’identité visuelle.',
  },
  {
    id: 'refonte',
    title: 'Refonte de site',
    description: 'Amélioration d’un site existant pour le rendre plus moderne, plus lisible, plus rapide et mieux adapté aux usages actuels.',
  },
  {
    id: 'maintenance-wordpress',
    title: 'Maintenance WordPress',
    description: 'Mises à jour, corrections, ajustements visuels et accompagnement pour garder un site fiable dans le temps.',
  },
  {
    id: 'sur-mesure',
    title: 'Développement web sur mesure',
    description: 'Création de fonctionnalités spécifiques, interfaces ou outils web adaptés à un besoin métier précis.',
  },
]

export const PROJECTS: Project[] = [
  {
  id: 'bat-manager',
  hash: 'batm26',
  title: 'BAT Manager',
  description: 'SaaS interne de gestion de BAT pour imprimerie : projets, clients, validation publique, signature, notifications et suivi de livraison.',
  longDescription: `BAT Manager est une application SaaS développée pour centraliser la gestion des BAT en imprimerie.
L’outil permet de gérer les clients, dossiers, projets, versions PDF, liens publics de validation, signatures, statuts de production, relances et notifications.`,
  tags: ['Dashboard', 'Validation BAT', 'Signature', 'Notifications', 'Appwrite'],
  stack: [
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Appwrite',
  'Node.js',
  'SMTP',
  'Vercel',
  ],
  type: 'fullstack',
  status: 'terminé',
  year: 2026,
  links: {},
  gradient: 'linear-gradient(135deg, #07111F 0%, #0EA5E9 48%, #111827 100%)',
  coverImage: '/projects/bat-manager.png',
},
  {
  id: 'ipp-election',
  hash: 'ippel26',
  title: 'IPP Election',
  description: 'Plateforme de commande de documents électoraux pour mairies : parcours guidé, calcul de prix, paiement Stripe et suivi des commandes.',
  longDescription: `Plateforme web réalisée pour IPP afin de simplifier la commande de documents électoraux par les mairies françaises.
Le site clarifie l’offre, guide les utilisateurs vers un tunnel de commande et sécurise les étapes clés : choix des produits, calcul de prix, paiement Stripe et suivi des commandes.
Le travail a porté sur la lisibilité, la confiance et la fluidité d’un parcours B2B institutionnel.`,
  tags: ['Next.js', 'TypeScript', 'Supabase', 'Stripe'],
  stack: [
  'Next.js 14 (App Router)',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Supabase (PostgreSQL)',
  'Stripe Checkout',
  'Stripe Webhooks',
  'Zod',
  ],
  type: 'fullstack',
  status: 'terminé',
  year: 2026,
  links: {
    demo: 'https://ipp-election.netlify.app/',
    github: 'https://github.com/Owxnbrr/ipp-election',
  },
  gradient: 'linear-gradient(135deg, #0F172A 0%, #1D4ED8 100%)',
  coverImage: '/projects/ipp-election.png',
  caseStudy: {
    duration: '2 semaines',
    role: 'Développeur fullstack solo',
    context: {
      situation: "IPP propose un service d’impression de documents électoraux pour les mairies, avec des produits et options spécifiques (formats, quantités, recto/verso).",
      problem: "Transformer une offre technique et réglementée en parcours de commande clair, rassurant et suffisamment guidé pour limiter les erreurs.",
      goals: [
        'Clarifier les types de produits électoraux (affiches, bulletins, professions de foi)',
        'Rendre le parcours de commande lisible en quelques étapes',
        'Mettre en avant des CTA clairs vers le tunnel de commande',
        'Créer une interface sobre et rassurante pour une cible institutionnelle',
      ],
    },
    architecture: {
      description:
        "Structure en pages : accueil, commande et pages légales. Le parcours relie la présentation des produits au tunnel de commande, avec Supabase pour les données et Stripe pour le paiement. Déploiement sur Netlify.",
      diagram: {
        nodes: [
          { id: 'home', label: 'Home', type: 'client' },
          { id: 'commande', label: 'Commande', type: 'client' },
          { id: 'deploy', label: 'Netlify', type: 'infra' },
          { id: 'sb', label: 'Supabase', type: 'service' },
          { id: 'db', label: 'PostgreSQL (Supabase)', type: 'db' },
          { id: 'pay', label: 'Stripe', type: 'service' },
        ],
        edges: [
          { from: 'home', to: 'commande', label: 'CTA' },
          { from: 'commande', to: 'pay', label: 'paiement' },
          { from: 'commande', to: 'sb', label: 'commande' },
          { from: 'deploy', to: 'home', label: 'déploiement' },
          { from: 'sb', to: 'db', label: 'SQL' },
        ],
      },
    },
    screenshots: [
      {
        src: '/project-assets/ipp-election/home-hero.png',
        alt: 'Accueil IPP Election — hero et CTA de commande',
        caption: 'Accueil — proposition de valeur claire et CTA vers le parcours de commande',
      },
      {
        src: '/project-assets/ipp-election/products.png',
        alt: 'Section produits électoraux IPP Election',
        caption: 'Produits — présentation des catégories et des contraintes métier (formats, paliers, options)',
      },
      {
        src: '/project-assets/ipp-election/process.png',
        alt: 'Étapes de commande IPP Election',
        caption: 'Parcours — étapes de commande simplifiées pour guider les mairies',
      },
    ],
  },
},
  {
  id: 'ippcom-goodies',
  hash: 'ippc0m1',
  title: 'IPPCom Goodies',
  description: "Site catalogue pour une offre de goodies personnalisés : navigation par catégories, recherche produit, catalogue paginé et demande de devis.",
  longDescription: `Mise en place d’un site vitrine/catalogue orienté conversion pour une offre de goodies personnalisés.
Objectif : aider les visiteurs à explorer rapidement les collections, comprendre l’offre et déclencher une demande via un parcours de contact clair.`,
  tags: ['Next.js', 'TypeScript', 'Catalogue', 'Commandes', 'Dashboard', 'Supabase'],
  stack: [
  'Next.js (App Router)',
  'React',
  'TypeScript',
  'Supabase',
  'CSS',
  ],
  type: 'fullstack',
  status: 'terminé',
  year: 2026,
  links: {
    demo: 'https://ippcom-goodies.netlify.app/',
    github: 'https://github.com/Owxnbrr/Boutique-Objet-Publicit-IPP',
  },
  gradient: 'linear-gradient(135deg, #0EA5E9 0%, #0B1A2A 100%)',
  coverImage: '/projects/ippcom-goodies.png',

  caseStudy: {
    duration: '3 semaines',
    role: 'Développeur fullstack solo',
    context: {
      situation:
        "Créer un point d’entrée clair pour présenter l’offre de goodies et faciliter la découverte des produits par collections/catégories grâce à l’API d’ANDA.",
      problem:
        "Un site catalogue peut vite devenir confus : trop d’informations, trop de clics ou une navigation peu lisible. Le défi était de garder une expérience simple tout en donnant accès rapidement aux catégories et aux produits.",
      goals: [
        'Accueil clair avec sections éditoriales et CTA',
        'Accès rapide au catalogue et aux catégories principales',
        'Catalogue paginé pour garder une page légère',
        'Parcours de contact évident via le footer et une page dédiée',
        'Déploiement stable et accessible publiquement',
      ],
    },

    architecture: {
      description:
        "Structure en pages : Home, Catalogue, Catégories, Contact + pages légales. Navigation pensée pour réduire le nombre d’étapes entre découverte et prise de contact. Déploiement sur Netlify.",
      diagram: {
        nodes: [
          { id: 'home', label: 'Home', type: 'client' },
          { id: 'catalog', label: 'Catalogue', type: 'client' },
          { id: 'cats', label: 'Catégories', type: 'client' },
          { id: 'contact', label: 'Contact', type: 'client' },
          { id: 'deploy', label: 'Netlify', type: 'infra' },
          { id: 'sb', label: 'Supabase', type: 'service' },
          { id: 'db', label: 'PostgreSQL (Supabase)', type: 'db' },
        ],
        edges: [
          { from: 'home', to: 'catalog', label: 'CTA' },
          { from: 'home', to: 'cats', label: 'navigation' },
          { from: 'catalog', to: 'contact', label: 'demande' },
          { from: 'home', to: 'contact', label: 'contact' },
          { from: 'deploy', to: 'home', label: 'déploiement' },
          { from: 'catalog', to: 'sb', label: 'produits' },
          { from: 'sb', to: 'db', label: 'SQL' },
        ],
      },
    },

    screenshots: [
      {
        src: '/project-assets/ippcom-goodies/home.png',
        alt: 'Accueil IPPCom Goodies',
        caption: 'Accueil — proposition de valeur, CTA catalogue/devis et mise en avant des nouveautés'
      },
      {
        src: '/project-assets/ippcom-goodies/categories.png',
        alt: 'Catégories IPPCom Goodies',
        caption: 'Catégories — navigation par collections avec volumes de produits visibles'
      },
      {
        src: '/project-assets/ippcom-goodies/catalog.png',
        alt: 'Catalogue IPPCom Goodies',
        caption: 'Catalogue — recherche produit et grille de cartes pour une exploration rapide'
      },
      {
        src: '/project-assets/ippcom-goodies/contact.png',
        alt: 'Page contact IPPCom Goodies',
        caption: 'Contact — informations de contact et formulaire de demande'
      },
    ],
  },
},
  {
  id: 'discollection',
  hash: 'uxfigma26',
  title: 'Discollection',
  description: 'Prototype mobile conçu sur Figma pour une application de collection de vinyles : catalogue, recherche, fiches et parcours utilisateur.',
  longDescription: `Prototype UX/UI mobile autour d’une application de collection de vinyles.
Travail sur l’architecture de l’information, les parcours utilisateurs, la hiérarchie visuelle et la cohérence des écrans.
Prototype interactif réalisé sur Figma avec transitions et micro-interactions (dont animation du logo vinyle).`,
  tags: ['Figma', 'UX/UI', 'Prototype', 'Mobile'],
  stack: ['Figma', 'Prototypage', 'Wireframing', 'UI Design'],
  type: 'design',
  status: 'prototype',
  year: 2024,
  links: {
    demo: 'https://www.figma.com/proto/DpexmPGuIVejbt3G4GjNVO/Discollection-Noah?page-id=0%3A1&node-id=63-436&p=f&viewport=-1692%2C638%2C0.3&t=eCm1xlS7mEPcNwra-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=63%3A436',
  },
  gradient: 'linear-gradient(135deg, #60A5FA 0%, #1E3A8A 100%)',
  caseStudy: {
    duration: 'Prototype UX/UI mobile',
    role: 'UX/UI Designer (maquette & prototype mobile)',
    context: {
      situation: "Projet de conception d’une application de collection de vinyles avec un périmètre volontairement centré sur l’expérience mobile.",
      problem: "Concevoir une interface mobile claire et engageante pour consulter, rechercher et organiser une collection de vinyles sans surcharger la navigation.",
      goals: [
        'Définir une architecture d’écrans cohérente sur mobile',
        'Créer un prototype interactif navigable sur Figma',
        'Soigner la hiérarchie visuelle et la lisibilité',
        'Intégrer des micro-interactions (animation du logo vinyle, transitions)',
      ],
    },
    video: {
      src: '/project-assets/discollection/logo-animation.mp4',
      title: 'Animation du logo',
      caption: 'Motion branding — vinyle animé utilisé dans l’introduction du prototype',
    },
    screenshots: [
      {
        src: '/project-assets/discollection/home.png',
        alt: 'Écran d’accueil Discollection (prototype mobile)',
        caption: 'Accueil mobile — univers visuel, branding et entrée dans le parcours',
        format: 'mobile',
      },
      {
        src: '/project-assets/discollection/catalogue.png',
        alt: 'Écran catalogue Discollection (prototype mobile)',
        caption: 'Catalogue mobile — exploration des vinyles via une grille de contenus',
        format: 'mobile',
      },
      {
        src: '/project-assets/discollection/login.png',
        alt: 'Écran de connexion Discollection (prototype mobile)',
        caption: 'Connexion mobile — écran d’authentification du prototype',
        format: 'mobile',
      },
      {
        src: '/project-assets/discollection/réseaux.png',
        alt: 'Écran de réseaux Discollection (prototype mobile)',
        caption: 'Réseaux mobile — écran de gestion des réseaux sociaux du prototype',
        format: 'mobile',
      },
      {
        src: '/project-assets/discollection/profil.png',
        alt: 'Écran de profil Discollection (prototype mobile)',
        caption: 'Profil mobile — écran de gestion du profil utilisateur du prototype',
        format: 'mobile',
      },
      {
        src: '/project-assets/discollection/scan.png',
        alt: 'Écran de scan Discollection (prototype mobile)',
        caption: 'Scan mobile — écran du résultat du scan d\'un vinyle du prototype',
        format: 'mobile',
      },
    ],
  },
},
{
  id: 'logo-motion-plane',
  hash: 'md2024a',
  title: 'Logo Animation Plane',
  description: 'Animation de logo et compositing vidéo : vectorisation, décomposition des éléments et intégration sur fond vidéo.',
  longDescription: `Exercice de motion design centré sur la reproduction d’une animation à partir d’une référence vidéo.
Le logo a été redessiné sur Illustrator, séparé en éléments, puis animé en respectant le rythme et l’esthétique attendus.
Le rendu final intègre une vidéo d’avion en arrière-plan pour le compositing.`,
  tags: ['Motion', 'Illustrator', 'Animation', 'Compositing'],
  stack: ['Illustrator', 'After Effects', 'Compositing', 'Premiere Pro'],
  type: 'design',
  status: 'terminé',
  year: 2024,
  links: {},
  gradient: 'linear-gradient(135deg, #d19315 0%, #0A0F1E 100%)',
  caseStudy: {
    duration: 'Exercice de motion design',
    role: 'Motion designer (animation de logo & compositing)',
    context: {
      situation: "Exercice de reproduction d’une animation de logo à partir d’une référence fournie.",
      problem: "Reproduire fidèlement l’esthétique et le rythme d’une animation en reconstruisant le logo et en préparant les éléments pour l’animation.",
      goals: [
        'Redessiner le logo sur Illustrator',
        'Décomposer les éléments pour l’animation',
        'Reproduire une animation cohérente avec la référence',
        "Intégrer une vidéo d’avion en fond dans le rendu final",
      ],
    },
    video: {
      src: '/project-assets/logo-motion-plane/logo-animation.mp4',
      caption: 'Animation finale — logo vectorisé, animé et composité sur fond vidéo',
    },
  },
}
]

export type Skill = {
  name: string
  icon: string 
  level: '// daily' | '// learning' | '// familiar'
  projects?: string[] 
}

export type SkillGroup = {
  id: string
  label: string
  skills: Skill[]
}

export const SKILLS: SkillGroup[] = [
  {
    id: 'frontend',
    label: 'FRONTEND_',
    skills: [
      { name: 'React', icon: 'Re', level: '// daily', projects: ['bat-manager', 'ipp-election', 'ippcom-goodies'] },
      { name: 'Next.js', icon: 'Nx', level: '// daily', projects: ['bat-manager', 'ipp-election', 'ippcom-goodies'] },
      { name: 'TypeScript', icon: 'TS', level: '// daily', projects: ['bat-manager', 'ipp-election', 'ippcom-goodies'] },
      { name: 'Tailwind CSS', icon: 'TW', level: '// daily', projects: ['bat-manager', 'ipp-election', 'ippcom-goodies'] },
      { name: 'CSS / SCSS', icon: 'Cs', level: '// daily' },
      { name: 'HTML Semantic', icon: 'Ht', level: '// daily' },
      { name: 'Responsive Design', icon: 'Rs', level: '// daily' },
      { name: 'Performance Web', icon: 'Pf', level: '// familiar' },
    ],
  },
  {
    id: 'backend',
    label: 'BACKEND_',
    skills: [
      { name: 'Node.js', icon: 'Nd', level: '// daily', projects: ['bat-manager', 'ipp-election', 'ippcom-goodies'] },
      { name: 'Appwrite', icon: 'Aw', level: '// familiar', projects: ['bat-manager'] },
      { name: 'Supabase', icon: 'Sb', level: '// daily', projects: ['ipp-election', 'ippcom-goodies'] },
      { name: 'PostgreSQL', icon: 'Pg', level: '// daily', projects: ['ipp-election', 'ippcom-goodies'] },
      { name: 'WordPress', icon: 'Wp', level: '// familiar' },
      { name: 'WooCommerce', icon: 'Wc', level: '// familiar' },
      { name: 'Auth JWT', icon: 'Au', level: '// familiar', projects: ['ippcom-goodies'] },
    ],
  },
  {
    id: 'devops',
    label: 'DEVOPS_',
    skills: [
      { name: 'Git / GitHub', icon: 'Gt', level: '// daily' },
      { name: 'Netlify', icon: 'Nf', level: '// daily' },
      { name: 'Docker', icon: 'Dk', level: '// familiar' },
      { name: 'CI/CD', icon: 'CI', level: '// learning' },
    ],
  },
  {
    id: 'tools',
    label: 'OUTILS_',
    skills: [
      { name: 'VS Code', icon: 'Vs', level: '// daily' },
      { name: 'Figma', icon: 'Fg', level: '// daily' },
    ],
  },
  {
    id: 'design',
    label: 'DESIGN_',
    skills: [
      { name: 'Figma', icon: 'Fg', level: '// daily' },
      { name: 'Wireframing', icon: 'Wf', level: '// daily' },
      { name: 'Design Systems', icon: 'Ds', level: '// daily' },
      { name: 'Prototypage', icon: 'Ps', level: '// familiar' },
      { name: 'UX Research', icon: 'Ux', level: '// learning' },
    ],
  },
  {
    id: 'adobesuite',
    label: 'ADOBE SUITE_',
    skills: [
      { name: 'Photoshop', icon: 'Ps', level: '// daily' },
      { name: 'Illustrator', icon: 'Ai', level: '// daily' },
      { name: 'InDesign', icon: 'Id', level: '// familiar' },
      { name: 'Premiere Pro', icon: 'Pr', level: '// familiar' },
      { name: 'After Effects', icon: 'Ae', level: '// learning' },
    ],
  },
]

export type Experience = {
  id: string
  type: 'work' | 'education'
  title: string
  company: string
  location: string
  dateRange: string
  description: string
  tags: string[]
}

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-01',
    type: 'work',
    title: 'Développeur Web & Designer Web — Alternance',
    company: 'Imprimerie du Plateau Picard',
    location: 'Montdidier, France',
    dateRange: 'Sept. 2025 — Oct. 2026',
    description: 'Création et amélioration de sites web, intégration d’interfaces, maintenance WordPress, supports graphiques et accompagnement digital pour une imprimerie.',
    tags: ['React', 'TypeScript', 'WordPress', 'Illustrator', 'Photoshop'],
  },
  {
    id: 'exp-02',
    type: 'work',
    title: 'Développeur Web & Designer Web — Stage',
    company: 'Imprimerie du Plateau Picard',
    location: 'Montdidier, France',
    dateRange: '3 mois en 2025',
    description: 'Développement de sites web, intégration front-end, participation à des supports de communication digitale et création de contenus graphiques.',
    tags: ['React', 'WordPress', 'TypeScript', 'Illustrator', 'Photoshop'],
  },
  {
    id: 'edu-01',
    type: 'education',
    title: 'Bachelor Chef de Projet Création Numérique et Webdesign',
    company: 'LA MANU',
    location: 'Amiens, France',
    dateRange: 'Oct. 2023 — Présent',
    description: 'Formation en alternance orientée conception web, design UX/UI, marketing digital, CMS, interfaces web, motion design, culture graphique et gestion de projet.',
    tags: ['UX/UI', 'Marketing digital', 'Gestion de projet'],
  },
  {
    id: 'edu-02',
    type: 'education',
    title: 'Baccalauréat technologique STI2D',
    company: 'Lycée Saint Riquier',
    location: 'Amiens, France',
    dateRange: '2020 — 2023',
    description: 'Spécialité Numérique et Sciences Informatiques.',
    tags: ['Python', 'Algorithmique'],
  },
]
