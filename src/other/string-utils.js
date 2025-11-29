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

/**
 * Converts a string to snake_case.
 *
 * @param {string} str The string to convert.
 * @returns {string} The snake_cased string.
 */
const toSnakeCase = (str) => {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }
  return str
    .replace(/\s+/g, '_') // Replace spaces with underscores
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1_$2') // Add underscore before uppercase letters
    .toLowerCase(); // Convert to lowercase
};

module.exports = {
  capitalize,
  truncate,
  toSnakeCase,
};