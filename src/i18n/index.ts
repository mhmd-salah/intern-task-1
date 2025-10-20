import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// استيراد ملفات اللغة
import commonEn from "./locales/en/common.json";
import commonAr from "./locales/ar/common.json";
import homeEn from "./locales/en/home.json";
import homeAr from "./locales/ar/home.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: commonEn,
        home: homeEn,
      },
      ar: {
        common: commonAr,
        home: homeAr,
      },
    },
    lng: "en",
    fallbackLng: "en",
    debug: false,
    ns: ["common", "home"], // أسماء النيم سبيس
    defaultNS: "common",
    interpolation: {
      escapeValue: false, // React بالفعل بيهتم بالـ XSS
    },
  });

i18n.on("languageChanged", (lng) => {
  document.dir = lng === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = lng;
});

export default i18n;
