const sampleSize = (arr, n = 1) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (typeof n !== 'number' || n < 0) {
    throw new TypeError('Expected a non-negative number for the second argument.');
  }
  const length = arr.length;
  if (length === 0 || n === 0) {
    return [];
  }
  // Ensure n does not exceed array length for unique samples
  const numSamples = Math.min(n, length);

  const shuffled = [...arr]; // Create a shallow copy and shuffle
  for (let i = length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, numSamples);
};

module.exports = { sampleSize };
