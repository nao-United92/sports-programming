// src/other/string-manipulation-utils.js

/**
 * Reverses a given string.
 *
 * @param {string} str The string to reverse.
 * @returns {string} The reversed string.
 */
const reverseString = (str) => {
  if (typeof str !== 'string') {
    return '';
  }
  return str.split('').reverse().join('');
};

module.exports = {
  reverseString,
};