/**
 * Creates an object composed of the properties of `object` that are not `null` or `undefined`.
 *
 * @param {Object} object The source object.
 * @returns {Object} Returns the new object without nil properties.
 * @example
 *
 * const object = { 'a': 1, 'b': null, 'c': 'hello', 'd': undefined, 'e': false };
 *
 * omitNilProperties(object);
 * // => { 'a': 1, 'c': 'hello', 'e': false }
 */
function omitNilProperties(object) {
  const result = {};

  if (object == null) {
    return result;
  }

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      if (object[key] !== null && object[key] !== undefined) {
        result[key] = object[key];
      }
    }
  }

  return result;
}

export default omitNilProperties;