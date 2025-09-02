/**
 * Creates an object composed of keys generated from the results of running each element of collection thru iteratee.
 * The order of grouped values is determined by the order they occur in collection.
 * The corresponding value of each key is an array of elements responsible for generating the key.
 *
 * @param {Array} collection The collection to iterate over.
 * @param {Function|string} iteratee The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 */
export const groupBy = (collection, iteratee) => {
  if (!collection) {
    return {};
  }
  const getIteratee = typeof iteratee === 'function' ? iteratee : (item) => item[iteratee];

  return collection.reduce((acc, item) => {
    const key = getIteratee(item);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});
};
