/**
 * Converts a string to snake_case.
 * 
 * @param {string} str - The string to convert.
 * @returns {string} The snake_cased string.
 */
function toSnakeCase(str) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
    .replace(/[\s-]+/g, '_')
    .toLowerCase();
}

module.exports = toSnakeCase;
