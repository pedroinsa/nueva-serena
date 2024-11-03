import i18n from "i18next";
import { initReactI18next, } from "react-i18next";
import es from "../languages/es/global.json"
import en from "../languages/en/global.json"

i18n.use(initReactI18next).init({

    resources: {
        es: {
            translation: es
        },

        en: {
            translation: en
        }

    },
    lng: localStorage.getItem("lang") || "es", // if you're using a language detector, do not define the lng option
    fallbackLng: "es",

    interpolation: {
        escapeValue: false
    }
});

export default i18n