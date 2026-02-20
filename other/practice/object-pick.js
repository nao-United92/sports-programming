/**
 * Creates an object composed of the picked object properties.
 *
 * @param {Object} obj - The source object.
 * @param {string[]} paths - The property paths to pick.
 * @returns {Object} The new object.
 */
export const pick = (obj, paths) => {
  return paths.reduce((acc, path) => {
    if (Object.prototype.hasOwnProperty.call(obj, path)) {
      acc[path] = obj[path];
    }
    return acc;
  }, {});
};
