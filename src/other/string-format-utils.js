/**
 * Truncates a string to a specified maximum length and appends an ellipsis if it exceeds that length.
 *
 * @param {string} str The input string.
 * @param {number} maxLength The maximum allowed length of the string before truncation.
 * @returns {string} The truncated string with an ellipsis, or the original string if not truncated.
 */
export function truncateString(str, maxLength) {
  if (typeof str !== 'string') {
    return '';
  }
  if (maxLength < 3) {
    // If maxLength is too small to accommodate ellipsis, just return first maxLength chars
    return str.substring(0, maxLength);
  }
  if (str.length > maxLength) {
    return str.substring(0, maxLength - 3) + '...';
  }
  return str;
}
