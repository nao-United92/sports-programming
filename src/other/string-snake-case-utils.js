/**
 * Converts `string` to snake case.
 *
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the snake cased string.
 */
function snakeCase(string) {
  if (typeof string !== 'string' || string.length === 0) {
    return '';
  }
  return string
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/\s+/g, '_')
    .toLowerCase();
}

module.exports = { snakeCase };
