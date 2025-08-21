/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist, it's created.
 * Arrays are created for missing index properties while objects are created for all other missing properties.
 * This function mutates `object`.
 *
 * @param {Object} obj The object to modify.
 * @param {string|string[]} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 */
export const set = (obj, path, value) => {
  const pathArray = Array.isArray(path) ? path : path.split('.');
  let current = obj;

  for (let i = 0; i < pathArray.length - 1; i++) {
    const key = pathArray[i];
    if (current[key] === undefined || typeof current[key] !== 'object') {
      current[key] = {};
    }
    current = current[key];
  }

  current[pathArray[pathArray.length - 1]] = value;
  return obj;
};
