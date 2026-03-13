export const symmetricDifference = (arr1, arr2) => {
  const s1 = new Set(arr1);
  const s2 = new Set(arr2);
  return [
    ...arr1.filter((v) => !s2.has(v)),
    ...arr2.filter((v) => !s1.has(v)),
  ];
};
