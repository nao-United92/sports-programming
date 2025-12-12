/**
 * Creates an object composed of the picked `object` properties.
 *
 * @param {Object} object The source object.
 * @param {...(string|string[])} paths The property keys to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * const object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 *
 * pick(object, 'a', 'b');
 * // => { 'a': 1, 'b': '2' }
 */
function pick(object, ...paths) {
  const result = {};
  const flatPaths = paths.flat(); // Handle array of paths or multiple arguments

  if (object == null) {
    return result;
  }

  flatPaths.forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      result[key] = object[key];
    }
  });

  return result;
}

export default pick;