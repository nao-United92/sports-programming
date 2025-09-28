
/**
 * Gets the value at path of object. If the resolved value is
 * undefined, the defaultValue is returned in its place.
 *
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to retrieve.
 * @param {*} [defaultValue] The value returned for undefined resolved values.
 * @returns {*} Returns the resolved value.
 */
export function get(object, path, defaultValue) {
  const pathArray = Array.isArray(path) ? path : path.replace(/[\[\]]/g, '.').replace(/\.\./g, '.').replace(/^\.|\.$/g, '').split('.');
  const result = pathArray.reduce((obj, key) => (obj && obj[key] != null ? obj[key] : undefined), object);
  return result === undefined ? defaultValue : result;
}
