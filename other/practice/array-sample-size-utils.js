const sampleSize = (array, n = 1) => {
  if (!Array.isArray(array)) {
    return [];
  }
  if (array.length === 0 || n <= 0) {
    return [];
  }

  const length = array.length;
  const sampleCount = Math.min(n, length);
  const result = [...array]; // Create a shallow copy to avoid mutating the original array

  // Fisher-Yates (Knuth) shuffle
  for (let i = length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result.slice(0, sampleCount);
};

module.exports = { sampleSize };
