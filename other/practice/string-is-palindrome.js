const reverseString = require('./string-reverse');

/**
 * Checks if a string is a palindrome.
 * @param {string} str
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 */
const isPalindrome = (str) => {
  if (typeof str !== 'string') return false;
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleaned === reverseString(cleaned);
};

module.exports = isPalindrome;
