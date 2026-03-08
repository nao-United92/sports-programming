/**
 * Calculates the product of all numbers in an array.
 * @param {number[]} arr - The input array.
 * @returns {number} The product of all elements.
 */
export const product = (arr) => {
  if (arr.length === 0) return 0;
  return arr.reduce((acc, val) => acc * val, 1);
};
