/**
 * Invokes the `iteratee` function `n` times, returning an array of the results of each invocation.
 * The `iteratee` is invoked with one argument: (index).
 *
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array<*>} Returns the array of results.
 */
const times = (n, iteratee) => {
  const result = Array(Math.max(0, n));
  for (let i = 0; i < n; i++) {
    result[i] = iteratee(i);
  }
  return result;
};

module.exports = { times };
