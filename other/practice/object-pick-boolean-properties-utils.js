/**
 * Creates an object composed of the boolean properties of `object`.
 *
 * @param {Object} object The source object.
 * @returns {Object} Returns the new object with only boolean properties.
 * @example
 *
 * const object = { 'a': 1, 'b': true, 'c': 'hello', 'd': false, 'e': null };
 *
 * pickBooleanProperties(object);
 * // => { 'b': true, 'd': false }
 */
function pickBooleanProperties(object) {
  const result = {};

  if (object == null) {
    return result;
  }

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      if (typeof object[key] === 'boolean') {
        result[key] = object[key];
      }
    }
  }

  return result;
}

export default pickBooleanProperties;