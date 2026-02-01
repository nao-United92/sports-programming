/**
 * Returns a new array with unique elements, where uniqueness is determined
 * by the result of an iteratee function applied to each element.
 * The first occurrence of each unique computed value is kept.
 *
 * @param {Array<any>} arr The input array.
 * @param {Function} iteratee The function invoked per iteration to compute the criterion for uniqueness.
 *                            It receives the element, its index, and the original array.
 * @returns {Array<any>} A new array containing only the unique elements based on the iteratee.
 */
function arrayUniqueByPredicate(arr, iteratee) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (typeof iteratee !== 'function') {
    throw new TypeError('Expected a function for the second argument (iteratee).');
  }

  const seen = new Set();
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const criterion = iteratee(element, i, arr);
    if (!seen.has(criterion)) {
      seen.add(criterion);
      result.push(element);
    }
  }

  return result;
}

module.exports = arrayUniqueByPredicate;
