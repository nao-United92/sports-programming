/**
 * Gets the value at a nested path of an object. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @param {object} obj The object to query.
 * @param {string|Array<string>} path The path of the property to retrieve.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value or the default value.
 */
export const get = (obj, path, defaultValue) => {
  // Convert path to an array if it's a string, handling array indices
  const pathArray = Array.isArray(path)
    ? path
    : path.replace(/\[(\d+)\]/g, '.$1').split('.');

  let result = obj;
  for (let i = 0; i < pathArray.length; i++) {
    // If result is null or undefined at any point, stop and return defaultValue
    if (result == null) {
      return defaultValue;
    }
    result = result[pathArray[i]];
  }

  return result === undefined ? defaultValue : result;
};
