/**
 * Creates an object composed of the own and inherited enumerable property paths of `object` that are not omitted.
 * @param {object} object The source object.
 * @param {string|string[]} paths The property paths to omit.
 * @returns {object} Returns the new object.
 */
export const omit = (object, paths) => {
  if (object === null || object === undefined) {
    return {};
  }

  const newObj = { ...object };
  const pathsToOmit = Array.isArray(paths) ? paths : [paths];

  for (const path of pathsToOmit) {
    delete newObj[path];
  }

  return newObj;
};
