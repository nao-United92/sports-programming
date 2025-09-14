/**
 * Converts a string to snake_case.
 *
 * @param {string} str The string to convert.
 * @returns {string} Returns the snake_cased string.
 */
const snakeCase = (str) => {
  if (typeof str !== 'string') {
    return '';
  }
  return str
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '_');
};

export { snakeCase };