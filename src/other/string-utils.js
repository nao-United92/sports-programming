/**
 * Truncates a string to a certain length and appends a suffix.
 * @param {string} str The string to truncate.
 * @param {number} length The maximum length of the string.
 * @param {string} [suffix='...'] The suffix to append if the string is truncated.
 * @returns {string} The truncated string.
 */
export const truncate = (str, length, suffix = '...') => {
  if (str.length <= length) {
    return str;
  }
  if (length <= suffix.length) {
    return suffix;
  }
  return str.slice(0, length - suffix.length) + suffix;
};

/**
 * Capitalizes the first letter of a string.
 * @param {string} str The input string.
 * @returns {string} The string with the first letter capitalized.
 */
export const capitalizeFirstLetter = (str) => {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Reverses a given string.
 *
 * @param {string} str The input string.
 * @returns {string} The reversed string.
 */
export const reverseString = (str) => {
  if (typeof str !== 'string') {
    return '';
  }
  return str.split('').reverse().join('');
};