import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// import Backend from "i18next-http-backend"; // *** added this ***
import Backend from "i18next-locize-backend"; // *** added this ***

i18n
  .use(Backend) // *** added this ***
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    // supportedLngs: ["en", "es"], // *** added this ***
    // ns: ['translations'],
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    saveMissing: true,
    // backend: {
    //     loadPath: `http://localhost:4000/locales/{{lng}}/{{ns}}.json`,
    backend: {
      projectId: '333b40b1-ea97-4250-9598-a9a160e24611',
      apiKey: 'aad29f38-e1ad-4a07-8668-6b423d67dfbe'
    }
    // },
    // resources: {
    //   en: {
    //     translations: {
    //       greeting: {
    //           hello: "Hello World!"
    //       }
    //     }
    //   },
      // es: {
      //   translations: {
      //     greeting: {
      //         hello: "Hola Papi!"
      //     }
      //   }
      // }
    // resources: {
    //   en: {
    //     translation: {
    //       learn: "Hello World!"
    //     }
    //   },
    //   bn: {
    //     translation: {
    //       learn: "হ্যালো বিশ্ব"
    //     }
    //   },
    // }
  });

export default i18n;