/**
 * This method is like `uniq` except that it's designed and optimized for sorted arrays.
 * 
 * @param {Array} array - The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 */
export const sortedUniq = (array) => {
  if (!array || !array.length) return [];
  const result = [array[0]];
  for (let i = 1; i < array.length; i++) {
    if (array[i] !== array[i - 1]) {
      result.push(array[i]);
    }
  }
  return result;
};
