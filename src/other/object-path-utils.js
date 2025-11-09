/**
 * Retrieves the value at a specified path of an object.
 *
 * @param {object} obj The object to query.
 * @param {string|Array<string>} path The path of the property to retrieve.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value, else the `defaultValue`.
 */
const get = (obj, path, defaultValue = undefined) => {
  const pathArray = Array.isArray(path)
    ? path
    : path.replace(/\[(\d+)\]/g, '.$1').split('.');

  let result = obj;
  for (const key of pathArray) {
    result = result?.[key];
    if (result === undefined) {
      return defaultValue;
    }
  }
  return result;
};

module.exports = { get };