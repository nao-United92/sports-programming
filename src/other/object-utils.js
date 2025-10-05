/**
 * Creates an object composed of the picked object properties.
 * @param {Object} obj The source object.
 * @param {string[]} keys The properties to pick.
 * @returns {Object} Returns the new object.
 */
export const pick = (obj, keys) => {
  if (obj === null || obj === undefined) {
    return {};
  }
  return keys.reduce((acc, key) => {
    if (obj.hasOwnProperty(key)) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
};

/**
 * Creates an object composed of the own and inherited enumerable property paths of object that are not omitted.
 * @param {Object} obj The source object.
 * @param {string[]} keys The properties to omit.
 * @returns {Object} Returns the new object.
 */
export const omit = (obj, keys) => {
  if (obj === null || obj === undefined) {
    return {};
  }
  const newObj = { ...obj };
  keys.forEach(key => {
    delete newObj[key];
  });
  return newObj;
};