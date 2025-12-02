/**
 * Deep clones an object.
 * @param {object} obj The object to clone.
 * @returns {object} The cloned object.
 */
export const deepClone = (obj) => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  const clone = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
};

/**
 * Checks if an object is empty (has no own properties).
 * @param {object} obj The object to check.
 * @returns {boolean} True if the object is empty, false otherwise.
 */
export const isEmpty = (obj) => {
  if (obj === null || typeof obj !== 'object') {
    return true;
  }
  return Object.keys(obj).length === 0;
};

/**
 * Safely gets a nested property from an object.
 * @param {object} obj The object to query.
 * @param {string|string[]} path The path of the property to retrieve.
 * @param {*} [defaultValue] The value to return if the path is not found.
 * @returns {*} The value at the path or the default value.
 */
export const get = (obj, path, defaultValue = undefined) => {
  const pathArray = Array.isArray(path) ? path : path.replace(/\[(\d+)\]/g, '.$1').split('.').filter(key => key);
  const result = pathArray.reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
  return result === undefined ? defaultValue : result;
};
