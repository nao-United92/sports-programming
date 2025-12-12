/**
 * Creates an object composed of the object properties (excluding arrays and null) of `object`.
 *
 * @param {Object} object The source object.
 * @returns {Object} Returns the new object with only object properties.
 * @example
 *
 * const object = { 'a': 1, 'b': { x: 1 }, 'c': 'hello', 'd': [], 'e': null, 'f': { y: 2 } };
 *
 * pickObjectProperties(object);
 * // => { 'b': { x: 1 }, 'f': { y: 2 } }
 */
function pickObjectProperties(object) {
  const result = {};

  if (object == null) {
    return result;
  }

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      const value = object[key];
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        result[key] = value;
      }
    }
  }

  return result;
}

export default pickObjectProperties;