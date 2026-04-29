/**
 * Returns true if the number is a power of four.
 * @param {number} n
 * @returns {boolean}
 */
export const isPowerOfFour = (n) => {
  if (n <= 0) return false;
  // n is power of 2 if (n & (n-1)) == 0
  // n is power of 4 if it's power of 2 and (n-1) % 3 == 0
  return (n & (n - 1)) === 0 && (n - 1) % 3 === 0;
};
