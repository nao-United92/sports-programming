/**
 * Checks if an array is an identity permutation [0, 1, 2, ..., n-1].
 * @param {number[]} arr - The input numbers.
 * @returns {boolean} True if identity permutation.
 */
export const isIdentityPermutation = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i) return false;
  }
  return true;
};
