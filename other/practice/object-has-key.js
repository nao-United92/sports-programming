/**
 * Checks if the object has the specified key as its own property.
 *
 * @param {Object} obj - The object to check.
 * @param {string} key - The key to check for.
 * @returns {boolean} True if the key exists, false otherwise.
 */
export const hasKey = (obj, key) => {
  return Object.prototype.hasOwnProperty.call(obj, key);
};
