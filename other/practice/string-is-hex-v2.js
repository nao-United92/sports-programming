/**
 * Returns true if the string is a valid hexadecimal string (Variation 2).
 * @param {string} str
 * @returns {boolean}
 */
export const isHexV2 = (str) => {
  return /^[0-9A-Fa-f]+$/.test(str);
};
