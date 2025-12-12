/**
 * Creates an object composed of the properties of `object` that are not objects
 * (excluding arrays and null).
 *
 * @param {Object} object The source object.
 * @returns {Object} Returns the new object without object properties.
 * @example
 *
 * const object = { 'a': 1, 'b': { x: 1 }, 'c': 'hello', 'd': [], 'e': null, 'f': { y: 2 } };
 *
 * omitObjectProperties(object);
 * // => { 'a': 1, 'c': 'hello', 'd': [], 'e': null }
 */
function omitObjectProperties(object) {
  const result = {};

  if (object == null) {
    return result;
  }

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      const value = object[key];
      // Check if it's NOT an object, or if it's null, or if it's an array
      if (!(typeof value === 'object' && value !== null && !Array.isArray(value))) {
        result[key] = value;
      }
    }
  }

  return result;
}

export default omitObjectProperties;