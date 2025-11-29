/**
 * Capitalizes the first letter of a string.
 *
 * @param {string} str The string to capitalize.
 * @returns {string} The capitalized string.
 */
const capitalize = (str) => {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

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
  capitalize,
  truncate,
};