/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @param {object} object The object to query.
 * @param {string|Array<string>} path The path of the property to retrieve.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 */
export const get = (object, path, defaultValue) => {
  const pathArray = Array.isArray(path)
    ? path
    : path
        .replace(/\[(\d+)\]/g, '.$1') // convert indexes to properties (e.g., 'a[0]' becomes 'a.0')
        .split('.')
        .filter(Boolean); // split by dot and remove empty strings

  if (pathArray.length === 0) {
    return defaultValue;
  }

  let current = object;
  for (let i = 0; i < pathArray.length; i++) {
    if (current === null || current === undefined) {
      return defaultValue;
    }
    current = current[pathArray[i]];
  }

  return current === undefined ? defaultValue : current;
};