/**
 * Gets the value at a path of an object. If the resolved value is undefined, the defaultValue is returned in its place.
 * @param {Object} obj The object to query.
 * @param {Array|string} path The path of the property to retrieve.
 * @param {*} [defaultValue] The value returned for undefined resolved values.
 * @returns {*} Returns the resolved value.
 */
const get = (obj, path, defaultValue = undefined) => {
  const pathArray = Array.isArray(path) ? path : path.split('.').filter(key => key);
  const result = pathArray.reduce((acc, key) => (acc && acc[key] !== 'undefined' ? acc[key] : undefined), obj);
  return result === undefined ? defaultValue : result;
};

/**
 * Sets the value at a path of an object. If a portion of the path doesn't exist, it's created.
 * @param {Object} obj The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the modified object.
 */
const set = (obj, path, value) => {
  const pathArray = Array.isArray(path) ? path : path.split('.').filter(key => key);
  let current = obj;
  for (let i = 0; i < pathArray.length - 1; i++) {
    const key = pathArray[i];
    if (current[key] === undefined) {
      current[key] = {};
    }
    current = current[key];
  }
  current[pathArray[pathArray.length - 1]] = value;
  return obj;
};

module.exports = { get, set };
