/**
 * Converts string to kebab case.
 *
 * @param {string} str The string to convert.
 * @returns {string} Returns the kebab cased string.
 */
export const kebabCase = (str) => {
  if (!str) return '';
  return str
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2')
    .toLowerCase();
};

/**
 * Converts string to snake case.
 *
 * @param {string} str The string to convert.
 * @returns {string} Returns the snake cased string.
 */
export const snakeCase = (str) => {
  if (!str) return '';
  return str
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1_$2')
    .toLowerCase();
};