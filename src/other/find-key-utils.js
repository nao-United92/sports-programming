/**
 * This method is like `find` except that it returns the key of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @param {Object} object The object to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {string|undefined} Returns the key of the found element,
 *  else `undefined`.
 */
function findKey(object, predicate) {
  if (object == null) {
    return undefined;
  }
  const keys = Object.keys(object);
  for (const key of keys) {
    if (predicate(object[key], key, object)) {
      return key;
    }
  }
  return undefined;
}

export default findKey;
