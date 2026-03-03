/**
 * This method is like `min` except that it accepts iteratee which is 
 * invoked for each element in array to generate the criterion by which the value is ranked.
 * 
 * @param {Array} array - The array to iterate over.
 * @param {Function|string} iteratee - The iteratee invoked per element.
 * @returns {*} Returns the minimum value.
 */
export const minBy = (array, iteratee) => {
  if (!array || !array.length) return undefined;
  return array.reduce((min, current) => {
    const minVal = typeof iteratee === 'function' ? iteratee(min) : min[iteratee];
    const currentVal = typeof iteratee === 'function' ? iteratee(current) : current[iteratee];
    return currentVal < minVal ? current : min;
  });
};
