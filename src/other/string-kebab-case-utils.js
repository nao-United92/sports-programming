/**
 * Converts `string` to [kebab case](https://en.wikipedia.org/wiki/Letter_case#Kebab_case).
 *
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the kebab cased string.
 */
export const kebabCase = (string) => {
  if (typeof string !== 'string' || !string) {
    return '';
  }
  return string
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()
    .replace(/^-+|-+$/g, '');
};
