/**
 * This method is like `max` except that it accepts iteratee which is 
 * invoked for each element in array to generate the criterion by which the value is ranked.
 * 
 * @param {Array} array - The array to iterate over.
 * @param {Function|string} iteratee - The iteratee invoked per element.
 * @returns {*} Returns the maximum value.
 */
export const maxBy = (array, iteratee) => {
  if (!array || !array.length) return undefined;
  return array.reduce((max, current) => {
    const maxVal = typeof iteratee === 'function' ? iteratee(max) : max[iteratee];
    const currentVal = typeof iteratee === 'function' ? iteratee(current) : current[iteratee];
    return currentVal > maxVal ? current : max;
  });
};
