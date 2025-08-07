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