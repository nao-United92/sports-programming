/**
 * Truncates a string up to a specified length.
 *
 * @param {string} str The string to truncate.
 * @param {number} maxLength The maximum length of the truncated string.
 * @param {string} [suffix='...'] The suffix to append to the truncated string.
 * @returns {string} The truncated string.
 */
const truncateString = (str, maxLength, suffix = '...') => {
  if (str.length <= maxLength) {
    return str;
  }
  if (maxLength <= suffix.length) {
    return suffix.slice(0, maxLength);
  }
  return str.slice(0, maxLength - suffix.length) + suffix;
};

module.exports = {
  truncateString,
};