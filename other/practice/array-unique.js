/**
 * Returns a new array with unique elements.
 *
 * @param {Array} arr - The array to process.
 * @returns {Array} The new array with unique elements.
 */
export const unique = (arr) => [...new Set(arr)];
