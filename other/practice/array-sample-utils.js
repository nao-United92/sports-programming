const sample = (arr, n = 1) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (!Number.isInteger(n) || n < 0) {
    throw new TypeError('Expected a non-negative integer for the second argument (n).');
  }

  const len = arr.length;
  // If n is 0, return an empty array
  if (n === 0) {
    return [];
  }
  // If n is 1 (default), return a single random element
  if (n === 1) {
    return len === 0 ? undefined : arr[Math.floor(Math.random() * len)];
  }

  // For multiple elements, ensure n doesn't exceed array length
  const numSamples = Math.min(n, len);
  const shuffled = [...arr].sort(() => 0.5 - Math.random()); // Simple shuffle for sampling
  return shuffled.slice(0, numSamples);
};

export default sample;