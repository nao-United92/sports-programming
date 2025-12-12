/**
 * The opposite of `pick`; this method creates an object composed of the
 * own enumerable string keyed properties of `object` that `paths` doesn't include.
 *
 * @param {Object} object The source object.
 * @param {...(string|string[])} paths The property keys to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * const object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 *
 * omit(object, 'b');
 * // => { 'a': 1, 'c': 3 }
 */
function omit(object, ...paths) {
  const result = {};
  const flatPaths = paths.flat(); // Handle array of paths or multiple arguments

  if (object == null) {
    return result;
  }

  Object.keys(object).forEach((key) => {
    if (!flatPaths.includes(key)) {
      result[key] = object[key];
    }
  });

  return result;
}

export default omit;