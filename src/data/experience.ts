export interface Experiencia {
  periodo: string;
  puesto: string;
  lugar: string;
  descripcion: string;
}

export const experiencia: Experiencia[] = [
  {
    periodo: 'Mar 2026 — actual',
    puesto: 'Pregón',
    lugar: 'proyecto propio',
    descripcion:
      'Desarrollo un producto para que distribuidoras tengan su propia app. Trato directo ' +
      'con dueños de negocio para entender qué necesitan y traducirlo a algo construible.',
  },
  {
    periodo: 'Ene — Mar 2026',
    puesto: 'Desarrollador',
    lugar: 'Azul, distribuidora de alimentos',
    descripcion:
      'Me contrataron para desarrollar su aplicación móvil. Relevé los requerimientos con ' +
      'ellos, la desarrollé completa y la publiqué en Google Play. Sigue en uso.',
  },
  {
    periodo: 'Mar — Jun 2025',
    puesto: 'Pasantía',
    lugar: 'SET Logística',
    descripcion:
      'Desarrollo de un cotizador de tarifas sobre el tarifario real de la empresa, dentro ' +
      'del marco de la práctica profesional de la carrera.',
  },
  {
    periodo: '2023 — actual',
    puesto: 'Docente de Informática',
    lugar: 'Instituto José Peña',
    descripcion:
      'Doy clases de informática. Explicar todos los días me acostumbró a documentar, a ' +
      'preguntar temprano lo que no está claro y a no dar nada por sobreentendido.',
  },
];
