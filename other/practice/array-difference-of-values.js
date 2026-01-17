export const getDifferenceOfValues = (arr1, arr2) => {
  if (!Array.isArray(arr1)) {
    return [];
  }
  if (!Array.isArray(arr2)) {
    return [...new Set(arr1)];
  }
  const set2 = new Set(arr2);
  return arr1.filter(value => !set2.has(value));
};
