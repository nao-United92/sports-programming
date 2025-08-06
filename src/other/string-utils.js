
/**
 * Truncates a string to a specified length, appending an ellipsis if truncated.
 *
 * @param {string} str The string to truncate.
 * @param {number} maxLength The maximum length of the string.
 * @returns {string} The truncated string.
 */
export const truncateString = (str, maxLength) => {
  if (typeof str !== 'string' || typeof maxLength !== 'number' || maxLength < 0) {
    return '';
  }
  if (str.length <= maxLength) {
    return str;
  }
  return str.substring(0, maxLength) + '...';
};

/**
 * Capitalizes the first letter of a string.
 *
 * @param {string} str The string to capitalize.
 * @returns {string} The string with the first letter capitalized.
 */
export const capitalizeFirstLetter = (str) => {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};
