export const times = (n, iteratee) => {
  let index = -1;
  const result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
};
