/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @param {object} object The object to query.
 * @param {Array|string} path The path of the property to retrieve.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 */
function get(object, path, defaultValue) {
  // Convert path to an array of keys, handling bracket notation
  const pathArray = Array.isArray(path)
    ? path
    : path.replace(/\[(.*?)\]/g, '.$1').split('.');

  const result = pathArray.reduce((obj, key) => {
    if (obj === null || obj === undefined) {
      return undefined;
    }
    // Trim brackets and quotes from keys, if any, to handle array indices
    const cleanKey = key.replace(/^['"`]?|['"`]?$/g, '');
    return obj[cleanKey];
  }, object);

  return result === undefined ? defaultValue : result;
}

module.exports = { get };
