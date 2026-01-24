/**
 * Creates a duplicate-free version of an array, in which only the first occurrence of each element is kept,
 * based on the result of a provided iterator function. The order of result values is determined by the order
 * of the first occurrences in the array.
 *
 * @param {Array<T>} array The array to inspect.
 * @param {function(T, number, Array<T>): any} [iteratee=item => item] The iteratee invoked per element.
 * @returns {Array<T>} Returns the new duplicate-free array.
 * @template T
 */
function uniqueBy(array, iteratee = item => item) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (typeof iteratee !== 'function') {
    throw new TypeError('Expected a function for the iteratee argument.');
  }

  const seen = new Set();
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    const key = iteratee(item, i, array);

    if (!seen.has(key)) {
      seen.add(key);
      result.push(item);
    }
  }
  return result;
}

export default uniqueBy;