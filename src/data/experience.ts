export interface Experiencia {
  periodo: string;
  puesto: string;
  lugar: string;
  descripcion: string;
}

// TODO: confirmar las fechas exactas de cada puesto.
export const experiencia: Experiencia[] = [
  {
    periodo: '2026 — actual',
    puesto: 'Pregón',
    lugar: 'proyecto propio',
    descripcion:
      'Desarrollo un producto para que distribuidoras tengan su propia app. Trato directo ' +
      'con dueños de negocio para entender qué necesitan y traducirlo a algo construible.',
  },
  {
    periodo: '2025 — 2026',
    puesto: 'Desarrollador',
    lugar: 'Azul, distribuidora de alimentos',
    descripcion:
      'Me contrataron para desarrollar su aplicación móvil. Relevé los requerimientos con ' +
      'ellos, la desarrollé completa y la publiqué en Google Play. Sigue en uso.',
  },
  {
    periodo: '2025',
    puesto: 'Pasantía',
    lugar: 'SET Logística',
    descripcion:
      'Desarrollo de un cotizador de tarifas sobre el tarifario real de la empresa, dentro ' +
      'del marco de la práctica profesional de la carrera.',
  },
  {
    periodo: 'Actual',
    puesto: 'Docente de Informática',
    lugar: 'colegio secundario',
    descripcion:
      'Doy clases de informática. Explicar todos los días me acostumbró a documentar, a ' +
      'preguntar temprano lo que no está claro y a no dar nada por sobreentendido.',
  },
];
