/**
 * Creates an object composed of the picked object properties.
 *
 * @param {Object} obj The source object.
 * @param {string[]} keys The property paths to pick.
 * @returns {Object} Returns the new object.
 */
const pick = (obj, keys) => {
  const newObj = {};
  if (obj == null) {
    return newObj;
  }
  for (const key of keys) {
    if (key in obj) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

module.exports = { pick };