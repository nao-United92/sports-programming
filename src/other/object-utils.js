/**
 * Gets the value at a nested path within an object.
 * @param {object} obj The object to query.
 * @param {string|string[]} path The path of the property to retrieve.
 * @param {*} [defaultValue] The value returned for unresolved values.
 * @returns {*} Returns the resolved value, else the defaultValue.
 */
const get = (obj, path, defaultValue = undefined) => {
  const pathArray = Array.isArray(path) ? path : path.replace(/[\[\]]/g, '.').replace(/\.\./g, '.').split('.');
  const result = pathArray.reduce((acc, key) => (acc && acc[key] != null ? acc[key] : undefined), obj);
  return result === undefined ? defaultValue : result;
};

/**
 * Sets the value at a nested path within an object. This function mutates the object.
 * @param {object} obj The object to modify.
 * @param {string|string[]} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {object} Returns the modified object.
 */
const set = (obj, path, value) => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  const pathArray = Array.isArray(path) ? path : path.replace(/[\[\]]/g, '.').replace(/\.\./g, '.').split('.');
  let current = obj;
  for (let i = 0; i < pathArray.length; i++) {
    const key = pathArray[i];
    if (i === pathArray.length - 1) {
      current[key] = value;
    } else {
      if (current[key] == null || typeof current[key] !== 'object') {
        const nextKey = pathArray[i + 1];
        current[key] = /^\d+$/.test(nextKey) ? [] : {};
      }
      current = current[key];
    }
  }
  return obj;
};

module.exports = {
  get,
  set,
};
