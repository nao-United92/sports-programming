const difference = (arr1, arr2) => {
  const s = new Set(arr2);
  return arr1.filter(x => !s.has(x));
};

export default difference;
