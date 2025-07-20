/**
 * Capitalizes the first letter of a string.
 *
 * @param {string} str
 * @returns {string}
 */
export function capitalize(str) {
  if (typeof str !== 'string' || !str) {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Truncates a string to a specified length, appending an ellipsis if truncated.
 *
 * @param {string} str
 * @param {number} maxLength
 * @returns {string}
 */
export function truncate(str, maxLength) {
  if (typeof str !== 'string' || str.length <= maxLength) {
    return str;
  }
  return str.slice(0, maxLength) + '...';
}