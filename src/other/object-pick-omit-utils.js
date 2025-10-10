/**
 * Creates an object composed of the picked object properties.
 *
 * @param {Object} obj The source object.
 * @param {string[]} keys The property keys to pick.
 * @returns {Object} Returns the new object.
 */
function pick(obj, keys) {
  const result = {};
  if (obj == null) {
    return result;
  }
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
}

/**
 * Creates an object composed of the own and inherited enumerable property paths
 * of `object` that are not omitted.
 *
 * @param {Object} obj The source object.
 * @param {string[]} keys The property keys to omit.
 * @returns {Object} Returns the new object.
 */
function omit(obj, keys) {
  if (obj == null) {
    return {};
  }
  const keySet = new Set(keys);
  const result = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && !keySet.has(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}

module.exports = { pick, omit };
