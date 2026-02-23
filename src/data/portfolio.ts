export const PROFILE = {
  name: 'Noah Bucheton',
  role: 'Développeur Web & Designer UI/UX',
  tagline: 'Je construis des interfaces qui font sens — React, Node.js, et une obsession pour les détails.',
  bio: `Développeur web fullstack avec un vrai biais frontend : j’aime les interfaces rapides, propres, et cohérentes.
Je travaille principalement en React/TypeScript et je fais attention aux détails : accessibilité, performance et design system.
Aujourd’hui, je cherche des missions/opportunités où je peux livrer vite, bien, et de façon maintenable.`,
  email: 'noah.bucheton@gmail.com',
  github: 'https://github.com/Owxnbrr/',
  linkedin: 'https://linkedin.com/in/noah-bucheton',
  availability: 'Disponible pour des opportunités',
  location: 'Amiens, France',
  buildHash: 'a3f2c8d',
}
// ── Type pour les screenshots ─────────────────────────
export type ProjectScreenshot = {
  src: string          // chemin dans /public/projects/{id}/
  alt: string
  caption?: string
  format?: 'mobile' | 'desktop'
}

// ── Type pour les blocs d'architecture ────────────────
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
// ── Étude de cas complète (optionnel par projet) ───────
export type CaseStudy = {
  // Contexte & problème
  context: {
    situation: string      // La situation de départ
    problem: string        // Le problème à résoudre
    goals: string[]        // Les objectifs mesurables
  }

  // Architecture (optionnel)
  architecture?: {
    description: string
    diagram: ArchitectureDiagram
  }

  // Vidéo / motion (optionnel)
  video?: ProjectVideo

  // Screenshots (optionnel)
  screenshots?: ProjectScreenshot[]

  // Durée du projet
  duration: string         // ex: "3 semaines"

  // Rôle tenu
  role: string             // ex: "Développeur fullstack solo"
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
  gradient: string // CSS gradient pour le thumbnail placeholder
  caseStudy?: CaseStudy
}

export const PROJECTS: Project[] = [
  {
  id: 'ipp-election',
  hash: 'ippel26',
  title: 'IPP Election',
  description: 'Plateforme de commande de documents électoraux pour mairies : parcours multi-étapes, calcul de prix, paiement Stripe et gestion des commandes.'  ,
  longDescription: `Projet web réalisé pour IPP afin de simplifier la commande de documents électoraux pour les mairies françaises.
Le site structure un parcours clair : présentation des produits, explication des étapes de commande, puis CTA vers le tunnel.
Le travail a porté sur la clarté de l’information, la hiérarchie visuelle et la mise en confiance (cadre B2B/institutionnel).`,
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
  caseStudy: {
    duration: '2 semaines',
    role: 'Développeur fullstack solo',
    context: {
      situation: "IPP propose un service d’impression de documents électoraux pour les mairies, avec des produits et options spécifiques (formats, quantités, recto/verso).",
      problem: "Présenter une offre technique et réglementée de manière simple, compréhensible et rassurante, tout en orientant efficacement vers la commande.",
      goals: [
        'Clarifier les types de produits électoraux (affiches, bulletins, professions de foi)',
        'Rendre le parcours de commande lisible en quelques étapes',
        'Mettre en avant des CTA clairs vers la commande',
        'Créer une interface sobre et rassurante pour une cible institutionnelle',
      ],
    },
    architecture: {
      description:
        "Structure en pages : Home, Commande, pages légales. Navigation pensée pour réduire le nombre d’étapes entre découverte et prise de contact. Déploiement sur Netlify.",
      diagram: {
        nodes: [
          { id: 'home', label: 'Home', type: 'client' },
          { id: 'commande', label: 'Commande', type: 'client' },
          { id: 'deploy', label: 'Netlify', type: 'infra' },
          { id: 'sb', label: 'Supabase', type: 'service' },
          { id: 'db', label: 'PostgreSQL (Supabase)', type: 'db' },
          {id: 'pay', label: 'Stripe', type: 'client' },
        ],
        edges: [
          { from: 'home', to: 'commande', label: 'CTA' },
          { from: 'commande', to: 'pay', label: 'paiement' },
          { from: 'deploy', to: 'home', label: 'deployement', },
          { from: 'sb', to: 'db', label: 'SQL' },
        ],
      },
    },
    screenshots: [
      {
        src: '/projects/ipp-election/home-hero.png',
        alt: 'Accueil IPP Election — hero et CTA de commande',
        caption: 'Accueil — proposition de valeur claire et CTA vers le parcours de commande',
      },
      {
        src: '/projects/ipp-election/products.png',
        alt: 'Section produits électoraux IPP Election',
        caption: 'Produits — présentation des catégories et des contraintes métier (formats, paliers, options)',
      },
      {
        src: '/projects/ipp-election/process.png',
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
  description: "Site catalogue de goodies : navigation par catégories, catalogue paginé et parcours de contact.",
  longDescription: `Mise en place d’un site vitrine orienté conversion pour une offre de goodies.
Objectif : permettre de parcourir rapidement les catégories/collections et déclencher une demande via la page contact.`,
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
  // garde juste la couleur : gradient sobre, cohérent avec un projet "pro"
  gradient: 'linear-gradient(135deg, #0EA5E9 0%, #0B1A2A 100%)',

  caseStudy: {
    duration: '3 semaines',
    role: 'Développeur fullstack solo',
    context: {
      situation:
        "Créer un point d’entrée clair pour présenter l’offre de goodies et faciliter la découverte des produits par collections/catégories grâce a l'API de ANDA.",
      problem:
        "Un site catalogue peut vite devenir confus : trop d’infos, trop de clics, ou une navigation peu lisible. Le défi était de garder une expérience simple tout en donnant accès rapidement aux catégories et au catalogue.",
      goals: [
        'Home claire avec sections éditoriales + CTA',
        'Accès rapide au catalogue et aux catégories principales',
        'Catalogue paginé pour garder une page légère',
        'Parcours de contact évident (footer + page dédiée)',
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
          { from: 'deploy', to: 'home', label: '', },
          { from: 'client', to: 'sb', label: 'auth / data' },
          { from: 'sb', to: 'db', label: 'SQL' },
        ],
      },
    },

    screenshots: [
      {
        src: '/projects/ippcom-goodies/home.png',
        alt: 'Accueil IPPCom Goodies',
        caption: 'Accueil — proposition de valeur, CTA catalogue/devis et mise en avant des nouveautés'
      },
      {
        src: '/projects/ippcom-goodies/categories.png',
        alt: 'Catégories IPPCom Goodies',
        caption: 'Catégories — navigation par collections avec volumes de produits visibles'
      },
      {
        src: '/projects/ippcom-goodies/catalog.png',
        alt: 'Catalogue IPPCom Goodies',
        caption: 'Catalogue — recherche produit et grille de cartes pour une exploration rapide'
      },
      {
        src: '/projects/ippcom-goodies/contact.png',
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
  description: 'Prototype UX/UI mobile d’une application de collection de vinyles (catalogue, recherche, fiches, parcours utilisateur) réalisé sur Figma.',
  longDescription: `Projet de maquettage UX/UI mobile autour d’une application de collection de vinyles.
Travail sur l’architecture de l’information, les parcours utilisateurs, la hiérarchie visuelle et la cohérence des écrans.
Prototype interactif réalisé sur Figma avec transitions et micro-interactions (dont animation du logo vinyle).`,
  tags: ['Figma', 'UX/UI', 'Prototype', 'Mobile'],
  stack: ['Figma', 'Prototypage', 'Wireframing', 'UI Design'],
  type: 'design',
  status: 'prototype',
  year: 2024,
  links: {
    demo: 'TON_LIEN_FIGMA_PROTO',
  },
  gradient: 'linear-gradient(135deg, #60A5FA 0%, #1E3A8A 100%)',
  caseStudy: {
    duration: 'Projet scolaire (UX/UI)',
    role: 'UX/UI Designer (maquettage & prototype mobile)',
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
      src: '/projects/discollection/logo-animation.mp4',
      title: 'Animation du logo',
      caption: 'Motion branding — vinyle animé utilisé dans l’introduction du prototype',
    },
    screenshots: [
      {
        src: '/projects/discollection/home.png',
        alt: 'Écran d’accueil Discollection (prototype mobile)',
        caption: 'Accueil mobile — univers visuel, branding et entrée dans le parcours',
        format: 'mobile',
      },
      {
        src: '/projects/discollection/catalogue.png',
        alt: 'Écran catalogue Discollection (prototype mobile)',
        caption: 'Catalogue mobile — exploration des vinyles via une grille de contenus',
        format: 'mobile',
      },
      {
        src: '/projects/discollection/login.png',
        alt: 'Écran de connexion Discollection (prototype mobile)',
        caption: 'Connexion mobile — écran d’authentification du prototype',
        format: 'mobile',
      },
      {
        src: '/projects/discollection/réseaux.png',
        alt: 'Écran de réseaux Discollection (prototype mobile)',
        caption: 'Réseaux mobile — écran de gestion des réseaux sociaux du prototype',
        format: 'mobile',
      },
      {
        src: '/projects/discollection/profil.png',
        alt: 'Écran de profil Discollection (prototype mobile)',
        caption: 'Profil mobile — écran de gestion du profil utilisateur du prototype',
        format: 'mobile',
      },
      {
        src: '/projects/discollection/scan.png',
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
  description: 'Reproduction d’une animation de logo : vectorisation, décomposition des éléments, animation et compositing sur fond vidéo.',
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
    duration: 'Projet pédagogique (motion design)',
    role: 'Motion designer (vectorisation, animation, compositing)',
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
      src: '/projects/logo-motion-plane/logo-animation.mp4',
      caption: 'Animation finale — logo vectorisé, animé et composité sur fond vidéo',
    },
  },
}
]

export type Skill = {
  name: string
  icon: string // emoji ou code initiales
  level: '// daily' | '// learning' | '// familiar'
  projects?: string[] // IDs des projets qui l'utilisent
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
      { name: 'React', icon: 'Re', level: '// daily', projects: ['ippcom-goodies'] },
      { name: 'Next.js', icon: 'Nx', level: '// daily', projects: ['ippcom-goodies'] },
      { name: 'TypeScript', icon: 'TS', level: '// daily', projects: ['ippcom-goodies'] },
      { name: 'Tailwind CSS', icon: 'TW', level: '// daily', projects: ['ippcom-goodies'] },
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
      { name: 'Node.js', icon: 'Nd', level: '// daily', projects: ['ippcom-goodies'] },
      { name: 'Supabase', icon: 'Sb', level: '// daily', projects: ['ippcom-goodies'] },
      { name: 'PostgreSQL', icon: 'Pg', level: '// daily', projects: ['ippcom-goodies'] },
      { name: 'Auth JWT', icon: 'Au', level: '// familiar', projects: ['ippcom-goodies'] },
    ],
  },
  {
    id: 'devops',
    label: 'DEVOPS_',
    skills: [
      { name: 'Git / GitHub', icon: 'Gt', level: '// daily' },
      { name: 'Vercel', icon: 'Vc', level: '// daily' },
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
    description: 'Développement de sites web. Création de contenu pour les réseaux sociaux.',
    tags: ['React', 'TypeScript', 'Illustrator', 'Photoshop'],
  },
  {
    id: 'exp-02',
    type: 'work',
    title: 'Développeur Web & Designer Web — Stage',
    company: 'Imprimerie du Plateau Picard',
    location: 'Montdidier, France',
    dateRange: '3 mois en 2025',
    description: 'Développement de sites web. Création de contenu pour les réseaux sociaux.',
    tags: ['React', 'WordPress', 'TypeScript', 'Illustrator', 'Photoshop'],
  },
  {
    id: 'edu-01',
    type: 'education',
    title: 'Bachelor Chef de Projet Création Numérique et Webdesign',
    company: 'LA MANU',
    location: 'Amiens, France',
    dateRange: 'Oct. 2023 — Présent',
    description: 'Formation en alternance. Cours : Design UX / UI, Marketing et communication, CMS et interfaces web, Design 3D, vidéo et Motion Design, Culture graphique, Gestion de projet',
    tags: ['UX/UI', 'Marketing digital', 'Gestion de projet'],
  },
  {
    id: 'edu-02',
    type: 'education',
    title: 'BACCALAUREAT Technologique STI2D',
    company: 'Lycée Saint Riquier',
    location: 'Amiens, France',
    dateRange: '2020 — 2023',
    description: 'Spécialité Numérique et Sciences Informatiques.',
    tags: ['Python', 'Algorithmique'],
  },
]
