/**
 * Returns true if the string is alphanumeric (Variation 2).
 * @param {string} str
 * @returns {boolean}
 */
export const isAlphanumericV2 = (str) => {
  return /^[0-9A-Za-z]+$/.test(str);
};
