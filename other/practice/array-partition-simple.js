/**
 * Splits an array into two arrays: one containing elements that satisfy the predicate, 
 * and another containing elements that do not.
 * 
 * @param {Array} arr - The array to partition.
 * @param {Function} predicate - The function to test each element.
 * @returns {Array[]} An array of two arrays: [satisfies, doesNotSatisfy].
 */
export const partition = (arr, predicate) => {
  return arr.reduce(
    (acc, val) => {
      acc[predicate(val) ? 0 : 1].push(val);
      return acc;
    },
    [[], []]
  );
};
