import { sum } from './math-sum';

/**
 * Computes the mean of the values in an array.
 *
 * @param {number[]} arr - The array to iterate over.
 * @returns {number} The mean.
 */
export const mean = (arr) => {
  return arr.length === 0 ? NaN : sum(arr) / arr.length;
};
