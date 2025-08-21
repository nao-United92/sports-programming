/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @param {Object} obj The object to query.
 * @param {string|string[]} path The path of the property to retrieve.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 */
export const get = (obj, path, defaultValue) => {
  const pathArray = Array.isArray(path) ? path : path.split('.').filter(Boolean);

  const result = pathArray.reduce((acc, key) => {
    return acc && acc[key] !== 'undefined' ? acc[key] : undefined;
  }, obj);

  return result === undefined ? defaultValue : result;
};
