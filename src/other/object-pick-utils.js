
/**
 * Creates an object composed of the picked object properties.
 *
 * @param {Object} obj The source object.
 * @param {string[]} keys The property keys to pick.
 * @returns {Object} Returns the new object.
 */
const pick = (obj, keys) => {
  if (obj === null || typeof obj !== 'object') {
    return {};
  }

  const result = {};
  for (const key of keys) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = obj[key];
    }
  }
  return result;
};

module.exports = { pick };
