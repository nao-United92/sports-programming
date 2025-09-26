/**
 * Gets the value at `path` of `object`.
 * If the resolved value is `undefined`, the `defaultValue` is returned in its place.
 *
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 */
function get(object, path, defaultValue) {
  const pathArray = Array.isArray(path) ? path : path.split('.');
  let current = object;

  for (let i = 0; i < pathArray.length; i++) {
    if (current === null || typeof current !== 'object') {
      return defaultValue;
    }
    current = current[pathArray[i]];
  }

  return current === undefined ? defaultValue : current;
}

module.exports = { get };