/**
 * Performs a deep clone of an object.
 *
 * @param {any} obj The object to clone.
 * @returns {any} The cloned object.
 */
const deepClone = (obj) => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }

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
 *
 * @param {object} obj The object to check.
 * @returns {boolean} True if the object is empty, false otherwise.
 */
const isEmpty = (obj) => {
  if (obj === null || obj === undefined) {
    return true;
  }
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};

/**
 * Retrieves a nested value from an object using a path string.
 *
 * @param {object} obj The object to query.
 * @param {string} path The path of the property to retrieve (e.g., 'a.b.c').
 * @returns {any} The value at the specified path, or undefined if not found.
 */
const getValueByPath = (obj, path) => {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
};

module.exports = {
  deepClone,
  isEmpty,
  getValueByPath,
};
