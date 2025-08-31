/**
 * Iterates over own enumerable string keyed properties of an object and invokes iteratee for each property.
 *
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
export function forOwn(object, iteratee) {
  if (object == null) {
    return object;
  }
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      iteratee(object[key], key, object);
    }
  }
  return object;
}
