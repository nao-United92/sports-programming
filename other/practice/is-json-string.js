/**
 * Checks if a string is a valid JSON string.
 *
 * @param {string} str The string to check.
 * @returns {boolean} Returns `true` if `str` is a valid JSON string, else `false`.
 */
const isJsonString = (str) => {
  if (typeof str !== 'string' || str.trim().length === 0) {
    return false;
  }
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

export default isJsonString;