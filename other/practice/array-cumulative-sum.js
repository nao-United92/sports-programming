/**
 * Computes the cumulative sum of an array of numbers.
 * @param {number[]} arr - The input array.
 * @returns {number[]} The cumulative sum array.
 */
export const cumulativeSum = (arr) => {
  let sum = 0;
  return arr.map((val) => (sum += val));
};
