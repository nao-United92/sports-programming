/**
 * Checks if a string contains only digit characters.
 *
 * @param {string} str The string to check.
 * @returns {boolean} Returns `true` if the string contains only digits, `false` otherwise.
 */
const isDigit = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string for the first argument.');
  }
  return /^\d+$/.test(str);
};

export default isDigit;
