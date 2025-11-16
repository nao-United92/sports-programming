/**
 * Creates a deep clone of an object.
 * @param {object} obj The object to clone.
 * @returns {object} The cloned object.
 */
export const deepClone = (obj) => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  // Handle Date
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }
  // Handle Array
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }
  // Handle Object
  const clonedObj = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }
  return clonedObj;
};

/**
 * Checks if an object is empty.
 * @param {object} obj The object to check.
 * @returns {boolean} True if the object is empty, false otherwise.
 */
export const isEmpty = (obj) =>
  obj && Object.keys(obj).length === 0 && obj.constructor === Object;

/**
 * Safely gets a nested value from an object.
 * @param {object} obj The object to query.
 * @param {string|string[]} path The path of the property to retrieve.
 * @param {*} [defaultValue=undefined] The value to return if the path is not found.
 * @returns {*} The value at the specified path or the default value.
 */
export const get = (obj, path, defaultValue = undefined) => {
  const pathArray = Array.isArray(path) ? path : path.split('.').filter(i => i);
  const result = pathArray.reduce((acc, key) => (acc && acc[key] !== 'undefined' ? acc[key] : undefined), obj);
  return result === undefined ? defaultValue : result;
};
