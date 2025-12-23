/**
 * Creates an object composed of the picked `object` properties.
 *
 * @param {Object} obj The source object.
 * @param {Array<string>} keys The property keys to pick.
 * @returns {Object} Returns the new object.
 */
function pick(obj, keys) {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
    return {};
  }
  if (!Array.isArray(keys)) {
    keys = [];
  }

  const result = {};
  const pickSet = new Set(keys);

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && pickSet.has(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}

module.exports = pick;
