
/**
 * Safely retrieves a nested property from an object using a string path.
 * @param {object} obj - The object to query.
 * @param {string} path - The path of the property to retrieve (e.g., 'a.b.c').
 * @param {*} [defaultValue=undefined] - The value to return if the path is not found.
 * @returns {*} The value at the specified path or the default value.
 */
const deepGet = (obj, path, defaultValue = undefined) => {
  if (obj === null || typeof obj !== 'object' || typeof path !== 'string') {
    return defaultValue;
  }
  const pathArray = path.split('.').filter(key => key);
  const result = pathArray.reduce((acc, key) => (acc && acc[key] !== 'undefined' ? acc[key] : undefined), obj);
  return result === undefined ? defaultValue : result;
};

/**
 * Checks if a value is a plain object (created by `{}` or `new Object()`).
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a plain object, false otherwise.
 */
const isPlainObject = (value) => {
  if (value === null || typeof value !== 'object' || value.nodeType || (value.constructor && value.constructor.prototype.hasOwnProperty('isPrototypeOf')) === false) {
    return false;
  }
  // Check if the prototype has a constructor
  if (value.constructor === undefined) {
    return true;
  }
  // Check if the constructor has a prototype
  if (value.constructor.prototype === undefined) {
    return true;
  }
  // Check if the constructor's prototype is its own property
  return value.constructor.prototype.hasOwnProperty('isPrototypeOf');
};


module.exports = {
  deepGet,
  isPlainObject,
};
