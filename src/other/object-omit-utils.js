
/**
 * The opposite of `pick`; this method creates an object composed of the own
 * and inherited enumerable property paths of `object` that are not omitted.
 *
 * @param {object} object The source object.
 * @param {string|string[]} paths The property paths to omit.
 * @returns {object} Returns the new object.
 */
export const omit = (object, paths) => {
  if (!object) {
    return {};
  }
  const newObj = { ...object };
  const pathsArray = Array.isArray(paths) ? paths : [paths];

  for (const path of pathsArray) {
    delete newObj[path];
  }
  return newObj;
};
