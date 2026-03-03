/**
 * Creates an object composed of keys generated from the results of running 
 * each element of array thru iteratee.
 * 
 * @param {Array} array - The array to iterate over.
 * @param {Function|string} iteratee - The iteratee invoked per element.
 * @returns {Object} Returns the composed aggregate object.
 */
export const keyBy = (array, iteratee) => {
  return array.reduce((acc, value) => {
    const key = typeof iteratee === 'function' ? iteratee(value) : value[iteratee];
    acc[key] = value;
    return acc;
  }, {});
};
