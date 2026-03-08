/**
 * Computes the cumulative product of an array of numbers.
 * @param {number[]} arr - The input numbers.
 * @returns {number[]} The cumulative product array.
 */
export const cumulativeProduct = (arr) => {
  let prod = 1;
  return arr.map(val => (prod *= val));
};
