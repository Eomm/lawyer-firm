import { en } from './en';
import { it } from './it';

export const translations = {
  en,
  it,
};

export type Language = keyof typeof translations;

export function getTranslations(lang: Language) {
  return translations[lang] || translations.it;
}

export function getStaticPaths() {
  return [{ params: { lang: 'en' } }, { params: { lang: 'it' } }];
}
