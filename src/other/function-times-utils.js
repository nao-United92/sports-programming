
/**
 * Invokes the iteratee `n` times, returning an array of the results of
 * each invocation. The iteratee is invoked with one argument: (index).
 *
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
export const times = (n, iteratee) => {
  if (n < 1) {
    return [];
  }
  const result = new Array(n);
  for (let i = 0; i < n; i++) {
    result[i] = iteratee(i);
  }
  return result;
};
