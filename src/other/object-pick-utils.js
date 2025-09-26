/**
 * Creates a shallow copy of `object` composed of the `paths` properties.
 *
 * @param {Object} object The source object.
 * @param {Array|string} paths The property keys to pick.
 * @returns {Object} Returns the new object.
 */
function pick(object, paths) {
  const result = {};
  const pathArray = Array.isArray(paths) ? paths : [paths];

  for (const key of pathArray) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      result[key] = object[key];
    }
  }

  return result;
}

module.exports = { pick };
