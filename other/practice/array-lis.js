
const lowerBound = require('./array-lower-bound');

/**
 * Calculates the length of the Longest Increasing Subsequence.
 * @param {Array} nums
 * @returns {number}
 */
function lengthOfLIS(nums) {
  if (nums.length === 0) return 0;
  const tails = [];
  for (const num of nums) {
    const idx = lowerBound(tails, num);
    if (idx < tails.length) {
      tails[idx] = num;
    } else {
      tails.push(num);
    }
  }
  return tails.length;
}

module.exports = lengthOfLIS;
