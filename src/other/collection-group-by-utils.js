/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The order of grouped values
 * is determined by the order they occur in `collection`. The corresponding
 * value of each key is an array of elements responsible for generating the key.
 *
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function|string} iteratee The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 */
function groupBy(collection, iteratee) {
  return collection.reduce((result, item) => {
    const key = typeof iteratee === 'function' ? iteratee(item) : item[iteratee];

    if (!result[key]) {
      result[key] = [];
    }

    result[key].push(item);

    return result;
  }, {});
}

module.exports = { groupBy };
