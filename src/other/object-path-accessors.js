/**
 * Safely retrieves a nested value from an object via a path.
 * @param {object} obj The object to query.
 * @param {string|string[]} path The path of the property to retrieve (e.g., 'a.b[0].c').
 * @param {*} [defaultValue=undefined] The value to return if the path is not found.
 * @returns {*} Returns the resolved value, else the defaultValue.
 */
const deepGet = (obj, path, defaultValue = undefined) => {
  const pathArray = Array.isArray(path) ? path : path.replace(/\[(\d+)\]/g, '.$1').split('.');
  const result = pathArray.reduce((acc, key) => (acc && acc[key] != null ? acc[key] : undefined), obj);
  return result === undefined ? defaultValue : result;
};

/**
 * Safely sets a nested value in an object via a path.
 * @param {object} obj The object to modify.
 * @param {string|string[]} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {object} Returns the modified object.
 */
const deepSet = (obj, path, value) => {
  const pathArray = Array.isArray(path) ? path : path.replace(/\[(\d+)\]/g, '.$1').split('.');
  let current = obj;
  for (let i = 0; i < pathArray.length; i++) {
    const key = pathArray[i];
    if (i === pathArray.length - 1) {
      current[key] = value;
    } else {
      if (current[key] === undefined || typeof current[key] !== 'object' || current[key] === null) {
        const nextKey = pathArray[i + 1];
        current[key] = /^\d+$/.test(nextKey) ? [] : {};
      }
      current = current[key];
    }
  }
  return obj;
};

module.exports = { deepGet, deepSet };
