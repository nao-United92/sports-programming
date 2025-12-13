/**
 * Creates an object composed of the properties of `object` that are not function.
 *
 * @param {Object} object The source object.
 * @returns {Object} Returns the new object without function properties.
 * @example
 *
 * const object = { 'a': 1, 'b': () => {}, 'c': 'hello', 'd': function() {}, 'e': null };
 *
 * omitFunctionProperties(object);
 * // => { 'a': 1, 'c': 'hello', 'e': null }
 */
function omitFunctionProperties(object) {
  const result = {};

  if (object == null) {
    return result;
  }

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      if (typeof object[key] !== 'function') {
        result[key] = object[key];
      }
    }
  }

  return result;
}

export default omitFunctionProperties;