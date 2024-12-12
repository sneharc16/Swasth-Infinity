import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import en from './locales/en/translation.json';
import hi from './locales/hi/translation.json';

// Initialize i18next
i18n
  .use(LanguageDetector) // Detects user's language automatically
  .use(initReactI18next) // Connect i18next with React
  i18n.init({
    resources: {
      en: { translation: require('./locales/en/translation.json') },
      hi: { translation: require('./locales/hi/translation.json') },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    react: { useSuspense: false }, // Disable suspense if you're not using React Suspense
  });
  

export default i18n;
