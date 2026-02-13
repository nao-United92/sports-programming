/**
 * Safely retrieves a deeply nested property from an object using a path array.
 * Returns a default value if the path does not exist or the value at the path is undefined.
 *
 * @param {Object} obj The object to query.
 * @param {Array<string|number>} path The path of the property to get.
 * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
 * @returns {*} Returns the resolved value or the default value.
 */
const getInPathWithDefault = (obj, path, defaultValue) => {
  if (obj === null || typeof obj !== 'object' || !Array.isArray(path) || path.length === 0) {
    return defaultValue;
  }

  let current = obj;
  for (let i = 0; i < path.length; i++) {
    const key = path[i];
    if (typeof current === 'object' && current !== null && Object.prototype.hasOwnProperty.call(current, key)) {
      current = current[key];
    } else {
      return defaultValue;
    }
  }

  return current === undefined ? defaultValue : current;
};

export default getInPathWithDefault;