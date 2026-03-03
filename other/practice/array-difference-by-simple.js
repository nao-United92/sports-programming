/**
 * This method is like `difference` except that it accepts iteratee which is 
 * invoked for each element of array and values to generate the criterion 
 * by which they're compared.
 * 
 * @param {Array} array - The array to inspect.
 * @param {Array} values - The values to exclude.
 * @param {Function|string} iteratee - The iteratee invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
export const differenceBy = (array, values, iteratee) => {
  const getVal = (v) => typeof iteratee === 'function' ? iteratee(v) : v[iteratee];
  const compareValues = values.map(getVal);
  return array.filter(item => !compareValues.includes(getVal(item)));
};
