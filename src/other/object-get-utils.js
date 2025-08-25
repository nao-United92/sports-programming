/**
 * Gets the value at `path` of `object`. If the resolved value is `undefined`,
 * the `defaultValue` is returned in its place.
 *
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
 * @returns {*} Returns the resolved value.
 */
export const get = (object, path, defaultValue) => {
  if (object === null || typeof object !== 'object') {
    return defaultValue;
  }

  const pathArray = Array.isArray(path)
    ? path
    : path.replace(/\\[(\\]/g, '.').replace(/\\[|\\]/g, '.').split('.').filter(Boolean);

  let current = object;
  for (let i = 0; i < pathArray.length; i++) {
    const key = pathArray[i];
    if (current === null || typeof current !== 'object' || !current.hasOwnProperty(key)) {
      return defaultValue;
    }
    current = current[key];
  }

  return current === undefined ? defaultValue : current;
};