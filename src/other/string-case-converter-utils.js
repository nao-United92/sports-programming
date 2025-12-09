/**
 * Converts a string to camelCase.
 * Handles snake_case, kebab-case, and space separated strings.
 * @param {string} str The string to convert.
 * @returns {string} The camelCased string.
 */
const toCamelCase = (str) => {
  if (typeof str !== 'string' || !str) {
    return '';
  }
  return str
    .replace(/^[_.\- ]+/, '')
    .toLowerCase()
    .replace(/[_.\- ]+(\w|$)/g, (m, p1) => p1.toUpperCase())
    .replace(/\s+/g, '');
};

/**
 * Converts a string to snake_case.
 * Handles camelCase, kebab-case, and space separated strings.
 * @param {string} str The string to convert.
 * @returns {string} The snake_cased string.
 */
const toSnakeCase = (str) => {
  if (typeof str !== 'string' || !str) {
    return '';
  }
  return str
    .replace(/([A-Z])/g, '_$1')
    .replace(/[\s\-]+/g, '_')
    .toLowerCase()
    .replace(/^_+|_+$/g, '');
};

module.exports = {
  toCamelCase,
  toSnakeCase,
};