const times = (n, iteratee) => {
  if (n < 0 || typeof iteratee !== 'function') {
    return [];
  }
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(iteratee(i));
  }
  return result;
};

export default times;
