const times = (n, iteratee) => {
  let index = -1;
  const result = [];
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
};

module.exports = { times };