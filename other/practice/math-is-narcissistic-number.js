/**
 * Returns true if the number is a Narcissistic number (Armstrong number).
 * A Narcissistic number is a number that is the sum of its own digits
 * each raised to the power of the number of digits.
 * @param {number} n
 * @returns {boolean}
 */
export const isNarcissisticNumber = (n) => {
  if (n < 0) return false;
  const digits = String(n).split('').map(Number);
  const power = digits.length;
  const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
  return sum === n;
};
