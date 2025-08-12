/**
 * Truncates a string to a specified length, appending a suffix if truncated.
 *
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
    return suffix.slice(0, length);
  }
  let index = length - suffix.length;
  while (index > 0 && str[index - 1] === ' ') {
    index--;
  }
  return str.slice(0, index) + suffix;
};
