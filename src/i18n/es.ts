// Spanish copy — the reference version of the site.
// Moved verbatim from the landing components: reword only with owner approval.
export const es = {
  meta: {
    home: {
      title: 'GymLab — App de entrenamiento y progreso',
      description:
        'Planifica tu rutina, registra cada serie y mira tu progreso en gráficos. 873 ejercicios y 9 calculadoras. Próximamente en Google Play y App Store.',
    },
    ogImageAlt: 'GymLab — Deja de entrenar de memoria',
  },

  header: {
    brandLabel: 'GymLab — inicio',
    navLabel: 'Secciones',
    nav: {
      features: 'Funciones',
      screens: 'Capturas',
      faq: 'FAQ',
    },
    contact: 'Contacto',
    cta: 'Prueba la app',
    language: {
      label: 'Idioma',
      es: 'Español',
      en: 'English',
    },
  },

  hero: {
    titleLine1: 'Deja de entrenar',
    titleLine2: 'de memoria',
    sub: 'GymLab organiza tu rutina, registra cada serie mientras entrenas y te muestra tu progreso en gráficos. Funciona sin conexión, incluso donde no hay señal.',
    primaryCta: 'Prueba la app',
    secondaryCta: 'Ver funciones',
    statusLabel: 'Disponibilidad',
    status: ['Próximamente en Google Play', 'Próximamente en App Store'],
    railLabel: 'Estaciones del entrenamiento',
    railHeading: 'Estaciones',
    stations: [
      { n: '01', name: 'Calentamiento' },
      { n: '02', name: 'Fuerza' },
      { n: '03', name: 'Registro' },
      { n: '04', name: 'Progreso' },
    ],
    railFoot: 'App de entrenamiento · Piso 1 · 873 ejercicios',
  },

  proof: {
    label: 'Datos de GymLab',
    stats: [
      { label: 'Ejercicios con foto', value: '873', word: false },
      { label: 'Calculadoras', value: '9', word: false },
      { label: 'Plantillas', value: '68', word: false },
      { label: 'Funciona sin conexión', value: 'Offline', word: true },
    ],
  },

  features: {
    anchor: 'features',
    label: 'Funciones',
    title: 'De la rutina al gráfico',
    items: [
      {
        n: '01',
        title: 'Llega con la rutina lista',
        text: 'Elige objetivo y nivel, parte de una de las 68 plantillas y ajusta días, ejercicios y series a tu semana.',
      },
      {
        n: '02',
        title: 'Registra sin cortar el ritmo',
        text: 'Peso, repeticiones y descanso con temporizador integrado. La siguiente serie empieza con un solo toque.',
      },
      {
        n: '03',
        title: 'Mira qué sube y qué se estancó',
        text: 'Gráficos por ejercicio, grupo muscular y periodo. Ves el progreso y también los meses sin avance.',
      },
      {
        n: '04',
        title: '9 calculadoras donde entrenas',
        text: 'IMC, calorías y macros, 1RM, grasa corporal, agua y medidas. Los cálculos resueltos en la misma app.',
      },
      {
        n: '05',
        title: '873 ejercicios con foto',
        text: 'Catálogo completo con filtros por músculo, equipo y categoría. Encuentras el ejercicio antes de la primera serie.',
      },
      {
        n: '06',
        title: 'Tu espejo, con memoria',
        text: 'Guarda fotos de progreso y compara cómo cambió tu físico con el tiempo.',
      },
      {
        n: '07',
        title: 'Pasos y dispositivos, conectados',
        text: 'Pasos diarios, widgets para Android y sincronización con tus dispositivos. El movimiento fuera del gimnasio también suma.',
      },
      {
        n: '08',
        title: 'Logros que sostienen la constancia',
        text: 'Rachas, objetivos y logros. Un empujón para volver el día que no tienes ganas.',
      },
    ],
    mini: {
      week: {
        label: 'Semana',
        meta: 'Ejemplo',
        days: ['L', 'M', 'X', 'J', 'V', 'S', 'D'],
      },
      sets: {
        label: 'Serie',
        meta: 'Ejemplo',
        columns: ['#', 'kg', 'reps'],
        currentLoad: '82,5',
      },
      volume: {
        label: 'Volumen',
        meta: 'Ejemplo',
      },
      calculators: {
        label: 'Calculadoras',
        meta: '9',
        items: ['IMC', '1RM', 'Agua', 'Macros', 'Grasa', 'Medidas'],
      },
      catalogue: {
        label: 'Catálogo',
        meta: '873',
        filters: ['Músculo', 'Equipo', 'Categoría'],
      },
      compare: {
        label: 'Comparar',
        meta: 'Fotos',
      },
      steps: {
        label: 'Pasos',
        meta: 'Widget',
      },
      streak: {
        label: 'Racha',
        meta: 'Logros',
      },
    },
  },

  showcase: {
    anchor: 'capturas',
    label: 'Capturas',
    title: 'Así se ve mientras entrenas',
    shots: [
      {
        caption: 'Sesión en vivo, con temporizador',
        alt: 'Captura de GymLab: sesión en vivo con temporizador de descanso y registro de series.',
      },
      {
        caption: '68 plantillas listas para empezar',
        alt: 'Captura de GymLab: pantalla de rutinas con plantillas y filtros por objetivo y nivel.',
      },
      {
        caption: 'Catálogo de 873 ejercicios',
        alt: 'Captura de GymLab: catálogo de 873 ejercicios con filtros por músculo, equipo y categoría.',
      },
    ],
  },

  privacy: {
    anchor: 'privacidad',
    label: 'Privacidad',
    title: 'Tus datos viven en tu teléfono',
    text: 'GymLab guarda tu historial en el dispositivo. Entrenas sin crear una cuenta y tus datos no se comparten con terceros.',
    link: 'Leer la política de privacidad →',
    tags: {
      top: 'Sin cuenta',
      bottom: 'En el dispositivo',
    },
  },

  faq: {
    anchor: 'faq',
    label: 'FAQ',
    title: 'Preguntas frecuentes',
    items: [
      {
        q: '¿Funciona sin conexión?',
        a: 'Sí. Puedes entrenar, registrar series y consultar tu historial sin internet. Todo queda guardado en tu teléfono.',
      },
      {
        q: '¿Dónde se guardan mis datos?',
        a: 'En tu teléfono. GymLab no te pide una cuenta para entrenar y tu historial no se sube a servidores de terceros. El detalle está en la política de privacidad.',
      },
      {
        q: '¿Sirve si estoy empezando?',
        a: 'Sí. Eliges nivel y objetivo, y una plantilla te marca por dónde empezar. También puedes crear tu rutina desde cero.',
      },
      {
        q: '¿Qué incluye el catálogo de ejercicios?',
        a: '873 ejercicios con foto, filtrables por músculo, categoría y equipamiento.',
      },
      {
        q: '¿Cuándo y en qué tiendas sale?',
        a: 'Estamos preparando el lanzamiento para Google Play y App Store. Si quieres enterarte el día uno, escríbenos a gymlab@gymlab.dev.',
      },
    ],
  },

  closing: {
    anchor: 'cierre',
    title: 'Deja de entrenar de memoria',
    text: 'Si quieres enterarte el día uno, escríbenos a gymlab@gymlab.dev.',
    cta: 'Avísame cuando salga',
    mailtoSubject: 'GymLab: avísame cuando salga',
    stamp: 'Próximamente',
    mark: 'GYMLAB',
  },

  footer: {
    brandLabel: 'GymLab — inicio',
    tagline: 'Entrena con un plan. Mira tu progreso.',
    navLabel: 'Legal y contacto',
    links: {
      privacy: 'Privacidad',
      terms: 'Términos',
      contact: 'Contacto',
    },
    meta: 'Piso 1 · GymLab.dev',
  },

  legalChrome: {
    kicker: 'Legal',
    updated: 'Última actualización',
    disclaimer: 'Documento informativo; no constituye asesoramiento legal.',
    // The courtesy-translation note belongs to translations only; empty in the
    // reference version, so the Spanish pages render nothing extra.
    courtesy: '',
  },
};
