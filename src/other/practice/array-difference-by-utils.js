
export const differenceBy = (array, values, iteratee) => {
  const valuesSet = new Set(values.map(iteratee));
  return array.filter(x => !valuesSet.has(iteratee(x)));
};
