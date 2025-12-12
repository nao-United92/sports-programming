const sampleSize = (arr, n = 1) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return [];
  }
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.max(0, n));
};

module.exports = { sampleSize };
