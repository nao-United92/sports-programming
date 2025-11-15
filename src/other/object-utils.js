/**
 * Creates a deep clone of an object.
 * @param {*} obj The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 */
const deepClone = (obj) => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  // Handle Date
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }
  // Handle Array
  if (Array.isArray(obj)) {
    const arrCopy = [];
    for (let i = 0; i < obj.length; i++) {
      arrCopy[i] = deepClone(obj[i]);
    }
    return arrCopy;
  }
  // Handle Object
  const objCopy = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      objCopy[key] = deepClone(obj[key]);
    }
  }
  return objCopy;
};

/**
 * Checks if an object is empty.
 * @param {object} obj The object to check.
 * @returns {boolean} Returns `true` if the object is empty, else `false`.
 */
const isEmpty = (obj) => {
  if (obj == null) {
    return true;
  }
  if (Array.isArray(obj) || typeof obj === 'string') {
    return obj.length === 0;
  }
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }
  return true;
};

/**
 * Gets the value at a path of an object. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 * @param {object} obj The object to query.
 * @param {string|string[]} path The path of the property to retrieve.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 */
const get = (obj, path, defaultValue) => {
  const pathArray = Array.isArray(path) ? path : path.split('.');
  const result = pathArray.reduce((acc, key) => (acc != null ? acc[key] : undefined), obj);
  return result === undefined ? defaultValue : result;
};

module.exports = { deepClone, isEmpty, get };