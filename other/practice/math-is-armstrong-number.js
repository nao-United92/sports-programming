/**
 * Checks if a number is an Armstrong number (Narcissistic number).
 * An Armstrong number is a number that is the sum of its own digits 
 * each raised to the power of the number of digits.
 *
 * @param {number} n - The number to check.
 * @returns {boolean} - True if the number is an Armstrong number, false otherwise.
 */
function isArmstrongNumber(n) {
  if (n < 0) return false;
  const str = n.toString();
  const len = str.length;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += Math.pow(parseInt(str[i], 10), len);
  }
  return sum === n;
}

module.exports = isArmstrongNumber;
