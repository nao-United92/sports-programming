/**
 * Truncates a string if it's longer than the given maximum string length.
 * The last characters of the truncated string are replaced with the omission string which defaults to "...".
 * @param {string} str - The string to truncate.
 * @param {number} length - The maximum string length.
 * @param {string} [omission='...'] - The string to indicate omission.
 * @returns {string} - The truncated string.
 */
function truncate(str, length, omission = '...') {
  if (typeof str !== 'string') return '';
  if (str.length <= length) return str;
  return str.slice(0, length - omission.length) + omission;
}

module.exports = truncate;
