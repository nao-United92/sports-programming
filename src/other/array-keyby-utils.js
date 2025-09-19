/**
 * Creates an object composed of keys generated from the results of running each element of collection thru iteratee.
 * The order of iterated values is stable, but the corresponding keys are not.
 * The iteratee is invoked with one argument: (value).
 *
 * @param {Array} array The array to iterate over.
 * @param {Function|string} iteratee The iteratee to transform keys.
 * @returns {object} Returns the composed aggregate object.
 */
const keyBy = (array, iteratee) => {
  const result = {};
  const func = typeof iteratee === 'function' ? iteratee : (item) => item[iteratee];

  for (const item of array) {
    const key = func(item);
    result[key] = item;
  }

  return result;
};

export { keyBy };