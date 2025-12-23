/**
 * Reverses a string.
 *
 * @param {string} str The string to reverse.
 * @returns {string} Returns the reversed string.
 */
function reverseString(str) {
  if (typeof str !== 'string') {
    return '';
  }
  return str.split('').reverse().join('');
}

module.exports = reverseString;
