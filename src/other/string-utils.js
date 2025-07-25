/**
 * Capitalizes the first letter of a string.
 *
 * @param {string} str
 * @returns {string}
 */
export function capitalize(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
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
  return str
    .replace(/[^a-zA-Z0-9]+(.)?/g, (match, chr) => chr ? chr.toUpperCase() : '')
    .replace(/^./, (match) => match.toLowerCase());
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
  return str.replace(/([a-z0-9]|(?<=[a-z0-9]))([A-Z])/g, '$1_$2').toLowerCase().replace(/\s+/g, '_');
}



/**
 * Converts a string to kebab-case.
 *
 * @param {string} str
 * @returns {string}
 */
export function kebabCase(str) {
  if (typeof str !== 'string' || !str) {
    return '';
  }
  return str.replace(/([a-z0-9]|(?<=[a-z]))([A-Z])/g, '$1-$2').replace(/_|[\s]+/g, '-').toLowerCase();
}

/**
 * Pads the left side of a string with a specified character until it reaches a desired length.
 *
 * @param {string} str The input string.
 * @param {number} length The desired total length of the string.
 * @param {string} padChar The character to use for padding. Defaults to a space.
 * @returns {string} The padded string.
 */
export function padLeft(str, length, padChar = ' ') {
  if (typeof str !== 'string') {
    return '';
  }
  if (str.length >= length) {
    return str;
  }
  const padding = padChar.repeat(length - str.length);
  return padding + str;
}

/**
 * Checks if a string is a valid UUID (version 4).
 *
 * @param {string} str The string to check.
 * @returns {boolean} True if the string is a valid UUID, false otherwise.
 */
export function isUUID(str) {
  if (typeof str !== 'string') {
    return false;
  }
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(str);
}

/**
 * Truncates a string to a specified length, adding an ellipsis if it's cut.
 *
 * @param {string} str The input string.
 * @param {number} maxLength The maximum length of the string before truncation.
 * @returns {string} The truncated string.
 */
export function truncate(str, maxLength, suffix = '...') {
  if (typeof str !== 'string' || typeof maxLength !== 'number' || maxLength < 0) {
    return '';
  }
  if (str.length <= maxLength) {
    return str;
  }
  return str.slice(0, maxLength - suffix.length) + suffix;
}

/**
 * Converts a string to Title Case.
 * Each word in the string will have its first letter capitalized.
 * @param {string} str The input string.
 * @returns {string} The string in Title Case.
 */
export function toTitleCase(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

/**
 * Checks if a string starts with a specified prefix.
 * @param {string} str The input string.
 * @param {string} prefix The prefix to check for.
 * @returns {boolean} True if the string starts with the prefix, false otherwise.
 */
export function startsWith(str, prefix) {
  if (typeof str !== 'string' || typeof prefix !== 'string') {
    return false;
  }
  return str.startsWith(prefix);
}

/**
 * Checks if a string ends with a specified suffix.
 * @param {string} str The input string.
 * @param {string} suffix The suffix to check for.
 * @returns {boolean} True if the string ends with the suffix, false otherwise.
 */
export function endsWith(str, suffix) {
  if (typeof str !== 'string' || typeof suffix !== 'string') {
    return false;
  }
  return str.endsWith(suffix);
}

/**
 * Checks if a string consists only of numeric characters.
 * @param {string} str The string to check.
 * @returns {boolean} True if the string is numeric, false otherwise.
 */
export function isNumeric(str) {
  if (typeof str !== 'string' || str.trim() === '') {
    return false;
  }
  return /^[0-9]+$/.test(str);
}

/**
 * Repeats the given string `n` times.
 * @param {string} str The string to repeat.
 * @param {number} n The number of times to repeat the string.
 * @returns {string} The repeated string.
 */
export function repeat(str, n) {
  if (typeof str !== 'string' || n < 0) {
    return '';
  }
  return str.repeat(n);
}



