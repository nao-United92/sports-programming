/**
 * Checks if an object is empty (has no enumerable own properties).
 * @param {object} obj The object to check.
 * @returns {boolean} True if the object is empty, false otherwise.
 */
function isEmptyObject(obj) {
  if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
    return false; // null, non-objects, and arrays are not considered empty objects in this context
  }
  return Object.keys(obj).length === 0;
}

module.exports = { isEmptyObject };
