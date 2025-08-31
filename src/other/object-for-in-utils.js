/**
 * Iterates over own and inherited enumerable string keyed properties of an object and invokes iteratee for each property.
 *
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
export function forIn(object, iteratee) {
  if (object == null) {
    return object;
  }
  for (const key in object) {
    iteratee(object[key], key, object);
  }
  return object;
}
