/**
 * Returns true if the number is a Fibonacci number.
 * A number is Fibonacci if and only if (5*n^2 + 4) or (5*n^2 - 4) is a perfect square.
 * @param {number} n
 * @returns {boolean}
 */
export const isFibonacci = (n) => {
  if (n < 0) return false;
  const isPerfectSquare = (x) => {
    const s = Math.round(Math.sqrt(x));
    return s * s === x;
  };
  return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
};
