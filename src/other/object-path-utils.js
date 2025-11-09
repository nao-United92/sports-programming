/**
 * Retrieves the value at a specified path of an object.
 *
 * @param {object} obj The object to query.
 * @param {string|Array<string>} path The path of the property to retrieve.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value, else the `defaultValue`.
 */
const get = (obj, path, defaultValue = undefined) => {
  const pathArray = Array.isArray(path)
    ? path
    : path.replace(/\[(\d+)\]/g, '.$1').split('.');

  let result = obj;
  for (const key of pathArray) {
    result = result?.[key];
    if (result === undefined) {
      return defaultValue;
    }
  }
  return result;
};

/**
 * Sets the value at a specified path of an object.
 *
 * @param {object} obj The object to modify.
 * @param {string|Array<string>} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {object} The modified object.
 */
const set = (obj, path, value) => {
  const pathArray = Array.isArray(path)
    ? path
    : path.replace(/\[(\d+)\]/g, '.$1').split('.');

  let current = obj;
  for (let i = 0; i < pathArray.length - 1; i++) {
    const key = pathArray[i];
    if (!current[key] || typeof current[key] !== 'object') {
      current[key] = {}; // Create a new object if it doesn't exist or is not an object
    }
    current = current[key];
  }
  current[pathArray[pathArray.length - 1]] = value;
  return obj;
};

module.exports = { get, set };