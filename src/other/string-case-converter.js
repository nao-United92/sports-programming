/**
 * Converts a string from snake_case or kebab-case to camelCase.
 * @param {string} str The input string.
 * @returns {string} The camelCased string.
 */
const toCamelCase = (str) => {
  if (typeof str !== 'string' || !str) {
    return '';
  }
  return str.replace(/([-_][a-z])/g, (group) =>
    group.toUpperCase().replace('-', '').replace('_', '')
  );
};

/**
 * Converts a string from camelCase to snake_case.
 * @param {string} str The input string.
 * @returns {string} The snake_cased string.
 */
const toSnakeCase = (str) => {
  if (typeof str !== 'string' || !str) {
    return '';
  }
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
};

module.exports = { toCamelCase, toSnakeCase };
