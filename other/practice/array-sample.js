/**
 * Gets a random element from an array.
 *
 * @param {Array} arr - The array to sample.
 * @returns {*} A random element from the array.
 */
export const sample = (arr) => {
  const length = arr === null ? 0 : arr.length;
  return length ? arr[Math.floor(Math.random() * length)] : undefined;
};
