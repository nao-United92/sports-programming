/**
 * Checks if an array is monotonic (either non-increasing or non-decreasing).
 * @param {number[]} arr - The input numbers.
 * @returns {boolean} True if monotonic.
 */
export const isMonotonic = (arr) => {
  let increasing = true;
  let decreasing = true;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) decreasing = false;
    if (arr[i] < arr[i - 1]) increasing = false;
  }
  return increasing || decreasing;
};
