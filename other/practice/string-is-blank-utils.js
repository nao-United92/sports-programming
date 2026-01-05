/**
 * Checks if a string is empty or contains only whitespace characters.
 *
 * @param {string} str The string to check.
 * @returns {boolean} Returns `true` if the string is blank, `false` otherwise.
 */
const isBlank = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string for the first argument.');
  }
  return str.trim().length === 0;
};

export default isBlank;
