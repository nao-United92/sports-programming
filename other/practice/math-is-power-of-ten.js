/**
 * Returns true if the number is a power of ten.
 * @param {number} n
 * @returns {boolean}
 */
export const isPowerOfTen = (n) => {
  if (n <= 0) return false;
  let log10 = Math.log10(n);
  return log10 === Math.floor(log10);
};
