
// This implementation is inspired by lodash, for robust word detection.
const words = (str) => str.match(/[A-Z]{2,}(?=[A-Z][a-z]+|[0-9])|[A-Z]?[a-z]+|[A-Z]+|[0-9]+/g) || [];

/**
 * Converts `string` to [kebab case](https://en.wikipedia.org/wiki/Kebab_case).
 *
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the kebab cased string.
 */
export const toKebabCase = (string = '') => {
  if (string === null || string === undefined) return '';
  return words(String(string))
    .map(word => word.toLowerCase())
    .join('-');
};
