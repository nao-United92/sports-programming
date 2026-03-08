/**
 * Checks if an array of numbers is monotonically increasing.
 * @param {number[]} arr - The input array.
 * @returns {boolean} True if monotonically increasing, false otherwise.
 */
export const isMonotonicallyIncreasing = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
};
