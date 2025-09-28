
/**
 * Creates an object composed of the own enumerable property paths of object that are not omitted.
 *
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to omit.
 * @returns {Object} Returns the new object.
 */
export function omit(object, paths) {
  const newObj = { ...object };
  paths.forEach(path => {
    if (path in newObj) {
      delete newObj[path];
    }
  });
  return newObj;
}
