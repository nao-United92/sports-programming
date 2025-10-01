/**
 * Converts a string to camelCase.
 *
 * @param {string} str The string to convert.
 * @returns {string} Returns the camelCased string.
 */
export const toCamelCase = (str) => {
  if (typeof str !== 'string' || !str) {
    return '';
  }
  return str.replace(/([-_][a-z])/ig, ($1) => {
    return $1.toUpperCase()
      .replace('-', '')
      .replace('_', '');
  });
};

/**
 * Converts a string to snake_case.
 *
 * @param {string} str The string to convert.
 * @returns {string} Returns the snake_cased string.
 */
export const toSnakeCase = (str) => {
  if (typeof str !== 'string' || !str) {
    return '';
  }
  return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
};