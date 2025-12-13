/**
 * Creates an object composed of the string properties of `object`.
 *
 * @param {Object} object The source object.
 * @returns {Object} Returns the new object with only string properties.
 * @example
 *
 * const object = { 'a': 1, 'b': true, 'c': 'hello', 'd': 0, 'e': null, 'f': 'world' };
 *
 * pickStringProperties(object);
 * // => { 'c': 'hello', 'f': 'world' }
 */
function pickStringProperties(object) {
  const result = {};

  if (object == null) {
    return result;
  }

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      if (typeof object[key] === 'string') {
        result[key] = object[key];
      }
    }
  }

  return result;
}

export default pickStringProperties;