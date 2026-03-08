/**
 * Finds both the minimum and maximum values in an array in a single pass.
 * @param {number[]} arr - The input numbers.
 * @returns {Object} { min, max }
 */
export const minMax = (arr) => {
  if (arr.length === 0) return { min: undefined, max: undefined };
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }
  return { min, max };
};
