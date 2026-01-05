import gcd from './number-gcd-utils';

/**
 * Calculates the least common multiple (LCM) of two non-negative integers.
 * Uses the formula: lcm(a, b) = |a * b| / gcd(a, b).
 *
 * @param {number} a The first non-negative integer.
 * @param {number} b The second non-negative integer.
 * @returns {number} The least common multiple of `a` and `b`.
 */
const lcm = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number' || !Number.isInteger(a) || !Number.isInteger(b)) {
    throw new TypeError('Expected both arguments to be integers.');
  }
  if (a < 0 || b < 0) {
    throw new Error('Expected both arguments to be non-negative integers.');
  }

  // Handle case where one or both numbers are zero
  if (a === 0 || b === 0) {
    return 0;
  }

  return Math.abs(a * b) / gcd(a, b);
};

export default lcm;
