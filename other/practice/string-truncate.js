/**
 * Truncates a string if it is longer than the specified maximum length.
 * The truncation will add an ellipsis ("...") to the end.
 *
 * @param {string} str The string to truncate.
 * @param {number} maxLength The maximum length of the string before truncation.
 * @returns {string} The truncated string.
 */
const stringTruncate = (str, maxLength) => {
  if (str.length <= maxLength) {
    return str;
  }
  // If maxLength is less than 3, we cannot display any part of the string
  // and still show an ellipsis of 3 characters. So, just return '...'.
  if (maxLength < 3) {
    return '...';
  }
  return str.slice(0, maxLength - 3) + '...';
};

export default stringTruncate;