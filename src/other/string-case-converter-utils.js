/**
 * Converts a string to camelCase.
 *
 * @param {string} str The string to convert.
 * @returns {string} The camelCased string.
 */
export const toCamelCase = (str) => {
  if (str === null || str === undefined) {
    return '';
  }
  return String(str)
    .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, '')
    .replace(/([-_ ]+)([a-zA-Z0-9])/g, (g) => g.toUpperCase())
    .replace(/[-_ ]/g, '');
};

/**
 * Converts a string to snake_case.
 *
 * @param {string} str The string to convert.
 * @returns {string} The snake_cased string.
 */
export const toSnakeCase = (str) => {
  if (str === null || str === undefined) {
    return '';
  }
  return String(str)
    .replace(/\s+/g, '_')
    .replace(/([A-Z])/g, '_$1')
    .toLowerCase();
};
