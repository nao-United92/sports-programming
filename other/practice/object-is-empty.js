/**
 * Checks if an object is empty.
 * @param {object} obj
 * @returns {boolean} True if the object is empty, false otherwise.
 */
const isEmpty = (obj) => {
  if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) return false;
  return Object.keys(obj).length === 0;
};

module.exports = isEmpty;
