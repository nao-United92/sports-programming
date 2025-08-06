/**
 * Creates an object composed of keys generated from the results of running each element of collection thru iteratee.
 * The corresponding value of each key is the last element responsible for generating the key.
 *
 * @param {Array} array The collection to iterate over.
 * @param {Function|string} iteratee The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 */
export function keyBy(array, iteratee) {
  if (!Array.isArray(array)) {
    return {};
  }

  const result = {};
  const func = typeof iteratee === 'function' ? iteratee : (obj) => obj[iteratee];

  for (const item of array) {
    const key = func(item);
    result[key] = item;
  }

  return result;
}
