// src/other/string-utils.js

/**
 * Capitalizes the first letter of a string.
 * @param {string} str The input string.
 * @returns {string} The string with the first letter capitalized, or an empty string if the input is not a string.
 */
export function capitalize(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Converts a string to kebab-case.
 * @param {string} str The input string.
 * @returns {string} The kebab-cased string.
 */
export function toKebabCase(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join('-');
}

/**
 * Checks if a string is a palindrome (reads the same forwards and backwards), ignoring non-alphanumeric characters and case.
 * @param {string} str The input string.
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 */
export function isPalindrome(str) {
  if (typeof str !== 'string') {
    return false;
  }
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleanedStr === cleanedStr.split('').reverse().join('');
}
