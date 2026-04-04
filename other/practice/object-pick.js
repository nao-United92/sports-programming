/**
 * Picks specified keys from an object.
 * 
 * @param {Object} obj - The source object.
 * @param {string[]} keys - The keys to pick.
 * @returns {Object} A new object with the picked keys.
 */
function pick(obj, keys) {
  return keys.reduce((acc, key) => {
    if (obj && Object.prototype.hasOwnProperty.call(obj, key)) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}

module.exports = pick;
