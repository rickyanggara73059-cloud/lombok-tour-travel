import { Language } from '../types';

export function getLangText<T>(
  record: Record<string, T> | undefined | null,
  lang: Language,
  fallbackLang: string = 'en'
): T {
  if (!record) return '' as unknown as T;
  if (record[lang]) return record[lang];
  if (record[fallbackLang]) return record[fallbackLang];
  if (record['id']) return record['id'];
  const values = Object.values(record);
  if (values.length > 0) return values[0];
  return '' as unknown as T;
}

export function getLangList(
  record: Record<string, string[]> | undefined | null,
  lang: Language,
  fallbackLang: string = 'en'
): string[] {
  if (!record) return [];
  if (record[lang] && Array.isArray(record[lang])) return record[lang];
  if (record[fallbackLang] && Array.isArray(record[fallbackLang])) return record[fallbackLang];
  if (record['id'] && Array.isArray(record['id'])) return record['id'];
  const values = Object.values(record);
  if (values.length > 0 && Array.isArray(values[0])) return values[0];
  return [];
}
