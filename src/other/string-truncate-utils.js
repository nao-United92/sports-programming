/**
 * Truncates `string` if it's longer than the given maximum `length`.
 * The last characters of the truncated string are replaced with the `omission` string.
 *
 * @param {string} [string=''] The string to truncate.
 * @param {Object} [options={}] The options object.
 * @param {number} [options.length=30] The maximum string length.
 * @param {string} [options.omission='...'] The string to indicate text is omitted.
 * @returns {string} Returns the truncated string.
 */
function truncate(string, options = {}) {
  const { length = 30, omission = '...' } = options;

  if (typeof string !== 'string') {
    return '';
  }

  if (string.length <= length) {
    return string;
  }

  // Ensure omission length doesn't exceed desired length
  const actualLength = Math.max(0, length - omission.length);

  if (actualLength === 0) {
    return omission;
  }

  return string.slice(0, actualLength) + omission;
}

module.exports = { truncate };
