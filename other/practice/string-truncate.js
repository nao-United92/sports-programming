// other/practice/string-truncate.js
/**
 * Truncates a string if it's longer than the specified maximum length.
 * The last characters of the truncated string are replaced with an ellipsis ('...').
 *
 * @param {string} str The string to truncate.
 * @param {number} maxLength The maximum length of the string, including the ellipsis.
 * @returns {string} The truncated string.
 * @example
 *
 * stringTruncate('long string to truncate', 15);
 * // => 'long string...'
 *
 * stringTruncate('hello', 10);
 * // => 'hello'
 *
 * stringTruncate('abc', 3);
 * // => 'abc' (or '...' if maxLength is too small)
 *
 * stringTruncate('ab', 3);
 * // => 'ab'
 */
function stringTruncate(str, maxLength) {
  if (typeof str !== 'string') {
    return '';
  }
  if (typeof maxLength !== 'number' || maxLength < 0) {
    maxLength = 10; // Default to a reasonable length if invalid
  }

  const ellipsis = '...';

  // If the string is already shorter than or equal to maxLength, no truncation needed.
  if (str.length <= maxLength) {
    return str;
  }

  // If maxLength itself is too small to even show ellipsis, just return part of ellipsis
  // Example: maxLength = 1 => '.'
  // Example: maxLength = 2 => '..'
  // Example: maxLength = 3 => '...'
  if (maxLength <= ellipsis.length) {
    return ellipsis.substring(0, maxLength);
  }

  // Truncate the string and add ellipsis
  // Trim any trailing space from the sliced part before adding ellipsis
  return str.slice(0, maxLength - ellipsis.length).trimEnd() + ellipsis;
}

module.exports = stringTruncate;
