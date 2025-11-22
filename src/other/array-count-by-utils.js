/**
 * Creates an object composed of keys generated from the results of running each element of `collection` thru `iteratee`.
 * The corresponding value of each key is the number of times the key was generated.
 *
 * @param {Array} collection The collection to iterate over.
 * @param {Function|string} iteratee The function invoked per iteration or a property name.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * countBy([6.1, 4.2, 6.3], Math.floor);
 * // => { '4': 1, '6': 2 }
 *
 * countBy(['one', 'two', 'three'], 'length');
 * // => { '3': 2, '5': 1 }
 */
function countBy(collection, iteratee) {
  const result = {};
  collection.forEach(item => {
    const key = typeof iteratee === 'function' ? iteratee(item) : item[iteratee];
    result[key] = (result[key] || 0) + 1;
  });
  return result;
}

export { countBy };
