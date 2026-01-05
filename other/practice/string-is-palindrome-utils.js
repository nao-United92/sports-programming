/**
 * Checks if a string is a palindrome (reads the same forwards and backwards, ignoring case and non-alphanumeric characters).
 *
 * @param {string} str The string to check.
 * @returns {boolean} Returns `true` if the string is a palindrome, `false` otherwise.
 */
const isPalindrome = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string for the first argument.');
  }
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleanedStr === cleanedStr.split('').reverse().join('');
};

export default isPalindrome;
