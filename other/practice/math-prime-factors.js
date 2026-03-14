/**
 * Returns an array of prime factors for a given number.
 * 
 * @param {number} n 
 * @returns {number[]}
 */
const getPrimeFactors = (n) => {
  if (n <= 1) return [];
  const factors = [];
  let d = 2;
  while (n >= d * d) {
    if (n % d === 0) {
      factors.push(d);
      n /= d;
    } else {
      d++;
    }
  }
  factors.push(n);
  return factors;
};

module.exports = getPrimeFactors;
