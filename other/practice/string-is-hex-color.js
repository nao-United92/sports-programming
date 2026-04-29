/**
 * Returns true if the string is a valid hex color code.
 * @param {string} str
 * @returns {boolean}
 */
export const isHexColor = (str) => {
  return /^#([A-Fa-f0-9]{3}){1,2}$/.test(str);
};
