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
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''))
    .replace(/^(.)/, (c) => c.toLowerCase());
};

module.exports = { toCamelCase };