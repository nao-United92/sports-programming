/**
 * Checks if two arrays are disjoint (have no elements in common).
 * @param {any[]} arr1 - First array.
 * @param {any[]} arr2 - Second array.
 * @returns {boolean} True if disjoint.
 */
export const isDisjoint = (arr1, arr2) => {
  const set = new Set(arr1);
  return !arr2.some(x => set.has(x));
};
