/**
 * Creates an object composed of the picked object properties.
 *
 * @param {object} obj The source object.
 * @param {string[]} keys The property keys to pick.
 * @returns {object} Returns the new object.
 */
export const pick = (obj, keys) => {
  return keys.reduce((acc, key) => {
    if (obj && Object.prototype.hasOwnProperty.call(obj, key)) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
};

/**
 * Creates an object composed of the own and inherited enumerable property paths of object that are not omitted.
 *
 * @param {object} obj The source object.
 * @param {string[]} keys The property keys to omit.
 * @returns {object} Returns the new object.
 */
export const omit = (obj, keys) => {
  const newObj = { ...obj };
  keys.forEach(key => {
    delete newObj[key];
  });
  return newObj;
};