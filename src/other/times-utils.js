/**
 * Invokes the iteratee `n` times, returning an array of the results of
 * each invocation. The iteratee is invoked with one argument: (index).
 *
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function times(n, iteratee) {
  if (n < 1 || n == null || !Number.isFinite(n)) {
    return [];
  }
  let index = -1;
  const result = new Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

export default times;