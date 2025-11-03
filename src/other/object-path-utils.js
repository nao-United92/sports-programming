/**
 * Gets the value at `path` of `object`. If the resolved value is `undefined`, the `defaultValue` is returned in its place.
 * @param {object} object The object to query.
 * @param {string|string[]} path The path of the property to get.
 * @param {any} [defaultValue] The value returned if the resolved value is `undefined`.
 * @returns {any} Returns the resolved value.
 */
export const get = (object, path, defaultValue) => {
  const pathArray = Array.isArray(path) ? path : path.split('.');
  let current = object;
  for (let i = 0; i < pathArray.length; i++) {
    if (current === null || typeof current !== 'object') {
      return defaultValue;
    }
    current = current[pathArray[i]];
  }
  return current === undefined ? defaultValue : current;
};

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist, it's created.
 * @param {object} object The object to modify.
 * @param {string|string[]} path The path of the property to set.
 * @param {any} value The value to set.
 * @returns {object} Returns the object.
 */
export const set = (object, path, value) => {
  const pathArray = Array.isArray(path) ? path : path.split('.');
  let current = object;
  for (let i = 0; i < pathArray.length - 1; i++) {
    const key = pathArray[i];
    if (current[key] === null || typeof current[key] !== 'object') {
      current[key] = {}; // Create an object if it doesn't exist or is not an object
    }
    current = current[key];
  }
  current[pathArray[pathArray.length - 1]] = value;
  return object;
};