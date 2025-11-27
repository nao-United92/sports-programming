/**
 * Retrieves the value at a specified path within a nested object.
 * Path should be a dot-separated string.
 *
 * @param {object} obj The object to query.
 * @param {string} path The path of the property to retrieve.
 * @returns {*} The value at the specified path, or undefined if not found.
 */
const getObjectByPath = (obj, path) => {
  if (obj === null || obj === undefined || typeof path !== 'string') {
    return undefined;
  }
  if (path === '') {
    return obj;
  }
  const keys = path.split('.');
  return keys.reduce((current, key) => {
    return current?.[key];
  }, obj);
};

/**
 * Sets the value at a specified path within a nested object.
 * If parts of the path do not exist, they will be created.
 *
 * @param {object} obj The object to modify.
 * @param {string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {object} The modified object.
 */
const setObjectByPath = (obj, path, value) => {
  if (obj === null || obj === undefined || typeof path !== 'string' || path === '') {
    return obj;
  }
  const keys = path.split('.');
  let current = obj;

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (typeof current[key] !== 'object' || current[key] === null) {
      const nextKey = keys[i + 1];
      // Check if the next key is a valid array index
      current[key] = /^\d+$/.test(nextKey) ? [] : {};
    }
    current = current[key];
  }

  const lastKey = keys[keys.length - 1];
  current[lastKey] = value;
  return obj;
};

module.exports = { getObjectByPath, setObjectByPath };
