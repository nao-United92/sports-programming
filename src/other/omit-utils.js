/**
 * The opposite of `pick`; this method creates an object composed of the own and inherited enumerable property paths of `object` that are not omitted.
 *
 * @param {Object} object The source object.
 * @param {string[]} keys The property paths to omit.
 * @returns {Object} Returns the new object.
 */
export const omit = (object, keys) => {
  if (!object) {
    return {};
  }
  const newObject = { ...object };
  keys.forEach(key => {
    delete newObject[key];
  });
  return newObject;
};