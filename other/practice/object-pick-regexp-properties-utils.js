/**
 * Creates an object composed of the RegExp properties of `object`.
 *
 * @param {Object} object The source object.
 * @returns {Object} Returns the new object with only RegExp properties.
 * @example
 *
 * const object = { 'a': 1, 'b': /abc/i, 'c': 'hello', 'd': null, 'e': new RegExp('\d+') };
 *
 * pickRegExpProperties(object);
 * // => { 'b': /abc/i, 'e': /\d+/ }
 */
function pickRegExpProperties(object) {
  const result = {};

  if (object == null) {
    return result;
  }

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      if (object[key] instanceof RegExp) {
        result[key] = object[key];
      }
    }
  }

  return result;
}

export default pickRegExpProperties;