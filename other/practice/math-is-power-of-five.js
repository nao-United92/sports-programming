/**
 * Returns true if the number is a power of five.
 * @param {number} n
 * @returns {boolean}
 */
export const isPowerOfFive = (n) => {
  if (n <= 0) return false;
  let log5 = Math.log(n) / Math.log(5);
  return Math.abs(log5 - Math.round(log5)) < 1e-10;
};
