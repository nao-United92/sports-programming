// src/other/string-utility-advanced.js

/**
 * Capitalizes the first letter of each word in a string.
 *
 * @param {string} str The input string.
 * @returns {string} The string with the first letter of each word capitalized.
 */
const capitalizeWords = (str) => {
  if (typeof str !== 'string') {
    return '';
  }
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

module.exports = {
  capitalizeWords,
};
