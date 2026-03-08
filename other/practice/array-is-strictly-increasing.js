/**
 * Checks if an array of numbers is strictly increasing.
 * @param {number[]} arr - The input array.
 * @returns {boolean} True if strictly increasing.
 */
export const isStrictlyIncreasing = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i - 1]) return false;
  }
  return true;
};
