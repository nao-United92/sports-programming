const runFunctionNTimes = (func, n) => {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function for the first argument');
  }
  if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
    throw new TypeError('Expected n to be a non-negative integer');
  }

  const results = [];
  for (let i = 0; i < n; i++) {
    results.push(func(i)); // Pass current iteration index to the function
  }
  return results;
};

module.exports = { runFunctionNTimes };
