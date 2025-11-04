
/**
 * Truncates `string` if it's longer than the given maximum string length.
 * The last characters of the truncated string are replaced with the `omission`
 * string which defaults to "...".
 *
 * @param {string} string The string to truncate.
 * @param {object} [options={}] The options object.
 * @param {number} [options.length=30] The maximum string length.
 * @param {string} [options.omission='...'] The string to indicate text is omitted.
 * @returns {string} Returns the truncated string.
 */
export const truncate = (string, { length = 30, omission = '...' } = {}) => {
  if (string.length <= length) {
    return string;
  }

  const truncatedLength = length - omission.length;
  const truncatedString = string.slice(0, truncatedLength > 0 ? truncatedLength : 0);

  return truncatedString + omission;
};
