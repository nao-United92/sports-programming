/**
 * Splits string into an array of its words.
 *
 * @param {string} str The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @returns {Array} Returns the words of string.
 */
function words(str, pattern) {
  if (pattern === undefined) {
    // Default pattern matches alphanumeric sequences
    const defaultPattern = /[a-zA-Z0-9]+/g;
    return str.match(defaultPattern) || [];
  }
  return str.match(pattern) || [];
}

module.exports = words;
