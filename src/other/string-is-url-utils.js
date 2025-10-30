/**
 * Checks if a string is a valid URL.
 *
 * @param {string} str The string to check.
 * @returns {boolean} Returns `true` if the string is a valid URL, else `false`.
 */
function isURL(str) {
  if (typeof str !== 'string' || str.trim() === '') {
    return false;
  }
  try {
    new URL(str);
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = { isURL };