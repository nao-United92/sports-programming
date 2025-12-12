/**
 * Creates an object composed of the properties of `object` that are not boolean.
 *
 * @param {Object} object The source object.
 * @returns {Object} Returns the new object without boolean properties.
 * @example
 *
 * const object = { 'a': 1, 'b': true, 'c': 'hello', 'd': false, 'e': null };
 *
 * omitBooleanProperties(object);
 * // => { 'a': 1, 'c': 'hello', 'e': null }
 */
function omitBooleanProperties(object) {
  const result = {};

  if (object == null) {
    return result;
  }

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      if (typeof object[key] !== 'boolean') {
        result[key] = object[key];
      }
    }
  }

  return result;
}

export default omitBooleanProperties;