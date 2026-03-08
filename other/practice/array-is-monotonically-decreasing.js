/**
 * Checks if an array of numbers is monotonically decreasing.
 * @param {number[]} arr - The input array.
 * @returns {boolean} True if monotonically decreasing, false otherwise.
 */
export const isMonotonicallyDecreasing = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) return false;
  }
  return true;
};
