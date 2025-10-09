/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @param {object} object The object to query.
 * @param {Array|string} path The path of the property to retrieve.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 */
export const get = (object, path, defaultValue) => {
  // convert path to array
  const pathArray = Array.isArray(path) ? path : path.replace(/\[(\d+)\]/g, '.$1').split('.');

  const result = pathArray.reduce((obj, key) => (obj && obj[key] !== undefined) ? obj[key] : undefined, object);

  return result === undefined ? defaultValue : result;
};
