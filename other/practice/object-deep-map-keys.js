/**
 * Recursively maps the keys of an object.
 * @param {Object} obj - The object to transform.
 * @param {Function} fn - The mapping function (key, value) => newKey.
 * @returns {Object} The new object with transformed keys.
 */
function deepMapKeys(obj, fn) {
  if (Array.isArray(obj)) {
    return obj.map(val => deepMapKeys(val, fn));
  }
  if (obj !== null && typeof obj === 'object') {
    return Object.keys(obj).reduce((acc, key) => {
      const val = obj[key];
      const newKey = fn(key, val);
      acc[newKey] = deepMapKeys(val, fn);
      return acc;
    }, {});
  }
  return obj;
}

module.exports = deepMapKeys;
