
export const cartesianProductSimple = (arr1, arr2) => {
  if (!arr1 || !arr2) {
    return [];
  }
  const result = [];
  for (const item1 of arr1) {
    for (const item2 of arr2) {
      result.push([item1, item2]);
    }
  }
  return result;
};
