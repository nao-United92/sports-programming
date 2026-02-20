import { shuffle } from './array-shuffle';

/**
 * Gets n random elements at unique keys from array up to the size of array.
 *
 * @param {Array} arr - The array to sample.
 * @param {number} n - The number of elements to sample.
 * @returns {Array} The random samples.
 */
export const sampleSize = (arr, n) => {
  const length = arr === null ? 0 : arr.length;
  if (!length || n <= 0) {
    return [];
  }
  n = n > length ? length : n;
  return shuffle(arr).slice(0, n);
};
