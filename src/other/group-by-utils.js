/**
 * Creates an object composed of keys generated from the results of running each element of `collection` thru `iteratee`.
 * The order of grouped values is determined by the order they occur in `collection`. The corresponding value of each key
 * is an array of elements responsible for generating the key.
 *
 * @param {Array} collection The collection to iterate over.
 * @param {Function} iteratee The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 */
export function groupBy(collection, iteratee) {
  if (!Array.isArray(collection)) {
    return {};
  }
  return collection.reduce((acc, val) => {
    const key = typeof iteratee === 'function' ? iteratee(val) : val[iteratee];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(val);
    return acc;
  }, {});
}