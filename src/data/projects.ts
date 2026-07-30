export type Estado = 'produccion' | 'uso' | 'construccion' | 'marcha';

export interface Metrica {
  nombre: string;
  valor: string;
  ancho: number;   // porcentaje de la barra, relativo al mejor
  propio?: boolean;
}

export interface Comparativa {
  titulo: string;
  nota: string;
  filas: Metrica[];
  pie: string;
}

export interface Project {
  id: string;
  titulo: string;
  resumen: string;
  estado: Estado;
  hizo: string[];
  stackTecnico: string;
  chips: string[];
  links: { texto: string; url: string }[];
  pendientes: string[];
  comparativa?: Comparativa;
}

export const estadoLabel: Record<Estado, string> = {
  produccion: 'En producción',
  uso: 'En uso',
  construccion: 'En construcción',
  marcha: 'En marcha',
};

export const projects: Project[] = [
  {
    id: 'azul',
    titulo: 'App Azul',
    resumen:
      'Aplicación de pedidos y comunicación para una distribuidora de alimentos congelados.',
    estado: 'produccion',
    hizo: [
      '<b>Relevé los requerimientos junto al cliente</b> y definimos en conjunto cómo tenía que funcionar',
      'Tres tipos de usuario con permisos distintos: comprador, vendedor y administración',
      'Chat interno, catálogo de productos y avisos con confirmación de lectura',
      'Notificaciones al celular, en iPhone y Android',
      'Me ocupé de la <b>publicación en la tienda</b> y de cumplir los requisitos de Apple y Google',
    ],
    stackTecnico:
      'React Native · Expo SDK 54 · Supabase · permisos a nivel base de datos · Edge Functions · 82 tests automatizados · build y firma con EAS',
    chips: ['React Native', 'Expo', 'Supabase', 'TypeScript', 'EAS'],
    links: [],
    // TODO: agregar el link de Google Play cuando lo pases.
    pendientes: ['falta link de Google Play', 'código privado · cliente'],
  },
  {
    id: 'datafut',
    titulo: 'datafut',
    resumen:
      'Sitio que calcula qué chances tiene cada equipo del fútbol argentino, con un modelo de predicción propio.',
    estado: 'construccion',
    hizo: [
      'Construí el modelo desde cero y <b>lo medí contra las casas de apuestas</b> para saber si servía',
      'Todo el proceso corre solo una vez por semana: descarga los datos, recalcula y publica',
      'Cubre el ciclo completo: análisis de datos en Python, el modelo y el sitio web',
      'Publiqué los resultados incluso donde el modelo pierde, para que se pueda auditar',
    ],
    comparativa: {
      titulo: '¿Funciona?',
      nota: 'Comparado contra las casas de apuestas y contra métodos más simples. Barra más larga = predice mejor.',
      // Ventaja sobre el azar = 1 - (log loss del modelo / log loss del azar).
      // Fuente: datafut/data/outputs/evaluacion.md
      filas: [
        { nombre: 'Casas de apuestas', valor: '4.14%', ancho: 100 },
        { nombre: 'Mi modelo', valor: '3.11%', ancho: 75, propio: true },
        { nombre: 'Método simple (Elo)', valor: '2.66%', ancho: 64 },
        { nombre: 'Promedio histórico', valor: '1.78%', ancho: 43 },
      ],
      pie: 'Le gana a los métodos simples. A las casas de apuestas todavía no. <b>Publico el resultado igual.</b>',
    },
    stackTecnico:
      'Python · pandas · scipy · modelo Dixon-Coles con decaimiento temporal calibrado · simulación Monte Carlo (10.000 corridas) · backtest walk-forward · Next.js · GitHub Actions',
    chips: ['Python', 'pandas', 'Next.js', 'TypeScript', 'CI/CD'],
    links: [{ texto: 'Ver el código', url: 'https://github.com/Fede1808/datafut' }],
    pendientes: ['demo pendiente de deploy'],
  },
  {
    id: 'pregon',
    titulo: 'Pregón',
    resumen:
      'Producto propio: convertir la app de Azul en algo que se pueda entregar a otras distribuidoras.',
    estado: 'marcha',
    hizo: [
      'Antes cada cliente significaba rehacer la app; ahora se configura en un archivo y <b>se entrega en una tarde</b>',
      'Escribí el método de implementación que siguen las distribuidoras para que sus clientes usen la app',
      'Trabajo directo con dueños de negocio: traducir lo que necesitan a algo que se pueda construir',
    ],
    stackTecnico:
      'React Native · Expo · Supabase · configuración validada contra schema · credenciales de build separadas por cliente en EAS · migraciones versionadas',
    chips: ['React Native', 'Expo', 'Supabase'],
    links: [],
    pendientes: ['código privado'],
  },
  {
    id: 'prode',
    titulo: 'Prode Familia',
    resumen: 'Juego de pronósticos del Mundial 2026. Lo usa mi familia en cada fecha.',
    estado: 'uso',
    hizo: [
      'Lo hice para aprender la última versión de Next.js con usuarios reales exigiendo que funcione',
      '56 versiones ajustando las reglas de puntaje según lo que pedían los jugadores',
    ],
    stackTecnico:
      'Next.js 16 (App Router, Server Actions) · Supabase · control de sesión previo al render · Tailwind v4 · Vercel',
    chips: ['Next.js 16', 'Supabase', 'Vercel'],
    links: [{ texto: 'Ver el código', url: 'https://github.com/Fede1808/prode-familia' }],
    pendientes: [],
  },
];
