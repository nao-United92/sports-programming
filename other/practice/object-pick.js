/**
 * Picks the specified keys from an object.
 * @param {object} obj
 * @param {string[]} keys
 * @returns {object} The new object with picked keys.
 */
const pick = (obj, keys) => {
  if (obj === null || typeof obj !== 'object') return {};
  return keys.reduce((acc, key) => {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
};

module.exports = pick;
