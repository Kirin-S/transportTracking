import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
    .use(initReactI18next)
    .init({
      compatibilityJSON: 'v3',
      resources: {
          en: {
            translation: {
              "Settings Title": "Choose Language",
              "Cargo": "Cargo",
              "Passenger": "Passenger",
              "Spec": "Spec",
              "Filter": "Filter",
              "Apply": "Apply",
              "Category": "Category",
              "Transport": "Transport",
              "Driver": "Driver",
              "TS List": "List",
              "Map": "Map",
              "Settings": "Settings",
              "Driver Screen Title": "Driver Info",
              "Phone Number": "Phone number",
              "Call Button": "Call",
              "Message Button": "Message"
            }
          },
          ru: {
            translation: {
              "Settings Title": "Выберите язык",
              "Cargo": "Грузовой",
              "Passenger": "Пассажирский",
              "Spec": "Спец. Транспорт",
              "Filter": "Фильтр",
              "Apply": "Применить",
              "Category": "Категория",
              "Transport": "Транспорт",
              "Driver": "Водитель",
              "TS List": "Список",
              "Map": "Карта",
              "Settings": "Настройки",
              "Driver Screen Title": "Информация о водителе",
              "Phone Number": "Номер телефона",
              "Call Button": "Позвонить",
              "Message Button": "Написать"
            }
          }
      },
      lng: "en",
      fallbackLng: "en",

      interpolation: {
        escapeValue: false
      }
    });