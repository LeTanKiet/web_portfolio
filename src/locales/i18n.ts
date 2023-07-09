import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HEADER_EN from './en/header.json';
import HERO_SECTION_EN from './en/heroSection.json';
import STORY_EN from './en/story.json';
import PRODUCT_EN from './en/products.json';
import FOOTER_EN from './en/footer.json';
import HEADER_VI from './vi/header.json';
import HERO_SECTION_VI from './vi/heroSection.json';
import STORY_VI from './vi/story.json';
import PRODUCT_VI from './vi/products.json';
import FOOTER_VI from './vi/footer.json';
import CONTACT_EN from './en/contact.json';
import CONTACT_VI from './vi/contact.json';

const resources = {
  en: {
    translation: {
      header: HEADER_EN,
      hero_section: HERO_SECTION_EN,
      story: STORY_EN,
      product: PRODUCT_EN,
      contact: CONTACT_EN,
      footer: FOOTER_EN,
    },
  },
  vi: {
    translation: {
      header: HEADER_VI,
      hero_section: HERO_SECTION_VI,
      story: STORY_VI,
      product: PRODUCT_VI,
      contact: CONTACT_VI,
      footer: FOOTER_VI,
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
