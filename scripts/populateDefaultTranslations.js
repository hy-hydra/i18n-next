// scripts/populateDefaultTranslations.js
const fs = require("fs");
const path = require("path");

const defaultLang = "zh";
const supportedLangs = ["zh", "en"]; // Add your supported languages here
const translationFile = "translation.json";
const localesDir = path.resolve(__dirname, "../public/locales");

function populateTranslations() {
  const defaultLangPath = path.join(localesDir, defaultLang, translationFile);
  const defaultTranslations = JSON.parse(
    fs.readFileSync(defaultLangPath, "utf-8")
  );

  supportedLangs.forEach((lang) => {
    // if (lang === defaultLang) return;

    const langPath = path.join(localesDir, lang, translationFile);
    let translations = {};

    if (fs.existsSync(langPath)) {
      translations = JSON.parse(fs.readFileSync(langPath, "utf-8"));
    }

    console.log(defaultTranslations);

    Object.keys(defaultTranslations).forEach((key) => {
      if (!translations[key]) {
        translations[key] = key;
      }
    });

    fs.writeFileSync(langPath, JSON.stringify(translations, null, 2));
  });
}

console.log("1111");

populateTranslations();
