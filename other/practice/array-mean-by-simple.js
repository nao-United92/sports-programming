/**
 * Computes the mean of the values in an array based on an iteratee.
 * 
 * @param {Array} array - The array to iterate over.
 * @param {Function|string} iteratee - The iteratee invoked per element.
 * @returns {number} Returns the mean.
 */
export const meanBy = (array, iteratee) => {
  if (!array || !array.length) return NaN;
  const sum = array.reduce((acc, value) => {
    const val = typeof iteratee === 'function' ? iteratee(value) : value[iteratee];
    return acc + (val || 0);
  }, 0);
  return sum / array.length;
};
