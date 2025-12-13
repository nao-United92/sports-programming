/**
 * Creates an object composed of the properties of `object` that are not string.
 *
 * @param {Object} object The source object.
 * @returns {Object} Returns the new object without string properties.
 * @example
 *
 * const object = { 'a': 1, 'b': true, 'c': 'hello', 'd': 0, 'e': null, 'f': 'world' };
 *
 * omitStringProperties(object);
 * // => { 'a': 1, 'b': true, 'd': 0, 'e': null }
 */
function omitStringProperties(object) {
  const result = {};

  if (object == null) {
    return result;
  }

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      if (typeof object[key] !== 'string') {
        result[key] = object[key];
      }
    }
  }

  return result;
}

export default omitStringProperties;