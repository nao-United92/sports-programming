/**
 * Checks if a string is blank (empty or contains only whitespace characters).
 *
 * @param {string} str The string to check.
 * @returns {boolean} True if the string is blank, false otherwise.
 */
const stringIsBlank = (str) => {
  return typeof str === 'string' && str.trim().length === 0;
};

export default stringIsBlank;
