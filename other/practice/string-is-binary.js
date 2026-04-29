/**
 * Returns true if the string is a binary string.
 * @param {string} str
 * @returns {boolean}
 */
export const isBinary = (str) => {
  return /^[01]+$/.test(str);
};
