/**
 * reverses a string.
 *
 * @param {string} str The string to reverse.
 * @returns {string} The reversed string.
 */
export const reverseString = (str) => str.split('').reverse().join('');

/**
 * Checks if a string is a palindrome.
 *
 * @param {string} str The string to check.
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 */
export const isPalindrome = (str) => {
  const cleanedStr = str.toLowerCase().replace(/[\W_]/g, '');
  const reversedStr = reverseString(cleanedStr);
  return cleanedStr === reversedStr;
};

/**
 * Truncates a string to a specified length.
 *
 * @param {string} str The string to truncate.
 * @param {number} num The length to truncate the string to.
 * @returns {string} The truncated string.
 */
export const truncate = (str, num) => {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + '...';
};

/**
 * Repeats a string a specified number of times.
 *
 * @param {string} str The string to repeat.
 * @param {number} times The number of times to repeat the string.
 * @returns {string} The repeated string.
 */
export const repeat = (str, times) => {
  return str.repeat(times);
};
