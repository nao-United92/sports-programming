/**
 * Picks a random element from an array based on weights.
 * @param {any[]} arr - The input array.
 * @param {number[]} weights - The weights corresponding to each element.
 * @returns {any} The picked element.
 */
export const weightedRandom = (arr, weights) => {
  const totalWeight = weights.reduce((acc, w) => acc + w, 0);
  let random = Math.random() * totalWeight;
  
  for (let i = 0; i < arr.length; i++) {
    if (random < weights[i]) return arr[i];
    random -= weights[i];
  }
  return arr[arr.length - 1];
};
