
export const isSubset = (arr1, arr2) => {
  if (arr1.length === 0) {
    return true; // An empty array is always a subset
  }
  const set2 = new Set(arr2);
  return arr1.every(item => set2.has(item));
};
