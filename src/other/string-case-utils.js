/**
 * Checks if a string is all uppercase.
 * @param {string} str The string to check.
 * @returns {boolean} True if the string is all uppercase, false otherwise.
 */
export const isUpperCase = (str) => {
  return str === str.toUpperCase();
};

/**
 * Checks if a string is all lowercase.
 * @param {string} str The string to check.
 * @returns {boolean} True if the string is all lowercase, false otherwise.
 */
export const isLowerCase = (str) => {
  return str === str.toLowerCase();
};
