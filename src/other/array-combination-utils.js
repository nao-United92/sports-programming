/**
 * Generates all combinations of a specified size from the elements of an array.
 *
 * @param {Array<T>} arr The input array.
 * @param {number} size The size of each combination.
 * @returns {Array<Array<T>>} An array containing all combinations.
 * @template T
 */
export const combinations = (arr, size) => {
  if (size > arr.length) {
    return [];
  }
  const result = [];
  const backtrack = (start, currentCombination) => {
    if (currentCombination.length === size) {
      result.push([...currentCombination]);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      currentCombination.push(arr[i]);
      backtrack(i + 1, currentCombination);
      currentCombination.pop();
    }
  };
  backtrack(0, []);
  return result;
};
