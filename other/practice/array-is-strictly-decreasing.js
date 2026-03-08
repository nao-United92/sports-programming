/**
 * Checks if an array of numbers is strictly decreasing.
 * @param {number[]} arr - The input array.
 * @returns {boolean} True if strictly decreasing.
 */
export const isStrictlyDecreasing = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= arr[i - 1]) return false;
  }
  return true;
};
