/**
 * Counts the prime factors of a number.
 * @param {number} n - The number to factorize.
 * @returns {Object} An object containing 'distinct' and 'total' counts of prime factors.
 */
function mathPrimeFactorsCount(n) {
  if (n < 2) return { distinct: 0, total: 0 };
  
  let distinct = 0;
  let total = 0;
  let d = 2;
  let temp = n;

  while (temp > 1) {
    if (temp % d === 0) {
      distinct++;
      while (temp % d === 0) {
        total++;
        temp /= d;
      }
    }
    d++;
    if (d * d > temp && temp > 1) {
      distinct++;
      total++;
      break;
    }
  }
  
  return { distinct, total };
}

module.exports = mathPrimeFactorsCount;
