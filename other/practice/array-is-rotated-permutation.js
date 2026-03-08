/**
 * Checks if an array is a rotated version of another.
 * @param {any[]} arr1 - First array.
 * @param {any[]} arr2 - Second array.
 * @returns {boolean} True if arr1 is a rotation of arr2.
 */
export const isRotatedPermutation = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  if (arr1.length === 0) return true;
  
  const combined = [...arr1, ...arr1];
  const s2 = arr2.join(',');
  const sCombined = combined.join(',');
  
  return sCombined.includes(s2);
};
