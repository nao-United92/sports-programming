
export const xorBy = (array, values, iteratee) => {
  const arraySet = new Set(array.map(iteratee));
  const valuesSet = new Set(values.map(iteratee));

  const result = [];

  for (const value of array) {
    if (!valuesSet.has(iteratee(value))) {
      result.push(value);
    }
  }

  for (const value of values) {
    if (!arraySet.has(iteratee(value))) {
      result.push(value);
    }
  }

  return result;
};
