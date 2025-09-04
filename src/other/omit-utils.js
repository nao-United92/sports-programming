/**
 * Creates an object composed of the own and inherited enumerable property paths of object that are not omitted.
 *
 * @param {Object} object The source object.
 * @param {string[]} keys The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * const object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
function omit(object, keys) {
  if (object == null) {
    return {};
  }
  const newObj = { ...object };
  keys.forEach(key => {
    delete newObj[key];
  });
  return newObj;
}

export default omit;
