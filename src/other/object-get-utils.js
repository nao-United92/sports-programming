
/**
 * Gets the value at a specified path of an object.
 * If the resolved value is undefined, the defaultValue is returned in its place.
 *
 * @param {object} object The object to query.
 * @param {string|string[]} path The path of the property to retrieve.
 * @param {*} [defaultValue] The value returned for unresolved values.
 * @returns {*} Returns the resolved value.
 */
export function get(object, path, defaultValue) {
  const pathArray = Array.isArray(path) ? path : path.split('.').filter(key => key);

  const result = pathArray.reduce((obj, key) => {
    return (obj && obj[key] !== 'undefined') ? obj[key] : undefined;
  }, object);

  return result === undefined ? defaultValue : result;
}
