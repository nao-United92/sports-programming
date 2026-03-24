function countByFunction(array, iteratee) {
  if (!Array.isArray(array)) {
    throw new Error('Input must be an array');
  }
  return array.reduce((acc, val) => {
    const key = typeof iteratee === 'function' ? iteratee(val) : val[iteratee];
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
}
module.exports = countByFunction;
