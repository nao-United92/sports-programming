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
  const pathArray = Array.isArray(path)
    ? path
    : path.replace(/[\[\]']+/g, '.').split('.').filter(Boolean);

  let result = object;
  for (const key of pathArray) {
    result = result?.[key];
    if (result === undefined) {
      return defaultValue;
    }
  }
  return result;
};

module.exports = {
  get
};