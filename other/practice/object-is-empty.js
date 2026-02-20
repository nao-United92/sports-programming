/**
 * Checks if an object is empty (has no own enumerable string-keyed properties).
 *
 * @param {Object} obj - The object to check.
 * @returns {boolean} True if empty, false otherwise.
 */
export const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};
