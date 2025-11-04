
// This implementation is inspired by lodash, for robust word detection.
const words = (str) => str.match(/[A-Z]{2,}(?=[A-Z][a-z]+|[0-9])|[A-Z]?[a-z]+|[A-Z]+|[0-9]+/g) || [];

/**
 * Converts `string` to [snake case](https://en.wikipedia.org/wiki/Snake_case).
 *
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the snake cased string.
 */
export const toSnakeCase = (string = '') => {
  if (string === null || string === undefined) return '';
  return words(String(string))
    .map(word => word.toLowerCase())
    .join('_');
};
