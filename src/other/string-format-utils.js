
/**
 * Capitalizes the first letter of each word in a string.
 *
 * @param {string} str The string to capitalize.
 * @returns {string} The string with each word capitalized.
 */
export const capitalizeWords = (str) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

/**
 * Reverses a string.
 *
 * @param {string} str The string to reverse.
 * @returns {string} The reversed string.
 */
export const reverseString = (str) => {
  return str.split('').reverse().join('');
};
