/**
 * Checks if a string is a valid URL.
 *
 * @param {string} str The string to check.
 * @returns {boolean} Returns `true` if the string is a valid URL, `false` otherwise.
 */
const isURL = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string for the first argument.');
  }
  try {
    new URL(str);
    return true;
  } catch (e) {
    return false;
  }
};

export default isURL;
