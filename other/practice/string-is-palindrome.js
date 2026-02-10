/**
 * Checks if a given string is a palindrome (reads the same forwards and backwards).
 * Ignores case and non-alphanumeric characters.
 *
 * @param {string} str The string to check.
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 */
const stringIsPalindrome = (str) => {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
};

export default stringIsPalindrome;