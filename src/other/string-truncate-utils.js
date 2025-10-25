/**
 * Truncates a string to a specified length and appends a suffix.
 *
 * @param {string} str - The string to truncate.
 * @param {number} length - The maximum length of the string.
 * @param {string} [suffix='...'] - The suffix to append if the string is truncated.
 * @returns {string} The truncated string.
 */
const truncate = (str, length, suffix = '...') => {
  if (typeof str !== 'string' || typeof length !== 'number') {
    throw new Error('Invalid arguments: str must be a string and length must be a number.');
  }

  if (str.length <= length) {
    return str;
  }

  return str.slice(0, length) + suffix;
};

module.exports = { truncate };