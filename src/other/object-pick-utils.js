/**
 * Creates an object composed of the picked object properties.
 *
 * @param {object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {object} Returns the new object.
 */
const pick = (object, paths) => {
  const result = {};
  if (object == null) {
    return result;
  }
  for (const key of paths) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      result[key] = object[key];
    }
  }
  return result;
};

export { pick };