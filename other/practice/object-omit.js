/**
 * Creates an object composed of the object properties that are not omitted.
 * @param {Object} obj - The source object.
 * @param {Array} keys - The property keys to omit.
 * @returns {Object} - The resulting object.
 */
function omit(obj, keys) {
  if (!obj) return {};
  const result = { ...obj };
  keys.forEach((key) => {
    delete result[key];
  });
  return result;
}

module.exports = omit;
