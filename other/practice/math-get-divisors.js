/**
 * Returns an array of divisors of a given number.
 * @param {number} num 
 * @returns {number[]}
 */
const getDivisors = (num) => {
  if (num <= 0) return [];
  const divisors = [];
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      divisors.push(i);
      if (i !== num / i) {
        divisors.push(num / i);
      }
    }
  }
  return divisors.sort((a, b) => a - b);
};

module.exports = getDivisors;
