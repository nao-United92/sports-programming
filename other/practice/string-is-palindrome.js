// other/practice/string-is-palindrome.js
/**
 * Checks if a string is a palindrome (reads the same forwards and backwards,
 * ignoring case and non-alphanumeric characters).
 *
 * @param {string} str The string to check.
 * @returns {boolean} Returns `true` if the string is a palindrome, `false` otherwise.
 * @example
 *
 * stringIsPalindrome('A man, a plan, a canal: Panama');
 * // => true
 *
 * stringIsPalindrome('race a car');
 * // => false
 *
 * stringIsPalindrome('madam');
 * // => true
 *
 * stringIsPalindrome('');
 * // => true
 */
function stringIsPalindrome(str) {
  if (typeof str !== 'string') {
    return false; // Or throw an error, depending on desired behavior
  }

  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

module.exports = stringIsPalindrome;
