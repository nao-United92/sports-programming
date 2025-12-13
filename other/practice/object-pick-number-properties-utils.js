/**
 * Creates an object composed of the number properties of `object`.
 *
 * @param {Object} object The source object.
 * @returns {Object} Returns the new object with only number properties.
 * @example
 *
 * const object = { 'a': 1, 'b': true, 'c': 'hello', 'd': 0, 'e': null, 'f': -5 };
 *
 * pickNumberProperties(object);
 * // => { 'a': 1, 'd': 0, 'f': -5 }
 */
function pickNumberProperties(object) {
  const result = {};

  if (object == null) {
    return result;
  }

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      if (typeof object[key] === 'number') {
        result[key] = object[key];
      }
    }
  }

  return result;
}

export default pickNumberProperties;