/**
 * Gets the value at a path of an object. If the resolved value is
 * undefined, the defaultValue is returned in its place.
 *
 * @param {Object} object The object to query.
 * @param {string|string[]} path The path of the property to retrieve.
 * @param {*} [defaultValue] The value returned for undefined resolved values.
 * @returns {*} Returns the resolved value.
 */
export const get = (object, path, defaultValue) => {
  const pathArray = Array.isArray(path) ? path : path.split('.');

  let result = object;
  for (const key of pathArray) {
    if (result === null || result === undefined) {
      return defaultValue;
    }
    result = result[key];
  }

  return result === undefined ? defaultValue : result;
};