/**
 * Creates an object composed of the Date properties of `object`.
 *
 * @param {Object} object The source object.
 * @returns {Object} Returns the new object with only Date properties.
 * @example
 *
 * const object = { 'a': 1, 'b': new Date(), 'c': 'hello', 'd': null, 'e': new Date('2023-01-01') };
 *
 * pickDateProperties(object);
 * // => { 'b': <current date>, 'e': '2023-01-01' Date object }
 */
function pickDateProperties(object) {
  const result = {};

  if (object == null) {
    return result;
  }

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      if (object[key] instanceof Date) {
        result[key] = object[key];
      }
    }
  }

  return result;
}

export default pickDateProperties;