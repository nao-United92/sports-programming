const intersection = (arr1, ...arrays) => {
  const sets = arrays.map(arr => new Set(arr));
  return arr1.filter(item => sets.every(set => set.has(item)));
};

export default intersection;
