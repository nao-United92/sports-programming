/**
 * Creates an object composed of the own and inherited enumerable property paths of object that are not omitted.
 *
 * @param {Object} obj - The source object.
 * @param {string[]} paths - The property paths to omit.
 * @returns {Object} The new object.
 */
export const omit = (obj, paths) => {
  const result = { ...obj };
  paths.forEach(path => {
    delete result[path];
  });
  return result;
};
