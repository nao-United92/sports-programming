/**
 * Checks if one array is a permutation of another.
 * @param {any[]} arr1 - First array.
 * @param {any[]} arr2 - Second array.
 * @returns {boolean} True if arr1 is a permutation of arr2.
 */
export const isPermutation = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  
  const count = new Map();
  for (const x of arr1) {
    count.set(x, (count.get(x) || 0) + 1);
  }
  
  for (const x of arr2) {
    if (!count.has(x) || count.get(x) === 0) return false;
    count.set(x, count.get(x) - 1);
  }
  
  return true;
};
