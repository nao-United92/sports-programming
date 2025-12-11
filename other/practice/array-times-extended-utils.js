const times = (n, iteratee) => {
  if (n < 0 || !Number.isInteger(n)) {
    return [];
  }

  const result = Array(n);
  for (let i = 0; i < n; i++) {
    result[i] = typeof iteratee === 'function' ? iteratee(i) : undefined;
  }
  return result;
};

module.exports = times;
