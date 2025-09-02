/**
 * Creates a flattened array of values by running each element in collection thru iteratee
 * and flattening the mapped results. The iteratee is invoked with one argument: (value).
 *
 * @param {Array} collection The collection to iterate over.
 * @param {Function} iteratee The function to transform values.
 * @returns {Array} Returns the new flattened array.
 */
export const flatMap = (collection, iteratee) => {
  if (!collection) {
    return [];
  }
  return collection.reduce((acc, item) => acc.concat(iteratee(item)), []);
};