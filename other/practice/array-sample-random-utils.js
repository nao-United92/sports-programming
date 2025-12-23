/**
 * Gets a random element or n random elements from `arr`.
 *
 * @param {Array<any>} arr The array to sample.
 * @param {number} [n=1] The number of random elements to pick.
 * @returns {any|Array<any>} Returns the random element(s).
 */
function sample(arr, n = 1) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return n === 1 ? undefined : [];
  }

  if (n <= 0) {
    return [];
  }

  // If n is 1, return a single random element
  if (n === 1) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // If n is greater than 1, return an array of n random elements
  // Ensure we don't pick more elements than available in the array
  const count = Math.min(n, arr.length);
  const shuffled = [...arr].sort(() => 0.5 - Math.random()); // Simple shuffle for sampling
  return shuffled.slice(0, count);
}

module.exports = sample;
