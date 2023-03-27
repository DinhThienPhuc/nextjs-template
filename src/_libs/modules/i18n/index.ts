import {
  Trans,
  Translation,
  initReactI18next,
  useTranslation,
  withTranslation,
} from "react-i18next";

import { IObject } from "@iris/utils";
import i18next from "i18next";

// import enTranslation from "./locales/en.json";
// import viTranslation from "./locales/vi.json";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const initI18n = (resources: IObject<any>, defaultLanguage = "en") => {
  i18next
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources,
      lng: defaultLanguage, // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
      // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
      // if you're using a language detector, do not define the lng option
      interpolation: {
        escapeValue: false, // react already safes from xss
      },
      fallbackLng: defaultLanguage,
    });
};

const i18n = {
  i18next,
  initI18n,
  Trans,
  Translation,
  useTranslation,
  withTranslation,
};

export default i18n;
