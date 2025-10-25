

/**
 * Gets the value at a path of an object. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @param {Object} obj The object to query.
 * @param {string|string[]} path The path of the property to retrieve.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 */
const get = (obj, path, defaultValue) => {
  if (obj === null || typeof obj !== 'object') {
    return defaultValue;
  }

  const pathArray = Array.isArray(path) ? path : path.replace(/\\[(\\.+?)\\]/g, '.$1').split('.');

  let result = obj;
  for (const key of pathArray) {
    result = result !== null && result !== undefined ? result[key] : undefined;
    if (result === undefined) {
      return defaultValue;
    }
  }
  return result;
};

module.exports = { get };

