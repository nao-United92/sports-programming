/**
 * Creates an object composed of the inverted keys and values of object.
 *
 * @param {Object} object The source object.
 * @returns {Object} Returns the new inverted object.
 */
export function invert(object) {
  const result = {};
  if (object == null) {
    return result;
  }
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      result[object[key]] = key;
    }
  }
  return result;
}
