/**
 * Creates an object composed of the `object` properties not `omitted`.
 *
 * @param {Object} obj The source object.
 * @param {Array<string>} keys The property keys to omit.
 * @returns {Object} Returns the new object.
 */
function omit(obj, keys) {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
    return {};
  }
  if (!Array.isArray(keys)) {
    keys = [];
  }

  const result = {};
  const omitSet = new Set(keys);

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && !omitSet.has(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}

module.exports = omit;
