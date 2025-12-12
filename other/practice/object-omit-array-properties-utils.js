/**
 * Creates an object composed of the properties of `object` that are not array.
 *
 * @param {Object} object The source object.
 * @returns {Object} Returns the new object without array properties.
 * @example
 *
 * const object = { 'a': 1, 'b': [1, 2], 'c': 'hello', 'd': [], 'e': null, 'f': ['world'] };
 *
 * omitArrayProperties(object);
 * // => { 'a': 1, 'c': 'hello', 'e': null }
 */
function omitArrayProperties(object) {
  const result = {};

  if (object == null) {
    return result;
  }

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      if (!Array.isArray(object[key])) {
        result[key] = object[key];
      }
    }
  }

  return result;
}

export default omitArrayProperties;