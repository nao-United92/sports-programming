/**
 * Creates an object composed of the own and inherited enumerable property paths of object that are not omitted.
 *
 * @param {Object} obj The source object.
 * @param {string[]} keys The property keys to omit.
 * @returns {Object} Returns the new object.
 */
const omit = (obj, keys) => {
  if (obj === null || typeof obj !== 'object') {
    return {};
  }

  const result = { ...obj };
  const keysToOmit = new Set(keys);

  for (const key of keysToOmit) {
    if (Object.prototype.hasOwnProperty.call(result, key)) {
      delete result[key];
    }
  }

  return result;
};

module.exports = { omit };