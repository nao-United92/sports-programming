/**
 * Creates an object composed of the picked object properties.
 *
 * @param {Object} object The source object.
 * @param {string[]} keys The property paths to pick.
 * @returns {Object} Returns the new object.
 */
export const pick = (object, keys) => {
  return keys.reduce((obj, key) => {
    if (object && Object.prototype.hasOwnProperty.call(object, key)) {
      obj[key] = object[key];
    }
    return obj;
  }, {});
};

/**
 * Creates an object composed of the own and inherited enumerable property paths of object that are not omitted.
 *
 * @param {Object} object The source object.
 * @param {string[]} keys The property paths to omit.
 * @returns {Object} Returns the new object.
 */
export const omit = (object, keys) => {
  const newObj = { ...object };
  keys.forEach(key => {
    delete newObj[key];
  });
  return newObj;
};