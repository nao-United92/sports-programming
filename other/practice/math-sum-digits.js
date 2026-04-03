/**
 * Calculates the sum of digits of a number.
 *
 * @param {number} n - The number to sum the digits of.
 * @returns {number} - The sum of digits.
 */
function sumDigits(n) {
  return Math.abs(n)
    .toString()
    .split('')
    .reduce((sum, digit) => sum + parseInt(digit, 10), 0);
}

module.exports = sumDigits;
