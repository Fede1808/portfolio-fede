import es from './es.json';
import en from './en.json';

export type Lang = 'es' | 'en';

const translations: Record<Lang, Record<string, unknown>> = { es, en };

export function t(key: string, lang: Lang): string {
  const keys = key.split('.');
  let value: unknown = translations[lang];
  for (const k of keys) {
    if (typeof value === 'object' && value !== null) {
      value = (value as Record<string, unknown>)[k];
    } else {
      return key;
    }
  }
  return typeof value === 'string' ? value : key;
}

export function getLanguageFromURL(url: URL): Lang {
  return url.pathname.startsWith('/en') ? 'en' : 'es';
}
