/**
 * Omits specified keys from an object.
 * 
 * @param {Object} obj - The source object.
 * @param {string[]} keys - The keys to omit.
 * @returns {Object} A new object without the omitted keys.
 */
function omit(obj, keys) {
  if (!obj) return {};
  const result = { ...obj };
  keys.forEach(key => {
    delete result[key];
  });
  return result;
}

module.exports = omit;
