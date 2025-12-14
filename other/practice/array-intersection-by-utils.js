const intersectionBy = (arr1, arr2, iteratee) => {
  const set = new Set(arr2.map(iteratee));
  return arr1.filter(item => set.has(iteratee(item)));
};

export default intersectionBy;
