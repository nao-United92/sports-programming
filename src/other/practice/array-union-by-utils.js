
export const unionBy = (array, values, iteratee) => {
  const set = new Set(array.map(iteratee));
  const result = [...array];

  for (const value of values) {
    const key = iteratee(value);
    if (!set.has(key)) {
      set.add(key);
      result.push(value);
    }
  }

  return result;
};
