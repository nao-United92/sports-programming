/**
 * Gets the value at a specified path within a nested object.
 *
 * @param {object} obj The object to query.
 * @param {string|string[]} path The path of the property to retrieve. Can be a dot-separated string or an array of keys.
 * @param {*} [defaultValue] The value to return if the path is not found.
 * @returns {*} The value at the specified path, or the default value if not found.
 */
export const get = (obj, path, defaultValue) => {
  const pathArray = Array.isArray(path)
    ? path
    : path.replace(/\\[(\\d+)\\]/g, ".$1").split(".");

  let result = obj;
  for (const key of pathArray) {
    result = (result === null || result === undefined) ? undefined : result[key];
    if (result === undefined) {
      return defaultValue;
    }
  }
  return result;
};
