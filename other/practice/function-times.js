const times = (n, iteratee) => {
  if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
    throw new TypeError('Expected n to be a non-negative integer');
  }
  if (typeof iteratee !== 'function') {
    throw new TypeError('Expected iteratee to be a function');
  }

  const result = Array(n);
  for (let i = 0; i < n; i++) {
    result[i] = iteratee(i);
  }
  return result;
};

module.exports = { times };
