export interface Profile {
  nombre: string;
  rol: string;
  subtitulo: string;
  intro: string;
  ciudad: string;
  disponibilidad: string;
  modalidad: string;
  idiomas: string;
  email: string;
  github: string;
  linkedin: string;
  cv: string | null;
  foto: string | null;
}

export const profile: Profile = {
  nombre: 'Federico López Costanzo',
  rol: 'Desarrollador Full-Stack & Mobile',
  subtitulo: 'Estudiante avanzado de Ingeniería en Software',
  intro:
    'Estoy en el último año de Ingeniería en Software en la Universidad Siglo 21. ' +
    'Desarrollé una aplicación que hoy usa una distribuidora todos los días, y estoy ' +
    'construyendo un producto propio para llevarla a más clientes. Además doy clases ' +
    'de informática en un colegio secundario.',
  ciudad: 'Córdoba, Argentina',
  disponibilidad: 'Disponible full-time',
  modalidad: 'Remoto o híbrido',
  idiomas: 'Español · inglés técnico',
  email: 'fede.fl73@gmail.com',
  github: 'https://github.com/Fede1808',
  linkedin: 'https://www.linkedin.com/in/federicolopezcostanzo/',
  cv: '/cv.pdf',
  foto: null, // TODO: agregar foto en /public/fede.jpg y poner '/fede.jpg'
};

export interface SkillGroup {
  area: string;
  items: string;
}

export const skills: SkillGroup[] = [
  { area: 'Lenguajes', items: 'TypeScript, JavaScript, Python, SQL' },
  { area: 'Mobile', items: 'React Native, Expo, EAS' },
  { area: 'Web', items: 'Next.js, React, Astro, Tailwind CSS' },
  { area: 'Backend', items: 'Supabase, PostgreSQL, FastAPI' },
  { area: 'Datos', items: 'pandas, scipy, Power BI' },
  { area: 'Otros', items: 'Git, GitHub Actions, Vercel, testing' },
];

export interface Education {
  titulo: string;
  institucion: string;
  detalle: string;
}

export const educacion: Education[] = [
  {
    titulo: 'Ingeniería en Software',
    institucion: 'Universidad Siglo 21',
    detalle: 'Último año · en curso',
  },
  {
    titulo: 'Análisis de datos',
    institucion: 'Power BI, SQL y Python — base de mi formación anterior',
    detalle: 'Previo',
  },
];
