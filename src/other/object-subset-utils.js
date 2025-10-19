/**
 * Creates an object composed of the picked object properties.
 * @param {Object} obj The source object.
 * @param {string[]} keys The property keys to pick.
 * @returns {Object} Returns the new object.
 */
const pick = (obj, keys) => {
  const result = {};
  if (obj == null) {
    return result;
  }
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
};

/**
 * Creates an object composed of the own and inherited enumerable property paths of object that are not omitted.
 * @param {Object} obj The source object.
 * @param {string[]} keys The property keys to omit.
 * @returns {Object} Returns the new object.
 */
const omit = (obj, keys) => {
  const result = { ...obj };
  if (obj == null) {
    return {};
  }
  for (const key of keys) {
    delete result[key];
  }
  return result;
};

module.exports = { pick, omit };
