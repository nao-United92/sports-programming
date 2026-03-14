/**
 * Calculates the dot product of two arrays of numbers.
 * The arrays must have the same length.
 * 
 * @param {number[]} arr1 
 * @param {number[]} arr2 
 * @returns {number}
 */
const dotProduct = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    throw new Error('Arrays must have the same length');
  }
  return arr1.reduce((sum, val, i) => sum + val * arr2[i], 0);
};

module.exports = dotProduct;
