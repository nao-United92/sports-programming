/**
 * Creates an object composed of the properties of `object` that are not number.
 *
 * @param {Object} object The source object.
 * @returns {Object} Returns the new object without number properties.
 * @example
 *
 * const object = { 'a': 1, 'b': true, 'c': 'hello', 'd': 0, 'e': null, 'f': -5 };
 *
 * omitNumberProperties(object);
 * // => { 'b': true, 'c': 'hello', 'e': null }
 */
function omitNumberProperties(object) {
  const result = {};

  if (object == null) {
    return result;
  }

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      if (typeof object[key] !== 'number') {
        result[key] = object[key];
      }
    }
  }

  return result;
}

export default omitNumberProperties;