// Navigation data for the guides library. Counts come from the source archive
// (`cambiatufisico.com/paginas.csv`, 792 articles) so the menu and the future
// index pages agree. The trigger stays hidden until the first guides ship:
// every entry already points at the path the page will publish.
export type GuideSection = {
  es: string;
  en: string;
  count: number;
  /** Public path once the section index exists; `#` while it does not. */
  href: string;
};

export type GuideBlock = {
  id: string;
  es: string;
  en: string;
  total: number;
  href: string;
  sections: GuideSection[];
};

/** Flip to `true` when the first batch of guides is published. */
export const GUIDES_ENABLED = false;

export const GUIDE_BLOCKS: GuideBlock[] = [
  {
    id: 'entrenamiento',
    es: 'Entrenamiento',
    en: 'Training',
    total: 222,
    href: '#',
    sections: [
      { es: 'Musculación', en: 'Bodybuilding', count: 84, href: '#' },
      { es: 'Ejercicio cardiovascular', en: 'Cardio', count: 32, href: '#' },
      { es: 'Prevención y recuperación', en: 'Injury prevention', count: 16, href: '#' },
      { es: 'Físicos de leyenda', en: 'Legend physiques', count: 12, href: '#' },
      { es: 'Entrenamiento', en: 'Training', count: 25, href: '#' },
      { es: 'Entrenamiento del pecho', en: 'Chest training', count: 6, href: '#' },
      { es: 'Entrenamiento de la espalda', en: 'Back training', count: 10, href: '#' },
      { es: 'Entrenamiento del hombro', en: 'Shoulder training', count: 9, href: '#' },
      { es: 'Entrenamiento de los bíceps', en: 'Biceps training', count: 7, href: '#' },
      { es: 'Entrenamiento del tríceps', en: 'Triceps training', count: 3, href: '#' },
      { es: 'Entrenamiento de las piernas', en: 'Leg training', count: 18, href: '#' },
    ],
  },
  {
    id: 'por-musculo',
    es: 'Por músculo',
    en: 'By muscle',
    total: 80,
    href: '#',
    sections: [
      { es: 'Rutinas de pecho', en: 'Chest routines', count: 1, href: '#' },
      { es: 'Rutinas de espalda', en: 'Back routines', count: 4, href: '#' },
      { es: 'Rutinas de bíceps', en: 'Biceps routines', count: 7, href: '#' },
      { es: 'Rutinas de tríceps', en: 'Triceps routines', count: 1, href: '#' },
      { es: 'Rutinas de pierna', en: 'Leg routines', count: 3, href: '#' },
      { es: 'Pecho', en: 'Chest', count: 9, href: '#' },
      { es: 'Espalda', en: 'Back', count: 1, href: '#' },
      { es: 'Hombro', en: 'Shoulders', count: 5, href: '#' },
      { es: 'Tríceps', en: 'Triceps', count: 1, href: '#' },
      { es: 'Abdomen', en: 'Abs', count: 39, href: '#' },
      { es: 'Pierna', en: 'Legs', count: 9, href: '#' },
    ],
  },
  {
    id: 'rutinas',
    es: 'Rutinas',
    en: 'Routines',
    total: 80,
    href: '#',
    sections: [
      { es: 'Rutinas de volumen', en: 'Muscle-building routines', count: 29, href: '#' },
      { es: 'Rutinas de definición', en: 'Cutting routines', count: 20, href: '#' },
      { es: 'Rutinas de fuerza', en: 'Strength routines', count: 9, href: '#' },
      { es: 'Rutinas full body', en: 'Full-body routines', count: 5, href: '#' },
      { es: 'Rutinas para principiantes', en: 'Beginner routines', count: 9, href: '#' },
      { es: 'Rutinas de deportes', en: 'Sport routines', count: 8, href: '#' },
    ],
  },
  {
    id: 'ejercicios',
    es: 'Ejercicios',
    en: 'Exercises',
    total: 196,
    href: '#',
    sections: [
      { es: 'Ejercicios', en: 'Exercises', count: 8, href: '#' },
      { es: 'Ejercicios de pecho', en: 'Chest exercises', count: 27, href: '#' },
      { es: 'Ejercicios de espalda', en: 'Back exercises', count: 31, href: '#' },
      { es: 'Ejercicios de bíceps y antebrazo', en: 'Biceps and forearm exercises', count: 22, href: '#' },
      { es: 'Ejercicios de tríceps', en: 'Triceps exercises', count: 17, href: '#' },
      { es: 'Ejercicios de hombro', en: 'Shoulder exercises', count: 29, href: '#' },
      { es: 'Ejercicios de cuádriceps', en: 'Quad exercises', count: 23, href: '#' },
      { es: 'Ejercicios de femoral y glúteos', en: 'Hamstring and glute exercises', count: 12, href: '#' },
      { es: 'Ejercicios de gemelo', en: 'Calf exercises', count: 9, href: '#' },
      { es: 'Ejercicios de pierna', en: 'Leg exercises', count: 6, href: '#' },
      { es: 'Ejercicios de trapecios', en: 'Trap exercises', count: 6, href: '#' },
      { es: 'Ejercicios básicos', en: 'Basic exercises', count: 6, href: '#' },
    ],
  },
  {
    id: 'nutricion',
    es: 'Nutrición',
    en: 'Nutrition',
    total: 191,
    href: '#',
    sections: [
      { es: 'Nutrición aplicada', en: 'Applied nutrition', count: 111, href: '#' },
      { es: 'Alimentos funcionales', en: 'Functional foods', count: 12, href: '#' },
      { es: 'Dietas y planes', en: 'Diets and meal plans', count: 3, href: '#' },
      { es: 'Dietas de volumen', en: 'Bulking diets', count: 13, href: '#' },
      { es: 'Dietas de definición', en: 'Cutting diets', count: 17, href: '#' },
      { es: 'Suplementos dietéticos', en: 'Supplements', count: 35, href: '#' },
    ],
  },
  {
    id: 'mujer-fitness',
    es: 'Mujer fitness',
    en: 'Women’s fitness',
    total: 23,
    href: '#',
    sections: [
      { es: 'Fitness y bienestar', en: 'Fitness and wellbeing', count: 23, href: '#' },
    ],
  },
];
