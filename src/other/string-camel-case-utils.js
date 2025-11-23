/**
 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/Camel_case).
 *
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 */
export const camelCase = (string) => {
  if (typeof string !== 'string' || !string) {
    return '';
  }
  const words = string.match(/[a-zA-Z0-9]+/g) || [];
  return words
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
};
