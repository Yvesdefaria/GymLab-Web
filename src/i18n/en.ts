import type { Dict } from './index';

// English copy — en-GB. Written fresh against the approved Spanish: same
// rhythm, same claims, no literal calques.
export const en: Dict = {
  meta: {
    home: {
      title: 'GymLab — Training and progress app',
      description:
        'Free training app that works offline. Plan your gym routine, log every set and watch your progress in graphs. 873 exercises, 9 calculators, no account.',
    },
    ogImageAlt: 'GymLab — Stop training from memory',
  },

  header: {
    brandLabel: 'GymLab — home',
    navLabel: 'Sections',
    nav: {
      features: 'Features',
      screens: 'Screens',
      calculators: 'Calculators',
      faq: 'FAQ',
    },
    contact: 'Contact',
    cta: 'Try the app',
    language: {
      label: 'Language',
      es: 'Español',
      en: 'English',
    },
  },

  hero: {
    titleLine1: 'Stop training',
    titleLine2: 'from memory',
    sub: 'GymLab organises your routine, logs every set as you train and shows your progress in graphs. It works offline, even where there’s no signal.',
    primaryCta: 'Try the app',
    secondaryCta: 'See the features',
    statusLabel: 'Availability',
    status: ['Coming soon to Google Play', 'Coming soon to App Store'],
    railLabel: 'Training stations',
    railHeading: 'Stations',
    stations: [
      { n: '01', name: 'Warm-up' },
      { n: '02', name: 'Strength' },
      { n: '03', name: 'Logging' },
      { n: '04', name: 'Progress' },
    ],
    railFoot: 'Training app · Floor 1 · 873 exercises',
  },

  proof: {
    label: 'GymLab in numbers',
    stats: [
      { label: 'Exercises with photos', value: '873', word: false },
      { label: 'Calculators', value: '9', word: false },
      { label: 'Templates', value: '68', word: false },
      { label: 'Works offline', value: 'Offline', word: true },
    ],
  },

  features: {
    anchor: 'features',
    label: 'Features',
    title: 'The training app, from routine to graph',
    items: [
      {
        n: '01',
        title: 'Walk in with your routine ready',
        text: 'Pick a goal and a level, start from one of 68 templates and fit the days, exercises and sets around your week.',
      },
      {
        n: '02',
        title: 'Log sets without breaking rhythm',
        text: 'Weight, reps and rest with a built-in timer. The next set starts with a single tap.',
      },
      {
        n: '03',
        title: 'See what climbs and what stalled',
        text: 'Graphs by exercise, muscle group and period. You see the progress and the months that went nowhere.',
      },
      {
        n: '04',
        title: '9 calculators where you train',
        text: 'BMI, calories and macros, 1RM, body fat, water and measurements. Every calculation done in the same app.',
      },
      {
        n: '05',
        title: '873 exercises with photos',
        text: 'The full catalogue with filters for muscle, equipment and category. You find the exercise before the first set.',
      },
      {
        n: '06',
        title: 'Your mirror, with a memory',
        text: 'Save progress photos and compare how your physique changed over time.',
      },
      {
        n: '07',
        title: 'Steps and devices, connected',
        text: 'Daily steps, Android widgets and syncing with your devices. Movement outside the gym counts too.',
      },
      {
        n: '08',
        title: 'Achievements that keep you consistent',
        text: 'Streaks, goals and achievements. A push to come back on the day you don’t feel like it.',
      },
    ],
    mini: {
      week: {
        label: 'Week',
        meta: 'Sample',
        days: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      },
      sets: {
        label: 'Set',
        meta: 'Sample',
        columns: ['#', 'kg', 'reps'],
        currentLoad: '82.5',
      },
      volume: {
        label: 'Volume',
        meta: 'Sample',
      },
      calculators: {
        label: 'Calculators',
        meta: '9',
        items: ['BMI', '1RM', 'Water', 'Macros', 'Body fat', 'Measurements'],
      },
      catalogue: {
        label: 'Catalogue',
        meta: '873',
        filters: ['Muscle', 'Equipment', 'Category'],
      },
      compare: {
        label: 'Compare',
        meta: 'Photos',
      },
      steps: {
        label: 'Steps',
        meta: 'Widget',
      },
      streak: {
        label: 'Streak',
        meta: 'Achievements',
      },
    },
  },

  showcase: {
    anchor: 'screens',
    label: 'Screens',
    title: 'How it looks while you train',
    shots: [
      {
        caption: 'Your active plan, streak and week',
        alt: 'GymLab screenshot: training screen with the active plan, current streak and this week’s calendar.',
      },
      {
        caption: 'Live session with a running rest timer',
        alt: 'GymLab screenshot: live session with a logged set and the rest timer counting down.',
      },
      {
        caption: 'Real progress in real charts',
        alt: 'GymLab screenshot: statistics with weekly volume, streak and the weekly goal built from your workout history.',
      },
    ],
  },

  privacy: {
    anchor: 'privacy',
    label: 'Privacy',
    title: 'Your data lives on your phone',
    text: 'GymLab keeps your history on the device. You train without creating an account, and your data isn’t shared with third parties.',
    link: 'Read the privacy policy →',
    tags: {
      top: 'No account',
      bottom: 'On the device',
    },
  },

  faq: {
    anchor: 'faq',
    label: 'FAQ',
    title: 'Frequently asked questions',
    items: [
      {
        q: 'Does it work offline?',
        a: 'Yes. You can train, log sets and check your history without a connection. Everything stays on your phone.',
      },
      {
        q: 'Where is my data stored?',
        a: 'On your phone. GymLab doesn’t ask for an account to train, and your history isn’t uploaded to third-party servers. The privacy policy has the detail.',
      },
      {
        q: 'Does it work if I’m just starting?',
        a: 'Yes. You pick a level and a goal, and a template shows you where to start. You can also build a routine from scratch.',
      },
      {
        q: 'What’s in the exercise catalogue?',
        a: '873 exercises with photos, filterable by muscle, category and equipment.',
      },
      {
        q: 'When does it launch, and where can I get it?',
        a: 'We’re getting the launch ready for Google Play and the App Store. If you want to know on day one, email us at gymlab@gymlab.dev.',
      },
      {
        q: 'Is GymLab free?',
        a: 'Yes. GymLab is free: you can train, log your sets and check your history without paying anything.',
      },
      {
        q: 'Do I need an account?',
        a: 'No. You open the app and train: no sign-up, no email, no password.',
      },
    ],
  },

  closing: {
    anchor: 'closing',
    title: 'Stop training from memory',
    text: 'If you want to know on day one, email us at gymlab@gymlab.dev.',
    cta: 'Let me know when it ships',
    mailtoSubject: 'GymLab: let me know when it ships',
    stamp: 'Coming soon',
    mark: 'GYMLAB',
  },

  footer: {
    brandLabel: 'GymLab — home',
    tagline: 'Train with a plan. Watch your progress.',
    navLabel: 'Legal and contact',
    links: {
      privacy: 'Privacy',
      terms: 'Terms',
      contact: 'Contact',
    },
    meta: 'Floor 1 · GymLab.dev',
  },

  calc: {
    oneRepMax: {
      meta: {
        title: 'One Rep Max Calculator (1RM) — GymLab',
        description:
          'Work out your one rep max with the Epley and Brzycki formulas. Enter the weight and the reps and get your estimated max instantly. It is free, no sign-up.',
      },
      label: 'Calculator',
      title: 'One Rep Max Calculator',
      sub: 'Your estimated one rep max from two formulas, with no account and no connection.',
      form: {
        legend: 'Your numbers',
        weight: 'Weight lifted',
        weightUnit: 'kg',
        weightHint: 'The weight of a set you completed with good form.',
        reps: 'Reps',
        repsUnit: 'reps',
        repsHint: 'Between 1 and 10 gives the best estimate.',
      },
      result: {
        legend: 'Estimated one rep max',
        epley: 'Epley',
        brzycki: 'Brzycki',
        delta: 'Difference',
        deltaHint: 'Brzycki minus Epley.',
        unit: 'kg',
        empty: 'Enter the weight and the reps.',
        invalid: 'Check the numbers: weight and reps must be greater than zero.',
        unreachable: 'At 37 reps or more the Brzycki formula is not valid.',
      },
      explain: {
        title: 'How it is worked out',
        body: [
          'Your one rep max is the heaviest weight you can lift once with good form. Testing it directly is risky, so it is estimated from a submaximal set.',
          'Epley uses weight × (1 + reps / 30). Brzycki uses weight × 36 / (37 − reps) and is usually more accurate between 3 and 10 reps, which is the range the app relies on for its records.',
        ],
      },
      limits: {
        title: 'When it does not apply',
        items: [
          'Above 10 reps both formulas drift away from reality and the estimate stops being reliable.',
          'The Brzycki formula loses meaning as it approaches 37 reps; from there the result is 0.',
          'An estimate is not a substitute for a supervised in-person test.',
        ],
      },
      cta: 'Try the app',
      back: 'Back to home',
    },

    imc: {
      meta: {
        title: 'BMI Calculator (body mass index) — GymLab',
        description:
          'Work out your body mass index and see which WHO range you are in. All you need is your weight and height, and the result comes out instantly. Free, no account.',
      },
      label: 'Calculator',
      title: 'BMI Calculator',
      sub: 'Body mass index with the WHO ranges, no account and no connection.',
      form: {
        legend: 'Your numbers',
        weight: 'Weight',
        weightUnit: 'kg',
        weightHint: 'What the scales say, unrounded.',
        height: 'Height',
        heightUnit: 'cm',
        heightHint: 'In centimetres. For example, 178.',
      },
      result: {
        legend: 'Your body mass index',
        value: 'BMI',
        category: 'WHO range',
        unit: '',
        invalid: 'Check the numbers: weight and height must be greater than zero.',
        categories: {
          underweight: 'Underweight',
          normal: 'Healthy weight',
          overweight: 'Overweight',
          obese: 'Obesity',
        },
      },
      explain: {
        title: 'How it is worked out',
        body: [
          'BMI relates your weight to your height: kilos divided by height in metres squared. It is a population screening tool, not a diagnosis.',
          'The WHO sets four ranges: below 18.5 underweight; 18.5 to 24.9 healthy weight; 25 to 29.9 overweight; and 30 or above obesity.',
        ],
      },
      limits: {
        title: 'When it does not apply',
        items: [
          'It does not separate muscle from fat: someone carrying a lot of muscle can come out as obese with a low body fat percentage.',
          'It is not intended for under-18s, pregnancy, or people with amputations.',
          'If you train seriously, body fat percentage says far more than BMI.',
        ],
      },
      cta: 'Try the app',
      back: 'Back to home',
    },

    calories: {
      meta: {
        title: 'Daily Calorie Calculator (TDEE) — GymLab',
        description:
          'Work out your daily calories with Mifflin-St Jeor: maintenance, deficit and surplus for your activity level. It is free, with no account or connection.',
      },
      label: 'Calculator',
      title: 'Daily Calorie Calculator',
      sub: 'Daily energy expenditure with Mifflin-St Jeor, no account and no connection.',
      form: {
        legend: 'Your numbers',
        weight: 'Weight',
        weightUnit: 'kg',
        weightHint: 'What the scales say.',
        height: 'Height',
        heightUnit: 'cm',
        heightHint: 'In centimetres. For example, 178.',
        age: 'Age',
        ageUnit: 'years',
        ageHint: 'Completed years.',
        sex: 'Sex',
        sexHint: 'The equation uses a different term for each.',
        sexOptions: {
          male: 'Male',
          female: 'Female',
        },
        activity: 'Activity level',
        activityOptions: {
          sedentary: 'Sedentary (little or no exercise)',
          light: 'Lightly active (1–3 days/week)',
          moderate: 'Moderately active (3–5 days/week)',
          active: 'Active (6–7 days/week)',
          veryActive: 'Very active (hard training daily)',
        },
      },
      result: {
        legend: 'Your daily calories',
        bmr: 'Basal metabolism',
        tdee: 'Maintenance',
        deficit: 'Deficit',
        surplus: 'Surplus',
        unit: 'kcal',
        invalid: 'Check the numbers: weight, height and age must be greater than zero.',
      },
      explain: {
        title: 'How it is worked out',
        body: [
          'Mifflin-St Jeor estimates your basal metabolism from weight, height, age and sex. It is more accurate than Harris-Benedict, and it is the one the app uses.',
          'Daily expenditure multiplies that metabolism by your activity level. The deficit applies 20% capped at 500 kcal; the surplus adds 15%.',
        ],
      },
      limits: {
        title: 'When it does not apply',
        items: [
          'It is a population estimate: your real expenditure can drift, and you correct it with what the scales say over two or three weeks.',
          'The deficit is capped at 500 kcal so it does not eat into muscle.',
          'It is not a substitute for professional dietary advice.',
        ],
      },
      cta: 'Try the app',
      back: 'Back to home',
    },
  },

  calculators: {
    anchor: 'calculators',
    label: 'Calculators',
    title: 'Work it out before you train',
    sub: 'The same maths the app does, with nothing to install.',
    linkLabel: 'Open calculator',
    items: [
      {
        title: 'One rep max calculator',
        text: 'Your estimated max with Epley and Brzycki.',
      },
      {
        title: 'BMI calculator',
        text: 'Body mass index and the WHO range.',
      },
      {
        title: 'Daily calorie calculator',
        text: 'Maintenance, deficit and surplus with Mifflin-St Jeor.',
      },
    ],
  },

  legalChrome: {
    kicker: 'Legal',
    updated: 'Last updated',
    disclaimer: 'Informational document; it does not constitute legal advice.',
    courtesy:
      'This is a courtesy translation. If there is any discrepancy, the Spanish version prevails.',
  },
};
