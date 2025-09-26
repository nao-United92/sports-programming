/**
 * Splits `string` into an array of its words.
 *
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @returns {Array} Returns the words of `string`.
 */
function words(string, pattern) {
  if (typeof string !== 'string' || string.length === 0) {
    return [];
  }
  if (pattern === undefined) {
    return string.match(/[a-zA-Z0-9]+/g) || [];
  }
  return string.match(pattern) || [];
}

module.exports = { words };