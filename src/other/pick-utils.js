
/**
 * Creates an object composed of the picked object properties.
 *
 * @param {Object} object The source object.
 * @param {string[]} keys The property keys to pick.
 * @returns {Object} Returns the new object.
 */
export function pick(object, keys) {
  if (object == null) {
    return {};
  }
  return keys.reduce((obj, key) => {
    if (object != null && Object.prototype.hasOwnProperty.call(object, key)) {
      obj[key] = object[key];
    }
    return obj;
  }, {});
}
