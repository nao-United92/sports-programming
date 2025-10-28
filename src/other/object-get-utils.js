/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to retrieve.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 */
const get = (object, path, defaultValue) => {
  // If path is not a string or an array, return default value
  if (typeof path !== 'string' && !Array.isArray(path)) {
    return defaultValue;
  }

  // Create an array of keys from the path string
  const pathArray = Array.isArray(path) ? path : path.replace(/\[(\w+)\]/g, '.$1').replace(/^\./, '').split('.');

  // Find the value
  let result = object;
  for (const key of pathArray) {
    if (result === null || result === undefined) {
      return defaultValue;
    }
    result = result[key];
  }

  return result === undefined ? defaultValue : result;
};

export { get };
