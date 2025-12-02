/**
 * Gets the value at a nested path of an object. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @param {object} obj The object to query.
 * @param {string|string[]} path The path of the property to retrieve (e.g., 'a.b[0].c').
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 */
export const get = (obj, path, defaultValue) => {
  const pathArray = Array.isArray(path) ? path : path.replace(/\[(\d+)\]/g, '.$1').split('.');

  let result = obj;
  for (const key of pathArray) {
    result = result?.[key];
    if (result === undefined) {
      return defaultValue;
    }
  }
  return result;
};

/**
 * Sets the value at a nested path of an object. If a portion of the path
 * doesn't exist, it's created. Arrays are created for missing index properties.
 *
 * @param {object} obj The object to modify.
 * @param {string|string[]} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {object} Returns the modified object.
 */
export const set = (obj, path, value) => {
  const pathArray = Array.isArray(path) ? path : path.replace(/\[(\d+)\]/g, '.$1').split('.');

  let current = obj;
  for (let i = 0; i < pathArray.length - 1; i++) {
    const key = pathArray[i];
    const nextKey = pathArray[i + 1];

    if (current[key] === undefined || current[key] === null) {
      // If the next key looks like an array index, create an array, otherwise an object.
      if (/^\d+$/.test(nextKey)) {
        current[key] = [];
      } else {
        current[key] = {};
      }
    }
    current = current[key];
  }

  current[pathArray[pathArray.length - 1]] = value;
  return obj;
};
