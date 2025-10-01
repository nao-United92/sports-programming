/**
 * Creates an object composed of the own and inherited enumerable property paths of object that are not omitted.
 *
 * @param {Object} object The source object.
 * @param {string[]} keys The property paths to omit.
 * @returns {Object} Returns the new object.
 */
export const omit = (object, keys) => {
  if (object == null) {
    return {};
  }
  const keySet = new Set(keys);
  return Object.keys(object).reduce((result, key) => {
    if (!keySet.has(key)) {
      result[key] = object[key];
    }
    return result;
  }, {});
};