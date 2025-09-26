/**
 * Creates a shallow copy of `object` excluding the `paths` properties.
 *
 * @param {Object} object The source object.
 * @param {Array|string} paths The property keys to omit.
 * @returns {Object} Returns the new object.
 */
function omit(object, paths) {
  const result = {};
  const pathArray = Array.isArray(paths) ? paths : [paths];

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key) && !pathArray.includes(key)) {
      result[key] = object[key];
    }
  }

  return result;
}

module.exports = { omit };