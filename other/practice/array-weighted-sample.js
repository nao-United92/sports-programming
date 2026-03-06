/**
 * Samples a random element from an array using provided weights.
 * @param {Array} arr - The elements to sample from.
 * @param {Array<number>} weights - The relative weights for each element.
 * @returns {*} The sampled element.
 * @throws {Error} If elements and weights lengths do not match or arrays are empty.
 */
function weightedSample(arr, weights) {
  if (arr.length !== weights.length || arr.length === 0) {
    throw new Error('Elements and weights must be non-empty and of equal length');
  }

  const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
  let random = Math.random() * totalWeight;

  for (let i = 0; i < arr.length; i++) {
    random -= weights[i];
    if (random <= 0) {
      return arr[i];
    }
  }
  return arr[arr.length - 1];
}

module.exports = weightedSample;
