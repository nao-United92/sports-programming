/**
 * Gets the value at a path of an object. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @param {object} obj The object to query.
 * @param {string|string[]} path The path of the property to retrieve.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 */
const get = (obj, path, defaultValue) => {
  const pathArray = Array.isArray(path)
    ? path
    : path.replace(/\[(\d+)\]/g, '.$1').split('.').filter(Boolean);

  if (pathArray.length === 0) {
    return obj === undefined ? defaultValue : obj;
  }

  const result = pathArray.reduce((prevObj, key) => {
    if (prevObj && typeof prevObj === 'object' && key in prevObj) {
      return prevObj[key];
    }
    return undefined;
  }, obj);

  return result === undefined ? defaultValue : result;
};

module.exports = { get };