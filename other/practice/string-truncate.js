/**
 * Truncates a string if it's longer than the specified maximum length.
 * @param {string} str
 * @param {number} num
 * @returns {string} The truncated string.
 */
const truncate = (str, num) => {
  if (typeof str !== 'string' || str.length <= num) return str;
  return str.slice(0, num) + '...';
};

module.exports = truncate;
