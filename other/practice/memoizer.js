const memoize = (func, resolver) => {
  const cache = new Map();

  return function(...args) {
    const key = resolver ? resolver(...args) : JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = func.apply(this, args);
    cache.set(key, result);
    return result;
  };
};

module.exports = { memoize };
