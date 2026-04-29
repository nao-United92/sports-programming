/**
 * Creates an object composed of the picked object properties.
 * @param {Object} object - The source object.
 * @param {string[]} paths - The property paths to pick.
 * @returns {Object} - The new object.
 */
function pick(object, paths) {
  if (object == null) {
    return {};
  }
  return paths.reduce((acc, key) => {
    if (key in object) {
      acc[key] = object[key];
    }
    return acc;
  }, {});
}

module.exports = pick;
