/**
 * Returns true if the number is an Abundant number.
 * An abundant number is a number for which the sum of its proper divisors
 * is greater than the number itself.
 * @param {number} n
 * @returns {boolean}
 */
export const isAbundantNumber = (n) => {
  if (n <= 0) return false;
  let sum = 0;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) sum += i;
  }
  return sum > n;
};
