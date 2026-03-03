/**
 * Computes the sum of the values in an array based on an iteratee.
 * 
 * @param {Array} array - The array to iterate over.
 * @param {Function|string} iteratee - The iteratee invoked per element.
 * @returns {number} Returns the sum.
 */
export const sumBy = (array, iteratee) => {
  return array.reduce((sum, value) => {
    const val = typeof iteratee === 'function' ? iteratee(value) : value[iteratee];
    return sum + (val || 0);
  }, 0);
};
