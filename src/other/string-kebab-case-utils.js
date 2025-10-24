/**
 * Converts `string` to kebab case.
 *
 * @param {string} str The string to convert.
 * @returns {string} Returns the kebab cased string.
 */
export const kebabCase = (str) => {
  if (typeof str !== 'string') {
    return '';
  }

  return str
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .toLowerCase();
};