
/**
 * The opposite of pick; this method creates an object composed of the own
 * and inherited enumerable property paths of object that are not omitted.
 *
 * @param {Object} object The source object.
 * @param {string[]} keys The property keys to omit.
 * @returns {Object} Returns the new object.
 */
export function omit(object, keys) {
  if (object == null) {
    return {};
  }

  const newObject = {};
  const keysToOmit = new Set(keys);

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key) && !keysToOmit.has(key)) {
      newObject[key] = object[key];
    }
  }

  return newObject;
}
