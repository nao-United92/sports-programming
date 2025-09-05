/**
 * Calls the iteratee function `n` times, returning an array of the results of each invocation.
 * The iteratee is invoked with one argument: (index).
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function to invoke.
 * @returns {Array} Returns the array of results.
 */
export function times(n, iteratee) {
  let index = -1;
  const result = [];
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
