/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to retrieve.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 */
export const get = (object, path, defaultValue) => {
  // Use a simpler regex to handle dot and bracket notation
  const pathArray = Array.isArray(path) ? path : path.match(/[^.[\]]+/g);

  if (!pathArray) {
    return defaultValue;
  }

  const result = pathArray.reduce((obj, key) => {
    // Ensure obj is not null/undefined before trying to access a key
    return obj ? obj[key] : undefined;
  }, object);
  
  return result === undefined ? defaultValue : result;
};
