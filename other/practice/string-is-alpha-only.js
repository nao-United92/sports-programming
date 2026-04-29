/**
 * Returns true if the string consists only of letters.
 * @param {string} str
 * @returns {boolean}
 */
export const isAlphaOnly = (str) => {
  return /^[a-z]+$/i.test(str);
};
