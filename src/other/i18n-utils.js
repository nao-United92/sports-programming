
/**
 * Formats a number according to the specified locale and options.
 * @param {number} number The number to format.
 * @param {string} [locale=navigator.language] The locale string (e.g., 'en-US', 'de-DE'). Defaults to browser language.
 * @param {object} [options] Intl.NumberFormat options.
 * @returns {string} The formatted number string.
 */
export function formatNumber(number, locale = navigator.language, options = {}) {
  try {
    return new Intl.NumberFormat(locale, options).format(number);
  } catch (e) {
    console.error('Error formatting number:', e);
    return String(number);
  }
}

/**
 * Formats a date according to the specified locale and options.
 * @param {Date} date The date to format.
 * @param {string} [locale=navigator.language] The locale string. Defaults to browser language.
 * @param {object} [options] Intl.DateTimeFormat options.
 * @returns {string} The formatted date string.
 */
export function formatDate(date, locale = navigator.language, options = {}) {
  try {
    return new Intl.DateTimeFormat(locale, options).format(date);
  } catch (e) {
    console.error('Error formatting date:', e);
    return date.toISOString();
  }
}

/**
 * Formats a number as a currency string.
 * @param {number} amount The amount to format.
 * @param {string} currency The ISO 4217 currency code (e.g., 'USD', 'EUR', 'JPY').
 * @param {string} [locale=navigator.language] The locale string. Defaults to browser language.
 * @returns {string} The formatted currency string.
 */
export function formatCurrency(amount, currency, locale = navigator.language) {
  try {
    const options = { style: 'currency', currency };
    return new Intl.NumberFormat(locale, options).format(amount);
  } catch (e) {
    console.error('Error formatting currency:', e);
    return `${amount} ${currency}`;
  }
}

/**
 * A simple translation helper.
 * @param {string} key The key to look up in the translations object.
 * @param {object} translations A nested object with languages as keys.
 * @param {string} fallbackLang The language to use if the browser's language is not found.
 * @returns {string} The translated string or the key itself if not found.
 */
export function getTranslation(key, translations, fallbackLang = 'en') {
  const lang = navigator.language.split('-')[0] || fallbackLang;
  const langTranslations = translations[lang] || translations[fallbackLang];
  return langTranslations ? langTranslations[key] || key : key;
}

/**
 * Returns the current browser's locale.
 * @returns {string} The locale string (e.g., 'en-US').
 */
export function getLocale() {
  return navigator.language;
}

/**
 * Returns the plural or singular form of a word based on a count.
 * @param {number} count The number to check for plurality.
 * @param {string} singular The singular form of the word.
 * @param {string} plural The plural form of the word.
 * @returns {string} The appropriate form of the word.
 */
export function pluralize(count, singular, plural) {
  return count === 1 ? singular : plural;
}

/**
 * Returns the primary language of the current browser.
 * @returns {string} The primary language string (e.g., 'en', 'ja').
 */
export function getBrowserLanguage() {
  return navigator.language.split('-')[0];
}

/**
 * Sets a translation for a given key and language.
 * @param {object} translations The translations object to modify.
 * @param {string} lang The language code (e.g., 'en', 'es').
 * @param {string} key The key for the translation.
 * @param {string} value The translated string.
 */
export function setTranslation(translations, lang, key, value) {
  if (!translations[lang]) {
    translations[lang] = {};
  }
  translations[lang][key] = value;
}
