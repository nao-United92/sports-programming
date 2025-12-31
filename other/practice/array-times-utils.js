// Invokes the iteratee `n` times, returning an array of the results of each invocation. The iteratee is invoked with one argument: (index).
export const times = (n, iteratee) => {
  if (n <= 0) {
    return [];
  }
  const result = Array(n);
  for (let i = 0; i < n; i++) {
    result[i] = iteratee(i);
  }
  return result;
};