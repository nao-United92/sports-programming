export const functionTimes = (n, iteratee) => {
  if (n < 1) return [];
  const results = [];
  for (let i = 0; i < n; i++) {
    results.push(iteratee(i));
  }
  return results;
};
