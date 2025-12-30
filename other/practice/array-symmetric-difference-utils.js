const symmetricDifference = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return [];
  }
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const diff1 = arr1.filter(x => !set2.has(x));
  const diff2 = arr2.filter(x => !set1.has(x));
  return [...diff1, ...diff2];
};

export default symmetricDifference;
