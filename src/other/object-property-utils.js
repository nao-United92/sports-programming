/**
 * Creates an object composed of the picked object properties.
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
 * Creates an object composed of the own and inherited enumerable property paths of object that are not omitted.
 * @param {Object} obj The source object.
 * @param {string[]} keys The property paths to omit.
 * @returns {Object} Returns the new object.
 */
export const omit = (obj, keys) => {
  if (obj === null || typeof obj !== 'object') {
    return {};
  }
  const newObj = { ...obj };
  keys.forEach(key => {
    delete newObj[key];
  });
  return newObj;
};

/**
 * Checks if an object has a specified property.
 * @param {Object} obj The object to check.
 * @param {string} key The property to check for.
 * @returns {boolean} True if the object has the property, false otherwise.
 */
export const has = (obj, key) => {
  return obj != null && Object.prototype.hasOwnProperty.call(obj, key);
};
