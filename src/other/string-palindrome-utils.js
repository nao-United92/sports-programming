/**
 * Checks if a string is a palindrome.
 *
 * @param {string} str The string to check.
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 */
export const isPalindrome = (str) => {
  if (typeof str !== 'string') {
    return false;
  }
  const cleanedStr = str.toLowerCase().replace(/[\W_]/g, '');
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
};
