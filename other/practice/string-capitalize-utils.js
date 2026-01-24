/**
 * Capitalizes the first letter of a string.
 *
 * @param {string} str The string to capitalize.
 * @returns {string} The capitalized string.
 */
function capitalize(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string for the input.');
  }
  if (str.length === 0) {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default capitalize;