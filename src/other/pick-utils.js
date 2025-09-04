/**
 * Creates an object composed of the picked object properties.
 *
 * @param {Object} object The source object.
 * @param {string[]} keys The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * const object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
function pick(object, keys) {
  if (object == null) {
    return {};
  }
  return keys.reduce((obj, key) => {
    if (object && Object.prototype.hasOwnProperty.call(object, key)) {
      obj[key] = object[key];
    }
    return obj;
  }, {});
}

export default pick;