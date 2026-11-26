// Taxonomy of the guides library: blocks and sections with stable ids. Labels
// only; counts and links are derived from the article collection at build time
// in `src/lib/guides-nav.ts`, so publishing an article is enough to list it.
export type GuideSection = {
  /** Locale-neutral id, also the section anchor suffix (`s-<id>`). */
  id: string;
  es: string;
  en: string;
};

export type GuideBlock = {
  id: string;
  es: string;
  en: string;
  sections: GuideSection[];
};

export const GUIDE_BLOCKS: GuideBlock[] = [
  {
    id: 'entrenamiento',
    es: 'Entrenamiento',
    en: 'Training',
    sections: [
      { id: 'musculacion', es: 'Musculación', en: 'Bodybuilding' },
      { id: 'ejercicio-cardiovascular', es: 'Ejercicio cardiovascular', en: 'Cardio' },
      {
        id: 'prevencion-y-recuperacion',
        es: 'Prevención y recuperación',
        en: 'Injury prevention',
      },
      { id: 'fisicos-de-leyenda', es: 'Físicos de leyenda', en: 'Legend physiques' },
      { id: 'entrenamiento', es: 'Entrenamiento', en: 'Training' },
      { id: 'entrenamiento-del-pecho', es: 'Entrenamiento del pecho', en: 'Chest training' },
      {
        id: 'entrenamiento-de-la-espalda',
        es: 'Entrenamiento de la espalda',
        en: 'Back training',
      },
      {
        id: 'entrenamiento-del-hombro',
        es: 'Entrenamiento del hombro',
        en: 'Shoulder training',
      },
      {
        id: 'entrenamiento-de-los-biceps',
        es: 'Entrenamiento de los bíceps',
        en: 'Biceps training',
      },
      {
        id: 'entrenamiento-del-triceps',
        es: 'Entrenamiento del tríceps',
        en: 'Triceps training',
      },
      {
        id: 'entrenamiento-de-las-piernas',
        es: 'Entrenamiento de las piernas',
        en: 'Leg training',
      },
    ],
  },
  {
    id: 'por-musculo',
    es: 'Por músculo',
    en: 'By muscle',
    sections: [
      { id: 'rutinas-de-pecho', es: 'Rutinas de pecho', en: 'Chest routines' },
      { id: 'rutinas-de-espalda', es: 'Rutinas de espalda', en: 'Back routines' },
      { id: 'rutinas-de-biceps', es: 'Rutinas de bíceps', en: 'Biceps routines' },
      { id: 'rutinas-de-triceps', es: 'Rutinas de tríceps', en: 'Triceps routines' },
      { id: 'rutinas-de-pierna', es: 'Rutinas de pierna', en: 'Leg routines' },
      { id: 'pecho', es: 'Pecho', en: 'Chest' },
      { id: 'espalda', es: 'Espalda', en: 'Back' },
      { id: 'hombro', es: 'Hombro', en: 'Shoulders' },
      { id: 'triceps', es: 'Tríceps', en: 'Triceps' },
      { id: 'abdomen', es: 'Abdomen', en: 'Abs' },
      { id: 'pierna', es: 'Pierna', en: 'Legs' },
    ],
  },
  {
    id: 'rutinas',
    es: 'Rutinas',
    en: 'Routines',
    sections: [
      { id: 'rutinas-de-volumen', es: 'Rutinas de volumen', en: 'Muscle-building routines' },
      { id: 'rutinas-de-definicion', es: 'Rutinas de definición', en: 'Cutting routines' },
      { id: 'rutinas-de-fuerza', es: 'Rutinas de fuerza', en: 'Strength routines' },
      { id: 'rutinas-full-body', es: 'Rutinas full body', en: 'Full-body routines' },
      {
        id: 'rutinas-para-principiantes',
        es: 'Rutinas para principiantes',
        en: 'Beginner routines',
      },
      { id: 'rutinas-de-deportes', es: 'Rutinas de deportes', en: 'Sport routines' },
    ],
  },
  {
    id: 'ejercicios',
    es: 'Ejercicios',
    en: 'Exercises',
    sections: [
      { id: 'ejercicios', es: 'Ejercicios', en: 'Exercises' },
      { id: 'ejercicios-de-pecho', es: 'Ejercicios de pecho', en: 'Chest exercises' },
      { id: 'ejercicios-de-espalda', es: 'Ejercicios de espalda', en: 'Back exercises' },
      {
        id: 'ejercicios-de-biceps-y-antebrazo',
        es: 'Ejercicios de bíceps y antebrazo',
        en: 'Biceps and forearm exercises',
      },
      { id: 'ejercicios-de-triceps', es: 'Ejercicios de tríceps', en: 'Triceps exercises' },
      { id: 'ejercicios-de-hombro', es: 'Ejercicios de hombro', en: 'Shoulder exercises' },
      { id: 'ejercicios-de-cuadriceps', es: 'Ejercicios de cuádriceps', en: 'Quad exercises' },
      {
        id: 'ejercicios-de-femoral-y-gluteos',
        es: 'Ejercicios de femoral y glúteos',
        en: 'Hamstring and glute exercises',
      },
      { id: 'ejercicios-de-gemelo', es: 'Ejercicios de gemelo', en: 'Calf exercises' },
      { id: 'ejercicios-de-pierna', es: 'Ejercicios de pierna', en: 'Leg exercises' },
      { id: 'ejercicios-de-trapecios', es: 'Ejercicios de trapecios', en: 'Trap exercises' },
      { id: 'ejercicios-basicos', es: 'Ejercicios básicos', en: 'Basic exercises' },
    ],
  },
  {
    id: 'nutricion',
    es: 'Nutrición',
    en: 'Nutrition',
    sections: [
      { id: 'nutricion-aplicada', es: 'Nutrición aplicada', en: 'Applied nutrition' },
      { id: 'alimentos-funcionales', es: 'Alimentos funcionales', en: 'Functional foods' },
      { id: 'dietas-y-planes', es: 'Dietas y planes', en: 'Diets and meal plans' },
      { id: 'dietas-de-volumen', es: 'Dietas de volumen', en: 'Bulking diets' },
      { id: 'dietas-de-definicion', es: 'Dietas de definición', en: 'Cutting diets' },
      { id: 'suplementos-dieteticos', es: 'Suplementos dietéticos', en: 'Supplements' },
    ],
  },
  {
    id: 'mujer-fitness',
    es: 'Mujer fitness',
    en: 'Women’s fitness',
    sections: [
      {
        id: 'fitness-y-bienestar',
        es: 'Fitness y bienestar',
        en: 'Fitness and wellbeing',
      },
    ],
  },
];
