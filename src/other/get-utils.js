/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to retrieve.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * get(object, 'a[0].b.c');
 * // => 3
 *
 * get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  if (object == null && path != null && String(path).length > 0) {
    return defaultValue;
  }
  
  if (path == null || String(path).length === 0) {
      return object === undefined ? defaultValue : object;
  }

  const pathArray = Array.isArray(path) ? path : String(path).replace(/\[(\d+)\]/g, '.$1').split('.');

  let result = object;
  for (let i = 0; i < pathArray.length; i++) {
    if (result == null) {
      return defaultValue;
    }
    result = result[pathArray[i]];
  }

  return result === undefined ? defaultValue : result;
}

export default get;
