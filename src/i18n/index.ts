import { en } from './locales/en';
import { ru } from './locales/ru';
import type { SupportedLanguage, TranslationSchema } from './schema';

export type { SupportedLanguage, TranslationSchema, TranslationSchema as Translations } from './schema';
export { en, ru };

export const translations: Record<SupportedLanguage, TranslationSchema> = {
  en,
  ru,
};

export function getTranslations(lang: SupportedLanguage = 'en'): TranslationSchema {
  return translations[lang] || translations.en;
}
