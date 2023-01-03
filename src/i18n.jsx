import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import fi from "./assets/resources/fi.json"
import en from "./assets/resources/en.json"
i18n
  .use(initReactI18next)
  .init({
    returnObjects: true,
    lng: sessionStorage.getItem("lng"),
    debug: false,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources:{
      fi,
      en,
    }
    
  });

export default i18n;