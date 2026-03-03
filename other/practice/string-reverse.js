/**
 * Reverses a string.
 * @param {string} str
 * @returns {string} The reversed string.
 */
const reverseString = (str) => {
  if (typeof str !== 'string') return str;
  return str.split('').reverse().join('');
};

module.exports = reverseString;
