const memoize = (fn) => {
  const cache = {};

  return (...args) => {
    const key = JSON.stringify(args); // Simple key generation for primitive arguments
    if (cache[key]) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
};

module.exports = memoize;
