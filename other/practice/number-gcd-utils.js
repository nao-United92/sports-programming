/**
 * Calculates the greatest common divisor (GCD) of two non-negative integers using the Euclidean algorithm.
 *
 * @param {number} a The first non-negative integer.
 * @param {number} b The second non-negative integer.
 * @returns {number} The greatest common divisor of `a` and `b`.
 */
const gcd = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number' || !Number.isInteger(a) || !Number.isInteger(b)) {
    throw new TypeError('Expected both arguments to be integers.');
  }
  if (a < 0 || b < 0) {
    throw new Error('Expected both arguments to be non-negative integers.');
  }

  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
};

export default gcd;
