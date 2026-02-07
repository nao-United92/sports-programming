const memoize = (func) => {
  const cache = new Map();

  return function(...args) {
    const key = JSON.stringify(args); // Simple key generation for primitive arguments
    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = func(...args);
    cache.set(key, result);
    return result;
  };
};

module.exports = { memoize };
