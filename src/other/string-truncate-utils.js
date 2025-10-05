
/**
 * Truncates a string up to a specified length.
 *
 * @param {string} str The string to truncate.
 * @param {number} length The maximum length of the string.
 * @returns {string} The truncated string.
 */
const truncate = (str, length) => {
  if (str.length <= length) {
    return str;
  }
  return str.slice(0, length) + '...';
};

module.exports = { truncate };
