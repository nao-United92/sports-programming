
/**
 * Calculates the length of the Longest Common Subsequence of two arrays.
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {number}
 */
function lcs(arr1, arr2) {
  const m = arr1.length;
  const n = arr2.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (arr1[i - 1] === arr2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[m][n];
}

module.exports = lcs;
