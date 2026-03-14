/**
 * Checks if a number is a perfect number (sum of its divisors equals the number).
 * 
 * @param {number} n 
 * @returns {boolean}
 */
const isPerfectNumber = (n) => {
  if (n <= 1) return false;
  let sum = 1;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      sum += i;
      if (i * i !== n) {
        sum += n / i;
      }
    }
  }
  return sum === n;
};

module.exports = isPerfectNumber;
