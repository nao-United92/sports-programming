/**
 * Invokes the iteratee `n` times, returning an array of the results of
 * each invocation. The iteratee is invoked with one argument: `index`.
 *
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function times(n, iteratee) {
  n = Math.floor(n);
  const result = Array(n < 0 ? 0 : n);
  let index = -1;

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = { times };