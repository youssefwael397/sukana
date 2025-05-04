import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend) // Load translations from server or local files
  .use(LanguageDetector) // Detect language from localStorage, cookies, or browser settings
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    fallbackLng: 'en', // Default language
    supportedLngs: ['en', 'ar', 'de'], // List of supported languages
    detection: {
      order: ['path', 'localStorage', 'navigator'], // Detect language via URL path, localStorage, then browser settings
      caches: ['localStorage'], // Cache the detected language in localStorage
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Path to translation files
    },
    react: {
      useSuspense: false, // Disable suspense for server-side rendering
    },
  });

export default i18n;


