/**
 * Truncates `str` if it's longer than `length`.
 * The last characters of the truncated string are replaced with the `end` string.
 *
 * @param {string} str The string to truncate.
 * @param {number} length The maximum string length.
 * @param {string} [end='...'] The string to append to the end of the truncated string.
 * @returns {string} Returns the truncated string.
 */
function truncate(str, length, end = '...') {
  if (typeof str !== 'string' || length < 0) {
    return '';
  }
  if (str.length <= length) {
    return str;
  }
  // Ensure the length is at least the length of the 'end' string
  const truncateLength = Math.max(0, length - end.length);
  return str.substring(0, truncateLength) + end;
}

module.exports = truncate;