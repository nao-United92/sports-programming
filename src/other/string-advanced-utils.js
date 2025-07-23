
/**
 * Capitalizes the first letter of a string.
 * @param {string} str The input string.
 * @returns {string} The string with the first letter capitalized.
 */
export function capitalize(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Truncates a string to a specified maximum length, adding a suffix if truncated.
 * @param {string} str The input string.
 * @param {number} maxLength The maximum length of the string.
 * @param {string} [suffix='...'] The suffix to add if the string is truncated.
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
 * Converts a string to kebab-case.
 * @param {string} str The input string.
 * @returns {string} The string in kebab-case.
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
 * @returns {string} The string in camelCase.
 */
export function camelCase(str) {
  if (typeof str !== 'string') {
    return '';
  }
  return str.replace(/[^a-zA-Z0-9]+(.)?/g, (match, chr) => chr ? chr.toUpperCase() : '').replace(/^./, (match) => match.toLowerCase());
}

/**
 * Reverses the order of words in a string.
 * @param {string} str The input string.
 * @returns {string} The string with words reversed.
 */
export function reverseWords(str) {
  if (typeof str !== 'string') {
    return '';
  }
  return str.split(' ').reverse().join(' ');
}

/**
 * Counts the number of words in a string.
 * @param {string} str The input string.
 * @returns {number} The number of words.
 */
export function countWords(str) {
  if (typeof str !== 'string' || str.trim() === '') {
    return 0;
  }
  return str.trim().split(/\s+/).length;
}
