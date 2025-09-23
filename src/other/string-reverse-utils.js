/**
 * Reverses a given string.
 *
 * @param {string} str The string to reverse.
 * @returns {string} The reversed string.
 */
export function reverseString(str) {
  if (typeof str !== 'string') {
    throw new Error('Expected a string argument.');
  }
  return str.split('').reverse().join('');
}
