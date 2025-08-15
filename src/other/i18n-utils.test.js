
import { formatNumber, formatDate, formatCurrency, getTranslation, getLocale, pluralize, getBrowserLanguage, setTranslation, formatRelativeTime, formatList } from './i18n-utils';

describe('i18n-utils', () => {
  // Mock navigator.language for consistent testing
  beforeAll(() => {
    Object.defineProperty(navigator, 'language', {
      value: 'en-US',
      configurable: true,
    });
  });

  describe('formatNumber', () => {
    it('should format a number for en-US locale', () => {
      expect(formatNumber(123456.789)).toBe('123,456.789');
    });

    it('should format a number for de-DE locale', () => {
      expect(formatNumber(123456.789, 'de-DE')).toBe('123.456,789');
    });

    it('should handle options', () => {
      const options = { minimumFractionDigits: 2, maximumFractionDigits: 2 };
      expect(formatNumber(123.4, 'en-US', options)).toBe('123.40');
    });
  });

  describe('formatDate', () => {
    const date = new Date('2023-10-27T10:00:00Z');

    it('should format a date for en-US locale', () => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      expect(formatDate(date, 'en-US', options)).toBe('October 27, 2023');
    });

    it('should format a date for ja-JP locale', () => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      expect(formatDate(date, 'ja-JP', options)).toBe('2023年10月27日');
    });
  });

  describe('formatCurrency', () => {
    it('should format USD currency for en-US', () => {
      expect(formatCurrency(1234.56, 'USD')).toBe('$1,234.56');
    });

    it('should format JPY currency for ja-JP', () => {
      // Note: Non-breaking space might be used by Intl, so we use a regex
      expect(formatCurrency(123456, 'JPY', 'ja-JP')).toMatch(/￥123,456|\u00A5123,456/);
    });

    it('should format EUR currency for de-DE', () => {
      // Note: Non-breaking space might be used by Intl, so we use a regex
      expect(formatCurrency(1234.56, 'EUR', 'de-DE')).toMatch(/1.234,56\s€/);
    });
  });

  describe('getTranslation', () => {
    const translations = {
      en: {
        greeting: 'Hello',
        farewell: 'Goodbye',
      },
      es: {
        greeting: 'Hola',
      },
    };

    it('should return the correct translation for the browser language', () => {
      Object.defineProperty(navigator, 'language', { value: 'es-ES', configurable: true });
      expect(getTranslation('greeting', translations, 'en')).toBe('Hola');
    });

    it('should return the fallback translation if the key is missing', () => {
      Object.defineProperty(navigator, 'language', { value: 'es-ES', configurable: true });
      expect(getTranslation('farewell', translations, 'en')).toBe('Goodbye');
    });

    it('should return the fallback translation if the language is missing', () => {
      Object.defineProperty(navigator, 'language', { value: 'fr-FR', configurable: true });
      expect(getTranslation('greeting', translations, 'en')).toBe('Hello');
    });

    it('should return the key if no translation is found', () => {
      Object.defineProperty(navigator, 'language', { value: 'fr-FR', configurable: true });
      expect(getTranslation('nonexistent', translations, 'en')).toBe('nonexistent');
    });
  });

  describe('getLocale', () => {
    it('should return the current browser locale', () => {
      Object.defineProperty(navigator, 'language', { value: 'fr-CA', configurable: true });
      expect(getLocale()).toBe('fr-CA');
    });
  });

  describe('pluralize', () => {
    it('should return the singular form for count 1', () => {
      expect(pluralize(1, 'apple', 'apples')).toBe('apple');
    });

    it('should return the plural form for count other than 1', () => {
      expect(pluralize(0, 'apple', 'apples')).toBe('apples');
      expect(pluralize(2, 'apple', 'apples')).toBe('apples');
      expect(pluralize(10, 'apple', 'apples')).toBe('apples');
    });
  });

  describe('getBrowserLanguage', () => {
    test('should return the primary language of the browser', () => {
      Object.defineProperty(navigator, 'language', { value: 'en-US', configurable: true });
      expect(getBrowserLanguage()).toBe('en');

      Object.defineProperty(navigator, 'language', { value: 'ja-JP', configurable: true });
      expect(getBrowserLanguage()).toBe('ja');
    });
  });

  describe('setTranslation', () => {
    test('should set a translation for a given key and language', () => {
      const translations = {
        en: { greeting: 'Hello' },
      };
      setTranslation(translations, 'es', 'greeting', 'Hola');
      expect(translations.es.greeting).toBe('Hola');
    });

    test('should create language object if it does not exist', () => {
      const translations = {};
      setTranslation(translations, 'fr', 'hello', 'Bonjour');
      expect(translations.fr.hello).toBe('Bonjour');
    });
  });

  describe('formatRelativeTime', () => {
    it('should format a relative time in the past', () => {
      expect(formatRelativeTime(-1, 'day', 'en-US')).toBe('1 day ago');
    });

    it('should format a relative time in the future', () => {
      expect(formatRelativeTime(5, 'hour', 'en-US')).toBe('in 5 hours');
    });
  });

  describe('formatList', () => {
    it('should format a list with a conjunction', () => {
      const list = ['apples', 'bananas', 'oranges'];
      expect(formatList(list, 'en-US', { type: 'conjunction' })).toBe('apples, bananas, and oranges');
    });

    it('should format a list with a disjunction', () => {
      const list = ['apples', 'bananas', 'oranges'];
      expect(formatList(list, 'en-US', { type: 'disjunction' })).toBe('apples, bananas, or oranges');
    });
  });
});
