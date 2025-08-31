/**
 * This method is like `findKey` except that it iterates over elements of a collection from right to left.
 *
 * @param {Object} object The object to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {string|undefined} Returns the key of the found element, else `undefined`.
 */
export function findLastKey(object, predicate) {
  if (object == null) {
    return undefined;
  }
  const keys = Object.keys(object);
  for (let i = keys.length - 1; i >= 0; i--) {
    const key = keys[i];
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      if (predicate(object[key], key, object)) {
        return key;
      }
    }
  }
  return undefined;
}
