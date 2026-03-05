/**
 * Creates an object composed of the picked object properties.
 * @param {Object} obj - The source object.
 * @param {Array} keys - The property keys to pick.
 * @returns {Object} - The resulting object.
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
