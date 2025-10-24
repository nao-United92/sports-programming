
/**
 * Truncates a string if it is longer than the specified maximum length.
 * The truncation will add an ellipsis (...) to the end of the string.
 *
 * @param {string} str The string to truncate.
 * @param {number} maxLength The maximum length of the string.
 * @param {string} [ellipsis='...'] The string to use as an ellipsis. Defaults to '...'.
 * @returns {string} The truncated string.
 */
export const truncate = (str, maxLength, ellipsis = '...') => {
  if (typeof str !== 'string' || typeof maxLength !== 'number' || maxLength < 0) {
    return str; // Return original string for invalid inputs
  }

  if (str.length <= maxLength) {
    return str;
  }

  if (maxLength < ellipsis.length) {
    return ellipsis.substring(0, maxLength);
  }

  return str.substring(0, maxLength - ellipsis.length) + ellipsis;
};
