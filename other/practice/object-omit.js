/**
 * Omits the specified keys from an object.
 * @param {object} obj
 * @param {string[]} keys
 * @returns {object} The new object without omitted keys.
 */
const omit = (obj, keys) => {
  if (obj === null || typeof obj !== 'object') return {};
  const omitSet = new Set(keys);
  return Object.keys(obj).reduce((acc, key) => {
    if (!omitSet.has(key)) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
};

module.exports = omit;
