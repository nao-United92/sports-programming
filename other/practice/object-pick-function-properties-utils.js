/**
 * Creates an object composed of the function properties of `object`.
 *
 * @param {Object} object The source object.
 * @returns {Object} Returns the new object with only function properties.
 * @example
 *
 * const object = { 'a': 1, 'b': () => {}, 'c': 'hello', 'd': function() {}, 'e': null };
 *
 * pickFunctionProperties(object);
 * // => { 'b': () => {}, 'd': function() {} }
 */
function pickFunctionProperties(object) {
  const result = {};

  if (object == null) {
    return result;
  }

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      if (typeof object[key] === 'function') {
        result[key] = object[key];
      }
    }
  }

  return result;
}

export default pickFunctionProperties;