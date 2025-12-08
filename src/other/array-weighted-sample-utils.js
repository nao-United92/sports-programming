const weightedSample = (arr, weights) => {
  if (!arr || arr.length === 0 || !weights || weights.length !== arr.length) {
    return undefined;
  }

  const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
  if (totalWeight <= 0) {
    // If all weights are zero or negative, return a random element with uniform distribution
    return arr[Math.floor(Math.random() * arr.length)];
  }

  let random = Math.random() * totalWeight;
  for (let i = 0; i < arr.length; i++) {
    random -= weights[i];
    if (random < 0) {
      return arr[i];
    }
  }

  // Should not be reached if weights are positive, but as a fallback
  return arr[arr.length - 1];
};

module.exports = weightedSample;
