/**
 * Truncates a string if it exceeds the specified maximum length, appending an ellipsis (...).
 * If maxLength is less than 3 and truncation is needed, it will truncate the string without an ellipsis.
 *
 * @param {string} str The string to truncate.
 * @param {number} maxLength The maximum allowed length of the string before truncation. Must be a non-negative number.
 * @returns {string} The truncated string with an ellipsis if truncation occurred and maxLength >= 3, otherwise the original string or a truncated string without ellipsis.
 */
export function truncateString(str, maxLength) {
  if (maxLength < 0) {
    throw new Error("maxLength must be a non-negative number.");
  }
  if (str.length <= maxLength) {
    return str;
  }
  if (maxLength < 3) {
    return str.slice(0, maxLength); // Truncate without ellipsis if maxLength is too small
  }
  return str.slice(0, maxLength - 3) + '...';
}