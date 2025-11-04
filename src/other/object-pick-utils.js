/**
 * Creates an object composed of the picked object properties.
 *
 * @param {object} object The source object.
 * @param {string|string[]} paths The property paths to pick.
 * @returns {object} Returns the new object.
 */
export const pick = (object, paths) => {
  const newObj = {};
  if (!object) {
    return newObj;
  }
  const pathsArray = Array.isArray(paths) ? paths : [paths];

  for (const path of pathsArray) {
    if (Object.prototype.hasOwnProperty.call(object, path)) {
      newObj[path] = object[path];
    }
  }
  return newObj;
};