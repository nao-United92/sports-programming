/**
 * Creates an object composed of the picked object properties.
 *
 * @param {Object} object The source object.
 * @param {string|string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
export const pick = (object, paths) => {
  if (object == null) {
    return {};
  }
  const props = Array.isArray(paths) ? paths : [paths];
  const result = {};
  for (const prop of props) {
    if (Object.prototype.hasOwnProperty.call(object, prop)) {
      result[prop] = object[prop];
    }
  }
  return result;
};