/**
 * Creates an object composed of the array properties of `object`.
 *
 * @param {Object} object The source object.
 * @returns {Object} Returns the new object with only array properties.
 * @example
 *
 * const object = { 'a': 1, 'b': [1, 2], 'c': 'hello', 'd': [], 'e': null, 'f': ['world'] };
 *
 * pickArrayProperties(object);
 * // => { 'b': [1, 2], 'd': [], 'f': ['world'] }
 */
function pickArrayProperties(object) {
  const result = {};

  if (object == null) {
    return result;
  }

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      if (Array.isArray(object[key])) {
        result[key] = object[key];
      }
    }
  }

  return result;
}

export default pickArrayProperties;