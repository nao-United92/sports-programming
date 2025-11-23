/**
 * The opposite of `pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * @param {Object} object The source object.
 * @param {string|string[]} paths The property paths to omit.
 * @returns {Object} Returns the new object.
 */
export const omit = (object, paths) => {
  if (object == null) {
    return {};
  }
  const propsToOmit = new Set(Array.isArray(paths) ? paths : [paths]);
  const result = {};
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key) && !propsToOmit.has(key)) {
      result[key] = object[key];
    }
  }
  return result;
};