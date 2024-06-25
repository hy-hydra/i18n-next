// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["zh", "en"], // Add your supported languages here
    fallbackLng: "zh", // Set Chinese as the default language
    debug: true,
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
