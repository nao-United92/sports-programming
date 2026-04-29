/**
 * Returns true if the string is alphanumeric.
 * @param {string} str
 * @returns {boolean}
 */
export const isAlphanumeric = (str) => {
  return /^[a-z0-9]+$/i.test(str);
};
