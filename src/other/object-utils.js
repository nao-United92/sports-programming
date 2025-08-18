/**
 * Creates a shallow copy of an object, picking only the specified properties.
 * @param {object} obj - The source object.
 * @param {Array<string>} keys - An array of strings, specifying the properties to pick.
 * @returns {object} A new object with only the picked properties.
 */
export function pick(obj, keys) {
  if (typeof obj !== 'object' || obj === null) {
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
 * Creates a shallow copy of an object, omitting the specified properties.
 * @param {object} obj - The source object.
 * @param {Array<string>} keys - An array of strings, specifying the properties to omit.
 * @returns {object} A new object without the omitted properties.
 */
export function omit(obj, keys) {
  if (typeof obj !== 'object' || obj === null) {
    return {};
  }
  const newObj = { ...obj };
  keys.forEach(key => {
    delete newObj[key];
  });
  return newObj;
}

/**
 * Checks if an object is empty (has no enumerable own properties).
 * @param {object} obj The object to check.
 * @returns {boolean} True if the object is empty, false otherwise.
 */
export function isEmptyObject(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}