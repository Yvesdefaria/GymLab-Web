// Spanish legal documents — the reference version.
//
// Prose is the approved text, moved verbatim from src/pages/privacidad.astro and
// src/pages/terminos.astro. Only two inline conventions are added, both resolved
// by LegalLayout.astro:
//   **text**     → <strong>text</strong>
//   {{contact}}  → a mailto link built from `contact`

export interface LegalSection {
  id: string;
  title: string;
  paragraphs: string[];
  list?: string[];
}

export interface LegalDoc {
  title: string;
  description: string;
  updated: string;
  contact: string;
  sections: LegalSection[];
}

export const privacy: LegalDoc = {
  title: 'Política de Privacidad',
  description:
    'Política de privacidad de GymLab: qué datos trata la app, dónde se guardan y cuáles son tus derechos.',
  updated: '21 de octubre de 2026',
  contact: 'gymlab@gymlab.dev',
  sections: [
    {
      id: 'responsable',
      title: '1. Responsable del tratamiento',
      paragraphs: [
        'GymLab («la aplicación») es una aplicación de seguimiento de entrenamiento y fitness desarrollada de forma independiente y publicada a través de Google Play Store y Apple App Store.',
        'Contacto: {{contact}}. Este correo es el punto de contacto para consultas sobre privacidad y para solicitudes de borrado de datos.',
      ],
    },
    {
      id: 'datos',
      title: '2. Datos que trata GymLab',
      paragraphs: [
        'GymLab es una aplicación **local-first**: la gran mayoría de tus datos se guarda únicamente en tu dispositivo mediante almacenamiento local (IndexedDB).',
      ],
      list: [
        'Los datos de entrenamiento (series, repeticiones, pesos, rutinas, récords, peso corporal, medidas y calorías) se almacenan en tu dispositivo y no se envían a servidores de GymLab.',
        'GymLab no requiere cuenta de usuario: no creamos perfiles con tus datos personales ni te identificamos como persona.',
      ],
    },
    {
      id: 'compras',
      title: '3. Compras integradas',
      paragraphs: [
        'GymLab se distribuye gratuitamente. Puedes realizar una compra integrada para desactivar la publicidad, procesada íntegramente por Google Play Billing (Android) o la tienda correspondiente (iOS).',
        'Las tiendas gestionan el pago: GymLab no recibe ni almacena tus datos de tarjeta, de facturación ni el histórico de compras más allá de lo necesario para activar la funcionalidad en tu dispositivo.',
        'Las compras integradas se activarán en versiones futuras; hasta entonces, esta sección no aplica.',
      ],
    },
    {
      id: 'publicidad',
      title: '4. Publicidad',
      paragraphs: [
        'Para poder ofrecer la aplicación de forma gratuita, en el futuro GymLab puede mostrar anuncios proporcionados por Google AdMob. El SDK de AdMob puede recopilar y compartir con terceros (anunciantes y redes publicitarias) datos como el identificador de publicidad de Android, datos de uso de la aplicación y ubicación aproximada cuando esté disponible.',
        'Estos datos se tratarán conforme a la Política de Privacidad de Google, bajo la responsabilidad de Google. Puedes restablecer tu identificador de publicidad u optar por no recibir publicidad personalizada desde los ajustes de tu dispositivo.',
        'En la Unión Europea y el Espacio Económico Europeo, la publicidad personalizada solo se mostrará con tu consentimiento previo (Google UMP / IAB TCF), conforme al RGPD.',
        'La publicidad se activará en versiones futuras; hasta entonces, esta sección no aplica.',
      ],
    },
    {
      id: 'analitica',
      title: '5. Medición y análisis',
      paragraphs: [
        'Para entender cómo se usa la aplicación y arreglar errores, GymLab puede enviar datos anónimos de uso (pantallas visitadas y funciones utilizadas) e informes de errores a nuestros proveedores de analítica Sentry y PostHog.',
        'El envío solo contiene datos de uso y de error: nunca incluye tus datos personales, tu peso, tus entrenamientos ni ninguna otra información de la aplicación.',
        'Puedes desactivar este envío en cualquier momento desde Ajustes › Datos de uso anónimos. Si lo desactivas, no se enviará más información.',
      ],
    },
    {
      id: 'salud',
      title: '6. Salud y actividad física (Health Connect y HealthKit)',
      paragraphs: [
        'GymLab lee tu recuento diario de pasos del almacén de salud de tu dispositivo: Health Connect en Android y HealthKit en iOS. Es el único dato de salud al que accede; no lee frecuencia cardíaca, sueño, peso ni ningún otro registro clínico.',
        'La lectura ocurre en tu dispositivo y el resultado se guarda solo en tu almacenamiento local (IndexedDB). No se envía a servidores de GymLab, no se comparte con terceros y no se usa para publicidad ni para crear perfiles. No se vende ni se cede.',
        'GymLab no usa estos datos para ninguna finalidad distinta de mostrarte tus pasos, rachas y logros.',
        'El permiso se solicita con el diálogo del sistema y puedes revocarlo en cualquier momento desde Health Connect (Android) o los Ajustes del sistema (iOS). Si lo revocas, la app deja de leer pasos y el resto sigue funcionando; los pasos ya guardados quedan en tu dispositivo y puedes borrarlos desde la app.',
        'En Android, GymLab solicita además la lectura de salud en segundo plano para actualizar el widget de pasos cuando la app está cerrada. Ese permiso se concede y revoca desde Health Connect.',
      ],
    },
    {
      id: 'permisos',
      title: '7. Permisos del dispositivo',
      paragraphs: [
        'GymLab solicita solo los permisos que necesita para sus funciones: acceso al almacén de salud (Health Connect en Android, HealthKit en iOS) para leer pasos, notificaciones locales para los avisos de descanso y recordatorios, y cámara o galería solo cuando eliges una foto.',
        'Ninguno de estos permisos envía datos fuera del dispositivo. Puedes revocarlos en cualquier momento desde los ajustes de tu sistema: la app sigue funcionando, salvo la función concreta que dependa del permiso.',
      ],
    },
    {
      id: 'seguridad',
      title: '8. Seguridad y conservación',
      paragraphs: [
        'Al ser una aplicación local-first, tus datos de entrenamiento no se transmiten ni se almacenan en servidores de GymLab, lo que reduce su exposición a accesos externos.',
        'La conservación de estos datos depende de ti: puedes revisarlos, exportarlos o eliminarlos en cualquier momento desde la aplicación o el sistema. Se borran por completo al desinstalar GymLab o al limpiar los datos de la app.',
      ],
    },
    {
      id: 'derechos',
      title: '9. Tus derechos',
      paragraphs: [
        'Si resides en la Unión Europea, tienes derecho a solicitar el acceso a tus datos, su rectificación, supresión, oposición, retirada del consentimiento y portabilidad.',
        'Como tus datos de entrenamiento viven en tu dispositivo, puedes revisarlos, exportarlos o borrarlos tú mismo en cualquier momento desde la aplicación.',
        'Para los datos tratados por plataformas de terceros (publicidad y análisis, cuando se activen), debes ejercer tus derechos ante el proveedor correspondiente.',
        'Para cualquier consulta o reclamación sobre esta política, escríbenos a {{contact}}. También tienes derecho a presentar una reclamación ante tu autoridad de control de protección de datos.',
      ],
    },
    {
      id: 'menores',
      title: '10. Menores de edad',
      paragraphs: [
        'GymLab está recomendada para personas de 14 años o más. Si eres menor de edad, utiliza la aplicación bajo la supervisión de un adulto o tutor legal.',
        'No recopilamos conscientemente información de menores de 13 años.',
      ],
    },
    {
      id: 'cambios',
      title: '11. Cambios en esta política',
      paragraphs: [
        'Podemos actualizar esta política de privacidad en cualquier momento. Cuando haya cambios relevantes, lo indicaremos dentro de la aplicación.',
        'La fecha de la última actualización aparece siempre al inicio de este documento, y la versión vigente es la publicada en esta página.',
      ],
    },
    {
      id: 'contacto',
      title: '12. Contacto',
      paragraphs: [
        'Para ejercer tus derechos o resolver cualquier duda de privacidad, escríbenos a {{contact}}. Responderemos en un plazo máximo de 30 días.',
      ],
    },
  ],
};

export const terms: LegalDoc = {
  title: 'Términos y Condiciones',
  description:
    'Términos y condiciones de uso de GymLab: propósito, datos, permisos, responsabilidad, uso aceptable y licencia.',
  updated: '21 de octubre de 2026',
  contact: 'gymlab@gymlab.dev',
  sections: [
    {
      id: 'proposito',
      title: '1. Propósito de la app',
      paragraphs: [
        'GymLab es una aplicación de seguimiento de entrenamiento y fitness. Su finalidad es ayudarte a registrar tus sesiones, planificar rutinas y consultar información formativa sobre ejercicio, nutrición y recuperación.',
        'Toda la información y las rutinas que ofrece la aplicación tienen carácter informativo y educativo. No constituyen consejo médico, nutricional ni de salud, ni sustituyen la consulta a un profesional.',
      ],
    },
    {
      id: 'datos',
      title: '2. Tus datos y almacenamiento',
      paragraphs: [
        'GymLab es una aplicación **local-first**: todos tus datos (entrenos, rutinas, récords, peso corporal, medidas y preferencias) se guardan únicamente en tu dispositivo mediante almacenamiento local (IndexedDB).',
        'No disponemos de servidor, por lo que hoy no recopilamos, transmitimos ni compartimos tus datos personales con terceros. Al desinstalar la aplicación o borrar sus datos, toda la información se elimina por completo.',
      ],
    },
    {
      id: 'permisos',
      title: '3. Permisos del dispositivo',
      paragraphs: [
        'La app solicita permisos solo para las funciones que los necesitan: acceso al almacén de salud (Health Connect en Android, HealthKit en iOS) para leer pasos, notificaciones locales para los avisos de descanso y recordatorios, y cámara o galería cuando eliges una foto.',
        'Estos permisos se usan solo para los fines indicados y nunca se envían fuera del dispositivo. Puedes revocarlos en cualquier momento desde los ajustes de tu sistema.',
      ],
    },
    {
      id: 'responsabilidad',
      title: '4. Responsabilidad y alcance',
      paragraphs: [
        'GymLab no es un dispositivo médico. La aplicación no diagnostica, trata, cura ni previene ninguna condición médica, y sus contenidos no sustituyen la opinión de un profesional de la salud.',
        'Antes de empezar o modificar un programa de ejercicio, consulta a un médico o preparador cualificado. El uso de la app y de sus contenidos se realiza bajo tu propia responsabilidad.',
        'GymLab no se hace responsable de lesiones, daños o pérdidas derivadas del cumplimiento o la interpretación de los programas, rutinas o recomendaciones mostrados.',
      ],
    },
    {
      id: 'uso-aceptable',
      title: '5. Uso aceptable',
      paragraphs: [
        'Te comprometes a usar GymLab con fines personales y no comerciales, de forma legal y sin perjudicar a terceros.',
        'Está prohibido manipular los registros para engañar sistemas de recompensas, o alterar, descompilar o reproducir la aplicación sin autorización.',
      ],
    },
    {
      id: 'menores',
      title: '6. Menores de edad',
      paragraphs: [
        'El uso de GymLab está recomendado para personas de 14 años o más.',
        'Si eres menor de edad, usa la aplicación bajo la supervisión de un adulto o tutor legal.',
      ],
    },
    {
      id: 'licencia',
      title: '7. Licencia y propiedad intelectual',
      paragraphs: [
        'GymLab se distribuye como aplicación gratuita. Todo su contenido, marca y diseño son propiedad del desarrollador y no pueden reproducirse sin autorización.',
        'El modelo anatómico de la aplicación se basa en Z-Anatomy (BodyParts3D), distribuido bajo licencia CC BY-SA 4.0, tal y como se indica en los créditos de la app.',
      ],
    },
    {
      id: 'cambios',
      title: '8. Cambios en las condiciones',
      paragraphs: [
        'Nos reservamos el derecho de actualizar estas condiciones en cualquier momento. Cuando haya cambios relevantes, lo indicaremos dentro de la aplicación.',
        'El uso continuado de la app tras un cambio implica la aceptación de las nuevas condiciones.',
      ],
    },
    {
      id: 'contacto',
      title: '9. Contacto',
      paragraphs: [
        'Si tienes preguntas sobre estas condiciones, puedes escribirnos a {{contact}}.',
      ],
    },
  ],
};
