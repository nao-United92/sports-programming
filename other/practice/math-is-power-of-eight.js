/**
 * Returns true if the number is a power of eight.
 * @param {number} n
 * @returns {boolean}
 */
export const isPowerOfEight = (n) => {
  if (n <= 0) return false;
  // n is power of 2 if (n & (n-1)) == 0
  // n is power of 8 if it's power of 2 and (n-1) % 7 == 0
  return (n & (n - 1)) === 0 && (n - 1) % 7 === 0;
};
