/**
 * Returns true if the string consists only of digits.
 * @param {string} str
 * @returns {boolean}
 */
export const isDigitOnly = (str) => {
  return /^[0-9]+$/.test(str);
};
