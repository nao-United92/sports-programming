
/**
 * Truncates a string up to a specified length.
 *
 * @param {string} str The string to truncate.
 * @param {number} length The maximum length of the truncated string.
 * @param {string} [suffix='...'] The suffix to append to the truncated string.
 * @returns {string} The truncated string.
 */
export function truncate(str, length, suffix = '...') {
  if (str.length <= length) {
    return str;
  }
  return str.slice(0, length - suffix.length) + suffix;
}
