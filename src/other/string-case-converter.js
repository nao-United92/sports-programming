/**
 * Converts a string to snake_case.
 * Handles camelCase, PascalCase, and strings with acronyms.
 *
 * @param {string} str The input string.
 * @returns {string} The snake_cased string.
 */
const toSnakeCase = (str) => {
  if (!str) return '';
  return str
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
    .replace(/([a-z\d])([A-Z])/g, '$1_$2')
    .toLowerCase();
};

/**
 * Converts a string to camelCase.
 * Handles snake_case and kebab-case.
 *
 * @param {string} str The input string.
 * @returns {string} The camelCased string.
 */
const toCamelCase = (str) => {
  if (!str) return '';
  return str.replace(/([-_])([a-z])/ig, (match, delimiter, char, offset) => {
    if (offset === 0) {
      return `${delimiter}${char}`;
    }
    return char.toUpperCase();
  });
};

module.exports = { toSnakeCase, toCamelCase };