/**
 * Retrieves the value of a nested property from an object using a string path.
 * Handles dot notation and bracket notation for arrays.
 *
 * @param {object} obj The object to query.
 * @param {string|string[]} path The path of the property to retrieve.
 * @param {any} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {any} Returns the resolved value, else `defaultValue`.
 */
function getProperty(obj, path, defaultValue = undefined) {
  const pathArray = Array.isArray(path)
    ? path
    : (path ? String(path).replace(/\[(\d+)\]/g, '.$1').replace(/^\./, '').split('.') : []);

  let current = obj;
  for (let i = 0; i < pathArray.length; i++) {
    const key = pathArray[i];
    if (current === null || current === undefined) {
      return defaultValue;
    }
    current = current[key];
  }

  return current === undefined ? defaultValue : current;
}

module.exports = { getProperty };
