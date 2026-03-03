/**
 * Capitalizes the first letter of a string.
 * @param {string} str
 * @returns {string} The capitalized string.
 */
const capitalize = (str) => {
  if (typeof str !== 'string' || str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

module.exports = capitalize;
