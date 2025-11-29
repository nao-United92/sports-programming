// src/other/string-utility-functions.js

/**
 * Truncates a string to a specified length and appends an ellipsis if it exceeds the length.
 *
 * @param {string} str The string to truncate.
 * @param {number} maxLength The maximum length of the string before truncation.
 * @returns {string} The truncated string.
 */
const truncate = (str, maxLength) => {
  if (typeof str !== 'string') {
    return '';
  }
  if (str.length <= maxLength) {
    return str;
  }
  return str.slice(0, maxLength) + '...';
};

module.exports = {
  truncate,
};
