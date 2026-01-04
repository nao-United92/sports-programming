const intersectionBy = (arr1, arr2, iteratee) => {
  const set2 = new Set(arr2.map(iteratee));
  return arr1.filter(item => set2.has(iteratee(item)));
};

module.exports = { intersectionBy };