export const times = (n, iteratee) => {
  if (n < 0) {
    return [];
  }
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(iteratee(i));
  }
  return result;
};
