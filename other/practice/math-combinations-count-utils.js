/**
 * Calculates the number of combinations (nCr).
 * Formula: n! / (r! * (n - r)!)
 * 
 * @param {number} n Total items
 * @param {number} r Items to choose
 * @returns {number} Number of combinations
 */
function combinationsCount(n, r) {
  if (r < 0 || r > n) return 0;
  if (r === 0 || r === n) return 1;
  if (r > n / 2) r = n - r;

  let result = 1;
  for (let i = 1; i <= r; i++) {
    result = result * (n - i + 1) / i;
  }

  return Math.round(result);
}

module.exports = { combinationsCount };
