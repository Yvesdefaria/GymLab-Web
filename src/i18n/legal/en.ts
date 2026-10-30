import type { LegalDoc } from './es';

// English legal documents — en-GB courtesy translation of the approved Spanish.
// Section order and numbering mirror the reference version; defined terms stay
// stable across sections.
export const privacy: LegalDoc = {
  title: 'Privacy Policy',
  description:
    'GymLab privacy policy: what data the app handles, where it is stored and what your rights are.',
  updated: '29 October 2026',
  contact: 'gymlab@gymlab.dev',
  sections: [
    {
      id: 'controller',
      title: '1. Data controller',
      paragraphs: [
        'GymLab (“the application”) is a training and fitness tracking app, developed independently and published through the Google Play Store and the Apple App Store.',
        'Contact: {{contact}}. This address is the contact point for privacy questions and for data erasure requests.',
      ],
    },
    {
      id: 'data',
      title: '2. Data GymLab handles',
      paragraphs: [
        'GymLab is a **local-first** application: the vast majority of your data is stored only on your device, using local storage (IndexedDB).',
      ],
      list: [
        'Training data (sets, reps, weights, routines, records, body weight, measurements and calories) is stored on your device and is not sent to GymLab servers.',
        'GymLab requires no user account: we do not build profiles from your personal data, and we do not identify you as a person.',
      ],
    },
    {
      id: 'purchases',
      title: '3. In-app purchases',
      paragraphs: [
        'GymLab is distributed free of charge. You can make an in-app purchase to remove advertising, processed in full by Google Play Billing (Android) or the relevant store (iOS).',
        'The stores handle payment: GymLab does not receive or store your card details, billing details or purchase history beyond what is needed to enable the feature on your device.',
        'In-app purchases will be enabled in future versions; until then, this section does not apply.',
      ],
    },
    {
      id: 'advertising',
      title: '4. Advertising',
      paragraphs: [
        'To offer the application free of charge, GymLab may in future show ads provided by Google AdMob. The AdMob SDK may collect and share with third parties (advertisers and ad networks) data such as the Android advertising ID, app usage data and approximate location where available.',
        'That data is handled under Google’s Privacy Policy, under Google’s responsibility. You can reset your advertising ID or opt out of personalised advertising in your device settings.',
        'In the European Union and the European Economic Area, personalised advertising is shown only with your prior consent (Google UMP / IAB TCF), in line with the GDPR.',
        'Advertising will be enabled in future versions; until then, this section does not apply.',
      ],
    },
    {
      id: 'analytics',
      title: '5. Measurement and analytics',
      paragraphs: [
        'To understand how the application is used and to fix bugs, GymLab may send pseudonymous usage data (screens visited and features used) and error reports to our analytics providers Sentry and PostHog.',
        'The submission contains usage and error data only: it never includes your personal data, your weight, your workouts or any other information from the application.',
        'Telemetry is off by default: it is only sent if you enable it in Settings.',
        'You can turn it off at any time from Settings › Pseudonymous usage data. If you turn it off, no further information is sent.',
      ],
    },
    {
      id: 'health',
      title: '6. Health and physical activity (Health Connect and HealthKit)',
      paragraphs: [
        'GymLab reads your daily step count from your device’s health store: Health Connect on Android and HealthKit on iOS. This is the only health data it accesses; it does not read heart rate, sleep, weight or any other clinical record.',
        'The reading happens on your device and the result is stored only in your local storage (IndexedDB). It is not sent to GymLab servers, not shared with third parties, and not used for advertising or to build profiles. It is not sold or transferred.',
        'GymLab does not use this data for any purpose other than showing you your steps, streaks and achievements.',
        'The permission is requested through the system dialog, and you can revoke it at any time from Health Connect (Android) or the system settings (iOS). If you revoke it, the app stops reading steps and everything else keeps working; steps already stored stay on your device, and you can delete them from the app.',
        'On Android, GymLab also requests background health read access so it can update the step widget while the app is closed. That permission is granted and revoked from Health Connect.',
      ],
    },
    {
      id: 'permissions',
      title: '7. Device permissions',
      paragraphs: [
        'GymLab requests only the permissions its features need: access to the health store (Health Connect on Android, HealthKit on iOS) to read steps, local notifications for rest alerts and reminders, and camera or gallery access only when you choose a photo.',
        'None of these permissions sends data off the device. You can revoke them at any time in your system settings: the app keeps working, except for the specific feature that depends on the permission.',
      ],
    },
    {
      id: 'security',
      title: '8. Security and retention',
      paragraphs: [
        'As a local-first application, your training data is not transmitted to or stored on GymLab servers, which reduces its exposure to outside access.',
        'Keeping this data is up to you: you can review, export or delete it at any time from the application or the system. It is deleted in full when you uninstall GymLab or clear the app’s data.',
      ],
    },
    {
      id: 'rights',
      title: '9. Your rights',
      paragraphs: [
        'If you live in the European Union, you have the right to request access to your data, rectification, erasure, objection, withdrawal of consent and portability.',
        'Because your training data lives on your device, you can review, export or delete it yourself at any time from the application.',
        'For data handled by third-party platforms (advertising and analytics, once enabled), you must exercise your rights with the relevant provider.',
        'For any question or complaint about this policy, write to {{contact}}. You also have the right to lodge a complaint with your data protection supervisory authority.',
      ],
    },
    {
      id: 'children',
      title: '10. Children',
      paragraphs: [
        'GymLab is recommended for people aged 14 and over. If you are under age, use the application under the supervision of an adult or legal guardian.',
        'We do not knowingly collect information from children under 13.',
      ],
    },
    {
      id: 'changes',
      title: '11. Changes to this policy',
      paragraphs: [
        'We may update this privacy policy at any time. When there are significant changes, we will say so inside the application.',
        'The last updated date always appears at the top of this document, and the version in force is the one published on this page.',
      ],
    },
    {
      id: 'contact',
      title: '12. Contact',
      paragraphs: [
        'To exercise your rights or settle any privacy question, write to {{contact}}. We will reply within 30 days at most.',
      ],
    },
  ],
};

export const terms: LegalDoc = {
  title: 'Terms and Conditions',
  description:
    'GymLab terms of use: purpose, data, permissions, liability, acceptable use and licence.',
  updated: '21 October 2026',
  contact: 'gymlab@gymlab.dev',
  sections: [
    {
      id: 'purpose',
      title: '1. Purpose of the app',
      paragraphs: [
        'GymLab is a training and fitness tracking app. Its purpose is to help you log your sessions, plan routines and look up educational information about exercise, nutrition and recovery.',
        'All the information and routines the application offers are informative and educational. They are not medical, nutritional or health advice, and they do not replace a consultation with a professional.',
      ],
    },
    {
      id: 'data',
      title: '2. Your data and storage',
      paragraphs: [
        'GymLab is a **local-first** application: all your data (workouts, routines, records, body weight, measurements and preferences) is stored only on your device, using local storage (IndexedDB).',
        'We run no server, so today we do not collect, transmit or share your personal data with third parties. When you uninstall the application or clear its data, all the information is deleted in full.',
      ],
    },
    {
      id: 'permissions',
      title: '3. Device permissions',
      paragraphs: [
        'The app requests permissions only for the features that need them: access to the health store (Health Connect on Android, HealthKit on iOS) to read steps, local notifications for rest alerts and reminders, and camera or gallery access when you choose a photo.',
        'These permissions are used only for the purposes stated, and nothing is ever sent off the device. You can revoke them at any time in your system settings.',
      ],
    },
    {
      id: 'liability',
      title: '4. Liability and scope',
      paragraphs: [
        'GymLab is not a medical device. The application does not diagnose, treat, cure or prevent any medical condition, and its content does not replace the opinion of a health professional.',
        'Before starting or changing an exercise programme, consult a doctor or a qualified trainer. You use the app and its content at your own risk.',
        'GymLab is not liable for injuries, damage or loss arising from following or interpreting the programmes, routines or recommendations shown.',
      ],
    },
    {
      id: 'acceptable-use',
      title: '5. Acceptable use',
      paragraphs: [
        'You agree to use GymLab for personal, non-commercial purposes, lawfully and without harming third parties.',
        'You must not tamper with records to mislead reward systems, or alter, decompile or reproduce the application without permission.',
      ],
    },
    {
      id: 'children',
      title: '6. Children',
      paragraphs: [
        'GymLab is recommended for people aged 14 and over.',
        'If you are under age, use the application under the supervision of an adult or legal guardian.',
      ],
    },
    {
      id: 'licence',
      title: '7. Licence and intellectual property',
      paragraphs: [
        'GymLab is distributed as a free application. All its content, brand and design are the property of the developer and may not be reproduced without permission.',
        'The anatomical model in the application is based on Z-Anatomy (BodyParts3D), distributed under the CC BY-SA 4.0 licence, as stated in the app credits.',
      ],
    },
    {
      id: 'changes',
      title: '8. Changes to the terms',
      paragraphs: [
        'We reserve the right to update these terms at any time. When there are significant changes, we will say so inside the application.',
        'Continuing to use the app after a change means you accept the new terms.',
      ],
    },
    {
      id: 'contact',
      title: '9. Contact',
      paragraphs: [
        'If you have questions about these terms, you can write to {{contact}}.',
      ],
    },
  ],
};
