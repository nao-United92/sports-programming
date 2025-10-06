/**
 * Safely retrieves a nested value from an object using a path string or array.
 * @param {object} obj The object to query.
 * @param {string|string[]} path The path of the property to retrieve.
 * @param {*} [defaultValue] The value to return if the path is not found.
 * @returns {*} Returns the resolved value, else the defaultValue.
 */
const get = (obj, path, defaultValue = undefined) => {
  const pathArray = Array.isArray(path) ? path : path.split('.').filter(key => key);
  const result = pathArray.reduce((acc, key) => acc && acc[key], obj);
  return result === undefined || result === null ? defaultValue : result;
};

module.exports = { get };