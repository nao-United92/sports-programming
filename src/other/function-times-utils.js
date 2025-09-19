/**
 * Invokes the iteratee n times, returning an array of the results of each invocation.
 * The iteratee is invoked with one argument: (index).
 *
 * @param {number} n The number of times to invoke iteratee.
 * @param {Function} iteratee The function to invoke.
 * @returns {Array} Returns the array of results.
 */
const times = (n, iteratee) => {
  let index = -1;
  const result = new Array(n > 0 ? n : 0);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
};

export { times };
