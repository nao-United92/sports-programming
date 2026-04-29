/**
 * Returns true if the string consists only of whitespace.
 * @param {string} str
 * @returns {boolean}
 */
export const isWhitespaceOnly = (str) => {
  return /^\s+$/.test(str);
};
