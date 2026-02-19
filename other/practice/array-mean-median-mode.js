
const arrayMeanMedianMode = (nums) => {
  if (nums.length === 0) return { mean: 0, median: 0, mode: [] };

  // Mean
  const sum = nums.reduce((a, b) => a + b, 0);
  const mean = sum / nums.length;

  // Median
  const sorted = [...nums].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  const median = sorted.length % 2 !== 0 
    ? sorted[mid] 
    : (sorted[mid - 1] + sorted[mid]) / 2;

  // Mode
  const counts = {};
  let maxCount = 0;
  nums.forEach(n => {
    counts[n] = (counts[n] || 0) + 1;
    if (counts[n] > maxCount) maxCount = counts[n];
  });
  const mode = Object.keys(counts)
    .filter(k => counts[k] === maxCount)
    .map(Number)
    .sort((a, b) => a - b);

  return { mean, median, mode };
};

module.exports = arrayMeanMedianMode;
