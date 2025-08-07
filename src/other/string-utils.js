/**
 * Checks if a given string is a palindrome.
 * A palindrome is a word, phrase, number, or other sequence of characters
 * which reads the same backward as forward, ignoring punctuation, case, and spacing.
 *
 * @param {string} str The string to check.
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 */
export function isPalindrome(str) {
  if (typeof str !== 'string') {
    return false;
  }
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

/**
 * Converts a string to snake_case.
 * @param {string} str The string to convert.
 * @returns {string} The snake_case string.
 */
export function toSnakeCase(str) {
  if (typeof str !== 'string') {
    return '';
  }
  return str.replace(/([A-Z])/g, (match, p1, offset) => (offset > 0 ? '_' : '') + p1.toLowerCase());
}