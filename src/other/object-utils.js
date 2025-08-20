/**
 * Creates an object composed of the picked object properties.
 * @param {Object} obj The source object.
 * @param {string[]} keys The property keys to pick.
 * @returns {Object} Returns the new object.
 */
export function pick(obj, keys) {
  if (obj === null || typeof obj !== 'object') {
    return {};
  }
  return keys.reduce((acc, key) => {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}

/**
 * Creates an object composed of the own and inherited enumerable property paths of object that are not omitted.
 * @param {Object} obj The source object.
 * @param {string[]} keys The property keys to omit.
 * @returns {Object} Returns the new object.
 */
export function omit(obj, keys) {
  if (obj === null || typeof obj !== 'object') {
    return {};
  }
  const newObj = { ...obj };
  keys.forEach(key => {
    delete newObj[key];
  });
  return newObj;
}