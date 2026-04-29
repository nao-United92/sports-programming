/**
 * Returns true if the number is a perfect square using bitwise optimization.
 * @param {number} n
 * @returns {boolean}
 */
export const isPerfectSquareFast = (n) => {
  if (n < 0) return false;
  if (n === 0) return true;
  const h = n & 0xf; // Last hexadecimal digit
  if (h > 9) return false;
  // If h is 2, 3, 5, 6, 7, 8, it is not a perfect square
  if (h === 2 || h === 3 || h === 5 || h === 6 || h === 7 || h === 8) return false;
  const s = Math.round(Math.sqrt(n));
  return s * s === n;
};
