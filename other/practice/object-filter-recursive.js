/**
 * Recursively filters properties of an object based on a predicate.
 * 
 * @param {Object} obj 
 * @param {Function} predicate (value, key, object) => boolean
 * @returns {Object}
 */
const filterRecursive = (obj, predicate) => {
  const result = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
        const filtered = filterRecursive(value, predicate);
        if (Object.keys(filtered).length > 0) {
          result[key] = filtered;
        }
      } else if (predicate(value, key, obj)) {
        result[key] = value;
      }
    }
  }

  return result;
};

module.exports = filterRecursive;
