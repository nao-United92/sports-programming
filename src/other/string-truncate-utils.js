/**
 * Truncates a string if it's longer than the given maximum string length.
 * The last characters of the truncated string are replaced with the omission string.
 *
 * @param {string} string The string to truncate.
 * @param {Object} [options={}] The options object.
 * @param {number} [options.length=30] The maximum string length.
 * @param {string} [options.omission='...'] The string to indicate text is omitted.
 * @returns {string} Returns the truncated string.
 */
export function truncate(string, { length = 30, omission = '...' } = {}) {
  if (string === null || string === undefined) {
    return '';
  }
  const strLength = string.length;
  if (strLength <= length) {
    return string;
  }
  const end = length - omission.length;
  if (end < 1) {
    return omission;
  }
  return string.slice(0, end) + omission;
}