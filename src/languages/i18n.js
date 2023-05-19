import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import English from '../languages/en.json';
import Spanish from '../languages/es.json';
import Italian from '../languages/it.json';
import Veneto from '../languages/veneto.json';
import Russian from '../languages/ru.json';
import Ukranian from '../languages/ua.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: English,
      },
      es: {
        translation: Spanish,
      },
      it: {
        translation: Italian,
      },
      veneto: {
        translation: Veneto,
      },
      ru: {
        translation: Russian,
      },
      ua: {
        translation: Ukranian,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
