/**
 * Capitalizes the first letter of a string and makes the rest lowercase.
 * @param {string} str The input string.
 * @returns {string} The capitalized string.
 */
export function capitalize(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Truncates a string to a specified maximum length, adding a suffix if truncated.
 * @param {string} str The input string.
 * @param {number} maxLength The maximum length of the string.
 * @param {string} [suffix='...'] The suffix to add if the string is truncated.
 * @returns {string} The truncated string.
 */
export function truncate(str, maxLength, suffix = '...') {
  if (typeof str !== 'string') {
    return '';
  }
  if (str.length <= maxLength) {
    return str;
  }
  return str.slice(0, maxLength - suffix.length) + suffix;
}

/**
 * Converts a string to kebab-case.
 * @param {string} str The input string.
 * @returns {string} The kebab-cased string.
 */
export function kebabCase(str) {
  if (typeof str !== 'string') {
    return '';
  }
  return str
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2')
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Converts a string to camelCase.
 * @param {string} str The input string.
 * @returns {string} The camelCased string.
 */
export function camelCase(str) {
  if (typeof str !== 'string') {
    return '';
  }
  return str.replace(/[^a-zA-Z0-9]+(.)?/g, (match, chr) => chr ? chr.toUpperCase() : '').replace(/^./, (match) => match.toLowerCase());
}

/**
 * Removes HTML tags from a string.
 * @param {string} str The input string with HTML.
 * @returns {string} The string with HTML tags removed.
 */
export function stripHtml(str) {
  if (typeof str !== 'string') {
    return '';
  }
  const doc = new DOMParser().parseFromString(str, 'text/html');
  return doc.body.textContent || '';
}

/**
 * Checks if a string starts with a specified substring.
 * @param {string} str The input string.
 * @param {string} searchString The substring to search for.
 * @returns {boolean} True if the string starts with the substring, false otherwise.
 */
export function startsWith(str, searchString) {
  if (typeof str !== 'string' || typeof searchString !== 'string') {
    return false;
  }
  return str.startsWith(searchString);
}

/**
 * Checks if a string ends with a specified substring.
 * @param {string} str The input string.
 * @param {string} searchString The substring to search for.
 * @returns {boolean} True if the string ends with the substring, false otherwise.
 */
export function endsWith(str, searchString) {
  if (typeof str !== 'string' || typeof searchString !== 'string') {
    return false;
  }
  return str.endsWith(searchString);
}

/**
 * Reverses a string.
 * @param {string} str The input string.
 * @returns {string} The reversed string.
 */
export function reverseString(str) {
  if (typeof str !== 'string') {
    return '';
  }
  return str.split('').reverse().join('');
}

/**
 * Checks if a string is empty or contains only whitespace.
 * @param {string} str The input string.
 * @returns {boolean} True if the string is empty or contains only whitespace, false otherwise.
 */
export function isEmpty(str) {
  if (typeof str !== 'string') {
    return true;
  }
  return str.trim().length === 0;
}

/**
 * Checks if a string is a palindrome (reads the same forwards and backwards, ignoring case and non-alphanumeric characters).
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

/**
 * Counts the occurrences of a substring within a string.
 * @param {string} str The main string.
 * @param {string} subStr The substring to count.
 * @param {boolean} [caseSensitive=true] Whether the search should be case-sensitive.
 * @returns {number} The number of occurrences.
 */
export function countOccurrences(str, subStr, caseSensitive = true) {
  if (typeof str !== 'string' || typeof subStr !== 'string' || subStr.length === 0) {
    return 0;
  }
  let count = 0;
  let i = 0;
  const mainStr = caseSensitive ? str : str.toLowerCase();
  const searchSubStr = caseSensitive ? subStr : subStr.toLowerCase();

  while (true) {
    i = mainStr.indexOf(searchSubStr, i);
    if (i >= 0) {
      count++;
      i += searchSubStr.length;
    } else {
      break;
    }
  }
  return count;
}

/**
 * Escapes HTML special characters in a string.
 * @param {string} str The input string.
 * @returns {string} The escaped string.
 */
export function escapeHtml(str) {
  if (typeof str !== 'string') {
    return '';
  }
  return str.replace(/[&<>'"/]/g, (match) => {
    const escapeMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '/': '&#x2F;'
    };
    return escapeMap[match];
  });
}

/**
 * Converts a string to snake_case.
 * @param {string} str The input string.
 * @returns {string} The snake_cased string.
 */
export function toSnakeCase(str) {
  if (typeof str !== 'string') {
    return '';
  }
  return str
    .replace(/([A-Z])/g, '_$1')
    .toLowerCase()
    .replace(/^_/, '');
}
