/**
 * Truncates a string to a certain length and appends a suffix.
 * @param {string} str The string to truncate.
 * @param {number} length The maximum length of the string.
 * @param {string} [suffix='...'] The suffix to append if the string is truncated.
 * @returns {string} The truncated string.
 */
export const truncate = (str, length, suffix = '...') => {
  if (str.length <= length) {
    return str;
  }
  if (length <= suffix.length) {
    return suffix;
  }
  return str.slice(0, length - suffix.length) + suffix;
};