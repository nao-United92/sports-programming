/**
 * Calculates the number of permutations of n items taken r at a time.
 * Formula: P(n, r) = n! / (n - r)!
 *
 * @param {number} n - Total number of items.
 * @param {number} r - Number of items taken at a time.
 * @returns {number} - Number of permutations.
 */
function nPermutations(n, r) {
  if (n < 0 || r < 0 || r > n) return 0;
  let result = 1;
  for (let i = 0; i < r; i++) {
    result *= (n - i);
  }
  return result;
}

module.exports = nPermutations;
