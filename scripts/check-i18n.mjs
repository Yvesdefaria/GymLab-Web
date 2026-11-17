// Post-build gate for the bilingual site. The repo has no test runner, so this
// is the deterministic check that proves the locale contract after `npm run build`.
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
const ORIGIN = 'https://gymlab.dev';

const PAGES = [
  ['es', '/es/'],
  ['en', '/en/'],
  ['es', '/es/privacidad/'],
  ['en', '/en/privacidad/'],
  ['es', '/es/terminos/'],
  ['en', '/en/terminos/'],
  ['es', '/es/calculadora-1rm/'],
  ['en', '/en/one-rep-max-calculator/'],
  ['es', '/es/calculadora-imc/'],
  ['en', '/en/bmi-calculator/'],
  ['es', '/es/calcular-calorias/'],
  ['en', '/en/calorie-calculator/'],
  ['es', '/es/rutinas-espalda/'],
  ['en', '/en/back-routines/'],
  ['es', '/es/ejercicios-espalda/'],
  ['en', '/en/back-exercises/'],
  ['es', '/es/anatomia-de-la-espalda/'],
  ['en', '/en/back-anatomy/'],
  ['es', '/es/elige-las-dominadas-adecuadas-para-mejorar-tu-espalda/'],
  ['en', '/en/best-pull-ups-for-back-width/'],
  ['es', '/es/mejores-ejercicios-con-mancuernas-para-espalda/'],
  ['en', '/en/dumbbell-back-exercises/'],
  ['es', '/es/consejos-para-desarrollar-espalda/'],
  ['en', '/en/how-to-build-back-muscle/'],
  ['es', '/es/espalda-baja-fuerte/'],
  ['en', '/en/strong-lower-back/'],
  ['es', '/es/agarres-jalones-dorsales/'],
  ['en', '/en/lat-pulldown-grips/'],
  ['es', '/es/como-ampliar-tus-dorsales/'],
  ['en', '/en/how-to-widen-your-lats/'],
  ['es', '/es/mejores-jalones-para-trabajar-la-parte-inferior-del-dorsal/'],
  ['en', '/en/lower-lat-pulldowns/'],
  ['es', '/es/dominadas/'],
  ['en', '/en/pull-ups/'],
  ['es', '/es/dominadas-agarre-ancho/'],
  ['en', '/en/wide-grip-pull-ups/'],
  ['es', '/es/dominadas-agarre-cerrado/'],
  ['en', '/en/close-grip-pull-ups/'],
  ['es', '/es/remo-barra/'],
  ['en', '/en/barbell-row/'],
  ['es', '/es/remo-mancuerna-una-mano/'],
  ['en', '/en/one-arm-dumbbell-row/'],
  ['es', '/es/remo-barra-t/'],
  ['en', '/en/t-bar-row/'],
  ['es', '/es/jalones-frontales-2/'],
  ['en', '/en/front-lat-pulldowns/'],
  ['es', '/es/jalones-agarre-cerrado/'],
  ['en', '/en/close-grip-lat-pulldowns/'],
  ['es', '/es/jalones-agarre-v/'],
  ['en', '/en/v-grip-lat-pulldowns/'],
  ['es', '/es/jalones-tras-nuca/'],
  ['en', '/en/behind-the-neck-lat-pulldowns/'],
  ['es', '/es/hiperextensiones-espalda/'],
  ['en', '/en/back-extensions/'],
  ['es', '/es/pullover-mancuerna/'],
  ['en', '/en/dumbbell-pullover/'],
  ['es', '/es/pullover-barra/'],
  ['en', '/en/barbell-pullover/'],
  ['es', '/es/rutina-espalda-amplitud-densidad/'],
  ['en', '/en/back-width-and-thickness-routine/'],
  ['es', '/es/como-entrenar-la-espalda-en-quince-minutos/'],
  ['en', '/en/15-minute-back-workout/'],
  ['es', '/es/rutina-de-espalda-para-dorsales-mas-grandes-y-musculados/'],
  ['en', '/en/back-routine-for-bigger-lats/'],
  ['es', '/es/dominadas-asistidas/'],
  ['en', '/en/assisted-pull-ups/'],
  ['es', '/es/dominadas-con-peso-multipower/'],
  ['en', '/en/weighted-pull-ups-machine/'],
  ['es', '/es/dominadas-tras-nuca/'],
  ['en', '/en/behind-the-neck-pull-ups/'],
  ['es', '/es/jalon-dorsal-a-una-mano/'],
  ['en', '/en/one-arm-lat-pulldown/'],
  ['es', '/es/jalones-en-maquina/'],
  ['en', '/en/machine-lat-pulldowns/'],
  ['es', '/es/jalones-frontales-brazos-rectos/'],
  ['en', '/en/straight-arm-lat-pulldowns/'],
  ['es', '/es/remo-polea-sentado/'],
  ['en', '/en/seated-cable-row/'],
  ['es', '/es/remo-pendley/'],
  ['en', '/en/pendlay-row/'],
  ['es', '/es/remo-barra-agarre-invertido/'],
  ['en', '/en/reverse-grip-barbell-row/'],
  ['es', '/es/dominadas-programa-avanzado/'],
  ['en', '/en/advanced-pull-up-program/'],
  ['es', '/es/buenos-dias-barra-de-pie/'],
  ['en', '/en/standing-good-mornings/'],
  ['es', '/es/buenos-dias-barra-sentado/'],
  ['en', '/en/seated-good-mornings/'],
  ['es', '/es/buenos-dias-con-barra-piernas-separadas/'],
  ['en', '/en/wide-stance-good-mornings/'],
  ['es', '/es/peso-muerto-piernas-rigidas-barra/'],
  ['en', '/en/stiff-leg-deadlift-barbell/'],
  ['es', '/es/peso-muerto-piernas-rigidas-mancuernas/'],
  ['en', '/en/stiff-leg-deadlift-dumbbells/'],
  ['es', '/es/peso-muerto-sumo/'],
  ['en', '/en/sumo-deadlift/'],
  ['es', '/es/pullover-en-banco-declinado/'],
  ['en', '/en/decline-bench-pullover/'],
  ['es', '/es/remo-en-polea-a-una-mano-de-pie/'],
  ['en', '/en/one-arm-cable-row/'],
  ['es', '/es/remo-invertido/'],
  ['en', '/en/inverted-row/'],
  ['es', '/es/remo-maquina/'],
  ['en', '/en/machine-row/'],
  ['es', '/es/remo-multipower/'],
  ['en', '/en/smith-machine-row/'],
  ['es', '/es/superserie-de-espalda-para-terminar-tu-rutina/'],
  ['en', '/en/back-superset-finisher/'],
  ['es', '/es/plantilla-entrenamiento/'],
  ['en', '/en/workout-template/'],
  ['es', '/es/prueba-flexibilidad/'],
  ['en', '/en/flexibility-test/'],
  ['es', '/es/sentadilla-sin-lesiones/'],
  ['en', '/en/squat-safety/'],
  ['es', '/es/lo-que-no-hay-que-hacer-para-ganar-musculo/'],
  ['en', '/en/muscle-building-mistakes/'],
  ['es', '/es/frecuencia-entrenar-cada-musculo/'],
  ['en', '/en/training-frequency/'],
  ['es', '/es/mentiras-del-culturismo-que-os-impediran-progresar/'],
  ['en', '/en/bodybuilding-myths/'],
  ['es', '/es/ganar-masa-muscular/'],
  ['en', '/en/build-muscle/'],
  ['es', '/es/cross-training/'],
  ['en', '/en/cross-training/'],
  ['es', '/es/beneficios-de-contratar-un-entrenador-personal-online/'],
  ['en', '/en/online-personal-trainer-benefits/'],
  ['es', '/es/entrenamiento-personalizado-en-casa-ventajas-reales/'],
  ['en', '/en/home-personal-training-benefits/'],
  ['es', '/es/ejercicios-maxima-congestion-muscular/'],
  ['en', '/en/maximum-muscle-pump-exercises/'],
  ['es', '/es/ejercicios-gimnasio/'],
  ['en', '/en/gym-exercises/'],
  ['es', '/es/motivos-por-los-que-tus-musculos-no-crecen/'],
  ['en', '/en/why-muscles-dont-grow/'],
  ['es', '/es/ejercicios-con-bandas-de-resistencia-tubulares/'],
  ['en', '/en/resistance-band-exercises/'],
  ['es', '/es/como-ser-constante-en-el-entrenamiento/'],
  ['en', '/en/how-to-stay-consistent-working-out/'],
  ['es', '/es/principio-adaptacion-sobrecarga-progresiva/'],
  ['en', '/en/progressive-overload-principle/'],
  ['es', '/es/distribucion-rutina-entrenamiento/'],
  ['en', '/en/workout-split-guide/'],
  ['es', '/es/guia-musculacion-principiantes/'],
  ['en', '/en/beginner-gym-guide/'],
  ['es', '/es/ejercicios-dolor-de-espalda/'],
  ['en', '/en/back-pain-exercises/'],
  ['es', '/es/estiramientos/'],
  ['en', '/en/stretching/'],
  ['es', '/es/circuito-de-estiramientos-para-musculacion/'],
  ['en', '/en/gym-stretching-circuit/'],
  ['es', '/es/fallo-muscular/'],
  ['en', '/en/muscle-failure-training/'],
  ['es', '/es/periodizacion-entrenamiento/'],
  ['en', '/en/training-periodization/'],
  ['es', '/es/potencia-tu-sistema-inmunologico-con-el-entrenamiento/'],
  ['en', '/en/exercise-and-immune-system/'],
  ['es', '/es/semana-de-descarga/'],
  ['en', '/en/deload-week/'],
  ['es', '/es/cuanto-dormir-para-progresar-en-el-gimnasio/'],
  ['en', '/en/sleep-for-muscle-growth/'],
  ['es', '/es/planificacion-del-entrenamiento/'],
  ['en', '/en/training-planning/'],
  ['es', '/es/regeneracion-muscular/'],
  ['en', '/en/muscle-recovery/'],
  ['es', '/es/tu-primer-dia-en-el-gimnasio-como-superarlo-y-querer-volver/'],
  ['en', '/en/first-day-at-the-gym/'],
  ['es', '/es/agarres-prono-y-supino-diferencias-y-principales-beneficios/'],
  ['en', '/en/pronated-vs-supinated-grip/'],
  ['es', '/es/estancamiento-muscular/'],
  ['en', '/en/muscle-plateau/'],
  ['es', '/es/mejor-equipamiento-para-entrenar-en-casa/'],
  ['en', '/en/best-home-gym-equipment/'],
  ['es', '/es/cinturon-entrenamiento/'],
  ['en', '/en/weightlifting-belt/'],
  ['es', '/es/entrenamiento-charles-poliquin/'],
  ['en', '/en/charles-poliquin-training/'],
  ['es', '/es/tipos-agarre/'],
  ['en', '/en/grip-types/'],
  ['es', '/es/culturismo-mas-que-musculo/'],
  ['en', '/en/bodybuilding-lifestyle/'],
  ['es', '/es/prueba-potencia-anaerobia/'],
  ['en', '/en/anaerobic-power-test/'],
  ['es', '/es/repeticiones-entrenamiento/'],
  ['en', '/en/optimal-rep-range/'],
  ['es', '/es/cuanto-peso-cargar-en-el-gimnasio/'],
  ['en', '/en/how-much-weight-to-lift/'],
  ['es', '/es/instrumentos-del-gimnasio/'],
  ['en', '/en/gym-equipment-guide/'],
  ['es', '/es/tiempo-de-descanso-entre-series/'],
  ['en', '/en/rest-between-sets/'],
  ['es', '/es/ejercicios-en-polea-ventajas/'],
  ['en', '/en/cable-exercise-benefits/'],
  ['es', '/es/ejercicios-multiarticulares-y-ejercicios-de-aislamiento/'],
  ['en', '/en/compound-vs-isolation-exercises/'],
  ['es', '/es/como-se-adapta-el-cuerpo-al-entrenamiento-con-pesas/'],
  ['en', '/en/how-the-body-adapts-to-weight-training/'],
  ['es', '/es/entrenamiento-del-agarre/'],
  ['en', '/en/grip-strength-training/'],
  ['es', '/es/peso-muerto-mejor-agarre/'],
  ['en', '/en/deadlift-grip/'],
  ['es', '/es/gimnasio-de-la-vieja-escuela/'],
  ['en', '/en/old-school-gym-training/'],
  ['es', '/es/entrenamiento-piramidal/'],
  ['en', '/en/pyramid-training/'],
  ['es', '/es/volumen-de-entrenamiento/'],
  ['en', '/en/training-volume/'],
  ['es', '/es/congestion-muscular/'],
  ['en', '/en/muscle-pump/'],
  ['es', '/es/elaboracion-de-rutinas-puntos-debiles/'],
  ['en', '/en/routine-weak-points/'],
  ['es', '/es/levantar-aumentar-peso/'],
  ['en', '/en/lift-more-weight-5-percent/'],
  ['es', '/es/escoger-actividad-en-tu-vuelta-al-gimnasio/'],
  ['en', '/en/back-to-the-gym-choosing-activity/'],
  ['es', '/es/ejercicios-sobre-balon/'],
  ['en', '/en/stability-ball-exercises/'],
  ['es', '/es/los-peligros-de-entrenar-como-un-preplaya/'],
  ['en', '/en/unbalanced-training-dangers/'],
  ['es', '/es/tiempos-entrenamiento/'],
  ['en', '/en/rep-tempo/'],
  ['es', '/es/8-repeticiones-entrenando/'],
  ['en', '/en/eight-reps-debate/'],
  ['es', '/es/elegir-gimnasio/'],
  ['en', '/en/choosing-a-gym/'],
  ['es', '/es/metodo-bulgaro/'],
  ['en', '/en/bulgarian-method/'],
  ['es', '/es/repeticion-maxima/'],
  ['en', '/en/calculate-one-rep-max/'],
  ['es', '/es/tipos-somaticos-endomorfos-ectomorfos-y-mesomorfos/'],
  ['en', '/en/somatotypes/'],
  ['es', '/es/tipos-de-fibras-musculares/'],
  ['en', '/en/muscle-fiber-types/'],
  ['es', '/es/desafio-100-flexiones/'],
  ['en', '/en/100-push-up-challenge/'],
  ['es', '/es/errores-entrenamiento/'],
  ['en', '/en/common-training-mistakes/'],
  ['es', '/es/tests-evaluar-estado-fisico/'],
  ['en', '/en/fitness-tests/'],
  ['es', '/es/entrenamiento-oxigenacion/'],
  ['en', '/en/muscle-oxygenation-training/'],
  ['es', '/es/entrenamiento-balistico/'],
  ['en', '/en/ballistic-training/'],
  ['es', '/es/mitos-estupidos-debes-entrenar-cada-musculo-solo-una-vez-por-semana/'],
  ['en', '/en/training-frequency-myth/'],
  ['es', '/es/dias-entrenamiento-pesado/'],
  ['en', '/en/heavy-training-days/'],
  ['es', '/es/consejos-para-crear-tu-rutina-dividida/'],
  ['en', '/en/split-routine-tips/'],
  ['es', '/es/fibras-musculares-ejercicios/'],
  ['en', '/en/exercises-that-recruit-muscle-fibers/'],
  ['es', '/es/repeticion-maxima-rutinas-volumen/'],
  ['en', '/en/one-rep-max-volume-training/'],
  ['es', '/es/tecnica-ejecucion-ejercicios/'],
  ['en', '/en/exercise-technique/'],
  ['es', '/es/contracciones-musculares-excentrica-concentrica-isometricas/'],
  ['en', '/en/muscle-contractions/'],
  ['es', '/es/grandes-musculos-de-forma-natural/'],
  ['en', '/en/natural-muscle-growth/'],
  ['es', '/es/entrena-con-musica-para-ser-mas-fuerte-en-el-gimnasio/'],
  ['en', '/en/training-with-music/'],
  ['es', '/es/normas-para-hacer-del-gimnasio-un-lugar-mejor-y-sentirte-agusto/'],
  ['en', '/en/gym-etiquette/'],
  ['es', '/es/como-entrenar-con-altas-temperaturas/'],
  ['en', '/en/training-in-hot-weather/'],
  ['es', '/es/multipower-para-superar-puntos-de-estancamiento/'],
  ['en', '/en/smith-machine-sticking-points/'],
  ['es', '/es/rango-completo-de-movimiento-rom/'],
  ['en', '/en/range-of-motion-training/'],
  ['es', '/es/dolor-crecimiento-muscular/'],
  ['en', '/en/muscle-soreness-and-growth/'],
  ['es', '/es/como-respirar-mientras-entrenamos/'],
  ['en', '/en/breathing-while-lifting/'],
  ['es', '/es/menos-grasa-mas-musculo/'],
  ['en', '/en/lose-fat-gain-muscle/'],
  ['es', '/es/entrenamiento-con-companero/'],
  ['en', '/en/training-partner-benefits/'],
  ['es', '/es/guia-de-entrenamiento-hitt/'],
  ['en', '/en/hiit-training-guide/'],
  ['es', '/es/rutina-entrenamiento-natacion/'],
  ['en', '/en/swimming-workout-routine/'],
  ['es', '/es/como-disfrutar-del-running-y-conseguir-acabar-cualquier-carrera-popular/'],
  ['en', '/en/enjoy-running-popular-races/'],
  ['es', '/es/cardio-de-bajo-impacto-para-quemar-grasa/'],
  ['en', '/en/low-impact-cardio/'],
  ['es', '/es/como-combinar-natacion-y-pesas-sin-perder-musculo/'],
  ['en', '/en/swimming-and-weights/'],
  ['es', '/es/como-combinar-cardio-y-pesas-para-mujeres/'],
  ['en', '/en/cardio-and-weights-for-women/'],
  ['es', '/es/cardio-liss-baja-intensidad-larga-duracion/'],
  ['en', '/en/liss-cardio-guide/'],
  ['es', '/es/bicicletas-electricas-para-perder-peso/'],
  ['en', '/en/electric-bikes-weight-loss/'],
  ['es', '/es/kayak-paddle-surf-beneficios/'],
  ['en', '/en/kayak-paddleboarding-benefits/'],
  ['es', '/es/bicicleta-eliptica-vs-bicicleta-estatica-cual-es-mejor/'],
  ['en', '/en/elliptical-vs-stationary-bike/'],
  ['es', '/es/bicicleta-estatica-vs-cinta-de-correr/'],
  ['en', '/en/stationary-bike-vs-treadmill/'],
  ['es', '/es/beneficios-de-la-bicicleta-de-aire-y-como-entrenar-con-ella/'],
  ['en', '/en/air-bike-benefits/'],
  ['es', '/es/ejercicio-aerobico/'],
  ['en', '/en/aerobic-exercise/'],
  ['es', '/es/entrenamiento-cardiovascular-en-tu-programa-de-fitness/'],
  ['en', '/en/cardiovascular-training-in-your-program/'],
  ['es', '/es/rutinas-ejercicio-aerobico/'],
  ['en', '/en/aerobic-exercise-routines/'],
  ['es', '/es/pesas-salud-cardiovascular/'],
  ['en', '/en/weights-and-cardiovascular-health/'],
  ['es', '/es/cardio-ayunas/'],
  ['en', '/en/fasted-cardio/'],
  ['es', '/es/metodos-continuos-ejercicio-aerobico/'],
  ['en', '/en/continuous-aerobic-methods/'],
  ['es', '/es/maquinas-ejercicio-aerobico/'],
  ['en', '/en/aerobic-machines/'],
  ['es', '/es/adaptaciones-cuerpo-ejercicio-aerobico/'],
  ['en', '/en/aerobic-adaptations/'],
  ['es', '/es/ejercicio-aerobico-perder-masa-muscular/'],
  ['en', '/en/aerobic-exercise-muscle-loss/'],
  ['es', '/es/demasiado-aerobico-puede-ser-malo-para-perder-grasa/'],
  ['en', '/en/too-much-cardio-fat-loss/'],
  ['es', '/es/calcular-frecuencia-cardiaca-maxima/'],
  ['en', '/en/max-heart-rate/'],
  ['es', '/es/ropa-y-calzado-para-el-ejercicio-cardiovascular/'],
  ['en', '/en/clothing-and-shoes-for-cardio/'],
  ['es', '/es/saltar-comba/'],
  ['en', '/en/jump-rope-training/'],
  ['es', '/es/flato-prevenirlo-eliminarlo/'],
  ['en', '/en/side-stitch-prevention/'],
  ['es', '/es/cinta-correr-vs-bicicleta-para-quemar-grasa/'],
  ['en', '/en/treadmill-vs-bike-fat-burning/'],
  ['es', '/es/test-de-cooper/'],
  ['en', '/en/cooper-test/'],
  ['es', '/es/consigue-correr-30-minutos-seguidos/'],
  ['en', '/en/run-30-minutes-nonstop/'],
  ['es', '/es/caminar-como-metodo-para-perder-grasa-y-estar-en-forma/'],
  ['en', '/en/walking-for-fat-loss/'],
  ['es', '/es/bicicleta-para-perder-grasa/'],
  ['en', '/en/cycling-for-fat-loss/'],
  ['es', '/es/spinning-mejores-consejos-por-nivel/'],
  ['en', '/en/spinning-tips-by-level/'],
  ['es', '/es/entrenamiento-alta-intensidad/'],
  ['en', '/en/high-intensity-training/'],
  ['es', '/es/series-gigantes/'],
  ['en', '/en/giant-sets/'],
  ['es', '/es/memoria-muscular-que-es-como-funciona/'],
  ['en', '/en/muscle-memory/'],
  ['es', '/es/mejores-ejercicios-en-maquina-de-musculacion/'],
  ['en', '/en/best-machine-exercises/'],
  ['es', '/es/entrenamiento-funcional/'],
  ['en', '/en/functional-training/'],
  ['es', '/es/calentamiento-y-estiramientos/'],
  ['en', '/en/gym-warm-up/'],
  ['es', '/es/como-aplicar-los-beneficios-del-yoga-al-culturismo/'],
  ['en', '/en/yoga-for-bodybuilding/'],
  ['es', '/es/superseries/'],
  ['en', '/en/supersets/'],
  ['es', '/es/principios-weider/'],
  ['en', '/en/weider-principles/'],
  ['es', '/es/repeticiones-forzadas/'],
  ['en', '/en/forced-reps/'],
  ['es', '/es/repeticiones-parciales/'],
  ['en', '/en/partial-reps/'],
  ['es', '/es/entrenamiento-superlento/'],
  ['en', '/en/super-slow-training/'],
  ['es', '/es/repeticiones-con-trampa/'],
  ['en', '/en/cheat-reps/'],
  ['es', '/es/series-descendentes/'],
  ['en', '/en/drop-sets/'],
  ['es', '/es/prefatiga/'],
  ['en', '/en/pre-fatigue/'],
  ['es', '/es/triseries/'],
  ['en', '/en/tri-sets/'],
  ['es', '/es/tecnica-descanso-pausa/'],
  ['en', '/en/rest-pause/'],
  ['es', '/es/series-alternativas/'],
  ['en', '/en/alternating-sets/'],
  ['es', '/es/repeticiones-negativas/'],
  ['en', '/en/negative-reps/'],
  ['es', '/es/ejercicios-de-alta-intensidad/'],
  ['en', '/en/high-intensity-exercises/'],
  ['es', '/es/principio-de-contraccion-maxima/'],
  ['en', '/en/peak-contraction-principle/'],
  ['es', '/es/cuando-ir-al-traumatologo-experiencia-personal/'],
  ['en', '/en/when-to-see-a-sports-doctor/'],
  ['es', '/es/como-mantener-y-mejorar-tu-forma-fisica-durante-el-verano/'],
  ['en', '/en/maintain-fitness-in-summer/'],
  ['es', '/es/ejercicios-de-gimnasio-mas-lesivos/'],
  ['en', '/en/most-injurious-gym-exercises/'],
  ['es', '/es/lesiones-comunes-en-el-gimnasio-prevencion/'],
  ['en', '/en/common-gym-injuries/'],
  ['es', '/es/la-postura-correcta-un-factor-importante-en-nuestro-deporte/'],
  ['en', '/en/correct-posture-for-training/'],
  ['es', '/es/dolor-cronico-y-fisioterapia-tratamientos-que-funcionan/'],
  ['en', '/en/chronic-pain-physiotherapy/'],
  ['es', '/es/agujetas-causas-y-como-hacer-que-desaparezcan/'],
  ['en', '/en/delayed-onset-muscle-soreness/'],
  ['es', '/es/sobreentrenamiento/'],
  ['en', '/en/overtraining/'],
  ['es', '/es/recuperacion-activa-entrenamiento/'],
  ['en', '/en/active-recovery/'],
  ['es', '/es/fatiga-del-sistema-nervioso-central-snc/'],
  ['en', '/en/central-nervous-system-fatigue/'],
  ['es', '/es/epicondilitis/'],
  ['en', '/en/tennis-elbow/'],
  ['es', '/es/sindrome-tunel-carpiano/'],
  ['en', '/en/carpal-tunnel-syndrome/'],
  ['es', '/es/tendinitis-tendon-aquiles/'],
  ['en', '/en/achilles-tendinopathy/'],
  ['es', '/es/fascitis-plantar-causas-y-tratamiento/'],
  ['en', '/en/plantar-fasciitis/'],
  ['es', '/es/entrenamiento-problemas-espalda/'],
  ['en', '/en/training-with-back-pain/'],
  ['es', '/es/tendinitis-rotuliana/'],
  ['en', '/en/patellar-tendinopathy/'],
  ['es', '/es/consejos-entrenar-deltoides-posterior/'],
  ['en', '/en/rear-delt-training/'],
  ['es', '/es/entrenamiento-trapecios/'],
  ['en', '/en/trapezius-training/'],
  ['es', '/es/press-militar-contra-press-tras-nuca/'],
  ['en', '/en/military-press-vs-behind-neck-press/'],
  ['es', '/es/anatomia-hombros/'],
  ['en', '/en/shoulder-anatomy/'],
  ['es', '/es/estiramiento-de-la-parte-posterior-de-los-hombros/'],
  ['en', '/en/shoulder-stretches/'],
  ['es', '/es/rutina-para-trabajar-tus-hombros-de-forma-completa/'],
  ['en', '/en/complete-shoulder-workout/'],
  ['es', '/es/los-trucos-de-arnold-para-desarrollar-sus-hombros/'],
  ['en', '/en/arnold-shoulder-training/'],
  ['es', '/es/entrenar-los-trapecios-con-los-hombros-o-con-la-espalda/'],
  ['en', '/en/trap-training-placement/'],
  ['es', '/es/remo-de-pie-agarre-amplitud/'],
  ['en', '/en/upright-row-grip-width/'],
  ['es', '/es/rutina-de-femorales/'],
  ['en', '/en/jay-cutler-hamstring-routine/'],
  ['es', '/es/franco-columbu-dieta-y-entrenamiento/'],
  ['en', '/en/franco-columbu-diet-and-training/'],
  ['es', '/es/ronnie-coleman-rutina-y-dieta-tributo/'],
  ['en', '/en/ronnie-coleman-routine-and-diet/'],
  ['es', '/es/mike-mentzer-heavy-duty-entrena-menos-y-crece-mas/'],
  ['en', '/en/mike-mentzer-heavy-duty/'],
  ['es', '/es/ganadores-mr-olympia/'],
  ['en', '/en/mr-olympia-winners/'],
  ['es', '/es/rutina-y-dieta-de-jeff-seid/'],
  ['en', '/en/jeff-seid-routine-and-diet/'],
  ['es', '/es/simeon-panda-rutina-de-entrenamiento-y-dieta/'],
  ['en', '/en/simeon-panda-routine-and-diet/'],
  ['es', '/es/andreia-brazier-dieta-y-rutina-de-entrenamiento/'],
  ['en', '/en/andreia-brazier-diet-and-routine/'],
  ['es', '/es/larry-scott/'],
  ['en', '/en/larry-scott/'],
  ['es', '/es/ejercicios-de-arnold-schwarzenegger/'],
  ['en', '/en/arnold-schwarzenegger-exercises/'],
  ['es', '/es/shawn-ray-preparando-la-competicion/'],
  ['en', '/en/shawn-ray-competition-prep/'],
  ['es', '/es/serie-dorian-yates/'],
  ['en', '/en/dorian-yates-series/'],
  ['es', '/es/sentadilla-con-caja-alturas/'],
  ['en', '/en/box-squat-heights/'],
  ['es', '/es/beneficios-hip-thrust/'],
  ['en', '/en/hip-thrust-benefits/'],
  ['es', '/es/entrenamiento-del-femoral-o-tendon-de-la-corva/'],
  ['en', '/en/hamstring-training-guide/'],
  ['es', '/es/anatomia-del-cuadriceps/'],
  ['en', '/en/quadriceps-anatomy/'],
  ['es', '/es/entrenamiento-del-cuadriceps-mitos/'],
  ['en', '/en/quadriceps-training-myths/'],
  ['es', '/es/mejores-ejercicios-cuadriceps/'],
  ['en', '/en/best-quadriceps-exercises/'],
  ['es', '/es/como-calentar-para-tu-entrenamiento-de-gluteos/'],
  ['en', '/en/glute-workout-warm-up/'],
  ['es', '/es/anatomia-femorales/'],
  ['en', '/en/hamstring-anatomy/'],
  ['es', '/es/prensa-posicion-pies/'],
  ['en', '/en/leg-press-foot-position/'],
  ['es', '/es/sentadilla-mirada-al-frente/'],
  ['en', '/en/squat-head-position/'],
  ['es', '/es/grandes-gemelos-elevaciones-de-pie-o-sentado/'],
  ['en', '/en/standing-vs-seated-calf-raises/'],
  ['es', '/es/sentadilla-prensa/'],
  ['en', '/en/squat-vs-leg-press/'],
  ['es', '/es/anatomia-gemelo-soleo/'],
  ['en', '/en/calf-anatomy/'],
  ['es', '/es/como-proteger-tus-rodillas-en-el-entrenamiento-de-cuadriceps/'],
  ['en', '/en/protect-knees-quad-training/'],
  ['es', '/es/anatomia-y-entrenamiento-del-tibial-anterior/'],
  ['en', '/en/tibialis-anterior/'],
  ['es', '/es/zancadas-estaticas-zancadas-caminando-cual-es-mas-efectiva/'],
  ['en', '/en/static-vs-walking-lunges/'],
  ['es', '/es/anatomia-de-la-cadera-gluteos/'],
  ['en', '/en/hip-anatomy/'],
  ['es', '/es/como-ganar-volumen-en-los-gemelos/'],
  ['en', '/en/calf-growth/'],
  ['es', '/es/press-de-banca-mas-efectivo-con-mancuernas-o-con-barra/'],
  ['en', '/en/dumbbell-vs-barbell-bench-press/'],
  ['es', '/es/anatomia-del-pecho/'],
  ['en', '/en/chest-anatomy/'],
  ['es', '/es/ejercicios-inclinados-para-pecho/'],
  ['en', '/en/incline-chest-exercises/'],
  ['es', '/es/consejos-ganar-musculo-pectoral/'],
  ['en', '/en/build-pectoral-muscle/'],
  ['es', '/es/maquinas-pesos-libres-al-entrenar-el-pecho/'],
  ['en', '/en/machines-vs-free-weights-chest/'],
  ['es', '/es/mancuernas-entrenando-pecho/'],
  ['en', '/en/dumbbells-for-chest/'],
  ['es', '/es/flexion-brazos-compartida/'],
  ['en', '/en/partner-biceps-curl/'],
  ['es', '/es/rutinas-biceps/'],
  ['en', '/en/biceps-routines/'],
  ['es', '/es/biceps-grandes/'],
  ['en', '/en/bigger-biceps/'],
  ['es', '/es/anatomia-biceps-antebrazo/'],
  ['en', '/en/biceps-forearm-anatomy/'],
  ['es', '/es/posicion-de-muneca-en-el-curl-de-biceps/'],
  ['en', '/en/wrist-position-biceps-curl/'],
  ['es', '/es/consigue-grandes-brazos/'],
  ['en', '/en/build-big-arms/'],
  ['es', '/es/aumentar-biceps/'],
  ['en', '/en/grow-biceps/'],
  ['es', '/es/rutinas-triceps/'],
  ['en', '/en/triceps-routines/'],
  ['es', '/es/cabeza-larga-del-triceps/'],
  ['en', '/en/triceps-long-head/'],
  ['es', '/es/anatomia-triceps/'],
  ['en', '/en/triceps-anatomy/'],
  ['es', '/es/entrenamiento-abdominal-por-dorian-yates/'],
  ['en', '/en/dorian-yates-abs/'],
  ['es', '/es/encogimientos-sobre-balon-ejercicio/'],
  ['en', '/en/swiss-ball-crunches/'],
  ['es', '/es/giros-en-disco/'],
  ['en', '/en/plate-twists/'],
  ['es', '/es/rutinas-ejercicios-abdominales/'],
  ['en', '/en/ab-workout-routines/'],
  ['es', '/es/abdominales-isometricos/'],
  ['en', '/en/isometric-abs/'],
  ['es', '/es/abdominales-ejercicios-colgado/'],
  ['en', '/en/hanging-ab-exercises/'],
  ['es', '/es/abdominales-cambiatufisico/'],
  ['en', '/en/four-day-ab-routine/'],
  ['es', '/es/ejercicios-de-abdominales/'],
  ['en', '/en/ab-exercises/'],
  ['es', '/es/perder-grasa-abdominal-con-abdominales/'],
  ['en', '/en/spot-reduction-myth/'],
  ['es', '/es/rutina-abdominales-para-culturismo/'],
  ['en', '/en/abs-hypertrophy-routine/'],
  ['es', '/es/rutina-abdominales-ab/'],
  ['en', '/en/ab-routine-a-b/'],
  ['es', '/es/encogimientos-banco-inclinado/'],
  ['en', '/en/decline-bench-crunches/'],
  ['es', '/es/encogimientos-maquina/'],
  ['en', '/en/machine-crunches/'],
  ['es', '/es/encogimientos-polea-2/'],
  ['en', '/en/kneeling-cable-crunches/'],
  ['es', '/es/rodar-con-barra/'],
  ['en', '/en/barbell-ab-rollout/'],
  ['es', '/es/encogimientos-abdominales-suelo/'],
  ['en', '/en/floor-crunches/'],
  ['es', '/es/encogimientos-en-polea-de-pie/'],
  ['en', '/en/standing-cable-crunches/'],
  ['es', '/es/bicicleta-oblicuos/'],
  ['en', '/en/bicycle-crunches/'],
  ['es', '/es/encogimientos-laterales-dedos-tobillos/'],
  ['en', '/en/finger-to-heel-crunches/'],
  ['es', '/es/encogimientos-oblicuos/'],
  ['en', '/en/side-crunch/'],
  ['es', '/es/encogimientos-oblicuos-banco-declinado/'],
  ['en', '/en/decline-oblique-crunches/'],
  ['es', '/es/encogimiento-lateral-mancuerna-de-pie/'],
  ['en', '/en/dumbbell-side-bend/'],
  ['es', '/es/elevaciones-piernas-oblicuos-tumbado/'],
  ['en', '/en/side-jackknife/'],
  ['es', '/es/inclinacion-lateral-polea/'],
  ['en', '/en/cable-side-bend/'],
  ['es', '/es/encogimientos-oblicuos-polea/'],
  ['en', '/en/kneeling-cable-oblique-crunch/'],
  ['es', '/es/cortar-troncos-en-polea/'],
  ['en', '/en/cable-woodchop/'],
  ['es', '/es/elevacion-lateral-de-piernas-colgado/'],
  ['en', '/en/hanging-side-leg-raises/'],
  ['es', '/es/press-pallof/'],
  ['en', '/en/pallof-press/'],
  ['es', '/es/plancha-con-peso/'],
  ['en', '/en/weighted-plank/'],
  ['es', '/es/encogimientos-invertidos-banco-inclinado/'],
  ['en', '/en/bench-reverse-crunches/'],
  ['es', '/es/pull-in-banco-plano/'],
  ['en', '/en/seated-knee-tucks/'],
  ['es', '/es/elevaciones-piernas-banco-plano/'],
  ['en', '/en/bench-leg-raises/'],
  ['es', '/es/elevaciones-piernas-colgado/'],
  ['en', '/en/hanging-leg-raises/'],
  ['es', '/es/elevaciones-piernas-paralelas/'],
  ['en', '/en/captains-chair-leg-raises/'],
  ['es', '/es/tijeras-de-piernas/'],
  ['en', '/en/scissor-kicks/'],
  ['es', '/es/encogimientos-invertidos/'],
  ['en', '/en/reverse-crunches/'],
  ['es', '/es/encogimientos-uve/'],
  ['en', '/en/v-crunches/'],
  ['es', '/es/plancha-lateral-tecnica-y-beneficios/'],
  ['en', '/en/side-plank/'],
  ['es', '/es/plancha-abdominal-ejercicio-de-core/'],
  ['en', '/en/front-plank/'],
  ['es', '/es/rutina-hombros-pesos-libres/'],
  ['en', '/en/free-weight-shoulder-routines/'],
  ['es', '/es/rutina-de-especializacion-de-hombros/'],
  ['en', '/en/shoulder-specialization-routine/'],
  ['es', '/es/rutinas-hombros/'],
  ['en', '/en/shoulder-routines/'],
  ['es', '/es/rutina-de-hombro-para-deltoides-frontales-retrasados/'],
  ['en', '/en/front-delts-shoulder-routine/'],
  ['es', '/es/face-pull/'],
  ['en', '/en/face-pull/'],
  ['es', '/es/rutina-de-especializacion-de-brazos-con-series-antagonistas/'],
  ['en', '/en/antagonist-arm-specialization/'],
  ['es', '/es/programa-entrenamiento-brazos-lee-haney/'],
  ['en', '/en/lee-haney-arm-program/'],
  ['es', '/es/rutina-de-antebrazos/'],
  ['en', '/en/forearm-routine/'],
  ['es', '/es/rutina-de-ejercicios-para-desarrollar-los-biceps/'],
  ['en', '/en/negative-biceps-routine/'],
  ['es', '/es/rutina-de-biceps-tecnica-estricta/'],
  ['en', '/en/strict-biceps-routine/'],
  ['es', '/es/biceps-culturistas/'],
  ['en', '/en/bodybuilder-biceps-training/'],
  ['es', '/es/rutina-desarrollar-brazos/'],
  ['en', '/en/arm-building-routine/'],
  ['es', '/es/rutinas-pecho/'],
  ['en', '/en/chest-routines/'],
  ['es', '/es/fondos-pecho-triceps/'],
  ['en', '/en/arnold-dips-chest-triceps/'],
  ['es', '/es/mejorar-fuerza-press-de-banca/'],
  ['en', '/en/bench-press-strength/'],
  ['es', '/es/rutinas-de-pecho-principiantes/'],
  ['en', '/en/beginner-chest-routines/'],
  ['es', '/es/rutina-de-pecho-alternativa-al-press-de-banca/'],
  ['en', '/en/chest-routine-without-bench-press/'],
  ['es', '/es/entrena-tu-pecho-alternando-ejercicios-compuestos-y-de-aislamiento/'],
  ['en', '/en/compound-isolation-chest/'],
  ['es', '/es/rutina-de-pecho-para-pectoral-superior-breve-pero-intensa/'],
  ['en', '/en/upper-chest-routine/'],
  ['es', '/es/rutina-de-especializacion-de-pecho/'],
  ['en', '/en/chest-specialization-routine/'],
  ['es', '/es/programa-de-pecho-con-sistema-de-piramide/'],
  ['en', '/en/pyramid-chest-program/'],
  ['es', '/es/rutina-de-piernas-con-dia-ligero-y-dia-pesado/'],
  ['en', '/en/light-heavy-leg-routine/'],
  ['es', '/es/rutina-de-especializacion-para-las-piernas/'],
  ['en', '/en/leg-specialization-routine/'],
  ['es', '/es/revienta-tus-piernas-en-15-minutos/'],
  ['en', '/en/fifteen-minute-leg-workout/'],
  ['es', '/es/rutina-de-gemelos-sin-maquinas/'],
  ['en', '/en/calf-routine-no-machines/'],
  ['es', '/es/rutinas-de-gemelos-para-pantorrillas-esteticas-tonificadas/'],
  ['en', '/en/calf-routines/'],
  ['es', '/es/rutina-volumen-pierna-completa/'],
  ['en', '/en/leg-routine-for-mass/'],
  ['es', '/es/rutina-de-piernas-de-doble-division/'],
  ['en', '/en/two-day-leg-split/'],
  ['es', '/es/rutinas-pierna/'],
  ['en', '/en/leg-routines/'],
  ['es', '/es/entrenamiento-de-gemelos-diferente/'],
  ['en', '/en/unconventional-calf-training/'],
  ['es', '/es/entrenar-femorales/'],
  ['en', '/en/eccentric-hamstring-training/'],
  ['es', '/es/rutinas-cuadriceps-objetivos/'],
  ['en', '/en/quad-routines-by-goal/'],
  ['es', '/es/rutina-de-piernas-con-sentadillas-de-la-vieja-escuela/'],
  ['en', '/en/old-school-squat-leg-routine/'],
  ['es', '/es/rutina-de-volumen-para-triceps-como-herraduras/'],
  ['en', '/en/triceps-mass-routine/'],
  ['es', '/es/rutina-de-pecho-de-dos-dias-a-la-semana-con-tecnica-descanso-pausa/'],
  ['en', '/en/rest-pause-chest-routine/'],
  ['es', '/es/rutina-para-sorprender-a-tus-triceps/'],
  ['en', '/en/triceps-shock-routine/'],
  ['es', '/es/rutinas-de-fuerza/'],
  ['en', '/en/strength-routines/'],
  ['es', '/es/metodo-bilbo-rutina-de-fuerza/'],
  ['en', '/en/bilbo-method/'],
  ['es', '/es/rutina-de-fuerza-jim-wendler/'],
  ['en', '/en/wendler-531/'],
  ['es', '/es/rutina-5x5-fuerza-stronglifts-y-madcow/'],
  ['en', '/en/stronglifts-madcow-5x5/'],
  ['es', '/es/programa-de-entrenamiento-para-fuerza-del-tren-superior/'],
  ['en', '/en/upper-body-strength-program/'],
  ['es', '/es/rutina-starting-strength-guia/'],
  ['en', '/en/starting-strength-guide/'],
  ['es', '/es/entrenamiento-powerlifting/'],
  ['en', '/en/powerlifting-training/'],
  ['es', '/es/fuerza-3x2-6-semanas/'],
  ['en', '/en/six-week-strength-ramp/'],
  ['es', '/es/rutina-fuerza-3x3-de-stephan-korte/'],
  ['en', '/en/korte-3x3/'],
  ['es', '/es/entrenamiento-aleman/'],
  ['en', '/en/german-volume-training/'],
  ['es', '/es/rutina-de-tiron-empujon/'],
  ['en', '/en/push-pull-routine/'],
  ['es', '/es/rutina-volumen-arnold-schwarzenegger/'],
  ['en', '/en/arnold-volume-routine/'],
  ['es', '/es/rutina-entrenamiento/'],
  ['en', '/en/five-month-training-plan/'],
  ['es', '/es/rutina-volumen-alta-intensidad/'],
  ['en', '/en/high-volume-four-day-routine/'],
  ['es', '/es/rutina-masa-muscular-triple-division/'],
  ['en', '/en/three-way-split/'],
  ['es', '/es/plan-de-entrenamiento-de-gimnasio-anual/'],
  ['en', '/en/annual-training-plan/'],
  ['es', '/es/rutinas-de-volumen/'],
  ['en', '/en/volume-routines/'],
  ['es', '/es/rutina-hipertrofia-total-tres-meses/'],
  ['en', '/en/twelve-week-hypertrophy-plan/'],
  ['es', '/es/sistema-anti-culturismo-abbh1/'],
  ['en', '/en/abbh1-program/'],
  ['es', '/es/rutina-con-superseries-musculos-antagonistas/'],
  ['en', '/en/antagonist-supersets-routine/'],
  ['es', '/es/rutina-con-multipower/'],
  ['en', '/en/smith-machine-routine/'],
  ['es', '/es/rutinas-pesas-casa/'],
  ['en', '/en/home-dumbbell-routines/'],
  ['es', '/es/series-infinitas-rutina-de-pesas-de-alta-intensidad/'],
  ['en', '/en/infinite-sets-routine/'],
  ['es', '/es/como-ganar-peso/'],
  ['en', '/en/how-to-gain-weight/'],
  ['es', '/es/tablas-de-entrenamiento-de-volumen-masa-muscular/'],
  ['en', '/en/volume-training-tables/'],
  ['es', '/es/rutina-volumen-muscular-intermedios/'],
  ['en', '/en/intermediate-volume-routine/'],
  ['es', '/es/rutina-y-dieta-gemelos-harrison/'],
  ['en', '/en/harrison-twins-routine/'],
  ['es', '/es/rutinas-heavy-duty/'],
  ['en', '/en/heavy-duty-routines/'],
  ['es', '/es/rutina-volumen-ectomorfos/'],
  ['en', '/en/ectomorph-volume-routine/'],
  ['es', '/es/rutina-ganar-masa-muscular/'],
  ['en', '/en/natural-muscle-building-routine/'],
];

// Content routes, keyed by a stable id with the slug each locale publishes. The
// locales do not share slugs, so the alternates are resolved through this table
// instead of swapping the locale prefix.
const ROUTES = {
  home: { es: '/', en: '/' },
  privacy: { es: '/privacidad', en: '/privacidad' },
  terms: { es: '/terminos', en: '/terminos' },
  oneRm: { es: '/calculadora-1rm', en: '/one-rep-max-calculator' },
  bmi: { es: '/calculadora-imc', en: '/bmi-calculator' },
  calories: { es: '/calcular-calorias', en: '/calorie-calculator' },
  backRoutines: { es: '/rutinas-espalda', en: '/back-routines' },
  backExercises: { es: '/ejercicios-espalda', en: '/back-exercises' },
  backAnatomy: { es: '/anatomia-de-la-espalda', en: '/back-anatomy' },
  pullUpWidth: {
    es: '/elige-las-dominadas-adecuadas-para-mejorar-tu-espalda',
    en: '/best-pull-ups-for-back-width',
  },
  dumbbellBack: {
    es: '/mejores-ejercicios-con-mancuernas-para-espalda',
    en: '/dumbbell-back-exercises',
  },
  backTips: {
    es: '/consejos-para-desarrollar-espalda',
    en: '/how-to-build-back-muscle',
  },
  lowerBack: { es: '/espalda-baja-fuerte', en: '/strong-lower-back' },
  latGrips: { es: '/agarres-jalones-dorsales', en: '/lat-pulldown-grips' },
  latWidth: { es: '/como-ampliar-tus-dorsales', en: '/how-to-widen-your-lats' },
  lowerLat: {
    es: '/mejores-jalones-para-trabajar-la-parte-inferior-del-dorsal',
    en: '/lower-lat-pulldowns',
  },
  pullUps: { es: '/dominadas', en: '/pull-ups' },
  widePullUps: { es: '/dominadas-agarre-ancho', en: '/wide-grip-pull-ups' },
  closePullUps: { es: '/dominadas-agarre-cerrado', en: '/close-grip-pull-ups' },
  barbellRow: { es: '/remo-barra', en: '/barbell-row' },
  oneArmRow: { es: '/remo-mancuerna-una-mano', en: '/one-arm-dumbbell-row' },
  tBarRow: { es: '/remo-barra-t', en: '/t-bar-row' },
  frontLatPulldowns: { es: '/jalones-frontales-2', en: '/front-lat-pulldowns' },
  closeGripPulldowns: { es: '/jalones-agarre-cerrado', en: '/close-grip-lat-pulldowns' },
  vGripPulldowns: { es: '/jalones-agarre-v', en: '/v-grip-lat-pulldowns' },
  behindNeckPulldowns: {
    es: '/jalones-tras-nuca',
    en: '/behind-the-neck-lat-pulldowns',
  },
  backExtensions: { es: '/hiperextensiones-espalda', en: '/back-extensions' },
  dumbbellPullover: { es: '/pullover-mancuerna', en: '/dumbbell-pullover' },
  barbellPullover: { es: '/pullover-barra', en: '/barbell-pullover' },
  backWidthRoutine: {
    es: '/rutina-espalda-amplitud-densidad',
    en: '/back-width-and-thickness-routine',
  },
  fifteenMinuteBack: {
    es: '/como-entrenar-la-espalda-en-quince-minutos',
    en: '/15-minute-back-workout',
  },
  biggerLatsRoutine: {
    es: '/rutina-de-espalda-para-dorsales-mas-grandes-y-musculados',
    en: '/back-routine-for-bigger-lats',
  },
  assistedPullUps: { es: '/dominadas-asistidas', en: '/assisted-pull-ups' },
  weightedPullUps: {
    es: '/dominadas-con-peso-multipower',
    en: '/weighted-pull-ups-machine',
  },
  behindNeckPullUps: {
    es: '/dominadas-tras-nuca',
    en: '/behind-the-neck-pull-ups',
  },
  oneArmPulldown: { es: '/jalon-dorsal-a-una-mano', en: '/one-arm-lat-pulldown' },
  machinePulldowns: { es: '/jalones-en-maquina', en: '/machine-lat-pulldowns' },
  straightArmPulldowns: {
    es: '/jalones-frontales-brazos-rectos',
    en: '/straight-arm-lat-pulldowns',
  },
  seatedCableRow: { es: '/remo-polea-sentado', en: '/seated-cable-row' },
  pendlayRow: { es: '/remo-pendley', en: '/pendlay-row' },
  reverseGripRow: {
    es: '/remo-barra-agarre-invertido',
    en: '/reverse-grip-barbell-row',
  },
  advancedPullUp: { es: '/dominadas-programa-avanzado', en: '/advanced-pull-up-program' },
  standingGoodMornings: { es: '/buenos-dias-barra-de-pie', en: '/standing-good-mornings' },
  seatedGoodMornings: { es: '/buenos-dias-barra-sentado', en: '/seated-good-mornings' },
  wideGoodMornings: {
    es: '/buenos-dias-con-barra-piernas-separadas',
    en: '/wide-stance-good-mornings',
  },
  stiffLegBarbell: {
    es: '/peso-muerto-piernas-rigidas-barra',
    en: '/stiff-leg-deadlift-barbell',
  },
  stiffLegDumbbells: {
    es: '/peso-muerto-piernas-rigidas-mancuernas',
    en: '/stiff-leg-deadlift-dumbbells',
  },
  sumoDeadlift: { es: '/peso-muerto-sumo', en: '/sumo-deadlift' },
  declinePullover: { es: '/pullover-en-banco-declinado', en: '/decline-bench-pullover' },
  oneArmCableRow: {
    es: '/remo-en-polea-a-una-mano-de-pie',
    en: '/one-arm-cable-row',
  },
  invertedRow: { es: '/remo-invertido', en: '/inverted-row' },
  machineRow: { es: '/remo-maquina', en: '/machine-row' },
  smithMachineRow: { es: '/remo-multipower', en: '/smith-machine-row' },
  backSupersetFinisher: {
    es: '/superserie-de-espalda-para-terminar-tu-rutina',
    en: '/back-superset-finisher',
  },
  workoutTemplate: { es: '/plantilla-entrenamiento', en: '/workout-template' },
  flexibilityTest: { es: '/prueba-flexibilidad', en: '/flexibility-test' },
  squatSafety: { es: '/sentadilla-sin-lesiones', en: '/squat-safety' },
  muscleBuildingMistakes: {
    es: '/lo-que-no-hay-que-hacer-para-ganar-musculo',
    en: '/muscle-building-mistakes',
  },
  trainingFrequency: {
    es: '/frecuencia-entrenar-cada-musculo',
    en: '/training-frequency',
  },
  bodybuildingMyths: {
    es: '/mentiras-del-culturismo-que-os-impediran-progresar',
    en: '/bodybuilding-myths',
  },
  buildMuscle: { es: '/ganar-masa-muscular', en: '/build-muscle' },
  crossTraining: { es: '/cross-training', en: '/cross-training' },
  onlinePersonalTrainer: {
    es: '/beneficios-de-contratar-un-entrenador-personal-online',
    en: '/online-personal-trainer-benefits',
  },
  homePersonalTraining: {
    es: '/entrenamiento-personalizado-en-casa-ventajas-reales',
    en: '/home-personal-training-benefits',
  },
  musclePump: { es: '/ejercicios-maxima-congestion-muscular', en: '/maximum-muscle-pump-exercises' },
  gymExercises: { es: '/ejercicios-gimnasio', en: '/gym-exercises' },
  muscleGrowth: { es: '/motivos-por-los-que-tus-musculos-no-crecen', en: '/why-muscles-dont-grow' },
  resistanceBands: {
    es: '/ejercicios-con-bandas-de-resistencia-tubulares',
    en: '/resistance-band-exercises',
  },
  trainingConsistency: {
    es: '/como-ser-constante-en-el-entrenamiento',
    en: '/how-to-stay-consistent-working-out',
  },
  progressiveOverload: {
    es: '/principio-adaptacion-sobrecarga-progresiva',
    en: '/progressive-overload-principle',
  },
  workoutSplit: { es: '/distribucion-rutina-entrenamiento', en: '/workout-split-guide' },
  beginnerGuide: { es: '/guia-musculacion-principiantes', en: '/beginner-gym-guide' },
  backPainExercises: { es: '/ejercicios-dolor-de-espalda', en: '/back-pain-exercises' },
  stretching: { es: '/estiramientos', en: '/stretching' },
  gymStretchingCircuit: {
    es: '/circuito-de-estiramientos-para-musculacion',
    en: '/gym-stretching-circuit',
  },
  muscleFailure: { es: '/fallo-muscular', en: '/muscle-failure-training' },
  trainingPeriodization: {
    es: '/periodizacion-entrenamiento',
    en: '/training-periodization',
  },
  exerciseImmuneSystem: {
    es: '/potencia-tu-sistema-inmunologico-con-el-entrenamiento',
    en: '/exercise-and-immune-system',
  },
  deloadWeek: { es: '/semana-de-descarga', en: '/deload-week' },
  sleepForMuscleGrowth: {
    es: '/cuanto-dormir-para-progresar-en-el-gimnasio',
    en: '/sleep-for-muscle-growth',
  },
  trainingPlanning: { es: '/planificacion-del-entrenamiento', en: '/training-planning' },
  muscleRecovery: { es: '/regeneracion-muscular', en: '/muscle-recovery' },
  firstDayAtTheGym: {
    es: '/tu-primer-dia-en-el-gimnasio-como-superarlo-y-querer-volver',
    en: '/first-day-at-the-gym',
  },
  pronatedVsSupinatedGrip: {
    es: '/agarres-prono-y-supino-diferencias-y-principales-beneficios',
    en: '/pronated-vs-supinated-grip',
  },
  musclePlateau: { es: '/estancamiento-muscular', en: '/muscle-plateau' },
  homeGymEquipment: {
    es: '/mejor-equipamiento-para-entrenar-en-casa',
    en: '/best-home-gym-equipment',
  },
  weightliftingBelt: { es: '/cinturon-entrenamiento', en: '/weightlifting-belt' },
  charlesPoliquinTraining: {
    es: '/entrenamiento-charles-poliquin',
    en: '/charles-poliquin-training',
  },
  gripTypes: { es: '/tipos-agarre', en: '/grip-types' },
  bodybuildingLifestyle: {
    es: '/culturismo-mas-que-musculo',
    en: '/bodybuilding-lifestyle',
  },
  anaerobicPowerTest: {
    es: '/prueba-potencia-anaerobia',
    en: '/anaerobic-power-test',
  },
  optimalRepRange: { es: '/repeticiones-entrenamiento', en: '/optimal-rep-range' },
  howMuchWeight: {
    es: '/cuanto-peso-cargar-en-el-gimnasio',
    en: '/how-much-weight-to-lift',
  },
  gymEquipmentGuide: {
    es: '/instrumentos-del-gimnasio',
    en: '/gym-equipment-guide',
  },
  restBetweenSets: { es: '/tiempo-de-descanso-entre-series', en: '/rest-between-sets' },
  cableExerciseBenefits: {
    es: '/ejercicios-en-polea-ventajas',
    en: '/cable-exercise-benefits',
  },
  compoundVsIsolation: {
    es: '/ejercicios-multiarticulares-y-ejercicios-de-aislamiento',
    en: '/compound-vs-isolation-exercises',
  },
  bodyAdaptation: {
    es: '/como-se-adapta-el-cuerpo-al-entrenamiento-con-pesas',
    en: '/how-the-body-adapts-to-weight-training',
  },
  gripStrengthTraining: {
    es: '/entrenamiento-del-agarre',
    en: '/grip-strength-training',
  },
  deadliftGrip: { es: '/peso-muerto-mejor-agarre', en: '/deadlift-grip' },
  oldSchoolGym: { es: '/gimnasio-de-la-vieja-escuela', en: '/old-school-gym-training' },
  pyramidTraining: { es: '/entrenamiento-piramidal', en: '/pyramid-training' },
  trainingVolume: { es: '/volumen-de-entrenamiento', en: '/training-volume' },
  musclePumpGuide: { es: '/congestion-muscular', en: '/muscle-pump' },
  routineWeakPoints: {
    es: '/elaboracion-de-rutinas-puntos-debiles',
    en: '/routine-weak-points',
  },
  liftMoreWeight: { es: '/levantar-aumentar-peso', en: '/lift-more-weight-5-percent' },
  backToTheGym: {
    es: '/escoger-actividad-en-tu-vuelta-al-gimnasio',
    en: '/back-to-the-gym-choosing-activity',
  },
  stabilityBall: { es: '/ejercicios-sobre-balon', en: '/stability-ball-exercises' },
  unbalancedTraining: {
    es: '/los-peligros-de-entrenar-como-un-preplaya',
    en: '/unbalanced-training-dangers',
  },
  repTempo: { es: '/tiempos-entrenamiento', en: '/rep-tempo' },
  eightReps: { es: '/8-repeticiones-entrenando', en: '/eight-reps-debate' },
  gymChoice: { es: '/elegir-gimnasio', en: '/choosing-a-gym' },
  bulgarianMethod: { es: '/metodo-bulgaro', en: '/bulgarian-method' },
  oneRepMax: { es: '/repeticion-maxima', en: '/calculate-one-rep-max' },
  somatotypes: {
    es: '/tipos-somaticos-endomorfos-ectomorfos-y-mesomorfos',
    en: '/somatotypes',
  },
  muscleFiberTypes: { es: '/tipos-de-fibras-musculares', en: '/muscle-fiber-types' },
  pushUpChallenge: { es: '/desafio-100-flexiones', en: '/100-push-up-challenge' },
  trainingMistakes: { es: '/errores-entrenamiento', en: '/common-training-mistakes' },
  fitnessTests: { es: '/tests-evaluar-estado-fisico', en: '/fitness-tests' },
  oxygenationTraining: {
    es: '/entrenamiento-oxigenacion',
    en: '/muscle-oxygenation-training',
  },
  ballisticTraining: { es: '/entrenamiento-balistico', en: '/ballistic-training' },
  trainingFrequencyMyth: {
    es: '/mitos-estupidos-debes-entrenar-cada-musculo-solo-una-vez-por-semana',
    en: '/training-frequency-myth',
  },
  heavyDays: { es: '/dias-entrenamiento-pesado', en: '/heavy-training-days' },
  splitRoutineTips: { es: '/consejos-para-crear-tu-rutina-dividida', en: '/split-routine-tips' },
  fiberRecruitment: {
    es: '/fibras-musculares-ejercicios',
    en: '/exercises-that-recruit-muscle-fibers',
  },
  oneRepMaxVolume: {
    es: '/repeticion-maxima-rutinas-volumen',
    en: '/one-rep-max-volume-training',
  },
  exerciseTechnique: { es: '/tecnica-ejecucion-ejercicios', en: '/exercise-technique' },
  muscleContractions: {
    es: '/contracciones-musculares-excentrica-concentrica-isometricas',
    en: '/muscle-contractions',
  },
  naturalMuscleGrowth: { es: '/grandes-musculos-de-forma-natural', en: '/natural-muscle-growth' },
  trainingMusic: {
    es: '/entrena-con-musica-para-ser-mas-fuerte-en-el-gimnasio',
    en: '/training-with-music',
  },
  gymEtiquette: {
    es: '/normas-para-hacer-del-gimnasio-un-lugar-mejor-y-sentirte-agusto',
    en: '/gym-etiquette',
  },
  trainingHotWeather: {
    es: '/como-entrenar-con-altas-temperaturas',
    en: '/training-in-hot-weather',
  },
  smithMachineStickingPoints: {
    es: '/multipower-para-superar-puntos-de-estancamiento',
    en: '/smith-machine-sticking-points',
  },
  rangeOfMotion: { es: '/rango-completo-de-movimiento-rom', en: '/range-of-motion-training' },
  muscleSoreness: { es: '/dolor-crecimiento-muscular', en: '/muscle-soreness-and-growth' },
  breathingWhileLifting: {
    es: '/como-respirar-mientras-entrenamos',
    en: '/breathing-while-lifting',
  },
  loseFatGainMuscle: { es: '/menos-grasa-mas-musculo', en: '/lose-fat-gain-muscle' },
  trainingPartner: { es: '/entrenamiento-con-companero', en: '/training-partner-benefits' },
  hiitGuide: { es: '/guia-de-entrenamiento-hitt', en: '/hiit-training-guide' },
  swimmingRoutine: { es: '/rutina-entrenamiento-natacion', en: '/swimming-workout-routine' },
  runningPopularRaces: {
    es: '/como-disfrutar-del-running-y-conseguir-acabar-cualquier-carrera-popular',
    en: '/enjoy-running-popular-races',
  },
  lowImpactCardio: { es: '/cardio-de-bajo-impacto-para-quemar-grasa', en: '/low-impact-cardio' },
  swimmingAndWeights: {
    es: '/como-combinar-natacion-y-pesas-sin-perder-musculo',
    en: '/swimming-and-weights',
  },
  cardioWeightsWomen: {
    es: '/como-combinar-cardio-y-pesas-para-mujeres',
    en: '/cardio-and-weights-for-women',
  },
  lissCardio: {
    es: '/cardio-liss-baja-intensidad-larga-duracion',
    en: '/liss-cardio-guide',
  },
  electricBikes: { es: '/bicicletas-electricas-para-perder-peso', en: '/electric-bikes-weight-loss' },
  kayakPaddleSurf: { es: '/kayak-paddle-surf-beneficios', en: '/kayak-paddleboarding-benefits' },
  ellipticalVsStationary: {
    es: '/bicicleta-eliptica-vs-bicicleta-estatica-cual-es-mejor',
    en: '/elliptical-vs-stationary-bike',
  },
  bikeVsTreadmill: {
    es: '/bicicleta-estatica-vs-cinta-de-correr',
    en: '/stationary-bike-vs-treadmill',
  },
  airBike: {
    es: '/beneficios-de-la-bicicleta-de-aire-y-como-entrenar-con-ella',
    en: '/air-bike-benefits',
  },
  aerobicExercise: { es: '/ejercicio-aerobico', en: '/aerobic-exercise' },
  cardioInProgram: {
    es: '/entrenamiento-cardiovascular-en-tu-programa-de-fitness',
    en: '/cardiovascular-training-in-your-program',
  },
  aerobicRoutines: { es: '/rutinas-ejercicio-aerobico', en: '/aerobic-exercise-routines' },
  weightsCardioHealth: {
    es: '/pesas-salud-cardiovascular',
    en: '/weights-and-cardiovascular-health',
  },
  fastedCardio: { es: '/cardio-ayunas', en: '/fasted-cardio' },
  continuousAerobic: {
    es: '/metodos-continuos-ejercicio-aerobico',
    en: '/continuous-aerobic-methods',
  },
  aerobicMachines: { es: '/maquinas-ejercicio-aerobico', en: '/aerobic-machines' },
  aerobicAdaptations: {
    es: '/adaptaciones-cuerpo-ejercicio-aerobico',
    en: '/aerobic-adaptations',
  },
  aerobicMuscleLoss: {
    es: '/ejercicio-aerobico-perder-masa-muscular',
    en: '/aerobic-exercise-muscle-loss',
  },
  tooMuchCardio: {
    es: '/demasiado-aerobico-puede-ser-malo-para-perder-grasa',
    en: '/too-much-cardio-fat-loss',
  },
  maxHeartRate: { es: '/calcular-frecuencia-cardiaca-maxima', en: '/max-heart-rate' },
  cardioClothing: {
    es: '/ropa-y-calzado-para-el-ejercicio-cardiovascular',
    en: '/clothing-and-shoes-for-cardio',
  },
  jumpRope: { es: '/saltar-comba', en: '/jump-rope-training' },
  sideStitch: { es: '/flato-prevenirlo-eliminarlo', en: '/side-stitch-prevention' },
  treadmillVsBike: {
    es: '/cinta-correr-vs-bicicleta-para-quemar-grasa',
    en: '/treadmill-vs-bike-fat-burning',
  },
  cooperTest: { es: '/test-de-cooper', en: '/cooper-test' },
  run30Minutes: { es: '/consigue-correr-30-minutos-seguidos', en: '/run-30-minutes-nonstop' },
  walkingFatLoss: {
    es: '/caminar-como-metodo-para-perder-grasa-y-estar-en-forma',
    en: '/walking-for-fat-loss',
  },
  cyclingFatLoss: { es: '/bicicleta-para-perder-grasa', en: '/cycling-for-fat-loss' },
  spinningTips: { es: '/spinning-mejores-consejos-por-nivel', en: '/spinning-tips-by-level' },
  highIntensityTraining: {
    es: '/entrenamiento-alta-intensidad',
    en: '/high-intensity-training',
  },
  giantSets: { es: '/series-gigantes', en: '/giant-sets' },
  muscleMemory: { es: '/memoria-muscular-que-es-como-funciona', en: '/muscle-memory' },
  machineExercises: {
    es: '/mejores-ejercicios-en-maquina-de-musculacion',
    en: '/best-machine-exercises',
  },
  functionalTraining: { es: '/entrenamiento-funcional', en: '/functional-training' },
  gymWarmUp: { es: '/calentamiento-y-estiramientos', en: '/gym-warm-up' },
  yogaBodybuilding: {
    es: '/como-aplicar-los-beneficios-del-yoga-al-culturismo',
    en: '/yoga-for-bodybuilding',
  },
  supersets: { es: '/superseries', en: '/supersets' },
  weiderPrinciples: { es: '/principios-weider', en: '/weider-principles' },
  forcedReps: { es: '/repeticiones-forzadas', en: '/forced-reps' },
  partialReps: { es: '/repeticiones-parciales', en: '/partial-reps' },
  superSlowTraining: { es: '/entrenamiento-superlento', en: '/super-slow-training' },
  cheatReps: { es: '/repeticiones-con-trampa', en: '/cheat-reps' },
  dropSets: { es: '/series-descendentes', en: '/drop-sets' },
  preFatigue: { es: '/prefatiga', en: '/pre-fatigue' },
  triSets: { es: '/triseries', en: '/tri-sets' },
  restPause: { es: '/tecnica-descanso-pausa', en: '/rest-pause' },
  alternatingSets: { es: '/series-alternativas', en: '/alternating-sets' },
  negativeReps: { es: '/repeticiones-negativas', en: '/negative-reps' },
  highIntensityExercises: {
    es: '/ejercicios-de-alta-intensidad',
    en: '/high-intensity-exercises',
  },
  peakContraction: {
    es: '/principio-de-contraccion-maxima',
    en: '/peak-contraction-principle',
  },
  whenToSeeSportsDoctor: {
    es: '/cuando-ir-al-traumatologo-experiencia-personal',
    en: '/when-to-see-a-sports-doctor',
  },
  maintainFitnessSummer: {
    es: '/como-mantener-y-mejorar-tu-forma-fisica-durante-el-verano',
    en: '/maintain-fitness-in-summer',
  },
  injuriousGymExercises: {
    es: '/ejercicios-de-gimnasio-mas-lesivos',
    en: '/most-injurious-gym-exercises',
  },
  commonGymInjuries: {
    es: '/lesiones-comunes-en-el-gimnasio-prevencion',
    en: '/common-gym-injuries',
  },
  correctPosture: {
    es: '/la-postura-correcta-un-factor-importante-en-nuestro-deporte',
    en: '/correct-posture-for-training',
  },
  chronicPainPhysiotherapy: {
    es: '/dolor-cronico-y-fisioterapia-tratamientos-que-funcionan',
    en: '/chronic-pain-physiotherapy',
  },
  delayedOnsetSoreness: {
    es: '/agujetas-causas-y-como-hacer-que-desaparezcan',
    en: '/delayed-onset-muscle-soreness',
  },
  overtraining: { es: '/sobreentrenamiento', en: '/overtraining' },
  activeRecovery: {
    es: '/recuperacion-activa-entrenamiento',
    en: '/active-recovery',
  },
  cnsFatigue: {
    es: '/fatiga-del-sistema-nervioso-central-snc',
    en: '/central-nervous-system-fatigue',
  },
  tennisElbow: { es: '/epicondilitis', en: '/tennis-elbow' },
  carpalTunnel: {
    es: '/sindrome-tunel-carpiano',
    en: '/carpal-tunnel-syndrome',
  },
  achillesTendinopathy: {
    es: '/tendinitis-tendon-aquiles',
    en: '/achilles-tendinopathy',
  },
  plantarFasciitis: {
    es: '/fascitis-plantar-causas-y-tratamiento',
    en: '/plantar-fasciitis',
  },
  backPainTraining: {
    es: '/entrenamiento-problemas-espalda',
    en: '/training-with-back-pain',
  },
  patellarTendinopathy: {
    es: '/tendinitis-rotuliana',
    en: '/patellar-tendinopathy',
  },
  rearDeltTraining: {
    es: '/consejos-entrenar-deltoides-posterior',
    en: '/rear-delt-training',
  },
  trapeziusTraining: {
    es: '/entrenamiento-trapecios',
    en: '/trapezius-training',
  },
  pressBehindNeck: {
    es: '/press-militar-contra-press-tras-nuca',
    en: '/military-press-vs-behind-neck-press',
  },
  shoulderAnatomy: { es: '/anatomia-hombros', en: '/shoulder-anatomy' },
  shoulderStretches: {
    es: '/estiramiento-de-la-parte-posterior-de-los-hombros',
    en: '/shoulder-stretches',
  },
  completeShoulderWorkout: {
    es: '/rutina-para-trabajar-tus-hombros-de-forma-completa',
    en: '/complete-shoulder-workout',
  },
  arnoldShoulders: {
    es: '/los-trucos-de-arnold-para-desarrollar-sus-hombros',
    en: '/arnold-shoulder-training',
  },
  trapPlacement: {
    es: '/entrenar-los-trapecios-con-los-hombros-o-con-la-espalda',
    en: '/trap-training-placement',
  },
  uprightRowGrip: {
    es: '/remo-de-pie-agarre-amplitud',
    en: '/upright-row-grip-width',
  },
  cutlerHamstrings: {
    es: '/rutina-de-femorales',
    en: '/jay-cutler-hamstring-routine',
  },
  francoColumbu: {
    es: '/franco-columbu-dieta-y-entrenamiento',
    en: '/franco-columbu-diet-and-training',
  },
  ronnieColeman: {
    es: '/ronnie-coleman-rutina-y-dieta-tributo',
    en: '/ronnie-coleman-routine-and-diet',
  },
  mentzerHeavyDuty: {
    es: '/mike-mentzer-heavy-duty-entrena-menos-y-crece-mas',
    en: '/mike-mentzer-heavy-duty',
  },
  mrOlympiaWinners: { es: '/ganadores-mr-olympia', en: '/mr-olympia-winners' },
  jeffSeid: { es: '/rutina-y-dieta-de-jeff-seid', en: '/jeff-seid-routine-and-diet' },
  simeonPanda: {
    es: '/simeon-panda-rutina-de-entrenamiento-y-dieta',
    en: '/simeon-panda-routine-and-diet',
  },
  andreiaBrazier: {
    es: '/andreia-brazier-dieta-y-rutina-de-entrenamiento',
    en: '/andreia-brazier-diet-and-routine',
  },
  larryScott: { es: '/larry-scott', en: '/larry-scott' },
  arnoldExercises: {
    es: '/ejercicios-de-arnold-schwarzenegger',
    en: '/arnold-schwarzenegger-exercises',
  },
  shawnRay: {
    es: '/shawn-ray-preparando-la-competicion',
    en: '/shawn-ray-competition-prep',
  },
  dorianYates: { es: '/serie-dorian-yates', en: '/dorian-yates-series' },
  boxSquatHeights: {
    es: '/sentadilla-con-caja-alturas',
    en: '/box-squat-heights',
  },
  hipThrust: { es: '/beneficios-hip-thrust', en: '/hip-thrust-benefits' },
  hamstringTraining: {
    es: '/entrenamiento-del-femoral-o-tendon-de-la-corva',
    en: '/hamstring-training-guide',
  },
  quadricepsAnatomy: {
    es: '/anatomia-del-cuadriceps',
    en: '/quadriceps-anatomy',
  },
  quadricepsMyths: {
    es: '/entrenamiento-del-cuadriceps-mitos',
    en: '/quadriceps-training-myths',
  },
  quadricepsExercises: {
    es: '/mejores-ejercicios-cuadriceps',
    en: '/best-quadriceps-exercises',
  },
  gluteWarmUp: {
    es: '/como-calentar-para-tu-entrenamiento-de-gluteos',
    en: '/glute-workout-warm-up',
  },
  hamstringAnatomy: {
    es: '/anatomia-femorales',
    en: '/hamstring-anatomy',
  },
  legPressFootPosition: {
    es: '/prensa-posicion-pies',
    en: '/leg-press-foot-position',
  },
  squatGaze: {
    es: '/sentadilla-mirada-al-frente',
    en: '/squat-head-position',
  },
  calfPosition: {
    es: '/grandes-gemelos-elevaciones-de-pie-o-sentado',
    en: '/standing-vs-seated-calf-raises',
  },
  squatVsPress: { es: '/sentadilla-prensa', en: '/squat-vs-leg-press' },
  calfAnatomy: { es: '/anatomia-gemelo-soleo', en: '/calf-anatomy' },
  kneeWarmUp: {
    es: '/como-proteger-tus-rodillas-en-el-entrenamiento-de-cuadriceps',
    en: '/protect-knees-quad-training',
  },
  tibialisAnterior: {
    es: '/anatomia-y-entrenamiento-del-tibial-anterior',
    en: '/tibialis-anterior',
  },
  lungeComparison: {
    es: '/zancadas-estaticas-zancadas-caminando-cual-es-mas-efectiva',
    en: '/static-vs-walking-lunges',
  },
  hipAnatomy: { es: '/anatomia-de-la-cadera-gluteos', en: '/hip-anatomy' },
  calfGrowth: { es: '/como-ganar-volumen-en-los-gemelos', en: '/calf-growth' },
  benchComparison: {
    es: '/press-de-banca-mas-efectivo-con-mancuernas-o-con-barra',
    en: '/dumbbell-vs-barbell-bench-press',
  },
  chestAnatomy: { es: '/anatomia-del-pecho', en: '/chest-anatomy' },
  inclineChest: {
    es: '/ejercicios-inclinados-para-pecho',
    en: '/incline-chest-exercises',
  },
  buildPectoral: {
    es: '/consejos-ganar-musculo-pectoral',
    en: '/build-pectoral-muscle',
  },
  machinesVsFreeWeights: {
    es: '/maquinas-pesos-libres-al-entrenar-el-pecho',
    en: '/machines-vs-free-weights-chest',
  },
  dumbbellsForChest: {
    es: '/mancuernas-entrenando-pecho',
    en: '/dumbbells-for-chest',
  },
  partnerCurl: { es: '/flexion-brazos-compartida', en: '/partner-biceps-curl' },
  bicepsRoutines: { es: '/rutinas-biceps', en: '/biceps-routines' },
  biggerBiceps: { es: '/biceps-grandes', en: '/bigger-biceps' },
  bicepsForearmAnatomy: {
    es: '/anatomia-biceps-antebrazo',
    en: '/biceps-forearm-anatomy',
  },
  wristPositionCurl: {
    es: '/posicion-de-muneca-en-el-curl-de-biceps',
    en: '/wrist-position-biceps-curl',
  },
  buildBigArms: { es: '/consigue-grandes-brazos', en: '/build-big-arms' },
  growBiceps: { es: '/aumentar-biceps', en: '/grow-biceps' },
  tricepsRoutines: { es: '/rutinas-triceps', en: '/triceps-routines' },
  tricepsLongHead: {
    es: '/cabeza-larga-del-triceps',
    en: '/triceps-long-head',
  },
  tricepsAnatomy: { es: '/anatomia-triceps', en: '/triceps-anatomy' },
  dorianAbs: {
    es: '/entrenamiento-abdominal-por-dorian-yates',
    en: '/dorian-yates-abs',
  },
  swissBallCrunch: {
    es: '/encogimientos-sobre-balon-ejercicio',
    en: '/swiss-ball-crunches',
  },
  plateTwists: { es: '/giros-en-disco', en: '/plate-twists' },
  abRoutines: {
    es: '/rutinas-ejercicios-abdominales',
    en: '/ab-workout-routines',
  },
  isometricAbs: { es: '/abdominales-isometricos', en: '/isometric-abs' },
  hangingAbs: {
    es: '/abdominales-ejercicios-colgado',
    en: '/hanging-ab-exercises',
  },
  fourDayAbs: { es: '/abdominales-cambiatufisico', en: '/four-day-ab-routine' },
  abExercises: { es: '/ejercicios-de-abdominales', en: '/ab-exercises' },
  spotReduction: {
    es: '/perder-grasa-abdominal-con-abdominales',
    en: '/spot-reduction-myth',
  },
  absHypertrophy: {
    es: '/rutina-abdominales-para-culturismo',
    en: '/abs-hypertrophy-routine',
  },
  abRoutineAB: { es: '/rutina-abdominales-ab', en: '/ab-routine-a-b' },
  declineBenchCrunch: {
    es: '/encogimientos-banco-inclinado',
    en: '/decline-bench-crunches',
  },
  machineCrunch: { es: '/encogimientos-maquina', en: '/machine-crunches' },
  kneelingCableCrunch: {
    es: '/encogimientos-polea-2',
    en: '/kneeling-cable-crunches',
  },
  barbellRollout: { es: '/rodar-con-barra', en: '/barbell-ab-rollout' },
  floorCrunch: { es: '/encogimientos-abdominales-suelo', en: '/floor-crunches' },
  standingCableCrunch: {
    es: '/encogimientos-en-polea-de-pie',
    en: '/standing-cable-crunches',
  },
  bicycleCrunch: { es: '/bicicleta-oblicuos', en: '/bicycle-crunches' },
  fingerToHeel: {
    es: '/encogimientos-laterales-dedos-tobillos',
    en: '/finger-to-heel-crunches',
  },
  sideCrunch: { es: '/encogimientos-oblicuos', en: '/side-crunch' },
  declineObliqueCrunch: {
    es: '/encogimientos-oblicuos-banco-declinado',
    en: '/decline-oblique-crunches',
  },
  dumbbellSideBend: {
    es: '/encogimiento-lateral-mancuerna-de-pie',
    en: '/dumbbell-side-bend',
  },
  sideJackknife: {
    es: '/elevaciones-piernas-oblicuos-tumbado',
    en: '/side-jackknife',
  },
  cableSideBend: { es: '/inclinacion-lateral-polea', en: '/cable-side-bend' },
  cableObliqueCrunch: {
    es: '/encogimientos-oblicuos-polea',
    en: '/kneeling-cable-oblique-crunch',
  },
  cableWoodchop: { es: '/cortar-troncos-en-polea', en: '/cable-woodchop' },
  hangingSideLegRaise: {
    es: '/elevacion-lateral-de-piernas-colgado',
    en: '/hanging-side-leg-raises',
  },
  pallofPress: { es: '/press-pallof', en: '/pallof-press' },
  weightedPlank: { es: '/plancha-con-peso', en: '/weighted-plank' },
  benchReverseCrunch: {
    es: '/encogimientos-invertidos-banco-inclinado',
    en: '/bench-reverse-crunches',
  },
  seatedKneeTuck: { es: '/pull-in-banco-plano', en: '/seated-knee-tucks' },
  benchLegRaise: {
    es: '/elevaciones-piernas-banco-plano',
    en: '/bench-leg-raises',
  },
  hangingLegRaise: {
    es: '/elevaciones-piernas-colgado',
    en: '/hanging-leg-raises',
  },
  captainsChairLegRaise: {
    es: '/elevaciones-piernas-paralelas',
    en: '/captains-chair-leg-raises',
  },
  scissorKicks: { es: '/tijeras-de-piernas', en: '/scissor-kicks' },
  reverseCrunch: { es: '/encogimientos-invertidos', en: '/reverse-crunches' },
  vCrunch: { es: '/encogimientos-uve', en: '/v-crunches' },
  sidePlank: { es: '/plancha-lateral-tecnica-y-beneficios', en: '/side-plank' },
  frontPlank: { es: '/plancha-abdominal-ejercicio-de-core', en: '/front-plank' },
  freeWeightShoulders: {
    es: '/rutina-hombros-pesos-libres',
    en: '/free-weight-shoulder-routines',
  },
  shoulderSpecialization: {
    es: '/rutina-de-especializacion-de-hombros',
    en: '/shoulder-specialization-routine',
  },
  shoulderRoutines: { es: '/rutinas-hombros', en: '/shoulder-routines' },
  frontDeltsRoutine: {
    es: '/rutina-de-hombro-para-deltoides-frontales-retrasados',
    en: '/front-delts-shoulder-routine',
  },
  facePull: { es: '/face-pull', en: '/face-pull' },
  antagonistArms: {
    es: '/rutina-de-especializacion-de-brazos-con-series-antagonistas',
    en: '/antagonist-arm-specialization',
  },
  leeHaneyArms: { es: '/programa-entrenamiento-brazos-lee-haney', en: '/lee-haney-arm-program' },
  forearmRoutine: { es: '/rutina-de-antebrazos', en: '/forearm-routine' },
  negativeBiceps: {
    es: '/rutina-de-ejercicios-para-desarrollar-los-biceps',
    en: '/negative-biceps-routine',
  },
  strictBiceps: { es: '/rutina-de-biceps-tecnica-estricta', en: '/strict-biceps-routine' },
  bodybuilderBiceps: { es: '/biceps-culturistas', en: '/bodybuilder-biceps-training' },
  armBuilding: { es: '/rutina-desarrollar-brazos', en: '/arm-building-routine' },
  chestRoutines: { es: '/rutinas-pecho', en: '/chest-routines' },
  arnoldDips: { es: '/fondos-pecho-triceps', en: '/arnold-dips-chest-triceps' },
  benchStrength: { es: '/mejorar-fuerza-press-de-banca', en: '/bench-press-strength' },
  beginnerChest: { es: '/rutinas-de-pecho-principiantes', en: '/beginner-chest-routines' },
  noBenchChest: {
    es: '/rutina-de-pecho-alternativa-al-press-de-banca',
    en: '/chest-routine-without-bench-press',
  },
  compoundIsolation: {
    es: '/entrena-tu-pecho-alternando-ejercicios-compuestos-y-de-aislamiento',
    en: '/compound-isolation-chest',
  },
  upperChest: {
    es: '/rutina-de-pecho-para-pectoral-superior-breve-pero-intensa',
    en: '/upper-chest-routine',
  },
  chestSpecialization: {
    es: '/rutina-de-especializacion-de-pecho',
    en: '/chest-specialization-routine',
  },
  pyramidChest: { es: '/programa-de-pecho-con-sistema-de-piramide', en: '/pyramid-chest-program' },
  lightHeavyLegs: {
    es: '/rutina-de-piernas-con-dia-ligero-y-dia-pesado',
    en: '/light-heavy-leg-routine',
  },
  legSpecialization: {
    es: '/rutina-de-especializacion-para-las-piernas',
    en: '/leg-specialization-routine',
  },
  fifteenMinuteLegs: {
    es: '/revienta-tus-piernas-en-15-minutos',
    en: '/fifteen-minute-leg-workout',
  },
  calfNoMachines: { es: '/rutina-de-gemelos-sin-maquinas', en: '/calf-routine-no-machines' },
  calfRoutines: {
    es: '/rutinas-de-gemelos-para-pantorrillas-esteticas-tonificadas',
    en: '/calf-routines',
  },
  legRoutineForMass: { es: '/rutina-volumen-pierna-completa', en: '/leg-routine-for-mass' },
  twoDayLegSplit: { es: '/rutina-de-piernas-de-doble-division', en: '/two-day-leg-split' },
  legRoutines: { es: '/rutinas-pierna', en: '/leg-routines' },
  unconventionalCalfTraining: {
    es: '/entrenamiento-de-gemelos-diferente',
    en: '/unconventional-calf-training',
  },
  eccentricHamstringTraining: { es: '/entrenar-femorales', en: '/eccentric-hamstring-training' },
  quadRoutinesByGoal: { es: '/rutinas-cuadriceps-objetivos', en: '/quad-routines-by-goal' },
  oldSchoolSquatLegRoutine: {
    es: '/rutina-de-piernas-con-sentadillas-de-la-vieja-escuela',
    en: '/old-school-squat-leg-routine',
  },
  tricepsMassRoutine: {
    es: '/rutina-de-volumen-para-triceps-como-herraduras',
    en: '/triceps-mass-routine',
  },
  restPauseChestRoutine: {
    es: '/rutina-de-pecho-de-dos-dias-a-la-semana-con-tecnica-descanso-pausa',
    en: '/rest-pause-chest-routine',
  },
  tricepsShockRoutine: { es: '/rutina-para-sorprender-a-tus-triceps', en: '/triceps-shock-routine' },
  strengthRoutines: { es: '/rutinas-de-fuerza', en: '/strength-routines' },
  bilboMethod: { es: '/metodo-bilbo-rutina-de-fuerza', en: '/bilbo-method' },
  wendler531: { es: '/rutina-de-fuerza-jim-wendler', en: '/wendler-531' },
  strongliftsMadcow: {
    es: '/rutina-5x5-fuerza-stronglifts-y-madcow',
    en: '/stronglifts-madcow-5x5',
  },
  upperBodyStrengthProgram: {
    es: '/programa-de-entrenamiento-para-fuerza-del-tren-superior',
    en: '/upper-body-strength-program',
  },
  startingStrengthGuide: { es: '/rutina-starting-strength-guia', en: '/starting-strength-guide' },
  powerliftingTraining: { es: '/entrenamiento-powerlifting', en: '/powerlifting-training' },
  sixWeekStrengthRamp: { es: '/fuerza-3x2-6-semanas', en: '/six-week-strength-ramp' },
  korte3x3: { es: '/rutina-fuerza-3x3-de-stephan-korte', en: '/korte-3x3' },
  germanVolumeTraining: { es: '/entrenamiento-aleman', en: '/german-volume-training' },
  pushPullRoutine: { es: '/rutina-de-tiron-empujon', en: '/push-pull-routine' },
  arnoldVolumeRoutine: {
    es: '/rutina-volumen-arnold-schwarzenegger',
    en: '/arnold-volume-routine',
  },
  fiveMonthTrainingPlan: { es: '/rutina-entrenamiento', en: '/five-month-training-plan' },
  highVolumeFourDayRoutine: {
    es: '/rutina-volumen-alta-intensidad',
    en: '/high-volume-four-day-routine',
  },
  threeWaySplit: { es: '/rutina-masa-muscular-triple-division', en: '/three-way-split' },
  annualTrainingPlan: {
    es: '/plan-de-entrenamiento-de-gimnasio-anual',
    en: '/annual-training-plan',
  },
  volumeRoutines: { es: '/rutinas-de-volumen', en: '/volume-routines' },
  twelveWeekHypertrophyPlan: {
    es: '/rutina-hipertrofia-total-tres-meses',
    en: '/twelve-week-hypertrophy-plan',
  },
  abbh1Program: { es: '/sistema-anti-culturismo-abbh1', en: '/abbh1-program' },
  antagonistSupersetsRoutine: {
    es: '/rutina-con-superseries-musculos-antagonistas',
    en: '/antagonist-supersets-routine',
  },
  smithMachineRoutine: { es: '/rutina-con-multipower', en: '/smith-machine-routine' },
  homeDumbbellRoutines: { es: '/rutinas-pesas-casa', en: '/home-dumbbell-routines' },
  infiniteSetsRoutine: {
    es: '/series-infinitas-rutina-de-pesas-de-alta-intensidad',
    en: '/infinite-sets-routine',
  },
  howToGainWeight: { es: '/como-ganar-peso', en: '/how-to-gain-weight' },
  volumeTrainingTables: {
    es: '/tablas-de-entrenamiento-de-volumen-masa-muscular',
    en: '/volume-training-tables',
  },
  intermediateVolumeRoutine: {
    es: '/rutina-volumen-muscular-intermedios',
    en: '/intermediate-volume-routine',
  },
  harrisonTwinsRoutine: { es: '/rutina-y-dieta-gemelos-harrison', en: '/harrison-twins-routine' },
  heavyDutyRoutines: { es: '/rutinas-heavy-duty', en: '/heavy-duty-routines' },
  ectomorphVolumeRoutine: { es: '/rutina-volumen-ectomorfos', en: '/ectomorph-volume-routine' },
  naturalMuscleBuildingRoutine: {
    es: '/rutina-ganar-masa-muscular',
    en: '/natural-muscle-building-routine',
  },
};

const routeId = (path) => {
  const [locale, ...rest] = path.replace(/^\/+|\/+$/g, '').split('/');
  const bare = `/${rest.join('/')}`;
  return Object.keys(ROUTES).find((id) => ROUTES[id][locale] === bare);
};

// Spanish words that must never reach an English page.
const SPANISH_SENTINELS = [
  'Última actualización',
  'Deja de entrenar',
  'Avísame cuando salga',
  'Funciones',
  'Capturas',
  'Responsable del tratamiento',
  'Términos y Condiciones',
];

const failures = [];
const checks = [];

function check(name, ok, detail = '') {
  checks.push({ name, ok, detail });
  if (!ok) failures.push(`${name}${detail ? ` — ${detail}` : ''}`);
}

const fileFor = (path) => join(DIST, path.replace(/^\/|\/$/g, ''), 'index.html');

function alternatesFor(path) {
  const locale = path.startsWith('/en/') ? 'en' : 'es';
  const id = routeId(path);
  const withSlash = (lang, slug) => `${ORIGIN}/${lang}${slug === '/' ? '/' : `${slug}/`}`;
  return { locale, es: withSlash('es', ROUTES[id].es), en: withSlash('en', ROUTES[id].en) };
}

for (const [lang, path] of PAGES) {
  const file = fileFor(path);
  if (!existsSync(file)) {
    check(`${path} exists`, false);
    continue;
  }
  check(`${path} exists`, true);

  const html = readFileSync(file, 'utf8');
  const expected = alternatesFor(path);

  check(`${path} html lang`, new RegExp(`<html[^>]*\\slang="${lang}"`).test(html));
  check(
    `${path} canonical`,
    html.includes(`<link rel="canonical" href="${ORIGIN}${path}">`),
    `expected ${ORIGIN}${path}`,
  );
  for (const [code, url] of [
    ['es', expected.es],
    ['en', expected.en],
    ['x-default', expected.es],
  ]) {
    check(
      `${path} alternate ${code}`,
      html.includes(`<link rel="alternate" hreflang="${code}" href="${url}">`),
      `expected ${url}`,
    );
  }
  check(`${path} og:locale`, html.includes(`content="${lang === 'en' ? 'en_GB' : 'es_ES'}"`));

  // The header switch must land on the pair, not on the same slug in the other
  // locale. Articles use different slugs per language, so this is the check that
  // catches a link to /en/<spanish-slug>/ (a 404).
  const switchLinks = [...html.matchAll(/<a href="([^"]+)" class="lang-switch__link"[^>]*hreflang="(es|en)"/g)];
  for (const code of ['es', 'en']) {
    const link = switchLinks.find((match) => match[2] === code);
    const expectedPath = (code === 'es' ? expected.es : expected.en).replace(ORIGIN, '');
    check(
      `${path} language switch ${code}`,
      link?.[1] === expectedPath,
      `expected ${expectedPath}, got ${link?.[1] ?? 'no link'}`,
    );
  }

  if (lang === 'en') {
    for (const sentinel of SPANISH_SENTINELS) {
      check(`${path} has no "${sentinel}"`, !html.includes(sentinel));
    }
  }
}

// Legacy paths are redirect stubs in dev, never indexed content.
for (const path of ['/', '/privacidad/', '/terminos/']) {
  const file = fileFor(path);
  if (!existsSync(file)) {
    check(`stub ${path} exists`, false);
    continue;
  }
  const html = readFileSync(file, 'utf8');
  check(`stub ${path} is noindex`, html.includes('name="robots" content="noindex"'));
  check(`stub ${path} never canonicalises to itself`, !html.includes(`href="${ORIGIN}${path}"`));
}

const redirects = readFileSync(join(DIST, '_redirects'), 'utf8');
for (const rule of [
  '/ /es/ 302',
  '/privacidad /es/privacidad/ 301',
  '/terminos /es/terminos/ 301',
  '/sitemap.xml /sitemap-index.xml 301',
  '/en/calculadora-1rm/ /en/one-rep-max-calculator/ 301',
  '/en/calculadora-imc/ /en/bmi-calculator/ 301',
  '/en/calcular-calorias/ /en/calorie-calculator/ 301',
]) {
  check(`_redirects "${rule}"`, redirects.includes(rule));
}

const sitemapFile = join(DIST, 'sitemap-0.xml');
if (!existsSync(sitemapFile)) {
  check('sitemap-0.xml exists', false);
} else {
  const sitemap = readFileSync(sitemapFile, 'utf8');
  for (const [, path] of PAGES) {
    check(`sitemap has ${path}`, sitemap.includes(`<loc>${ORIGIN}${path}</loc>`));
  }
  check('sitemap has hreflang alternates', sitemap.includes('xhtml:link'));
  for (const stub of ['<loc>https://gymlab.dev/</loc>', `${ORIGIN}/privacidad/`, `${ORIGIN}/terminos/`]) {
    check(`sitemap excludes ${stub}`, !sitemap.includes(stub));
  }
}

// The sitemap and the markup must publish the same hreflang annotations: same
// codes and same targets. Region subtags on one side and not the other, or a
// missing x-default, leaves two competing sets instead of one reinforced set.
if (existsSync(sitemapFile)) {
  const xml = readFileSync(sitemapFile, 'utf8');
  const entries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((match) => {
    const body = match[1];
    return {
      loc: /<loc>([^<]+)<\/loc>/.exec(body)?.[1],
      links: [...body.matchAll(/hreflang="([^"]+)" href="([^"]+)"/g)]
        .map((link) => `${link[1]}=${link[2]}`)
        .sort(),
    };
  });

  for (const [lang, path] of PAGES) {
    const html = readFileSync(fileFor(path), 'utf8');
    const htmlLinks = [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)]
      .map((link) => `${link[1]}=${link[2]}`)
      .sort();
    const entry = entries.find((candidate) => candidate.loc === `${ORIGIN}${path}`);

    check(`sitemap has an entry for ${path}`, Boolean(entry));
    check(
      `${path} hreflang annotations match the sitemap`,
      entry !== undefined && JSON.stringify(entry.links) === JSON.stringify(htmlLinks),
      `markup [${htmlLinks.join(' ')}] vs sitemap [${(entry?.links ?? []).join(' ')}]`,
    );
  }
}

// Landing SEO contract: the meta description, the visible FAQ and the JSON-LD
// graphs must describe the same page. Only the landing carries structured data.
const LANDINGS = [
  {
    path: '/es/',
    inLanguage: 'es-ES',
    terms: ['app de entrenamiento', 'gratis', 'sin conexión'],
    questions: ['¿GymLab es gratis?', '¿Necesito crear una cuenta?'],
  },
  {
    path: '/en/',
    inLanguage: 'en-GB',
    terms: ['training app', 'free', 'offline'],
    questions: ['Is GymLab free?', 'Do I need an account?'],
  },
];

for (const landing of LANDINGS) {
  const { path } = landing;
  const file = fileFor(path);
  if (!existsSync(file)) {
    check(`seo ${path} exists`, false);
    continue;
  }
  const html = readFileSync(file, 'utf8');

  // Description: 150-160 characters and carrying the primary keyword.
  const metaDescription = html.match(/<meta name="description" content="([^"]*)">/)?.[1] ?? '';
  check(
    `seo ${path} description length`,
    metaDescription.length >= 150 && metaDescription.length <= 160,
    `got ${metaDescription.length} characters`,
  );
  for (const term of landing.terms) {
    check(
      `seo ${path} description mentions "${term}"`,
      metaDescription.toLowerCase().includes(term.toLowerCase()),
    );
  }

  // Both new FAQ entries must reach the rendered page.
  for (const question of landing.questions) {
    check(`seo ${path} renders FAQ "${question}"`, html.includes(question));
  }

  // Social card completeness: the alt is the only thing a screen reader gets from
  // the image, and the type lets consumers skip a content sniff.
  check(
    `seo ${path} has twitter:image:alt`,
    /<meta name="twitter:image:alt" content="[^"]+">/.test(html),
  );
  check(
    `seo ${path} has og:image:type`,
    /<meta property="og:image:type" content="image\/jpeg">/.test(html),
  );
  check(
    `seo ${path} has og:locale:alternate`,
    /<meta property="og:locale:alternate" content="(?:es_ES|en_GB)">/.test(html),
  );

  // One graph per page. A second block was the old shape; the site now composes
  // every node into a single `@graph` so references resolve inside the document.
  const blocks = [
    ...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g),
  ].map((match) => match[1]);
  check(`seo ${path} has 1 json-ld block`, blocks.length === 1, `got ${blocks.length}`);

  let graph = null;
  try {
    graph = JSON.parse(blocks[0] ?? '{}');
  } catch (error) {
    check(`seo ${path} json-ld parses`, false, String(error));
  }
  check(`seo ${path} json-ld parses`, Boolean(graph));

  const nodes = graph?.['@graph'] ?? [];
  const byType = (type) => nodes.find((node) => node['@type'] === type);
  const app = byType('SoftwareApplication');
  const site = byType('WebSite');
  const org = byType('Organization');

  check(`seo ${path} has Organization`, Boolean(org));
  check(`seo ${path} has WebSite`, Boolean(site));
  check(`seo ${path} has SoftwareApplication`, Boolean(app));

  // The FAQ rich result was retired in May 2026. The page still renders the
  // questions; the schema node is the part that no longer earns anything.
  check(`seo ${path} ships no FAQPage`, !html.includes('"FAQPage"'));

  if (site && org) {
    check(
      `seo ${path} WebSite.publisher resolves to Organization`,
      site.publisher?.['@id'] === org['@id'],
      `got ${site.publisher?.['@id']}`,
    );
  }

  if (app) {
    check(`seo ${path} offer price is "0"`, app.offers?.price === '0', `got ${app.offers?.price}`);
    check(
      `seo ${path} has no aggregateRating`,
      !Object.hasOwn(app, 'aggregateRating'),
    );
    // The stores are announced, not shipped. Web is the only honest platform.
    check(
      `seo ${path} operatingSystem is "Web"`,
      app.operatingSystem === 'Web',
      `got ${app.operatingSystem}`,
    );
    check(
      `seo ${path} inLanguage is ${landing.inLanguage}`,
      app.inLanguage === landing.inLanguage,
      `got ${app.inLanguage}`,
    );
  }
}

// Calculator pages: the same metadata rule as the landing, one H1 (a single topic)
// and a live CTA. Each entry names the term its own copy has to match; the BMI
// descriptions spell the concept out, so the term follows the copy, not the slug.
const CALC_PAGES = [
  { path: '/es/calculadora-1rm/', term: '1rm' },
  { path: '/en/one-rep-max-calculator/', term: 'one rep max' },
  { path: '/es/calculadora-imc/', term: 'índice de masa corporal' },
  { path: '/en/bmi-calculator/', term: 'body mass index' },
  { path: '/es/calcular-calorias/', term: 'calorías' },
  { path: '/en/calorie-calculator/', term: 'calories' },
];

for (const { path, term } of CALC_PAGES) {
  const file = fileFor(path);
  if (!existsSync(file)) {
    check(`calc ${path} exists`, false);
    continue;
  }
  const html = readFileSync(file, 'utf8');
  const metaDescription = html.match(/<meta name="description" content="([^"]*)">/)?.[1] ?? '';

  check(
    `calc ${path} description length`,
    metaDescription.length >= 150 && metaDescription.length <= 160,
    `got ${metaDescription.length} characters`,
  );
  check(`calc ${path} description mentions "${term}"`, metaDescription.toLowerCase().includes(term));
  check(`calc ${path} has exactly one h1`, (html.match(/<h1[\s>]/g) ?? []).length === 1);
  check(`calc ${path} links to the app`, html.includes('https://app.gymlab.dev'));
  // A unit or label placed on its own line after <output> loses its space: the
  // built page renders "90kg" instead of "90 kg".
  check(
    `calc ${path} keeps a space after every output`,
    !/<\/output>[0-9A-Za-zÀ-ÿ]/.test(html),
  );

  // Each calculator composes its own graph: the site nodes travel with it so no
  // `@id` reference points at a node that lives on another page.
  const schemaBlocks = [
    ...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g),
  ].map((match) => match[1]);
  check(
    `calc ${path} has 1 json-ld block`,
    schemaBlocks.length === 1,
    `got ${schemaBlocks.length}`,
  );

  let calcNodes = [];
  try {
    calcNodes = JSON.parse(schemaBlocks[0] ?? '{}')['@graph'] ?? [];
  } catch (error) {
    check(`calc ${path} json-ld parses`, false, String(error));
  }
  check(`calc ${path} json-ld parses`, calcNodes.length > 0);

  const calcTypes = calcNodes.map((node) => node['@type']);
  check(`calc ${path} has WebApplication`, calcTypes.includes('WebApplication'));
  check(`calc ${path} has BreadcrumbList`, calcTypes.includes('BreadcrumbList'));
  check(`calc ${path} ships no FAQPage`, !html.includes('"FAQPage"'));

  const calcApp = calcNodes.find((node) => node['@type'] === 'WebApplication');
  const canonical = html.match(/<link rel="canonical" href="([^"]*)">/)?.[1];
  if (calcApp) {
    check(
      `calc ${path} operatingSystem is "Web"`,
      calcApp.operatingSystem === 'Web',
      `got ${calcApp.operatingSystem}`,
    );
    check(
      `calc ${path} app url matches canonical`,
      calcApp.url === canonical,
      `${calcApp.url} vs ${canonical}`,
    );
  }

  const calcIds = new Set(calcNodes.map((node) => node['@id']).filter(Boolean));
  const refs = [];
  const collect = (value) => {
    if (!value || typeof value !== 'object') return;
    if (Array.isArray(value)) {
      value.forEach(collect);
      return;
    }
    if (Object.keys(value).length === 1 && typeof value['@id'] === 'string') refs.push(value['@id']);
    Object.values(value).forEach(collect);
  };
  calcNodes.forEach(collect);
  const dangling = refs.filter((ref) => !calcIds.has(ref));
  check(`calc ${path} has no dangling @id`, dangling.length === 0, dangling.join(', '));
}

// Orphan pages are invisible: the landing must link to every calculator, and the
// calculators must link to each other, or the surface exists but nobody reaches it.
const CALC_ROUTES = [
  { id: 'oneRm', es: '/calculadora-1rm', en: '/one-rep-max-calculator' },
  { id: 'bmi', es: '/calculadora-imc', en: '/bmi-calculator' },
  { id: 'calories', es: '/calcular-calorias', en: '/calorie-calculator' },
];

for (const landing of LANDINGS) {
  const html = readFileSync(fileFor(landing.path), 'utf8');
  const lang = landing.path.startsWith('/en/') ? 'en' : 'es';
  const prefix = `/${lang}`;
  const anchor = lang === 'en' ? 'id="calculators"' : 'id="calculadoras"';

  check(`links ${landing.path} anchors the calculators`, html.includes(anchor));
  for (const route of CALC_ROUTES) {
    check(
      `links ${landing.path} → ${route[lang]}`,
      html.includes(`href="${prefix}${route[lang]}/"`),
      `expected href="${prefix}${route[lang]}/"`,
    );
  }
}

for (const lang of ['es', 'en']) {
  for (const route of CALC_ROUTES) {
    const file = fileFor(`/${lang}${route[lang]}/`);
    if (!existsSync(file)) continue;
    const html = readFileSync(file, 'utf8');
    for (const other of CALC_ROUTES) {
      if (other.id === route.id) continue;
      check(
        `links ${lang}${route[lang]} → ${other[lang]}`,
        html.includes(`href="/${lang}${other[lang]}/"`),
        `expected href="/${lang}${other[lang]}/"`,
      );
    }
  }
}

const failed = checks.filter((c) => !c.ok);
for (const c of checks) {
  if (!c.ok) console.log(`FAIL  ${c.name}${c.detail ? ` — ${c.detail}` : ''}`);
}
console.log(
  `\n${checks.length - failed.length}/${checks.length} i18n checks passed` +
    (failed.length ? ` — ${failed.length} failed` : ''),
);
process.exit(failed.length ? 1 : 0);
