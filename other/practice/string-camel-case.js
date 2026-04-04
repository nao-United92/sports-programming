/**
 * Converts a string to camelCase.
 * 
 * @param {string} str - The string to convert.
 * @returns {string} The camelCased string.
 */
function toCamelCase(str) {
  return str
    .replace(/[_-]+(.)?/g, (_, c) => c ? c.toUpperCase() : '')
    .replace(/^\w/, c => c.toLowerCase());
}

module.exports = toCamelCase;
