export const getUnionOfValues = (arr1, arr2) => {
  if (!Array.isArray(arr1) && !Array.isArray(arr2)) {
    return [];
  }
  if (!Array.isArray(arr1)) {
    return [...new Set(arr2)];
  }
  if (!Array.isArray(arr2)) {
    return [...new Set(arr1)];
  }
  const combinedArray = arr1.concat(arr2);
  return [...new Set(combinedArray)];
};
