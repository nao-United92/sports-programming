/**
 * Truncates a string up to a specified length.
 *
 * @param {string} str The string to truncate.
 * @param {number} length The maximum length of the truncated string.
 * @param {string} [omission='...'] The string to append to the truncated string.
 * @returns {string} The truncated string.
 */
const truncate = (str, length, omission = '...') => {
  if (str.length <= length) {
    return str;
  }
  if (length <= omission.length) {
    return omission.substring(0, length);
  }
  return str.slice(0, length - omission.length) + omission;
};

export { truncate };
