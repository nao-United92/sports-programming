/**
 * Reverses the order of words in a given string.
 * Words are separated by spaces.
 *
 * @param {string} str The input string.
 * @returns {string} The string with the order of words reversed.
 */
export function reverseWords(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string for the first argument.');
  }
  return str.split(' ').reverse().join(' ');
}
