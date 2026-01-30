// other/practice/string-capitalize.js
/**
 * Capitalizes the first letter of a string.
 *
 * @param {string} str The string to capitalize.
 * @returns {string} The capitalized string.
 * @example
 *
 * stringCapitalize('hello');
 * // => 'Hello'
 *
 * stringCapitalize('world');
 * // => 'World'
 *
 * stringCapitalize('');
 * // => ''
 */
function stringCapitalize(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = stringCapitalize;
