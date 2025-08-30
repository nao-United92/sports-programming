/**
 * Creates an object composed of the own and inherited enumerable property paths of object that are not omitted.
 *
 * @param {Object} object The source object.
 * @param {string|string[]} paths The property paths to omit.
 * @returns {Object} Returns the new object.
 */
export const omit = (object, paths) => {
  if (object == null) {
    return {};
  }
  const propsToOmit = Array.isArray(paths) ? paths : [paths];
  return Object.fromEntries(
    Object.entries(object).filter(([key]) => !propsToOmit.includes(key))
  );
};
