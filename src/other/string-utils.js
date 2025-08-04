/**
 * Truncates a string to a specified length, appending "..." if the string is longer than the specified length.
 *
 * @param {string} str The string to truncate.
 * @param {number} num The maximum length of the string.
 * @returns {string} The truncated string.
 */
export function truncate(str, num) {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + '...';
}

/**
 * Checks if a string is a palindrome.
 *
 * @param {string} str The string to check.
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 */
export function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/[\W_]/g, '');
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}