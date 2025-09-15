/**
 * Truncates a string if it's longer than the given maximum string length.
 * The last characters of the truncated string are replaced with the omission string.
 *
 * @param {string} [string=''] The string to truncate.
 * @param {Object} [options={}] The options object.
 * @param {number} [options.length=30] The maximum string length.
 * @param {string} [options.omission='...'] The string to indicate text is omitted.
 * @param {RegExp|string} [options.separator] The pattern to truncate to.
 * @returns {string} Returns the truncated string.
 */
function truncate(string, { length = 30, omission = '...', separator } = {}) {
  if (string == null) {
    return '';
  }

  if (length >= string.length) {
    return string;
  }

  const end = length - omission.length;
  if (end < 1) {
    return omission;
  }

  let result = string.slice(0, end);

  if (separator == null) {
    return result + omission;
  }

  if (string.indexOf(separator, end) === -1) {
      const lastIndex = string.lastIndexOf(separator);
      if (lastIndex > -1) {
          return string.slice(0, lastIndex) + omission;
      }
  }

  const lastIndex = string.lastIndexOf(separator, end);
  if (lastIndex > -1) {
      result = string.slice(0, lastIndex);
  }

  return result + omission;
}

module.exports = {
  truncate
};