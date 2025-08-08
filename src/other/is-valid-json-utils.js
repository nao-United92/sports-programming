/**
 * Checks if a string is a valid JSON.
 *
 * @param {string} str The string to check.
 * @returns {boolean} True if the string is a valid JSON, false otherwise.
 */
export const isValidJson = (str) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};
