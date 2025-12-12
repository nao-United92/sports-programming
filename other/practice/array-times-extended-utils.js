const times = (n, iteratee) => {
  if (n < 1) {
    return [];
  }
  const result = new Array(n);
  for (let i = 0; i < n; i++) {
    result[i] = iteratee(i);
  }
  return result;
};

module.exports = { times };