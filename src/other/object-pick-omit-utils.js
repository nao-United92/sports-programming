/**
 * Creates an object composed of the picked object properties.
 *
 * @param {Object} obj The source object.
 * @param {string[]} keys The property paths to pick.
 * @returns {Object} Returns the new object.
 */
export const pick = (obj, keys) => {
  if (obj === null || typeof obj !== 'object') {
    return {};
  }
  return keys.reduce((acc, key) => {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
};

/**
 * Creates an object with properties from the source object that are not omitted.
 *
 * @param {Object} obj The source object.
 * @param {string[]} keys The property paths to omit.
 * @returns {Object} Returns the new object.
 */
export const omit = (obj, keys) => {
  if (obj === null || typeof obj !== 'object') {
    return {};
  }
  const keySet = new Set(keys);
  return Object.keys(obj)
    .filter(key => !keySet.has(key))
    .reduce((acc, key) => {
      acc[key] = obj[key];
      return acc;
    }, {});
};
