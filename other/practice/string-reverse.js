// other/practice/string-reverse.js
/**
 * Reverses a given string.
 *
 * @param {string} str The string to reverse.
 * @returns {string} The reversed string.
 * @example
 *
 * stringReverse('hello');
 * // => 'olleh'
 *
 * stringReverse('world');
 * // => 'dlrow'
 *
 * stringReverse('');
 * // => ''
 */
function stringReverse(str) {
  if (typeof str !== 'string') {
    return ''; // Or throw an error, depending on desired behavior
  }
  return str.split('').reverse().join('');
}

module.exports = stringReverse;
