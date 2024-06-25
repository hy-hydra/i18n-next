// i18next-scanner.config.js
const fs = require("fs");
const path = require("path");

function getTranslationKey(ns, value) {
  // Optionally, customize this function to generate the key you want
  return value;
}

module.exports = {
  input: [
    "src/**/*.{js,jsx}", // Adjust this glob pattern to match your project structure
  ],
  output: "",
  options: {
    debug: true,
    func: {
      list: ["i18next.t", "i18n.t", "t"],
      extensions: [".js", ".jsx"],
    },
    trans: {
      component: "Trans",
      i18nKey: "i18nKey",
      extensions: [".js", ".jsx"],
      fallbackKey: getTranslationKey,
    },
    lngs: ["zh", "en"], // Add your supported languages here
    ns: ["translation"],
    defaultLng: "zh", // Set Chinese as the default language
    defaultNs: "translation",
    resource: {
      loadPath: "public/locales/{{lng}}/{{ns}}.json",
      savePath: "public/locales/{{lng}}/{{ns}}.json",
      jsonIndent: 2,
      lineEnding: "\n",
    },
    keySeparator: false, // We use content as keys
    nsSeparator: false,
  },
};
