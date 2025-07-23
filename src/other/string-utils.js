/**
 * Capitalizes the first letter of a string.
 *
 * @param {string} str
 * @returns {string}
 */
export function capitalize(str) {
  if (typeof str !== 'string' || !str) {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Truncates a string to a specified length, appending an ellipsis if truncated.
 *
 * @param {string} str
 * @param {number} maxLength
 * @returns {string}
 */
export function truncate(str, maxLength) {
  if (typeof str !== 'string' || str.length <= maxLength) {
    return str;
  }
  return str.slice(0, maxLength) + '...';
}

/**
 * Removes all non-alphanumeric characters from a string.
 *
 * @param {string} str
 * @returns {string}
 */
export function removeNonAlphanumeric(str) {
  if (typeof str !== 'string') {
    return '';
  }
  return str.replace(/[^a-zA-Z0-9]/g, '');
}

/**
 * Reverses a given string.
 *
 * @param {string} str
 * @returns {string}
 */
export function reverseString(str) {
  if (typeof str !== 'string') {
    return '';
  }
  return str.split('').reverse().join('');
}

/**
 * Checks if a string is a palindrome.
 *
 * @param {string} str
 * @returns {boolean}
 */
export function isPalindrome(str) {
  if (typeof str !== 'string') {
    return false;
  }
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}

/**
 * Counts the occurrences of a character in a string.
 *
 * @param {string} str
 * @param {string} char
 * @returns {number}
 */
export function countOccurrences(str, char) {
  if (typeof str !== 'string' || typeof char !== 'string' || char.length !== 1) {
    return 0;
  }
  return str.split(char).length - 1;
}

/**
 * Counts the number of words in a string.
 * Words are defined as sequences of non-whitespace characters.
 * @param {string} str The input string.
 * @returns {number} The number of words in the string.
 */
export function countWords(str) {
  if (typeof str !== 'string' || str.trim() === '') {
    return 0;
  }
  return str.trim().split(/\s+/).length;
}

/**
 * Removes all whitespace characters from a string.
 * @param {string} str The input string.
 * @returns {string} The string with all whitespace removed.
 */
export function removeWhitespace(str) {
  if (typeof str !== 'string') {
    return '';
  }
  return str.replace(/\s/g, '');
}

/**
 * Converts a string to camelCase.
 *
 * @param {string} str
 * @returns {string}
 */
export function camelCase(str) {
  if (typeof str !== 'string' || !str) {
    return '';
  }
  return str.replace(/([-_\s]+(\w)|(^\w))/g, (match, p1, p2) => p2 ? p2.toUpperCase() : '').replace(/^\w/, c => c.toLowerCase());
}

/**
 * Converts a string to snake_case.
 *
 * @param {string} str
 * @returns {string}
 */
export function snakeCase(str) {
  if (typeof str !== 'string' || !str) {
    return '';
  }
  return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`).replace(/^_/, '');
}
