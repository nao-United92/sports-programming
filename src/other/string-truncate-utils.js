/**
 * Truncates a string up to a specified length.
 *
 * @param {string} str The string to truncate.
 * @param {number} num The maximum length of the string.
 * @returns {string} The truncated string.
 */
export const truncate = (str, num) => {
  if (str.length <= num) {
    return str;
  }
    if (num < 3) {
    return str.slice(0, num) + '...';
  }
  return str.slice(0, num - 3) + '...';
};