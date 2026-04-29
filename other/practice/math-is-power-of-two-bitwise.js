/**
 * Returns true if the number is a power of two using bitwise logic.
 * @param {number} n
 * @returns {boolean}
 */
export const isPowerOfTwoBitwise = (n) => {
  return n > 0 && (n & (n - 1)) === 0;
};
