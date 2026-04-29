/**
 * Returns true if the number is a Disarium number.
 * A Disarium number is a number where the sum of its digits raised to the
 * power of their respective positions is equal to the number itself.
 * @param {number} n
 * @returns {boolean}
 */
export const isDisariumNumber = (n) => {
  if (n < 0) return false;
  const digits = String(n).split('').map(Number);
  const sum = digits.reduce((acc, digit, index) => acc + Math.pow(digit, index + 1), 0);
  return sum === n;
};
