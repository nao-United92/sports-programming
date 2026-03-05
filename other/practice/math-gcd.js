/**
 * Calculates the Greatest Common Divisor (GCD) of two numbers.
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number} - The GCD.
 */
function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    a %= b;
    [a, b] = [b, a];
  }
  return a;
}

module.exports = gcd;
