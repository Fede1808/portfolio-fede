export interface Project {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  client?: string;
  year: number;
  featured: boolean;
  description: { es: string; en: string };
  howBuilt?: { es: string; en: string };
  highlights: string[];
  stack: string[];
  metrics?: { value: string; label: string; sublabel: string }[];
  links: {
    appStore: string | null;
    googlePlay: string | null;
    demo: string | null;
    github: string | null;
  };
  screenshots: string[];
}

export const projects: Project[] = [
  {
    id: 'azul',
    tag: '01 / FEATURED',
    title: 'App Azul',
    subtitle: 'iOS + Android · Gestión de pedidos',
    client: 'Azul Alimentos · Distribución de alimentos congelados',
    year: 2025,
    featured: true,
    description: {
      es: 'Aplicación móvil end-to-end para iOS y Android desarrollada para Azul Alimentos. Sistema completo de gestión de pedidos y comunicación entre vendedores, compradores y administración. Publicada en ambas stores, en producción activa.',
      en: 'End-to-end mobile application for iOS and Android, built for Azul Alimentos. Complete order management and communication system across sellers, buyers and admin roles. Live on both stores in active production.'
    },
    howBuilt: {
      es: 'Desarrollé este proyecto usando un workflow AI-asistido con Claude Code. Mi rol fue diseñar la arquitectura, definir requisitos con el cliente, tomar las decisiones técnicas clave (stack, modelo de datos, manejo de estado, estrategia de testing) y resolver el ciclo completo de publicación en ambas stores. Es la forma en la que trabajo: criterio humano + herramientas modernas para entregar productos reales más rápido.',
      en: "I built this project using an AI-assisted workflow with Claude Code. My role was to design the architecture, define requirements with the client, make key technical decisions (stack, data model, state management, testing strategy), and handle the complete publishing cycle for both stores. That's how I work: human judgment + modern tools to ship real products faster."
    },
    highlights: [
      'Toma de requerimientos directa con el cliente',
      'Diseño de arquitectura: modelo de datos, navegación, identidad visual',
      'Sistema de auth con 3 roles (buyer, seller, superadmin)',
      'Chat en tiempo real: texto, imágenes, PDFs y audio',
      'Sistema de difusiones con contador de vistas',
      'Gestión de clientes con sub-tabs Activos/Nuevos',
      'Push notifications cross-platform (FCM + APNs)',
      'Animaciones custom (spring press, stagger entrance)',
      'Edge Function para eliminación de cuenta (Apple 5.1.1v)',
      'Build, signing y publicación end-to-end en ambas stores'
    ],
    stack: ['React Native', 'Expo SDK 54', 'Expo Router v3', 'Supabase', 'Zustand', 'React Native Paper', 'Reanimated 4', 'TypeScript'],
    metrics: [
      { value: '3', label: 'roles', sublabel: 'buyer · seller · superadmin' },
      { value: '82', label: 'tests', sublabel: 'automated, all green' },
      { value: '2', label: 'stores', sublabel: 'App Store + Google Play' },
      { value: '∞', label: 'chats', sublabel: 'real-time messaging' }
    ],
    links: {
      appStore: null,    // TODO: REVIEW — add App Store link when published
      googlePlay: null,  // TODO: REVIEW — add Google Play link when published
      demo: null,        // TODO: REVIEW — add demo video link
      github: null
    },
    screenshots: []      // TODO: REVIEW — add paths to public/projects/azul/
  },
  {
    id: 'prode',
    tag: '02',
    title: 'Prode en Familia',
    subtitle: 'Plataforma web de prode familiar para Mundial 2026',
    year: 2026,
    featured: false,
    description: {
      es: 'Plataforma web para que familias y grupos jueguen un prode del Mundial 2026. Sistema de predicciones por partido con cálculo automático de puntos, tabla de posiciones en tiempo real, panel admin para cargar resultados, e integración con API de partidos.',
      en: 'Web platform for families and groups to play a World Cup 2026 predictor. Match prediction system with automatic point calculation, real-time leaderboard, admin panel for entering results, and live match API integration.'
    },
    highlights: [
      'Diseño full-stack desde cero',
      'Auth simple (usuario + contraseña)',
      'Cálculo de puntos: exacto vs ganador, 2x para Argentina',
      'Cron job para actualización automática de resultados',
      'Tabla de posiciones en tiempo real',
      'Panel admin para cargar resultados',
      'Mobile-first'
    ],
    stack: ['Astro', 'Tailwind CSS', 'Supabase', 'Vercel'],
    links: {
      appStore: null,
      googlePlay: null,
      demo: null,    // TODO: REVIEW — add live demo link when deployed
      github: null   // TODO: REVIEW — add GitHub repo link
    },
    screenshots: []
  }
];
