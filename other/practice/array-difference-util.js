export const difference = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return [];
  }
  const set2 = new Set(arr2);
  return arr1.filter((x) => !set2.has(x));
};
