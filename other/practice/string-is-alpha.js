/**
 * Checks if a string contains only alphabetic characters (a-z, A-Z).
 *
 * @param {string} str The string to check.
 * @returns {boolean} True if the string contains only alphabetic characters, false otherwise.
 */
const stringIsAlpha = (str) => {
  return /^[a-zA-Z]*$/.test(str);
};

export default stringIsAlpha;
