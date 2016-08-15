/* eslint linebreak-style: ["error", "unix"] */
/* eslint linebreak-style: ["error", "windows"] */

import i18next from 'i18next';
import en from './en.js';
import ja from './ja.js';

i18next.init({
  lng: 'en',
  resources: {
    en: en,
    ja: ja
  }
});

export default i18next;
