/**
 * Computes the greatest common divisor (GCD) of two numbers using the Euclidean algorithm.
 * @param {number} a
 * @param {number} b
 * @returns {number} The GCD of a and b.
 */
const gcd = (a, b) => {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    a %= b;
    [a, b] = [b, a];
  }
  return a;
};

module.exports = gcd;
