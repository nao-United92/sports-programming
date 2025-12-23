/**
 * Converts `string` to camel case.
 *
 * @param {string} str The string to convert.
 * @returns {string} Returns the camel cased string.
 */
function camelCase(str) {
  if (typeof str !== 'string') {
    return '';
  }
  return str.replace(/[^a-zA-Z0-9]+(.)?/g, (match, chr) => chr ? chr.toUpperCase() : '').replace(/^./, (match) => match.toLowerCase());
}

module.exports = camelCase;